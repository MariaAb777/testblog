<template>
    <div class="nav">
        <div class="logo"></div>
        <div class="login_register_link">
            <router-link class="login" to="/"> Log In</router-link>
            |
            <router-link class="register" to="/register">Register</router-link>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'AuthHeader',
  }
</script>

<style scoped lang="scss">
    $activeColor: #FF0000;
    $textColor: #000;
    .router-link-exact-active{
        color: $activeColor !important;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 150px;

    .login,.register {
        font-size: 20px;
        color:$textColor;
    }

    .logo {
        background-image: url('/images/logo.png');
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
</style>