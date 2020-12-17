<template>



     <div class='fxt-template-animation fxt-template-layout1 loaded'>
 <div class="custom-b1"> 
        <div class="nav">
            <div class="logo">   </div>
            <div class="logReg">  
                <a class="login">Log In</a>
            <a class="register">Register</a> </div>
            




         
        </div>
        



      </div>
       <div class="custom-b2"> 
      </div>

    
   
 </div>

 


</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="scss">
    $backgroundColor:#9152f8;

    .fxt-template-animation {
    position: relative;
    width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
  
}


.custom-b1{
      height: 100%;
    width: 100%;
    
}


.custom-b2{
      height: 100%;
    width: 100%;
    background-image: url(/images/bg.jpg);
}
.nav{
    display: flex;
    justify-content: space-between;
}
.logo{
background-image: url(/images/logo.png) ;
    height: 30px;
    width: 200px;
    background-repeat: no-repeat;
    margin-left: 100px;
    margin-top: 100px;
}
.logReg{
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-right: 150px;
    margin-top: 99px;
}
.login{
    font-size: 20px;
    color: red;
}
.register{
    font-size: 20px;
    color: #000;
    cursor: pointer;
}



 
</style>