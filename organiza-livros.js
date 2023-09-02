const prompt = require("prompt-sync")();

console.log(" \nSeja bem-vindo ao seu organizador de livros, aqui você poderá: \n adicionar, modificar, excluir e pesquisar os seus livros. \n")

class Livro {
    constructor(titulo, autor, genero, anoPublicacao, sinopse) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.anoPublicacao = anoPublicacao;
      this.sinopse = sinopse;
    }
  
    exibirDetalhes() {
        return `
        Título: ${this.titulo}
        Autor: ${this.autor}
        Gênero: ${this.genero}
        Ano de Publicação: ${this.anoPublicacao}
        Sinopse: ${this.sinopse}`;
    }
  }
  
  class OrganizadorDeLivros {
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro() {
      const titulo = prompt("Digite o título do livro:");
      const autor = prompt("Digite o autor do livro:");
      const genero = prompt("Digite o gênero do livro:");
      const anoPublicacao = prompt("Digite o ano de publicação do livro: ");
      const sinopse = prompt("Digite a sinopse do livro: ");
  
      const livro = new Livro(titulo, autor, genero, anoPublicacao, sinopse);
      this.livros.push(livro);
      console.log("Livro adicionado com sucesso!");
    }
  
    pesquisarLivros(termo) {
      const resultados = this.livros.filter(livro =>
        livro.titulo.includes(termo) ||
        livro.autor.includes(termo) ||
        livro.genero.includes(termo)
      );
      return resultados;
    }
  
    removerLivro(titulo) {
      this.livros = this.livros.filter(livro => livro.titulo !== titulo);
      console.log(`Livro "${titulo}" removido da coleção.`);
    }
  }
  
  // Criando um novo objeto
  const organizador = new OrganizadorDeLivros();
  
  //Criando interação
  while (true) {
    const opcao = prompt(`Escolha uma opção:
    1. Adicionar Livro
    2. Pesquisar Livro
    3. Remover Livro
    4. Sair
    :`);
  
    switch (opcao) {
      case "1":
        organizador.adicionarLivro();
        break;
      case "2":
        const termoPesquisa = prompt("Digite o termo de pesquisa: ");
        const resultadosPesquisa = organizador.pesquisarLivros(termoPesquisa);
        console.log(`Resultados da pesquisa para "${termoPesquisa}": `);
        resultadosPesquisa.forEach(livro => {
          console.log(livro.exibirDetalhes());
        });
        break;
      case "3":
        const livroRemover = prompt("Digite o título do livro a ser removido: ");
        organizador.removerLivro(livroRemover);
        break;
      case "4":
        console.log("Encerrando o programa.");
        return;
      default:
        console.log("Opção inválida.");
    }
  }
  