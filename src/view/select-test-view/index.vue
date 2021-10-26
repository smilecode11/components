<template>
  <div class="select-test-view">
    <h3>Select Test 演示</h3>
    <h4 style="margin-bottom: 20px">
      <el-button size="small" @click="handleChangeSelect"
        >初始化当前选择值</el-button
      >
      当前值： {{ selectValue }}
    </h4>
    <div class="container">
      <el-select
        v-model="selectValue"
        placeholder="请选择"
        clearable
        filterable
      >
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>


<script>
const keyIsExist = (optionsArr, keyId, keyName) => {
  for (let i = 0; i < optionsArr.length; i++) {
    if (optionsArr[i][keyName] === keyId) return true;
  }
};

import { MessageBox } from "element-ui";

export default {
  data() {
    return {
      selectValue: "",
      selectOptions: [
        {
          label: "滴滴",
          value: 1,
        },
        {
          label: "钉钉",
          value: 2,
        },
        {
          label: "字节",
          value: 3,
        },
      ],
    };
  },
  methods: {
    handleChangeSelect() {
      this.selectValue = 999;
      console.log(!!keyIsExist(this.selectOptions, this.selectValue, "value"));
    },
  },
  components: {},
  created() {
    MessageBox.prompt("请输入邮箱", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      inputPattern:
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: "邮箱格式不正确",
    })
      .then(({ value }) => {
        console.log(value);
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消输入",
        });
      });
  },
};
</script>

<style>
</style>