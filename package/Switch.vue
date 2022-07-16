<!--
 * @Author: lishangpei
 * @Date: 2022-07-11 23:05:12
 * @LastEditTime: 2022-07-12 22:56:34
 * @LastEditors: your name
-->
<template>
  <label
    class="lsp-switch"
    :class="[{'is-checked': value}]"
    @click="handleClick"
    :for="name"
  >
    <input type="checkbox" class="lsp-switch_input" ref="input" :name="name" />
    <span class="lsp-switch_core" ref="core">
      <span class="lsp-switch_button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LspSwitch',
  props: {
    value: {
      type: Boolean
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      this.$refs.core.style.borderColor = this.value
        ? this.activeColor
        : this.inactiveColor
      this.$refs.core.style.backgroundColor = this.value
        ? this.activeColor
        : this.inactiveColor
    }
  },
  mounted () {
    if (this.activeColor || this.inactiveColor) {
      this.setColor()
    }
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
.lsp-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .lsp-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  .lsp-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lsp-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .lsp-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .lsp-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.lsp-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
