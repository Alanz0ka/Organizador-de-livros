const prompt = require("prompt-sync")();

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

class LivroFiccao extends Livro {
  constructor(titulo, autor, genero, anoPublicacao, sinopse, personagensPrincipais, mundoFicticio) {
    super(titulo, autor, genero, anoPublicacao, sinopse);
    this.personagensPrincipais = personagensPrincipais;
    this.mundoFicticio = mundoFicticio;
  }

  exibirDetalhes() {
    const detalhesLivroBase = super.exibirDetalhes();
    return `
    ${detalhesLivroBase}
    Personagens Principais: ${this.personagensPrincipais}
    Mundo Fictício: ${this.mundoFicticio}`;
  }
}

class LivroNaoFiccao extends Livro {
  constructor(titulo, autor, genero, anoPublicacao, sinopse, topico, fontesPesquisa) {
    super(titulo, autor, genero, anoPublicacao, sinopse);
    this.topico = topico;
    this.fontesPesquisa = fontesPesquisa;
  }

  exibirDetalhes() {
    const detalhesLivroBase = super.exibirDetalhes();
    return `
    ${detalhesLivroBase}
    Tópico: ${this.topico}
    Fontes de Pesquisa: ${this.fontesPesquisa}`;
  }
}

class LivroHQ extends Livro {
  constructor(titulo, autor, genero, anoPublicacao, sinopse, ilustrador, numPaginasQuadrinhos) {
    super(titulo, autor, genero, anoPublicacao, sinopse);
    this.ilustrador = ilustrador;
    this.numPaginasQuadrinhos = numPaginasQuadrinhos;
  }

