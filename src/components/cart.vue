<template>
    <div class="container mt-5">
        <ul class="list-group" :key = "item.id" v-for="item in items">
            <li  class="list-group-item">
                {{item.title}} - {{item.price}}
                <button v-on:click="$emit('remove-from-cart', item)" class="btn btn-sm btn-danger float-right">Remove from cart</button>
            </li>
        </ul>
        <div class="card p-3 mt-5">
            <h1 class="text-center">$ {{cartValue}}</h1>
        </div>

        <button v-on:click="$emit('payment-done')" class="btn btn-info form-control mt-5">Make Payment</button>
    </div>
</template>


<script>
export default {
    name: 'cart',
    props: ['items'],
    computed:{
        cartValue(){
            let cartValue = this.items.map(i => i.price).reduce((sum, price) => sum += price, 0);
            return cartValue.toFixed(2);
        }
        
    }
}
</script>

