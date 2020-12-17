<template>
    <section class="fxt-template-animation fxt-template-layout1">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-12 fxt-bg-color">
                    <div class="fxt-content">
                        <div class="fxt-header">
                            <a href="login-1.html" class="fxt-logo"><img src="img/logo-1.png" alt="Logo"></a>
                            <div class="fxt-page-switcher">
                                <a href="login-1.html" class="switcher-text1 active">Log In</a>
                                <a href="register-1.html" class="switcher-text1">Register</a>
                            </div>
                        </div>
                        <div class="fxt-form">
                            <h2>Log In</h2>
                            <p>Log in to continue in our website</p>
                            <form method="POST">
                                <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-1">
                                        <input type="email" class="form-control" name="email" placeholder="Email Address" required="required">
                                        <i class="flaticon-envelope"></i>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                        <input type="password" class="form-control" name="password" placeholder="Password" required="required">
                                        <i class="flaticon-padlock"></i>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-3">
                                        <div class="fxt-content-between">
                                            <button type="submit" class="fxt-btn-fill">Log in</button>
                                            <a href="forgot-password-1.html" class="switcher-text2">Forgot Password</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="fxt-footer">
                            <ul class="fxt-socials">
                                <li class="fxt-facebook fxt-transformY-50 fxt-transition-delay-4">
                                    <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="fxt-twitter fxt-transformY-50 fxt-transition-delay-5">
                                    <a href="#" title="twitter"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="fxt-google fxt-transformY-50 fxt-transition-delay-6">
                                    <a href="#" title="google"><i class="fab fa-google-plus-g"></i></a>
                                </li>
                                <li class="fxt-linkedin fxt-transformY-50 fxt-transition-delay-7">
                                    <a href="#" title="linkedin"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li class="fxt-pinterest fxt-transformY-50 fxt-transition-delay-8">
                                    <a href="#" title="pinterest"><i class="fab fa-pinterest-p"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 fxt-none-767 fxt-bg-img" data-bg-image="img/figure/bg1-l.jpg"></div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="scss">
    $backgroundColor:#9152f8;

.container-custom{
    border:1px solid red;
    height:100%;
    width: 100%;
    background:url('/images/background.jpg') no-repeat center;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255,255,255,.9);
    }

    .form-custom{
        width: 500px;
        height: 500px;
        border-radius: 10px;
        overflow: hidden;
        padding: 55px 55px 37px;
        background: $backgroundColor;
        background: -webkit-linear-gradient(top,#7579ff,#b224ef);
        background: -o-linear-gradient(top,#7579ff,#b224ef);
        background: -moz-linear-gradient(top,#7579ff,#b224ef);
        background: linear-gradient(top,#7579ff,#b224ef);

        .input100{
            font-family: Poppins-Regular;
            font-size: 16px;
            color: #fff;
            line-height: 1.2;
            display: block;
            width: 100%;
            height: 45px;
            background: 0 0;
            padding: 0 5px 0 38px;
        }
    }
}
</style>