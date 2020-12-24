<template>
    <div class="login ">
        <div class="container sm:px-10">
            <div class="block xl:grid grid-cols-2 gap-4">
                <!-- BEGIN: Login Info -->
                <div class="hidden xl:flex flex-col min-h-screen">
                    <a class="-intro-x flex items-center pt-5" href="">
                        <img alt="Midone Tailwind HTML Admin Template" class="w-6" src="/images/logo.svg">
                        <span class="text-white text-lg ml-3"> Mid<span class="font-medium">One</span> </span>
                    </a>
                    <div class="my-auto">
                        <img alt="Midone Tailwind HTML Admin Template" class="-intro-x w-1/2 -mt-16"
                             src="/images/illustration.svg">
                        <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            A few more clicks to
                            <br>
                            sign in to your account.
                        </div>
                        <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">Manage all your e-commerce
                            accounts in one place
                        </div>
                    </div>
                </div>
                <!-- END: Login Info -->
                <!-- BEGIN: Login Form -->
                <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Send Email 
                        </h2>
                        <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to
                            your account. Manage all your e-commerce accounts in one place
                        </div>
                        <div class="intro-x mt-8">
                            <input :class="{'border-red-300':emailError}"
                                   class="intro-x login__input input input--lg border border-gray-300 block"
                                   placeholder="Email"
                                   required="required"
                                   type="text"
                                   v-model="form.email">
                         
                        </div>
                    
                        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button @click.prevent="login"
                                    class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top"
                                    type="submit">
                                Send
                            </button>
                            <button @click="goTo"  class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-8 xl:mt-0 align-top">
                               Go Back
                            </button>
                        </div>
                        <div class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
                            By signin up, you agree to our
                            <br>
                            <a class="text-theme-1 dark:text-theme-10" href="">Terms and Conditions</a> & <a
                                class="text-theme-1 dark:text-theme-10" href="">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <!-- END: Login Form -->
            </div>
        </div>
    </div>
</template>

<script>
  // import axios from 'axios'
  // import Socialite from '../components/Socialite'
  // import AuthHeader from '../components/AuthHeader'

  export default {
    name: 'ForgotPass',
    // components: { Socialite, AuthHeader },
    data () {
      return {
        form: {
          email: '',
          
        },
        emailError: false,
        
      }
    },
    methods: {
        goTo(){
            this.$router.push('/')
        },
      login () {
        if (this.validateEmail()) {
          localStorage.setItem('user', JSON.stringify(this.form))
          this.$router.push({ name: 'Login'})

          // axios.post('', this.form).then((response) => {
          //   if (response.data.status) {
          //     localStorage.setItem('user', JSON.stringify(this.form))
          //     alert('U are logged in')
          //     this.$router.push('/register')
          //   } else {
          //     this.emailError = true
          //     this.passwordError = true
          //     alert('U are not  logged in')
          //   }
          // })
        }
      },
  
      validateEmail () {
        if (
          this.form.email === '' ||
          !/(.+)@(.+){2,}\.(.+){2,}/.test(this.form.email)
        ) {
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
    $textColor: #000;
    $activeColor: #FF0000;
    .fxt-template-animation {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        background-repeat: no-repeat;

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
                        margin-left: -80px;
                    }

                    .login_text_title:hover {
                        color: #474747;
                        transition: 1s;
                    }
                }

                .email-input-group {
                    position: relative;

                    .email-input {
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        margin-bottom: 20px;
                        margin-top: 25px;

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

                .custom-btnDiv {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 30px;

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

        }


    }

    .right_background {
        height: 100%;
        width: 100%;
        background-image: url(/images/bg.jpg);

    }


</style>