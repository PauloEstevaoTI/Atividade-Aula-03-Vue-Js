<template>
  <article>
    <h1>{{ product.name }}</h1>

    <p>Preço: R$ {{ product.price?.toFixed(2).replace('.', ',') }}</p>
    <p>Categoria: {{ product.category.name }}</p>
  </article>

  <button @click="addToCart(product)">Adicionar ao carrinho</button>
  <button @click="removeFromCart(product)">Remover do carrinho</button>
  <button @click="deleteFromCart(product)">Excluir do carrinho</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Product } from '@/model/product.model'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },

  emits: ['add-to-cart', 'remove-from-cart', 'delete-from-cart'],

  methods: {
    addToCart(product: Product) {
      this.$emit('add-to-cart', product)
    },

    removeFromCart(product: Product) {
      this.$emit('remove-from-cart', product)
    },

    deleteFromCart(product: Product) {
      this.$emit('delete-from-cart', product)
    },
  },
})
</script>
