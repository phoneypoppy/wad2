<!-- login page, to do : 
    1) forgot pw button to link to relevant page
    2) change user to email (minor)
    3) remember me 
    4) register button to link to register page
    5) facebook/twitter/google login (but its out of scope marks, no
    time dont do) -->
<!-- sdfsdfdsfdsf --> 
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
        
        </div>
    
        <script>
            const app = Vue.createApp({
                data() {
                    return {
                        users: [{ "user": "Jack", "pwd": "abc" }, { "user": "Mary", "pwd": "def" },
                        { "user": "John", "pwd": "123" }, { "user": "Cherry", "pwd": "456" }
                        ],
                        pwd1:"",
                        user: "",
                        show: false,
                        error: ''
                    };
                },
                methods:{
                    validate(){
                        error = '' 
                        if (this.user.length == 0 || this.pwd1.length == 0 ){
                            this.error = "Username and pw cannot be empty"
                            this.show = true
                        } 
        
                        else {
                            var exist = 'no'
                        
                            for (auser of this.users){
                                if (auser.user == this.user) {
                                    exist = 'yes'
                                    pw = auser.pwd
                                    break
                                }
                            }
        
                            if (exist == 'no') {
                                this.error = "username does not exist!"
                                this.show = true
                            }
                            else{ 
                                if (pw != this.pwd1){
                                    this.error = "wrong pw!"
                                    this.show = true
                                }
                                else{
                                    this.error = "congrats!"
                                    this.show = true
        
                                }
                            }
        
                        }
                    }
                }
            });
            const vm = app.mount('#app');
        </script>
    </body>
    
    