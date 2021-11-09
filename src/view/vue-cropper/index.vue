<template>
  <div>
    <h1>头像剪切</h1>
    <el-button @click="dialogVisible = true">上传头像</el-button>
    <avatar-cropper
      :dialogVisible.sync="dialogVisible"
      @closeAvatarDialog="closeAvatarDialog"
    ></avatar-cropper>
  </div>
</template>

<script>
import AvatarCropper from "../../components/AvatarCropper/AvatarCropper.vue";
export default {
  components: {
    AvatarCropper,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    closeAvatarDialog(data) {
      console.log(data);
      this.dialogVisible = false;
    },
  },
};
</script>
