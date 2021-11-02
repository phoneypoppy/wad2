<template>
    <div class ="form-wrap">
        <form class = "register">
            <p class =  "login-register">
                Dont have account?
                <router-link class ="router-link" :to="{name: 'Register'}"> Register</router-link>
            </p>
            <h2>Login to GameBlog</h2>
            <div class="inputs">
                <div class="input">
                    <input type = "text" placeholder="FirstName" v-model="firstName">
                    <user class = "icon" />
                </div>
                <div class="input">
                    <input type = "text" placeholder="Last Name" v-model="lastName">
                    <user class = "icon" />
                </div>
                <div class="input">
                    <input type = "text" placeholder="Username" v-model="username">
                    <user class = "icon" />
                </div>
                <div class="input">
                    <input type = "text" placeholder="Email" v-model="email">
                    <email class = "icon" />
                </div>
    
                <div class="input">
                    <input type = "password" placeholder="Password" v-model="password">
                    <password class = "icon" />
                </div>
            </div>      
            <router-link class="forgot-password" :to="{name: 'ForgotPasword'}">Forgot pw</router-link>
            <button> Sigin </button> 
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"
import user from "../assets/Icons/user-alt-light.svg"
export default {
    name:"Register",
    components:{
        email,
        password,
        user,
    
    }

}
</script>

<style>

</style>