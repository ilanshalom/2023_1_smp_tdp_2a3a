class livro{
contrutor (pNome){
    this.nome = pNome
}
get nome(){return this.nome}
set nome(pNome){this.nome = pNome}
}
var obj_livro1 = new livro ("use a cabeça java")
console.log("nome do livro"+ obj_livro1.nome)