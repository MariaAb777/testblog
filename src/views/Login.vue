<template>
  <div class="fxt-template-animation fxt-template-layout1 loaded">
    <div class="custom-b1">
      <div class="cutstom-pageCont">
        <div class="nav">
          <div class="logo"></div>
          <div class="logReg">
            <a class="login">Log In</a>
            <a class="register">Register</a>
          </div>

          <div class="custom-login">
            <p class="custom-pLogIn">Log In</p>
            <p class="custom-pText">Log in to continue in our website</p>
            <form>
              <div class="form-group">
                <div class="fxt-transformY-50 fxt-transition-delay-1">
                  <input
                    type="email"
                    class="aaa form-control"
                    name="email"
                    placeholder="Email Address"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <div class="fxt-transformY-50 fxt-transition-delay-2">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="fxt-transformY-50 fxt-transition-delay-3">
                  <div class="custom-btnDiv fxt-content-between">
                    <button type="submit" class="custom-btn fxt-btn-fill">
                      Log in
                    </button>
                    <a
                      href="forgot-password-1.html"
                      class="custom-pass switcher-text2"
                      >Forgot Password</a
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-b2"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
$backgroundColor: #9152f8;

.fxt-template-animation {
  position: relative;
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  background-repeat: no-repeat;
}

.custom-b1 {
  height: 100%;
  width: 100%;
}
.cutstom-pageCont {
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
}

.custom-pLogIn {
  font-size: 27px;
  font-weight: bold;
  color: #000;
  margin-left: -370px;
  cursor: pointer;
}
.custom-pLogIn:hover {
  text-shadow: 1px 1px 1px #000;
  transition: 1s;
}
.custom-pText {
  color: dimgray;
  margin-left: -220px;
  margin-top: -20px;
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