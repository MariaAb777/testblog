<template>
    <div class="fxt-template-animation fxt-template-layout1 loaded">
        <div class="custom-b1">
            <div class="custom-pageCont">
                <div class="nav">
                    <div class="logo"></div>
                    <div class="logReg">
                        <router-link class="login" to="/">Log In <i class="bi bi-alarm-fill"></i></router-link>
                        <router-link class="register" to="/register">Register</router-link>
                    </div>
                </div>
                <div class="custom-login">
                    <div class="login-header">
                        <p class="custom-pLogIn">Log In</p>
                        <p class="custom-pText">Log in to continue in our website</p>
                    </div>
                    <form method="POST">
                        <div class="form-group">
                            <div class="fxt-transformY-50 fxt-transition-delay-1">
                                <input
                                        :class="{'is-invalid': emailError}"
                                        class="aaa form-control"
                                        name="email"
                                        placeholder="Email Address"
                                        required="required"
                                        type="text"
                                        v-model="form.email"

                                />
                            </div>
                            <div class="form-group">
                                <div class="fxt-transformY-50 fxt-transition-delay-2">
                                    <input
                                            :class="{'is-invalid': passwordError}"
                                            class="form-control"
                                            name="password"
                                            placeholder="Password"
                                            required="required"
                                            type="password"
                                            v-model="form.password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="fxt-transformY-50 fxt-transition-delay-3">
                                <div class="custom-btnDiv fxt-content-between">
                                    <button @click.prevent="login" class="custom-btn fxt-btn-fill" type="submit">
                                        Log in
                                    </button>
                                    <a
                                            class="custom-pass switcher-text2"
                                            href="forgot-password-1.html"
                                    >Forgot Password</a
                                    >
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="custom-b2"></div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    data () {
      return {
        form:{
          email: '',
          password: '',
        },
        emailError: false,
        passwordError: false,
      }
    },
    methods: {
      login () {
        if (this.validateEmail() && this.validatePassword()) {
          axios.post('https://company1.guruh.test/api/v1/login', this.form).then(response => {
            if (response.data.status) {
              alert('U are logged in')
              this.$router.push('/register')
            } else {
              this.emailError = true
              this.passwordError = true
              alert('U are not  logged in')
            }
          })
        }
      },
      validatePassword () {
        if (this.form.password === '' || this.form.password.length < 6) {
          this.passwordError = true
          return false
        }
        this.passwordError = false
        return true
      },
      validateEmail () {
        if (this.form.email === '' || !/(.+)@(.+){2,}\.(.+){2,}/.test(this.form.email)) {
          this.emailError = true
          return false
        }
        this.emailError = false
        return true
      },
    },
  }
</script>

<style lang="scss" scoped>
    $backgroundColor: #9152f8;

    .fxt-template-animation {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        background-repeat: no-repeat;
    }

    .custom-b1 {
        height: 100%;
        width: 100%;
    }

    .custom-pageCont {
        width: 700px;
        margin-left: 50px;
    }

    .custom-b2 {
        height: 100%;
        width: 100%;
        background-image: url(/images/bg.jpg);
    }

    .nav {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        background-image: url(/images/logo.png);
        height: 30px;
        width: 200px;
        background-repeat: no-repeat;
        margin-left: 100px;
        margin-top: 100px;
    }

    .logReg {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin-right: 150px;
        margin-top: 99px;
    }

    .login {
        font-size: 20px;
        color: red;
    }

    .register {
        font-size: 20px;
        color: #000;
        cursor: pointer;
    }

    .custom-login {
        height: 600px;
        width: 450px;
        margin-top: 150px;
        margin-left: 100px;

        .login-header {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    }

    .custom-pLogIn {
        font-size: 27px;
        font-weight: bold;
        color: #000;

        cursor: pointer;
    }

    .custom-pLogIn:hover {
        text-shadow: 1px 1px 1px #000;
        transition: 1s;
    }

    .custom-pText {
        color: dimgray;

        cursor: pointer;
    }

    .custom-pText:hover {
        color: #474747;
        transition: 1s;
    }

    .aaa {
        margin-bottom: 30px;
        margin-top: 50px;
    }

    .custom-btnDiv {
        display: flex;
        justify-content: space-between;
    }

    .custom-btn {
        background-color: red;
        color: #ffffff;
        border: none;
        height: 50px;
        width: 120px;
        border-radius: 5px;
        font-weight: bold;
    }

    .custom-btn:hover {
        background-color: #d30000;
        transition: 1s;
    }

    .custom-pass {
        margin-top: 15px;
        color: lightslategrey;
        font-size: 15px;
    }

    .custom-pass:hover {
        transition: 1s;
        color: #505050;
        text-decoration: none;
    }
</style>