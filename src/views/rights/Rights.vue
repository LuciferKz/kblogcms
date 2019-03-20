<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">{{boxTitle}}</h3>
    </div>
    <div class="box-body">
      <div class="flex-box">
        <div class="right-tree">

        </div>
        <div class="right-form">
          <k-form ref="form" :model="model" :rules="rules">
            <k-form-item prop="code" label="编码">
              <kel-input placeholder="请输入编码" v-model="model.code"></kel-input>
            </k-form-item>
            <k-form-item prop="name" label="名称">
              <kel-input placeholder="请输入名称" v-model="model.name"></kel-input>
            </k-form-item>
            <k-form-item prop="type" label="类型">
              <kel-select placeholder="请选择类型" v-model="model.type">
                <kel-option v-for="type in typeList" :key="type.value" :label="type.label" :value="type.value"></kel-option>
              </kel-select>
            </k-form-item>
            <k-form-item prop="path" label="路径">
              <kel-input placeholder="请输入链接" v-model="model.name"></kel-input>
            </k-form-item>
            <k-form-item prop="icon" label="图标">
              <kel-input placeholder="请输入图标" v-model="model.icon"></kel-input>
            </k-form-item>
          </k-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'RightsTable',

  data () {
    return {
      boxTitle: 'Rights table',
      model: {
        code: '',
        name: '',
        type: null,
        path: '',
        icon: '',
        parentId: 0
      },
      typeList: [{
        value: 1,
        label: '菜单'
      }, {
        value: 2,
        label: '按钮'
      }],
      rules: {
        code: [{
          required: true,
          message: '编码不能为空'
        }],
        name: [{
          required: true,
          message: '名称不能为空'
        }],
        path: [{
          required: true,
          message: '路径不能为空'
        }]
      }
    }
  },

  created () {
  },

  methods: {
    handleSave: function () {
      this.$api.role.insert(this.model).then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .flex-box {
    display: flex;
  }
  .right-tree {
    flex: 1;
  }
  .right-form {
    flex: 1;
  }
</style>
