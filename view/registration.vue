<!-- registration page 
    todo: 
    1) improve the design
    2) password < 8 code need to fix, doesnt work now
    3) more dynamic (when user enter diff pw on last field , need to tell immediately, not after he press button)
    4) I think sth is missing need to chec with other registation pages on what is missing
    
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <script src="https://unpkg.com/vue@next"></script>
  <style>
    .divider:after,.divider:before {
        content: "";
        flex: 1;
        height: 1px;
        background: #eee;}
    .h-custom {
        height: calc(100% - 73px);}
    @media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
    }
    </style>
</head>

<body>
<div id= "app">
    <div class="alert alert-warning" v-if="show">{{error}}</div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

    <section class="vh-100">
        <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
            <!-- change image -->
            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
                alt="Sample image">
                
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>

                <!-- Email input -->
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Username</label>
                <input type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter a valid username" v-model="username" />
                
                </div>

                <!-- Password input -->
                <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Password</label>
                
                <div style = ' font-size: smaller;font-weight: bold;'> Password must be at least 8 characters </div>
                <input v-model="pwd1" type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" />
                
                </div>

                <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example4">Re-enter Password</label>
                    <input v-model="pwd2" type="password" id="form3Example4" class="form-control form-control-lg"
                        placeholder="Re-enter password" />
                    
                    </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                <button @click='validate' type="button" class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
               
                </div>

            </form>
            </div>
        </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <!-- Copyright DELETE?
        
        <div class="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
        </div>
        -->

        <!-- Right  DELETE?
        
        <div>
            <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
        Right -->
        </div>
        </section>
    </div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                users: [{ "user": "Jack", "pwd": "abc" }, { "user": "Mary", "pwd": "def" },
                { "user": "John", "pwd": "123" }, { "user": "Cherry", "pwd": "456" }
                ],
                pwd1:"",
                pwd2:"",
                username: "",
                show: false,
                error: ''
            };
        },
        methods:{
            validate(){
                error = '' 
                if (this.username.length == 0 || this.pwd2.length == 0 || this.pwd1.length == 0 ){
                    this.error = "You have missing fields!"
                    this.show = true
                } 
                else if (this.pwd1 != this.pwd2){
                    this.error = "Passwords do not match!"
                    this.show = true
                }

                else if (this.pwd1 < 8 ){
                    this.error = "Password must be at least 8 characters !"
                    this.show = true
                }

                else {
                    var usernameExist = 'no'
                  
                    for (auser of this.users){
                        if (auser.user == this.username) {
                            usernameExist = 'yes'

                            break
                        }
                    }

                    if (usernameExist == 'yes') {
                        this.error = "username already exists!"
                        this.show = true
                    }
                    else{ 
                        this.error = "congrats!"
                        this.show = true
                    }
                
                }
            }
        }
    });
    const vm = app.mount('#app');
    
</script>
</body>

