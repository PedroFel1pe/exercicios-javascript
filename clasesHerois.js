console.log("OLÁ, VAMOS AGORA FAZER SEU REGISTRO DE AVENTUREIRO E VER EM QUAL CLASSE VOCÊ SE ENCONTRA ENTRE MONGE, GUERREIRO ,MAGO E NINJA!!!")
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    escrever(){
        console.log(`ola ${this.nome}, atualmente você tem ${this.idade} anos  e esta na classe de ${this.tipo}`)

        if (this.tipo === "monge"){
            console.log(`${this.tipo} ataca utilizando artes marciais`);  
        }else if(this.tipo === "guerreiro"){
            console.log(`${this.tipo} ataca utilizando espada`);
        }else if(this.tipo === "ninja"){
            console.log(`${this.tipo} ataca utilizando shuriken`);
        }else{
            console.log(`${this.tipo} ataca utilizando magia`);
        }
    }
}
let clasificacao = new Heroi("pedro", "23", "guerreiro")
clasificacao.escrever()
