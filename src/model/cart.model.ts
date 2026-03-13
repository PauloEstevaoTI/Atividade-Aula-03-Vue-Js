import { Product } from './product.model'

interface CartItem {
  product: Product
  quantity: number
}

export class Cart {
  constructor(
    public list: CartItem[] = [],
    public total: number = 0,
  ) {}

  addItem(product: Product, quantity: number) {
    const existItem = this.list.some((item) => item.product.id === product.id)
    if (existItem) {
      this.list.map((item) => {
        if (item.product.id === product.id) {
          return {
            product: item.product,
            quantity: (item.quantity += quantity),
          }
        }
      })
      this.total += quantity
    } else {
      this.list.push({
        product: new Product(product.id, product.name, product.price, product.category),
        quantity,
      })
      this.total += quantity
    }
  }

  removeItem(product: Product, quantity: number) {
    const existItem = this.list.some((item) => item.product.id === product.id)
    if (existItem && this.total > 0) {
      this.list.map((item) => {
        if (item.product.id === product.id && item.quantity > 0) {
          this.total -= quantity
          return {
            product: item.product,
            quantity: (item.quantity -= quantity),
          }
        }
      })
    }
  }

  deleteItem(product: Product) {
    const existItem = this.list.some((item) => item.product.id === product.id)
    if (existItem) {
      this.total = this.total - this.list.find((item) => item.product.id === product.id)!.quantity
      this.list = this.list.filter((item) => item.product.id !== product.id)
    }
  }

  getTotalPrice() {
    const sum = this.list.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
    return sum
  }
}
