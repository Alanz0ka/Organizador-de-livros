const prompt = require("prompt-sync")

console.log(" \nSeja bem-vindo ao seu organizador de livros, aqui você poderá: \n adicionar, modificar, excluir e pesquisar os seus livros. \n")

class Livro{
    constructor(titulo, autor, genero, anoPublicacao, sinopse){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anoPublicacao = anoPublicacao;
        this.sinopse = sinopse;


    }

}