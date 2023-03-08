<template>
 
  <div class="max-w-xs  shadow-md dark:bg-gray-900 dark:text-gray-100">
		<img :src="`${product.image}`" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
		<div class="flex flex-col justify-between p-6 space-y-8">
			<div class="space-y-2">
				<p class="dark:text-gray-100">{{ product.title }}</p>

			</div>
      <NuxtLink :to="`/products/${product.id}`">
			<button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">View Details</button>
    </NuxtLink>
    </div>
	</div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>