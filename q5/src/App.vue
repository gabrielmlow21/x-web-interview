<template>
  <div
    v-for="(item, index) in list"
    :key="index"
    :style="{ width: '100%', height: '500px', backgroundColor: item.background }"
  >
    {{ index }}
  </div>
  <div v-if="isLoading">Loading...</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const list = ref([])
const isFetching = ref(false) // to ensure getList only gets called ONCE in handleScroll

const getList = (num: number): Promise<{ background: string }[]> => {
  isFetching.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = Array.from({ length: num }, () => ({ background: 'rgb(233,32,38)' }))
      resolve(list)
      isFetching.value = false
    }, 5000)
  })
}

const handleScroll = () => {
  const scrolled = document.documentElement.scrollTop || document.body.scrollTop
  const threshold =
    (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 2
  if (scrolled > threshold && list.value.length <= 40 && !isFetching.value) {
    getList(10).then((el) => {
      list.value.push(...el)
      if (list.value.length >= 50) {
        window.removeEventListener('scroll', handleScroll)
      }
    })
  }
}

onMounted(() => {
  getList(10).then((el) => {
    list.value = el
    isLoading.value = false
  })
  window.addEventListener('scroll', handleScroll)
})
</script>
