<template>
  <div class="search-tree">
    <div
      @click="handleTreeStatus(!treeShow)"
      class="input-text"
      :class="[searchText === '' ? 'placeholder' : '']"
    >
      {{ searchText || '请选择关联表' }}
      <div
        @click.stop="handleClear"
        v-show="searchText && clearable"
        class="el-icon el-icon-close"
      ></div>
      <div
        v-show="!clearable || !searchText"
        class="el-icon el-icon-arrow-down"
      ></div>
    </div>
    <div class="tree-wrap" v-show="treeShow">
      <el-input
        clearable
        placeholder="搜索表单"
        v-model="filterText"
        @focus="isOpen = true"
        @blur="sleepHandleTreeStatus(false)"
        ref="select-tree-input"
        class="search-input"
      ></el-input>
      <div class="tree-wrapper">
        <el-tree
          @node-click="handleNodeClick"
          :data="treeData"
          :props="defaultProps"
          :node-key="defaultProps.key"
          :filterNodeMethod="filterNode"
          :default-expand-all="false"
          :highlight-current="true"
          :accordion="false"
          ref="tree"
          class="filter-tree"
        ></el-tree>
      </div>
    </div>
  </div>
</template>

<script>
/** 睡眠函数*/
const sleep = (time = 1000) =>
  new Promise(resolve => setTimeout(resolve, time));

export default {
  name: 'search-tree',
  props: {
    defaultProps: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label',
        key: 'id'
      })
    },
    treeData: {
      type: Array,
      default: () => []
    },
    currentNodeKey: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      treeShow: false,
      filterText: '',
      searchText: '',
      isOpen: true //  控制 tree-select 关闭的条件之一
    };
  },
  methods: {
    //  树形选择目标链表
    filterNode(value, data) {
      if (!value) return true;
      return data[this.defaultProps.label].indexOf(value) !== -1;
    },

    handleNodeClick(data) {
      this.isOpen = false;
      if (data && !data[this.defaultProps.children]) {
        this.handleTreeStatus(false);
        this.$emit('select', { ...data });
      }
    },

    /** 处理 tree 面板状态 显示|隐藏 */
    handleTreeStatus(status = false) {
      this.treeShow = status;
      if (status === true) {
        this.$nextTick(() => {
          this.$refs['select-tree-input'].focus();
        });
      }
    },

    async sleepHandleTreeStatus(status) {
      await sleep(200);
      if (this.isOpen) {
        this.handleTreeStatus(status);
      }
    },

    /** 清除选择*/
    handleClear() {
      this.handleTreeStatus(false);
      this.$emit('select', {});
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    isOpen(newV) {
      if (newV !== true) {
        setTimeout(() => {
          this.$refs['select-tree-input'].focus();
        }, 200);
      }
    },
    currentNodeKey: {
      handler(newV) {
        if (newV) {
          this.$nextTick(() => {
            this.$refs['tree'].setCurrentKey(newV);
            const nodeObj = this.$refs['tree'].getCurrentNode() || {};
            this.searchText = nodeObj[this.defaultProps['label']] || '';
            this.filterText = '';
            // this.$refs.tree.filter(nodeObj[this.defaultProps['label']]);
            this.$refs.tree.filter('');
          });
        } else {
          this.filterText = this.searchText = '';
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import './SearchTree.scss';
</style>
