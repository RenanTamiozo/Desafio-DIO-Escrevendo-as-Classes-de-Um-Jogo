class hero{
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
  ataque(){
    if (this.tipo === "mago"){
      return "magia"
    } else if (this.tipo === "guerreiro"){
      return "espada"
    } else if (this.tipo === "monge"){
      return "artes marciais"
    } else {
      return "shuriken"
    }
}
}

let euMago = new hero("Renan", 30, "mago")
let euGuerreiro = new hero("Renan", 30, "guerreiro")
let euMonge = new hero("Renan", 30, "monge")
let euNinja = new hero("Renan", 30, "ninja")

console.log(`o herói ${euMago.nome},de idade ${euMago.idade} e classe ${euMago.tipo} atacou usando ${euMago.ataque()}`)
console.log(`o herói ${euGuerreiro.nome},de idade ${euGuerreiro.idade} e classe ${euGuerreiro.tipo} atacou usando ${euGuerreiro.ataque()}`)
console.log(`o herói ${euMonge.nome},de idade ${euMonge.idade} e classe ${euMonge.tipo} atacou usando ${euMonge.ataque()}`)
console.log(`o herói ${euNinja.nome},de idade ${euNinja.idade} e classe ${euNinja.tipo} atacou usando ${euNinja.ataque()}`)