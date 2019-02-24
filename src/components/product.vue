<template>

    <div class="card my-5">
        <div class="card-body">
            <h4 class="card-title text-center">{{product.title}}</h4>
            <p class="card-text text-center text-muted display-4">{{product.price}}</p>
            <button :disabled="isInCart" @click="$emit('add-to-cart', product)" class="btn btn-info form-control">{{ isInCart? 'Added to cart': 'Add To Cart' }}</button>
        </div>
    </div>
    
</template>

<script>
export default {
   name: 'product',
   props: ['product','isInCart']
}
</script>

<style>

</style>
