# Organizador de Livros - Documentação

Este programa permite aos usuários organizar sua coleção de livros de forma eficiente.

## Notas de Versão

### Versão 1.1.0 (2023-11-02)

- Adicionado suporte para edição de informações de livros.
- Corrigido erro na função de pesquisa de livros.
- Melhorias gerais de desempenho.

## Funcionalidades Principais

1. **Adicionar Livros**: Os usuários podem inserir informações sobre novos livros, incluindo título, autor, gênero, ano de publicação e uma breve sinopse.

2. **Pesquisar Livros**: Os usuários podem pesquisar livros por título, autor ou gênero, obtendo uma lista de resultados correspondentes.

3. **Visualizar Detalhes**: Ao selecionar um livro na lista de resultados, os usuários podem ver os detalhes completos do livro, incluindo sua sinopse.

4. **Editar Informações**: Os usuários podem editar as informações dos livros já cadastrados, permitindo atualizações quando necessário.

5. **Remover Livros**: Possibilidade de remover livros da biblioteca, excluindo-os permanentemente.

## Novas Funcionalidades

6. **Adicionar Livro de História em Quadrinhos (HQ)**: Contribuinte: Beatriz Matos
   - **Descrição**: Esta funcionalidade permite aos usuários adicionar informações sobre livros de história em quadrinhos, incluindo título, autor, gênero, ano de publicação, sinopse, ilustrador e número de páginas de quadrinhos.
   - **Exemplo de Código**:
     ```javascript
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
     ```
     - **Explicação**: A classe `LivroHQ` é uma extensão da classe `Livro` e adiciona informações específicas para livros de história em quadrinhos, como ilustrador e número de páginas de quadrinhos.

7. **Adicionar Livro de Não Ficção**: Contribuinte: José Alan
   - **Descrição**: Os usuários podem agora adicionar livros de não ficção, informando título, autor, gênero, ano de publicação, sinopse, tópico e fontes de pesquisa.
   - **Exemplo de Código**:
     ```javascript
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
     ```
     - **Explicação**: A classe `LivroNaoFiccao` estende a classe `Livro` e inclui informações específicas para livros de não ficção, como tópico e fontes de pesquisa.

## Instruções de Uso

- Execute o programa em um ambiente que suporte JavaScript, como um ambiente Node.js.
- Siga as instruções apresentadas no console para interagir com o programa.
- Escolha as opções disponíveis para adicionar, pesquisar, editar ou remover livros da coleção.

## Exemplo de Uso

- Ao iniciar o programa, você terá a opção de adicionar, pesquisar, editar ou remover livros.
- Ao adicionar um livro, siga as instruções para inserir as informações do livro.
- Para pesquisar livros, insira um termo de pesquisa (título, autor ou gênero) e visualize os resultados.
- Se desejar, você pode editar ou remover livros existentes na coleção.

## Requisitos

- Ambiente que suporte JavaScript (Node.js) e instale a biblioteca `prompt-sync`.

## Contribuições

### Lucas Silva: Criação das classes

Lucas Silva é o criador das classes do programa e forneceu as bases para o desenvolvimento.

### José Alan: Criação dos objetos e funcionalidade de Adicionar Livro de Não Ficção

José Alan criou os objetos Adicionar Livro, Pesquisar Livros, Remover Livro e adicionou a funcionalidade de adicionar livros de não ficção.

### Alana de Gois Magalhães: Teste de funcionalidades

Alana testou o programa e resolveu vários erros, incluindo o problema do loop infinito ao tentar sair do programa.

### Beatriz Matos: Funcionalidade de Adicionar Livro de História em Quadrinhos (HQ)

Beatriz Matos desenvolveu a funcionalidade de adicionar livros de história em quadrinhos e forneceu exemplos de código e explicações.

## Ferramentas Utilizadas

- Visual Studio Code
- Live Share (Extensão de edição de código colaborativo onde várias pessoas conseguem editar o código ao mesmo tempo)
- ChatGpt (somente utilizado para retirar dúvidas)
- YouTube
- [Mozilla Developer](https://developer.mozilla.org/pt-BR/) (site da Mozilla onde se encontra diversos tutoriais)

**Aproveite seu Organizador de Livros!**
