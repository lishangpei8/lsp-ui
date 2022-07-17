<!--
 * @Author: lishangpei
 * @Date: 2022-07-17 14:31:14
 * @LastEditTime: 2022-07-17 14:40:39
 * @LastEditors: your name
-->
<template>
  <div class="lsp-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LspForm',
  props: {
    form: Object,
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss" scoped></style>
