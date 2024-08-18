# Projeto Rick and Morty 


## Introdução
O projeto Rick and Morty SPA é uma Single Page Application desenvolvida utilizando a API Rick and Morty para o consumo de dados.

## Autenticação
Foi criada uma tela simples de login, com o e-mail e senha necessários já inseridos no formulário para facilitar o acesso, além de existir um sistema de validação para ambos.

## Credenciais de Acesso
- **Email:** desafiorickandmorty@des.com
- **Senha:** 123

## Layout
O layout da aplicação possui a tela de personagens, localizações e episódios, possui também uma header com todas as telas previamente mencionadas e também a home, essa header é fixa em todas as páginas do programa para uma melhor navegação.

## Funcionalidades

## Listagem e Detalhes 
A aplicação possui uma página de listagem que exibe os personagens da série. Ao clicar em um dos itens da listagem, o usuário é direcionado para a página de detalhes, onde pode obter informações mais específicas sobre o personagem escolhido.

## Paginação 
Foi implementada uma funcionalidade de paginação para os elementos.

## Barra de Busca 
A barra de busca é uma funcionalidade global na aplicação, sendo exibida apenas nas páginas de listagem. Essa barra permite ao usuário filtrar a listagem ativa, proporcionando uma forma rápida de encontrar personagens específicos.

## Como Executar o Projeto 

## Pré-requisitos 
Ter o Angular CLI instalado em sua máquina. Caso ainda não tenha, instalá-lo globalmente utilizando o seguinte comando:

```
npm install -g @angular/cli
```

## Atualizar as Dependências
No diretório raiz do projeto, executar o seguinte comando para obter todas as dependências necessárias:

```
npm install
```

## Executar o Projeto
Com as dependências atualizadas, executar o aplicativo usando o seguinte comando:

```
ng serve
```

O aplicativo será compilado e estará disponível em http://localhost:4200/.
