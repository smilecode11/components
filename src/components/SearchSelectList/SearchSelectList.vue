<template>
  <el-popover
    ref="dcPopover"
    placement="bottom-start"
    trigger="click"
    v-model="searchSelectListShow"
    :popper-options="popperOptions"
    popper-class="popper-wrapper"
    :visible-arrow="false"
    :popper-append-to-body="false"
    :offset="0"
  >
    <div class="search-select-list-wrap" :style="searchSelectListStyle">
      <el-input
        ref="searchSelectInput"
        @input="handleSearchSelectInputChange"
        :placeholder="searchSelectInputPlaceholder"
        :value="searchSelectInputValue"
        clearable
      ></el-input>
      <div class="main-wrapper">
        <template v-if="selectlistData.total > 0">
          <ul
            class="search-select-list-wrapper"
            v-infinite-scroll="loadMore"
            :infinite-scroll-immediate="false"
            style="overflow:visible"
          >
            <li
              @click="handleChangeSelectWithItem(item)"
              v-for="(item, index) in selectlistData.list"
              :key="index"
              class="li-item"
              :class="{ 'is-select': isSelected(item[defaultProps['value']]) }"
            >
              <slot name="selectItem" v-bind="item">
                <div>{{ item[defaultProps["label"]] }}</div>
              </slot>
            </li>
          </ul>
          <div
              v-if="
                selectlistData.list &&
                selectlistData.list.length < selectlistData.total
              "
              @click="loadMore"
              class="loadMore"
            >
              加载中...
            </div>
            <div class="loadMore no" v-else>没有更多了</div>
        </template>
        <template v-else>
          <div class="loadMore no">未检索到任何数据</div>
        </template>
      </div>
    </div>

    <div slot="reference">
      <div
        ref="inputTextWrapper"
        class="input-text"
        :class="[!currentSearchSelectData.length ? 'placeholder' : '']"
      >
        <div class="main" v-show="!isEmpty(currentSearchSelectData)">
          <div
            class="current-search-select-item"
            v-for="(item, index) in currentSearchSelectData"
            :key="index"
          >
            {{ item[defaultProps["label"]] }}
            <i
              class="el-icon el-icon-close"
              @click.stop="handleChangeSelectWithItem(item)"
            ></i>
          </div>
        </div>
        <div v-show="isEmpty(currentSearchSelectData)">
          {{ searchSelectInputPlaceholder }}
        </div>
        <div
          @click.stop="handleChangeSelectWithItem(null, true)"
          v-show="currentSearchSelectData.length && clearable"
          class="el-icon el-icon-close"
        ></div>
        <div
          v-show="!clearable || !currentSearchSelectData.length"
          class="el-icon el-icon-arrow-down"
        ></div>
      </div>
    </div>
  </el-popover>
</template>

<script>
const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const debounce = function (fn, delay = 700) {
  let timer = null;
  return function (...args) {
    let context = this;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const deepClone = function (source = {}) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
};

export default {
  name: "search-select-list",
  props: {
    searchSelectListStyle: {
      type: String,
      default: "width: 380px",
    },
    searchSelectInputPlaceholder: {
      type: String,
      default: "检索数据",
    },
    defaultProps: {
      type: Object,
      default: () => ({
        value: "value",
        label: "label",
        key: "id",
      }),
    },
    currentSearchSelectData: {
      type: Array,
      default: () => [],
    },
    selectlistData: {
      type: Object,
      default: () => ({
        total: 0,
        list: [],
      }),
    },
    isMulti: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchSelectListShow: true,
      searchSelectInputValue: "",
      popperOptions: {
        boundariesElement: "viewport",
        removeOnDestroy: true,
        offset: {},
        styles: {
          marginTop: "122px",
        },
      },
    };
  },

  methods: {
    handleSearchSelectInputChange(value) {
      this.searchSelectInputValue = value;
      this.handleGetListData(value);
    },

    /** 抛出事件：请求列表数据接口数据*/
    handleGetListData: debounce(function (value) {
      this.$emit("select", {
        keyword: value,
      });
    }, 700),

    loadMore: debounce(function () {
      let selectlistData = deepClone(this.selectlistData);
      if (selectlistData.list.length < selectlistData.total) {
        this.$emit("selectLoadMore");
      }
    }, 300),

    /** 处理选择项目*/
    handleChangeSelectWithItem(selectItem, isClear = false) {
      this.$emit("onChangeSelectWithItem", selectItem, isClear);
    },

    /** 处理 选择列表状态 显示|隐藏 */
    handleSearchSelectListStatus(status = false) {
      this.searchSelectListShow = status;
    },

    /** 清除选择*/
    handleClear() {
      this.handleSearchSelectListStatus(false);
      this.$emit("select", {
        keyword: "",
      });
    },

    /** 非空判断*/
    isEmpty(source) {
      return isEmpty(source);
    },

    isSelected(id) {
      return this.currentSearchSelectIds.indexOf(id) !== -1;
    },
  },
  computed: {
    currentSearchSelectIds() {
      return this.currentSearchSelectData.reduce((totalIds, curr) => {
        totalIds.push(curr[this.defaultProps["value"]]);
        return totalIds;
      }, []);
    },
  },
  watch: {
    currentSearchSelectData: {
      handler(newV) {
        if (newV && newV.length > 0) {
          this.$nextTick(() => {
            this.$refs.dcPopover.updatePopper();
          });
        }
      },
      immediate: true,
    },
    searchSelectListShow: {
      handler(newV) {
        if (newV) {
          this.$nextTick(() => this.$refs["searchSelectInput"].focus());
        }
      },
    },
  },
  created() {
    this.handleClear();
  },
};
</script>

<style lang="scss" scoped>
@import "./SearchSelectList.scss";
</style>
