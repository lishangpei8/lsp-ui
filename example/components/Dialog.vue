<!--
 * @Author: lishangpei
 * @Date: 2022-07-10 12:42:07
 * @LastEditTime: 2022-07-10 18:52:40
 * @LastEditors: your name
-->

<template>
  <transition name="dialog-show">
    <div v-show="visible">
      <div class="lsp-dialog_wrapper" @click.self="handleClose">
        <div class="lsp-dialog" :style="{width, marginTop: top}">
          <div class="lsp-dialog_header">
            <slot name="title">
              <span class="lsp-dialog_title">{{ title }}</span>
            </slot>

            <button class="lsp-dialog_headerbtn" @click="handleClose">
              <i class="lsp-icon-close"></i>
            </button>
          </div>
          <div class="lsp-dialog_body">
            <slot></slot>
          </div>
          <div class="lsp-dialog_footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
export default {
  name: 'LspDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    testArray: {
      type: Array
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.lsp-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .lsp-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .lsp-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lsp-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .lsp-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-show-enter-active {
  animation: dialog 0.5s;
}
.dialog-show-leave-active {
  animation: dialog 0.5s reverse;
}
@keyframes dialog {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
