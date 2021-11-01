<template>
<!-- edited Min 22.01, only done til 25.36 cause no img icon-->
<header>
  
    <nav class = "container">
        <div class = "branding">
            <router-link class ="header" :to="{name:'Home'}">FireBlogs</router-link>
        </div>
        <div class="nav-link">
            <ul>
                <router-link class ="link" to="#">Home </router-link>
                <router-link class ="link" to="#">Blog </router-link>
                <router-link class ="link" to="#">Create Post </router-link>
                <router-link class ="link" to="#">Login/Register </router-link>
            </ul>
        </div>
    </nav>
    <menuIcon/> 
    <transition name = "mobile-nav">
        <ul>
            <router-link class ="link" to="#">Home </router-link>
            <router-link class ="link" to="#">Blog </router-link>
            <router-link class ="link" to="#">Create Post </router-link>
            <router-link class ="link" to="#">Login/Register </router-link>
        </ul>
    </transition>

</header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
export default {
    name : 'navigation',
    components: {
        menuIcon
    }
};
</script>

<style lang="scss" scoped>

</style>