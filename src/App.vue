<script lang="ts">
import { Product } from './model/product.model'
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import { Category } from './model/category.model'

export default {
  data() {
    const category1 = new Category(1, 'Roupas')
    const category2 = new Category(2, 'Calçados')

    return {
      category1,
      category2,
      cart: new Cart(),
      products: [
        new Product(1, 'Camiseta Nike', 29.99, category1),
        new Product(2, 'Calça Jeans Adidas', 99.99, category1),
        new Product(3, 'Tênis Adidas', 199.99, category2),
      ],
    }
  },
  methods: {
    addToCart(product: Product) {
      this.cart.addItem(product, 1)
    },
    removeFromCart(product: Product) {
      this.cart.removeItem(product, 1)
    },
    deleteFromCart(product: Product) {
      this.cart.deleteItem(product)
    },
    getFinalPrice() {
      return this.cart.getTotalPrice().toFixed(2).replace('.', ',')
    },
  },
  components: {
    ProductCard,
  },
}
</script>

<template>
  <main>
    <div v-for="product in products" :key="product.id">
      <ProductCard
        :product="product"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
        @delete-from-cart="deleteFromCart"
      />
    </div>
  </main>
  <div>
    <h1>Carrinho</h1>
    <table v-if="cart.list.length > 0">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in cart.list" :key="item.product.id">
          <td>{{ item.product.name }}</td>
          <td>R$ {{ item.product.price.toFixed(2).replace('.', ',') }}</td>
          <td>{{ item.quantity }}</td>
          <td>R$ {{ (item.product.price * item.quantity).toFixed(2).replace('.', ',') }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3"><strong>Total</strong></td>
          <td>
            <strong>R$ {{ getFinalPrice() }}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center; /* centraliza o conteúdo */
}
</style>
