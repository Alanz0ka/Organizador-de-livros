const prompt = require("prompt-sync")();

console.log(" \nSeja bem-vindo ao seu organizador de livros, aqui você poderá: \n adicionar, modificar, excluir e pesquisar os seus livros. \n");

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
    const titulo = prompt("Digite o título do livro: ");
    const autor = prompt("Digite o autor do livro: ");
    const genero = prompt("Digite o gênero do livro: ");
    const anoPublicacao = prompt("Digite o ano de publicação do livro: ");
    const sinopse = prompt("Digite a sinopse do livro: ");

    const livro = new Livro(titulo, autor, genero, anoPublicacao, sinopse);
    this.livros.push(livro);
    console.log("Livro adicionado com sucesso!");
  }

  pesquisarLivros(termo) {
    const resultados = this.livros.filter((livro) =>
      livro.titulo.includes(termo) ||
      livro.autor.includes(termo) ||
      livro.genero.includes(termo)
    );
    return resultados;
  }

  removerLivro(titulo) {
    this.livros = this.livros.filter((livro) => livro.titulo !== titulo);
    console.log(`Livro "${titulo}" removido da coleção.`);
  }

  editarLivro(titulo) {
    const livroParaEditar = this.livros.find((livro) => livro.titulo === titulo);
    if (livroParaEditar) {
      console.log("Editando informações do livro:");
      const novoTitulo = prompt("Novo título (pressione Enter para manter o atual): ");
      const novoAutor = prompt("Novo autor (pressione Enter para manter o atual): ");
      const novoGenero = prompt("Novo gênero (pressione Enter para manter o atual): ");
      const novoAnoPublicacao = prompt("Novo ano de publicação (pressione Enter para manter o atual): ");
      const novaSinopse = prompt("Nova sinopse (pressione Enter para manter a atual): ");

      if (novoTitulo) {
        livroParaEditar.titulo = novoTitulo;
      }
      if (novoAutor) {
        livroParaEditar.autor = novoAutor;
      }
      if (novoGenero) {
        livroParaEditar.genero = novoGenero;
      }
      if (novoAnoPublicacao) {
        livroParaEditar.anoPublicacao = novoAnoPublicacao;
      }
      if (novaSinopse) {
        livroParaEditar.sinopse = novaSinopse;
      }

      console.log("Informações do livro atualizadas com sucesso.");
    } else {
      console.log(`Livro "${titulo}" não encontrado na coleção.`);
    }
  }
}

const organizador = new OrganizadorDeLivros();

// Criando interação

let seletor = true;
while (seletor === true) {
  const opcao = prompt(`Escolha uma opção:
    1. Adicionar Livro
    2. Pesquisar Livro
    3. Remover Livro
    4. Editar Livro
    5. Sair
    :`);

  switch (opcao) {
    case "1":
      organizador.adicionarLivro();
      break;
    case "2":
      const termoPesquisa = prompt("Digite o termo de pesquisa: ");
      const resultadosPesquisa = organizador.pesquisarLivros(termoPesquisa);
      console.log(`Resultados da pesquisa para "${termoPesquisa}": `);
      resultadosPesquisa.forEach((livro) => {
        console.log(livro.exibirDetalhes());
      });
      break;
    case "3":
      const livroRemover = prompt("Digite o título do livro a ser removido: ");
      organizador.removerLivro(livroRemover);
      break;
    case "4":
      const livroEditar = prompt("Digite o título do livro a ser editado: ");
      organizador.editarLivro(livroEditar);
      break;
    case "5":
      console.log("Encerrando o programa.");
      seletor = false;
      break;
    default:
      console.log("Opção inválida.");
  }
}