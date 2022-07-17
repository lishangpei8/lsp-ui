<!--
 * @Author: lishangpei
 * @Date: 2022-07-17 11:21:43
 * @LastEditTime: 2022-07-17 11:54:57
 * @LastEditors: your name
-->
<template>
  <div>
    <label class="hm-checkbox" :class="{'is-checked': label === value}">
      <span class="hm-checkbox__input">
        <span class="hm-checkbox__inner"></span>
        <input
          type="radio"
          class="hm-checkbox__original"
          :name="name"
          v-model="radioModel"
          :value="label"
        />
      </span>
      <span class="hm-checkbox__label">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'LspRadio',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 因为无法直接改变父组件传递的value值，所以这里用一个radioModel作为中建媒介
    radioModel: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .hm-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .hm-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .hm-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.hm-checkbox.is-checked {
  .hm-checkbox__input {
    .hm-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .hm-checkbox__label {
    color: #409eff;
  }
}
</style>
