<!--
 * @Author: lishangpei
 * @Date: 2022-07-17 13:55:08
 * @LastEditTime: 2022-07-17 13:58:18
 * @LastEditors: your name
-->
<template>
  <div class="lsp-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LspRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped></style>
