<!--
 * @Author: lishangpei
 * @Date: 2022-07-05 22:48:06
 * @LastEditTime: 2022-07-17 14:46:26
 * @LastEditors: your name
-->
<template>
  <div id="app">
    <!-- button -->
    <!-- <div class="row">
      <lsp-button @click="buttonClick" disabled>按钮</lsp-button>
      <lsp-button type="success">success</lsp-button>
      <lsp-button type="info">info</lsp-button>
      <lsp-button type="danger">danger</lsp-button>
      <lsp-button type="warning">warning</lsp-button>
    </div>
    <div class="row">
      <lsp-button plain>按钮</lsp-button>
      <lsp-button plain type="success">success</lsp-button>
      <lsp-button plain type="info">info</lsp-button>
      <lsp-button plain type="danger">danger</lsp-button>
      <lsp-button plain type="warning">warning</lsp-button>
    </div>
    <div class="row">
      <lsp-button round>按钮</lsp-button>
      <lsp-button round type="success">success</lsp-button>
      <lsp-button round type="info">info</lsp-button>
      <lsp-button round type="danger">danger</lsp-button>
      <lsp-button round type="warning">warning</lsp-button>
    </div>
    <div class="row">
      <lsp-button circle>按钮</lsp-button>
      <lsp-button circle icon="delete" type="success"></lsp-button>
      <lsp-button circle icon="delete" type="info"></lsp-button>
      <lsp-button circle icon="delete" type="danger"></lsp-button>
      <lsp-button circle icon="delete" type="warning"></lsp-button>
    </div> -->
    <!-- dialog -->
    <!-- <lsp-dialog
      title="温馨提示"
      width="20%"
      top="200px"
      :visible.sync="visible"
    >
      dialog body
      <template v-slot:footer>
        <lsp-button type="primary" @click="visible = false">保存</lsp-button>
        <lsp-button @click="visible = false">取消</lsp-button>
      </template>
    </lsp-dialog>
    <lsp-button type="primary" @click="visible = !visible">show</lsp-button> -->
    <div class="my-input">
      <!-- <lsp-input
        placeholder="请输入内容"
        v-model="username"
        clearable
        type="password"
        show-password
      ></lsp-input> -->
      <!-- <input type="text" v-model="username">
      等价于，v-model就是一个语法糖
      <input type="text" :value="username" @input="username=$event.target.value"> -->
    </div>

    <!-- <lsp-switch
      v-model="active"
      active-color="green"
      inactive-color="red"
      name="username"
    ></lsp-switch> -->
    <lsp-radio label="1" v-model="gender"></lsp-radio>
    <lsp-radio label="2" v-model="gender">女</lsp-radio>
    <lsp-radio-group v-model="gender">
      <lsp-radio label="1">男</lsp-radio>
      <lsp-radio label="2">女</lsp-radio>
    </lsp-radio-group>

    <lsp-form :form="form" label-width="100px">
      <lsp-form-item label="用户名">
        <lsp-input
          placeholder="请输入用户名"
          v-model="form.username"
          clearable
        ></lsp-input>
      </lsp-form-item>

      <lsp-form-item>
        <lsp-radio-group v-model="form.gender">
          <lsp-radio label="1">男</lsp-radio>
          <lsp-radio label="2">女</lsp-radio>
        </lsp-radio-group>
      </lsp-form-item>
    </lsp-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      username: 'lsp',
      active: false,
      gender: '1',
      form: {
        username: 'li',
        gender: '1'
      }
    }
  },
  methods: {
    buttonClick () {
      console.log('button click')
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-top: 10px;
  .lsp-button {
    margin-left: 10px;
    margin-top: 10px;
  }
}
.my-input {
  width: 200px;
}
</style>
