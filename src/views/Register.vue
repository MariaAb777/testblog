<template>
    <div class="fxt-template-animation fxt-template-layout1 loaded">
        <div class="left_background">
            <div class="left_background_block">
                <auth-header></auth-header>
                <div class="login_context">
                    <div class="login-header">
                        <p class="login_title">Register</p>
                        <p class="login_text_title">Create an account free and enjoy it</p>
                    </div>
                    <form method="POST">
                        <div class="form-group">
                            <div class="name-input-group">
                                <input
                                        :class="{ 'is-invalid': nameError }"
                                        class=" name-input form-control"
                                        name="name"
                                        placeholder="Name"
                                        required="required"
                                        type="text"
                                        v-model="form.name"
                                />
                                <i class="name-input-icon far fa-user"></i>
                            </div>
                            <div class="email-input-group"
                                 data-aos="fade-up"
                                 data-aos-duration="1000"
                            >
                                <input
                                        :class="{ 'is-invalid': emailError }"
                                        class="email-input form-control"
                                        name="email"
                                        placeholder="Email Address"
                                        required="required"
                                        type="text"
                                        v-model="form.email"
                                />
                                <i class=" email-input-icon far fa-envelope"></i>
                            </div>
                            <div class="form-group" data-aos="fade-up" data-aos-duration="1000">

                                <div class="password-input-group">
                                    <input
                                            :class="{ 'is-invalid': passwordError }"
                                            class=" password-input form-control"
                                            name="password"
                                            placeholder="Password"
                                            required="required"
                                            type="password"
                                            v-model="form.password"
                                    />
                                    <i class="password-input-icon fas fa-lock"></i>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" data-aos="fade-up" data-aos-duration="1000">
                            <div class="fxt-transformY-50 fxt-transition-delay-3">
                                <div class="custom-btnDiv fxt-content-between">
                                    <button
                                            @click.prevent="register"
                                            class="custom-btn fxt-btn-fill"
                                            type="submit"
                                    >
                                        Register
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
            <socialite></socialite>

        </div>
        <div class="right_background"></div>
    </div>
</template>

<script>
  import Socialite from '../components/Socialite'
  import AuthHeader from '../components/AuthHeader'

  export default {
    name: 'Register',
    components: { Socialite, AuthHeader },
    data () {
      return {
        form: {
          email: '',
          password: '',
          name: '',
        },
        emailError: false,
        passwordError: false,
        nameError: false,
      }
    },
    methods: {
      register () {
        console.log(this.form)
        if (this.validateName() && this.validateEmail() && this.validatePassword()) {
          localStorage.setItem('user', JSON.stringify(this.form))
          this.$router.push({ name: 'Home' })
          // axios.post('', this.form).then((response) => {
          //   if (response.data.status) {
          //     alert('U are logged in')
          //     this.$router.push('/')
          //   } else {
          //     this.emailError = true
          //     this.passwordError = true
          //     this.nameError = true
          //
          //   }
          // })
        }
      },
      validateName () {
        if (this.form.name === '' || this.form.name.length < 6) {
          this.nameError = true
        } else {
          this.nameError = false
        }

        return !this.nameError
      },
      validatePassword () {
        console.log(1)
        if (this.form.password === '' || this.form.password.length < 6) {
          this.passwordError = true
        } else {
          this.passwordError = false
        }

        return !this.passwordError
      },
      validateEmail () {
        console.log(2)
        if (
          this.form.email === '' ||
          !/(.+)@(.+){2,}\.(.+){2,}/.test(this.form.email)
        ) {
          this.emailError = true

        } else {
          this.emailError = false
        }

        return !this.emailError
      },
    },
  }
</script>

<style lang="scss" scoped>
    $textColor: #000;
    $activeColor: #FF0000;
    .fxt-template-animation {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        background-repeat: no-repeat;

        .iconsBlock {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .left_background {
            height: 100%;
            width: 100%;
            padding-top: 50px;

            .left_background_block {
                padding-left: 50px;
            }

            .login_context {
                width: 450px;
                margin-top: 150px;
                margin-left: 100px;

                .login-header {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .login_title {
                        font-size: 27px;
                        font-weight: bold;
                        color: $textColor;

                        cursor: pointer;
                    }


                    .login_title:hover {
                        text-shadow: 1px 1px 1px $textColor;
                        transition: 1s;
                    }

                    .login_text_title {
                        color: dimgray;
                        padding-top: 70px;
                        margin-left: -105px;
                    }

                    .login_text_title:hover {
                        color: #474747;
                        transition: 1s;
                    }
                }

                .name-input-group {
                    position: relative;

                    .name-input {
                        border-top: none;
                        border-left: none;
                        border-right: none;


                        &-icon {
                            position: absolute;
                            right: 10px;
                            top: 15px
                        }
                    }

                }

                .email-input-group {
                    position: relative;


                    .email-input {
                        border-top: none;
                        border-left: none;
                        border-right: none;

                        &-icon {
                            position: absolute;
                            right: 10px;
                            top: 15px
                        }

                        &:focus {
                            color: #495057;
                            background-color: #fff;
                            border-bottom: 1px solid #80bdff !important;
                            outline: 0;
                            box-shadow: 0 4px 2px -2px rgba(0, 123, 255, .25);
                        }
                    }
                }

                .password-input-group {
                    position: relative;

                    .password-input {
                        border-top: none;
                        border-left: none;
                        border-right: none;

                        &-icon {
                            position: absolute;
                            right: 10px;
                            top: 15px

                        }

                        &:focus {
                            color: #495057;
                            background-color: #fff;

                            border-bottom: 1px solid #80bdff !important;
                            outline: 0;
                            box-shadow: 0 4px 2px -2px rgba(0, 123, 255, .25);
                        }
                    }
                }


            }
        }

        .email-input {
            margin-bottom: 20px;
            margin-top: 25px;;
        }

        .custom-btnDiv {
            display: flex;
            justify-content: space-between;
            padding-top: 30px;
        }

        .custom-btn {
            background-color: $activeColor;
            color: #ffffff;
            border: none;
            height: 50px;
            width: 120px;
            border-radius: 5px;
            font-weight: bold;
        }

        .custom-btn:hover {
            background-color: $activeColor;
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
    }

    .right_background {
        height: 100%;
        width: 100%;
        background-image: url(/images/bg.jpg);

    }


</style>