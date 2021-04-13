
//navbar
var nav = new Vue({
    el:'#nav',
    template: `
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <b-field>
                <img src="images/analytics.png" alt="Analytics" class="img-head">
                <b-input placeholder="Buscar funcionalidade.." 
                class="search"></b-input>
            </b-field>
        </nav>`
})


//menu aside
var menuapp = new Vue({
    el:'#menu',
    template: `<aside class="menu">
        
    <ul class="menu-list">
      <li><a><i class="fas fa-home"></i> Dashboard</a></li>
      <li><a><i class="fas fa-users"></i> Grupos</a></li>
      <li><a href="users.html"><i class="fas fa-user"></i> Usuários</a></li>
      <li><a><i class="fas fa-atom"></i> Sistemas</a></li>
      <li><a><i class="fas fa-sitemap"></i> Categoria</a></li>
    </ul>
</aside>`
})

//container com form de cadastro
var app = new Vue({

    el:'#app',
    template: `<div class="container">
                <section class="hero">
                    <div class="hero-body">
                    <p class="title">
                        Cadastrar novo usuário
                    </p>
                    <b-field>  
                        <b-button class="btnsalva" @click="salvar">Salvar</b-button>
                    </b-field> 
                    </div>
                </section>
                    
                    <b-field label="Nome" class="name">
                        <b-input type="text" placeholder="Seu nome" v-model="name"></b-input>
                    </b-field>

                    <b-field label="Email" class="email">
                        <b-input type="email" placeholder="email@exemplo.com" maxlength="30" v-model="email">
                        </b-input>
                    </b-field>
            
                    <b-field label="Password" class="pass">
                        <b-input type="password" placeholder="sua senha" maxlength="30" v-model="pass"></b-input>
                    </b-field>
                    
                    <b-field label="Password" class="pass">
                        <b-input type="password" placeholder="sua senha" maxlength="30" v-model="repeatPass"></b-input>
                    </b-field>

                    <b-field label="seu CPF" class="cpf">
                        <b-input placeholder="Seu CPF"
                            type="number"
                            min="10"
                            max="20" v-model="cpf">
                        </b-input>
                    </b-field>

                    <b-field label="telefone" class="tel">
                        <b-input placeholder="(11) 91234-5678"
                            type="tel"
                            min="10"
                            max="12" v-model="tel">
                        </b-input>
                    </b-field>

                    <b-field label="Subject">
                        <b-select placeholder="Selecione um cagro">
                            <option value="1">Super-Admin</option>
                            <option value="2">Outro cargo</option>
                        </b-select>
                    </b-field>
            </div>`


})

var obj = new Vue({
    data:{
        users:[
            {
                name: '',
                email: '',
                pass: '',
                repeatPass: '',
                cpf: '',
                tel: '',
                cargo: 2  
            }
        ]
       
    }
})

//card que retorna os users cadastrados
var app2 = new Vue({
    el: '#app2',
    template: `<ul>
                <li v-for="x in users">
                </li>
            </ul>`
})

//botão de cadastrar novo
var cadnovo = new Vue({
    el:'#cadnovo',
    template: `<div class="container">
            <section class="hero">
                <div class="hero-body">
                <p class="title">
                    Usuários
                </p>
                <b-field>  
                    <b-button class="btnsalva"><a href="submit.html" class="salva">Novo usuário</a></b-button>
                </b-field> 
                </div>
        </section>`
})