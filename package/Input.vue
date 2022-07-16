<!--
 * @Author: lishangpei
 * @Date: 2022-07-10 19:41:18
 * @LastEditTime: 2022-07-11 22:52:39
 * @LastEditors: your name
-->
<template>
  <div class="lsp-input" :class="[{'lsp-input--suffix': showSuffix}]">
    <input
      :type="showPassword ? (passwordVisible ? 'text' : type) : type"
      :placeholder="placeholder"
      class="lsp-input_inner"
      :disabled="disabled"
      :class="[{'is-disabled': disabled}]"
      @input="handleInput"
      :value="value"
    />
    <span class="lsp-input_suffix" v-show="showSuffix">
      <i
        class="lsp-input-icon lsp-icon-close"
        v-if="clearable && value"
        @click="handleClose"
      ></i>
      <i
        class="lsp-icon-eye_protection"
        v-if="showPassword"
        @click="passwordVisible = !passwordVisible"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LspInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    // v-model的语法糖，实际可以接到一个value
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClose () {
      this.$emit('input', '')
    }
  },
  computed: {
    showSuffix () {
      return this.showPassword || this.clearable
    }
  }
}
</script>

<style lang="scss" scoped>
.lsp-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lsp-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.lsp-input--suffix {
  .lsp-input_inner {
    padding-right: 30px;
  }
  .lsp-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
