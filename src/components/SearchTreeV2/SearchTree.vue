<template>
  <el-popover
    ref="dcPopover"
    placement="bottom-start"
    trigger="click"
    v-model="treeShow"
    :popper-options="popperOptions"
    popper-class="popper-wrapper"
    :visible-arrow="false"
    :popper-append-to-body="false"
    :offset="0"
  >
    <div class="tree-wrap" :style="treeWrapperStyle">
      <el-input
        clearable
        placeholder="搜索表单"
        v-model="filterText"
        ref="select-tree-input"
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

    <div slot="reference">
      <div
        ref="inputTextWrapper"
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
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'search-tree',
  props: {
    treeWrapperStyle: {
      type: String,
      default: 'width: 180px'
    },
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
    checkedNode: {
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
      popperOptions: {
        boundariesElement: 'viewport',
        removeOnDestroy: true,
        offset: {},
        styles: {
          // 'margin-top': '4px'
          marginTop: '122px'
        }
      }
    };
  },

  methods: {
    //  树形选择目标链表
    filterNode(value, data) {
      if (!value) return true;
      return data[this.defaultProps.label].indexOf(value) !== -1;
    },

    handleNodeClick(data) {
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

    /** 清除选择*/
    handleClear() {
      this.treeShow = false;
      this.$emit('select', {});
    }
  },
  watch: {
    treeData: {
      handler(newV) {
        if (newV && newV.length > 0) {
          this.$nextTick(() => {
            this.$refs.dcPopover.updatePopper();
          });
        }
      },
      immediate: true
    },
    filterText(val) {
      this.$refs.tree.filter(val);
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
