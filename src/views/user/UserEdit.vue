<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">User {{ uid ? 'Edit' : 'Add' }}</h3>
    </div>
    <div class="box-body">
      <k-form ref="form" :form="model" :rules="rules">
        <k-form-item prop="username" label="User name">
          <kel-input placeholder = "User name" v-model = "model.username"></kel-input>
        </k-form-item>
        <k-form-item v-if="!uid" prop="password" label="Password">
          <kel-input type = "password" placeholder = "Password" v-model = "model.password"></kel-input>
        </k-form-item>
        <k-form-item v-if="!uid" prop="retypePassword" label="Retype password">
          <kel-input type = "password" placeholder = "Retype password" v-model = "model.retypePassword"></kel-input>
        </k-form-item>
        <k-form-item prop="phone" label="Phone">
          <kel-input type = "tel" placeholder = "Phone" v-model = "model.phone"></kel-input>
        </k-form-item>
        <k-form-item prop="email" label="Email">
          <kel-input type = "email" placeholder = "Email" v-model = "model.email"></kel-input>
        </k-form-item>
        <k-form-item prop="photo" label="User Photo" tip="只支持使用图片绝对地址，http:// or https://">
          <kel-input placeholder = "User Photo" v-model = "model.photo"></kel-input>
        </k-form-item>
        <k-form-item v-if="!uid" prop="role" label="User Role">
          <kel-select v-model = "model.role" placeholder="请选择用户角色">
            <kel-option v-for="role in roles" :key="role._id" :label="role.name" :value="role._id"></kel-option>
          </kel-select>
        </k-form-item>
      </k-form>
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="handleSave">Submit</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'UserEdit',

  data () {
    const vm = this
    return {
      uid: null,
      model: {
        username: '',
        phone: '',
        photo: '',
        email: '',
        password: '',
        retypePassword: '',
        role: ''
      },
      roles: [],
      rules: {
        username: [{
          required: true,
          message: '用户名不能为空'
        }, {
          pattern: /[a-zA-Z0-9]{6,}/,
          message: '用户名必须由长度大于6的字母和数字组成'
        }],
        password: [{
          required: true,
          message: '密码不能为空'
        }, {
          pattern: /[a-zA-Z0-9]{6,}/,
          message: '密码必须由长度大于6的字母和数字组成'
        }],
        retypePassword: [{
          required: true,
          message: '确认密码不能为空'
        }, {
          validator (rule, value, callback) {
            if (value !== vm.model.password) {
              callback(new Error('确认密码和密码必须保持一致'))
            } else {
              callback()
            }
          }
        }],
        role: [{
          required: true,
          message: '请选择用户角色'
        }]
      }
    }
  },
  methods: {
    loadData (uid) {
      this.$api.user.fetchUserData(uid).then((res) => {
        if (res.statusCode === 20000) {
          let userData = res.userData
          userData.phone = userData.phone && userData.phone.toString()
          this.model = userData
        }
      })
    },
    loadOptions () {
      this.$api.role.fetchAll().then((res) => {
        if (res.statusCode === 20000) {
          this.roles = res.roles
        }
      })
    },
    handleSave () {
      this.$refs.form.validate().then(valid => {
        if (valid) {
          const saveProm = this.uid ? this.$api.user.updateUser(this.uid, this.model) : this.$api.user.insertUser(this.model)

          saveProm.then(res => {
            if (res.statusCode === 20000) {
              let userData = res.userData
              if (this.$route.params.uid === this.$store.state.auth.userInfo.id) {
                this.$store.commit('ADD_USER_DATA', userData)
              }
              this.$router.push({name: 'UserTable'})
            } else {
              throw Error(res.message)
            }
          })
        }
      })
    }
  },
  created () {
    const uid = this.uid = this.$route.params.uid
    if (uid) {
      this.loadData(uid)
    }
    this.loadOptions()
  }
}
</script>
