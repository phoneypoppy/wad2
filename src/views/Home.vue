<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for ="(post,index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
export default {
  name: "Home",
  components: { BlogPost },
  data(){
    return{
      welcomeScreen:{
        title: "Welcome!",
        blogPost: 
          "Weekly blog asfasd",
        welcomeScreen: true,
        photo: "Coding",
      },
      sampleBlogPost: [
        {
          title: "title1",
          blogHTML :"blogHTML1",
          blogCoverPhoto:"blogCoverPhoto1",
        },
        {
          title: "title2",
          blogHTML :"blogHTML2",
          blogCoverPhoto:"blogCoverPhoto2",
        },
      ],
    };
  },
};
</script>
