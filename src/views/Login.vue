<template>
  <div class="fxt-template-animation fxt-template-layout1 loaded">
    <div class="left_background">
      <div class="left_background_block">
        <div class="nav">
         
          <div class="logo"></div>
          <div class="login_register_link">
            <router-link class="login" to="/"> Log In </router-link> |
            <router-link class="register" to="/register">Register</router-link>
         
          </div>
        </div>
        <div class="login_context">
          <div class="login-header">
            <p class="login_title">Log In</p>
            <p class="login_text_title">Log in to continue in our website</p>
          </div>
          <form method="POST">
            <div class="form-group">
              <div class="fxt-transformY-50 fxt-transition-delay-1">
                <input
                  :class="{ 'is-invalid': emailError }"
                  class="email-input form-control"
                  name="email"
                  placeholder="Email Address"
                  required="required"
                  type="text"
                  v-model="form.email"
                />
                <i class=" message_icon far fa-envelope"></i>
              </div>
              <div class="form-group">
                <div class="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    :class="{ 'is-invalid': passwordError }"
                    class=" password-input form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    type="password"
                    v-model="form.password"
                    
                  />
                  <i class="fas fa-lock"></i>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="fxt-transformY-50 fxt-transition-delay-3">
                <div class="custom-btnDiv fxt-content-between">
                  <button
                    @click.prevent="login"
                    class="custom-btn fxt-btn-fill"
                    type="submit"
                  >
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
      <div class="iconsBlock">
        <ul class="iconsPack"> 
          <li><i class="facebook-icon fab fa-facebook"></i> </li>
          <li><i class="twitter-icon fab fa-twitter"></i></li>
          <li><i class="google-icon fab fa-google-plus"></i></li>
          <li><i class="linkedin-icon fab fa-linkedin-in"></i></li>
          <li><i class="pinterest-icon fab fa-pinterest"></i></li>
        </ul>
         </div>
    </div>
    <div class="right_background"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      emailError: false,
      passwordError: false,
    };
  },
  methods: {
    login() {
      if (this.validateEmail() && this.validatePassword()) {
        axios.post("", this.form).then((response) => {
          if (response.data.status) {
            alert("U are logged in");
            this.$router.push("/register");
          } else {
            this.emailError = true;
            this.passwordError = true;
            alert("U are not  logged in");
          }
        });
      }
    },
    validatePassword() {
      if (this.form.password === "" || this.form.password.length < 6) {
        this.passwordError = true;
        return false;
      }
      this.passwordError = false;
      return true;
    },
    validateEmail() {
      if (
        this.form.email === "" ||
        !/(.+)@(.+){2,}\.(.+){2,}/.test(this.form.email)
      ) {
        this.emailError = true;
        return false;
      }
      this.emailError = false;
      return true;
    },
  },
};
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

    .left_background_block {
      padding-left: 50px;

      .nav {
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding-right:150px;

        .login {
          font-size: 20px;
          color: $activeColor;
        }

        .register {
          font-size: 20px;
          color: $textColor;
          cursor: pointer;
        }
        .logo {
          background-image: url(/images/logo.png);
          height: 30px;
          width: 200px;
          background-repeat: no-repeat;
          margin-left: 100px;

          .login_register_link {
            width: 200px;
            display: flex;
            justify-content: space-between;
            margin-right: 150px;
            margin-top: 99px;
          }
        }
      }
    }
    .login_context {
  width: 450px;
  margin-top: 150px;
  margin-left: 100px;
  .login-header {
    display: flex;
    justify-content: start;
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

.login_text_title{
  color: dimgray;
  padding-top: 70px;
  margin-left: -80px;
}

.login_text_title:hover {
  color: #474747;
  transition: 1s;
}
  }
  .email-input{
  border-top: none;
  border-left: none;
  border-right: none;
}
.password-input{
  border-top: none;
  border-left: none;
  border-right: none;
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

.iconsPack{
  list-style-type: none;
  display: flex;
  margin-left: 250px;
  
  

  .facebook-icon {
    color: #3B5998;
    font-size: 40px;
  }
  .facebook-icon:hover{
    border:  1px solid #3B5998;
    border-radius: 140px;
    font-size: 40px;
    color: #fff;
    transition: 5s;
    
  }
  .twitter-icon {
    color: #00ACEE;
    font-size: 40px;
  }
  .twitter-icon:hover{
    border:  1px solid #00ACEE;
    border-radius: 140px;
    font-size: 40px;
    color: #fff;
    transition: 5s;
    
  }
  .google-icon {
    color: #CC3333;
    font-size: 40px;
  }
   .google-icon:hover{
    border:  1px solid #CC3333;
    border-radius: 140px;
    font-size: 40px;
    color: #fff;
    transition: 5s;
    
  }
  
  .linkedin-icon {
    color: #0077B5;
    font-size: 40px;
  }
    .linkedin-icon:hover{
    border:  1px solid #0077B5;
    border-radius: 140px;
    font-size: 40px;
    color: #fff;
    transition: 5s;
    
  }
  
  .pinterest-icon {
    color: #BD081C;
    font-size: 40px;
  }
  .pinterest-icon:hover{
    border:  1px solid #BD081C;
    border-radius: 140px;
    font-size: 40px;
    color: #fff;
    transition: 5s;
    
  }
}
}

.right_background {
  height: 100%;
  width: 100%;
  background-image: url(/images/bg.jpg);

}


</style>