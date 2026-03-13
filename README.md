# ecommerce

# 🚀 Atividade Prática: E-commerce com Vue.js & Options API

Olá, turma! 👋  
Hoje vamos dar o próximo passo: tirar nossa lógica de negócio do arquivo `.ts` e levá-la para o navegador! Vamos construir a interface do nosso e-commerce utilizando Vue.js e integrar as Models que criamos anteriormente.

## 📂 Etapa 1: Preparação das Models

Certifiquem-se de que suas classes e interfaces estão prontas e exportadas em arquivos separados (ex: `Product.ts`, `Cart.ts`).

### Product

Deve ter:

- `id`
- `name`
- `price`
- `category`

### Category

Deve ter:

- `id`
- `title`

### CartItem

Interface para unir:

- `Product`
- `quantity`

## 🖼️ Etapa 2: Componente de Produto (ProductCard.vue)

Crie um componente para exibir as informações de cada produto individualmente.

### Props

Use a propriedade `props` para receber um objeto do tipo `Product`.

### Template

Renderize o nome, o preço e a categoria de forma organizada.

### Evento

Adicione um botão **"Adicionar"** que, ao ser clicado, avise o componente pai sobre a ação.

## 🏗️ Etapa 3: Integração no Componente Pai (Options API)

No seu arquivo principal (ex: `App.vue`), utilize a estrutura de **Options API**.

### data()

- Crie uma lista de produtos (`products`) com dados fictícios.
- Inicialize uma lista para o carrinho (`cartItems: []`).

### methods

Crie o método:

addToCart(product)

Lógica:

- Verifique se o produto já está no carrinho.
- Se sim, aumente a quantidade.
- Se não, adicione o novo item ao array.

### v-for

No template, utilize a diretiva `v-for` para percorrer sua lista de produtos e renderizar um `ProductCard` para cada um.

## 🛒 Etapa 4: Resumo do Carrinho

Exiba na tela as informações dinâmicas do carrinho:

- **Total de itens:** Quantidade total de unidades selecionadas.
- **Preço Final:** A soma total do valor dos produtos no carrinho.

## 🔥 Seção Desafio: Para quem quer elevar o nível!

Terminou a entrega mínima? Tente estes desafios para aprimorar suas habilidades.

### Gestão de Itens

- Implemente a função de remover uma unidade de um item no carrinho.
- Adicione um botão para excluir o item (remover todas as unidades de uma vez).

### A Model Rica (Arquitetura Pro)

Em vez de fazer a lógica de adicionar/remover dentro do `methods` do Vue, utilize a sua classe `Cart.ts`.

- Instancie o carrinho no `data()`:

cart: new Cart()

- Faça com que o Vue apenas chame os métodos da classe:

this.cart.addItem(product)

Deixando o componente visual **"limpo" de regras de negócio**.

### Listagem Detalhada

Use outro `v-for` para mostrar uma pequena lista/tabela com os itens que já estão no carrinho, exibindo:

Nome x Quantidade

## ✅ Critérios para a Entrega Mínima

### Uso de Options API

Estrutura correta de:

- `data`
- `methods`
- `props`

### Tipagem

Código em **TypeScript**, sem o uso de `any`.

### Funcionalidade

O botão de **adicionar** deve atualizar os totais na tela corretamente.

### Componentização

O produto deve ser obrigatoriamente um componente separado.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
