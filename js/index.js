var app = new Vue({
    el: '#app',
    data: {
        name: ''
      },
      mounted() {
        if (localStorage.name) {
          this.name = localStorage.name;
        }
        if(localStorage.email){
            this.email = localStorage.email;
        }
        if(localStorage.pass){
            this.pass = localStorage.pass;
        }
        if(localStorage.repeatPass){
            this.repeatPass = localStorage.repeatPass;
        }
        if(pass != repeatPass){
            console.log('as senhas não coincidem')
         }
      },
     methods: {
         salvar(){
             localStorage.name = this.name;
             localStorage.email = this.email;
             localStorage.pass = this.pass;
             localStorage.repeatPass = this.repeatPass;
            
         }
     },
})

var app2 = new Vue({
    el: "#app2",
    
}) 
