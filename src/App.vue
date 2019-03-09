<template>
  
  <div class="m-5">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-4" :key = "product.id" v-for="product in products">
            <product :isInCart="isInCart(product)" v-on:add-to-cart="addToCart($event)" :product="product"></product>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <cart v-on:remove-from-cart="removeFromCart($event)" v-on:payment-done="paymentDone()" :items="cartProducts"></cart>
      </div>
    </div>

    <router-view></router-view>
    
  </div>
    
</template>

<script>

import product from '@/components/product'
import products from '@/products.json'
import cart from '@/components/cart'

export default {
  name: 'App',
  components: {
     product,
     cart
  },
  data(){
    return {
      products,
      cartProducts : []
    }
  },
  methods:{
    addToCart(product){
      this.cartProducts.push(product); 
    },
    isInCart(product){
      let item = this.cartProducts.find(item => item.id === product.id);
      if(item){
        return true;
      }
      return false;
    },
    removeFromCart(item){
      this.cartProducts = this.cartProducts.filter(i => i.id !== item.id); 
    },
    paymentDone(){
      this.cartProducts = [];
    }
  }
}
</script>

<style>
</style>
