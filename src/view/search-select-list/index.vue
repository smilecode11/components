<template>
  <div class="template-search-tree">
    <h3>SearchSelectList 演示</h3>
    <div class="container">
      <search-select-list
        @select="handleSearchSelectList"
        @selectLoadMore="handleSearchSelectListLoadMore"
        @onChangeSelectWithItem="handleChangeSelectWithItem"
        :currentSearchSelectData="currentSearchSelectData"
        :selectlistData="selectlistData"
        :defaultProps="selectlistDefaultProps"
        :isMulti="false"
        clearable
      >
      </search-select-list>
      <h4 style="margin-top: 20px; min-height:220px">
        当前值： {{ currentSearchSelectData }}
      </h4>
    </div>
  </div>
</template>

<script>
import SearchSelectList from "../../components/SearchSelectList/SearchSelectList.vue";

export default {
  data() {
    return {
      params: { pageSize: 10, currentPage: 1, keyword: "" },

      selectlistDefaultProps: { value: "id", label: "name", key: "id" },
      selectlistData: {},
      currentSearchSelectData: [],
    };
  },
  methods: {
    handleSearchSelectList(data) {
      let params = this.params;
      params.keyword = data.keyword;
      params.currentPage = 1;
      this.$http
        .get("/api/interface/getList", {
          params,
        })
        .then((res) => {
          let respData = res.data;
          if (respData.code === 0) {
            this.selectlistData = respData.data;
          }
        });
    },
    handleSearchSelectListLoadMore() {
      let params = this.params;
      params.currentPage += 1;
      let selectlistData = this.selectlistData;
      this.$http
        .get("/api/interface/getList", {
          params,
        })
        .then((res) => {
          let respData = res.data;
          if (respData.code === 0) {
            selectlistData.list = [
              ...selectlistData.list,
              ...respData.data.list,
            ];
          }
        });
    },
    handleChangeSelectWithItem(selectItem, isClear = false) {
      if (isClear) return (this.currentSearchSelectData = []);
      let currentSearchSelectData = this.currentSearchSelectData || [];
      let findIndex = currentSearchSelectData.findIndex(
        (curr) =>
          curr[this.selectlistDefaultProps["value"]] ===
          selectItem[this.selectlistDefaultProps["value"]]
      );
      if (findIndex !== -1) {
        currentSearchSelectData.splice(findIndex, 1);
      } else {
        currentSearchSelectData.push(selectItem);
      }
    },
  },
  components: {
    [SearchSelectList.name]: SearchSelectList,
  },
  created() {},
  computed: {},
};
</script>

<style>
.template-search-tree {
  width: 100%;
  height: 100%;
}
</style>