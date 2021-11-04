<template>
  <div class="editor-container">
    <quill-editor
      class="editor"
      v-model="messages"
      ref="myQuillEditor"
      @blur="onEditorBlur"
      @focus="onEditorFocus"
      @ready="onEditorReady"
    >
    </quill-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {

        messages: "",
    };
  },
  methods: {
      onEditorBlur() {
        console.log('blur',this.messages)
      },

      onEditorFocus(){
        console.log('focus',this.messages)
      },

      onEditorReady(){
        console.log('ready',this.messages)
      }
  },
  created() {
    console.log("created");
  },
};
</script>