  exibirDetalhes() {
    const detalhesLivroBase = super.exibirDetalhes();
    return `
    ${detalhesLivroBase}
    Ilustrador: ${this.ilustrador}
    Número de Páginas de Quadrinhos: ${this.numPaginasQuadrinhos}`;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro() {
    const titulo = prompt("Digite o título do livro: ");
    const autor = prompt("Digite o autor do livro: ");
    const genero = prompt("Digite o gênero do livro: ");
    const anoPublicacao = prompt("Digite o ano de publicação do livro: ");
    const sinopse = prompt("Digite a sinopse do livro: ");

    if (titulo.trim() === "" || autor.trim() === "" || genero.trim() === "" || isNaN(anoPublicacao) || sinopse.trim() === "") {
      console.log("Informações inválidas. Preencha todos os campos corretamente.");
      return;
    }

    const livro = new Livro(titulo, autor, genero, parseInt(anoPublicacao), sinopse);
    this.livros.push(livro);
    console.log("Livro adicionado com sucesso!");
  }

  adicionarLivroFiccao() {
    const titulo = prompt("Digite o título do livro de ficção: ");
    const autor = prompt("Digite o autor do livro de ficção: ");
    const genero = prompt("Digite o gênero do livro de ficção: ");
    const anoPublicacao = prompt("Digite o ano de publicação do livro de ficção: ");
    const sinopse = prompt("Digite a sinopse do livro de ficção: ");
    const personagensPrincipais = prompt("Digite os personagens principais do livro de ficção: ");
    const mundoFicticio = prompt("Digite o mundo fictício do livro de ficção: ");

    if (titulo.trim() === "" || autor.trim() === "" || genero.trim() === "" || isNaN(anoPublicacao) || sinopse.trim() === "") {
      console.log("Informações inválidas. Preencha todos os campos corretamente.");
      return;
    }

    const livroFiccao = new LivroFiccao(titulo, autor, genero, parseInt(anoPublicacao), sinopse, personagensPrincipais, mundoFicticio);
    this.livros.push(livroFiccao);
    console.log("Livro de Ficção adicionado com sucesso!");
  }

  adicionarLivroNaoFiccao() {
    const titulo = prompt("Digite o título do livro de não ficção: ");
    const autor = prompt("Digite o autor do livro de não ficção: ");
    const genero = prompt("Digite o gênero do livro de não ficção: ");
    const anoPublicacao = prompt("Digite o ano de publicação do livro de não ficção: ");
    const sinopse = prompt("Digite a sinopse do livro de não ficção: ");
    const topico = prompt("Digite o tópico do livro de não ficção: ");
    const fontesPesquisa = prompt("Digite as fontes de pesquisa do livro de não ficção: ");

    if (titulo.trim() === "" || autor.trim() === "" || genero.trim() === "" || isNaN(anoPublicacao) || sinopse.trim() === "" || topico.trim() === "" || fontesPesquisa.trim() === "") {
      console.log("Informações inválidas. Preencha todos os campos corretamente.");
      return;
    }

    const livroNaoFiccao = new LivroNaoFiccao(titulo, autor, genero, parseInt(anoPublicacao), sinopse, topico, fontesPesquisa);
    this.livros.push(livroNaoFiccao);
    console.log("Livro de Não Ficção adicionado com sucesso!");
  }

  adicionarLivro() {
    while (true) {
        const titulo = prompt("Digite o título do livro: ");
        const autor = prompt("Digite o autor do livro: ");
        const genero = prompt("Digite o gênero do livro: ");
        const anoPublicacao = prompt("Digite o ano de publicação do livro: ");
        const sinopse = prompt("Digite a sinopse do livro: ");

        if (titulo.trim() === "" || autor.trim() === "" || genero.trim() === "" || isNaN(anoPublicacao) || sinopse.trim() === "") {
            console.log("Informações inválidas. Preencha todos os campos corretamente.");
        } else {
            const livro = new Livro(titulo, autor, genero, parseInt(anoPublicacao), sinopse);
            this.livros.push(livro);
            console.log("Livro adicionado com sucesso!");
            break;
        }
    }
}

pesquisarLivros() {
  const termo = prompt("Digite o termo de pesquisa: ");
  const resultados = this.livros.filter((livro) =>
      livro.titulo.includes(termo) ||
      livro.autor.includes(termo) ||
      livro.genero.includes(termo)
  );

  if (resultados.length === 0) {
      console.log("Nenhum livro correspondente encontrado.");
  } else {
      resultados.forEach((livro) => {
          console.log(livro.exibirDetalhes());
      });
  }
}

  visualizarLivros() {
    if (this.livros.length === 0) {
      console.log("A biblioteca está vazia.");
    } else {
      this.livros.forEach((livro) => {
        console.log(livro.exibirDetalhes());
      });
    }
  }

  editarLivro(titulo, novoTitulo, novoAutor, novoGenero, novoAnoPublicacao, novaSinopse) {
    const livroParaEditar = this.livros.find((livro) => livro.titulo === titulo);
    if (livroParaEditar) {
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

  removerLivro(titulo) {
    this.livros = this.livros.filter((livro) => livro.titulo !== titulo);
    console.log(`Livro "${titulo}" removido da coleção.`);
  }
}

const minhaBiblioteca = new Biblioteca();

let seletor = true;
while (seletor === true) {
  console.log(`
    Escolha uma opção:
    1. Adicionar Livro
    2. Adicionar Livro de Ficção
    3. Adicionar Livro de Não Ficção
    4. Adicionar História em Quadrinhos
    5. Pesquisar Livros
    6. Visualizar Todos os Livros
    7. Editar Livro
    8. Remover Livro
    9. Sair
  `);

  const opcao = prompt("Opção: ");

  switch (opcao) {
    case "1":
      minhaBiblioteca.adicionarLivro();
      break;
    case "2":
      minhaBiblioteca.adicionarLivroFiccao();
      break;
    case "3":
      minhaBiblioteca.adicionarLivroNaoFiccao();
      break;
    case "4":
      minhaBiblioteca.adicionarLivroHQ();
      break;
    case "5":
      minhaBiblioteca.pesquisarLivros();
      break;
    case "6":
      minhaBiblioteca.visualizarLivros();
      break;
    case "7":
      minhaBiblioteca.editarLivro();
      break;
    case "8":
      minhaBiblioteca.removerLivro();
      break;
    case "9":
      console.log("Encerrando o programa.");
      seletor = false;
      break;
    default:
      console.log("Opção inválida.");
  }
}