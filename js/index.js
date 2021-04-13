
//app está sendo carregada nosubmit
var app = new Vue({
    el: '#app',
    
   

      //minha função que puxa os dados para o  localStorage
      salvar() {
        if (localStorage.name) {
          this.name = localStorage.name;
        }
        if (localStorage.email){
            this.email = localStorage.email;
        }
        if (localStorage.pass){
            this.pass = localStorage.pass;
        }
        if (localStorage.repeatPass){
            this.repeatPass = localStorage.repeatPass;
        }
        if (localStorage.cpf){
            this.cpf = localStorage.cpf;
        }
        if (localStorage.tel){
            this.tel = localStorage.tel;
        }
        //aqui eu poderia comparar se as senhas não coincidem
        /*if(pass != repeatPass){
            console.log('as senhas não coincidem')
         }*/
      },
     methods: {
        //função de salvar
         salvar(){
             localStorage.name = this.name;
             localStorage.email = this.email;
             localStorage.pass = this.pass;
             localStorage.repeatPass = this.repeatPass;
             localStorage.cpf = this.cpf;
             localStorage.tel = this.tel;

         },
           data(){ 
                return {
                    //aqui declaro meus dados que vão para o localStorage
                    //coloco eles num obj
                    data: {
                        name: '',
                        email: '',
                        pass: '',
                        repeatPass: '',
                        cpf: '',
                        tel: ''
                    },
                    columns: [
                        {
                            field: 'first_name',
                            label: 'First Name',
                        },
                        {
                            field: 'email',
                            label: 'email',
                        },
                        {
                            field: 'cpf',
                            label: 'cpf',
                        
                        },
                        {
                            field: 'telefone',
                            label: 'telefone',
                        }
                    ]
                }
            } // aqui acaba a funçao retorna  
     
     
    }
     
})



  
