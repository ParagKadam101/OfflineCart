<template>
    <div class="container">
        <ul class="list-group my-5" :key = "item.id" v-for="item in items">
            <li  class="list-group-item">
                {{item.title}} - {{item.price}}
                <button v-on:click="$emit('remove-from-cart', item)" class="btn btn-sm btn-danger float-right">Remove from cart</button>
            </li>
            
        </ul>
    </div>
</template>


<script>
export default {
    name: 'cart',
    props: ['items']
}
</script>

