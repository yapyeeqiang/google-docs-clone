<script setup lang="ts">
import { signInWithRedirect } from 'firebase/auth'
import { auth, getCurrentUser, provider } from '@/firebase'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import Loading from '../components/Loading.vue'

const loading = ref(false)
const router = useRouter()

const signIn = async () => {
    try {
        await signInWithRedirect(auth, provider)

        router.push({
            name: 'Documents',
        })
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    loading.value = true

    const user = await getCurrentUser()

    console.log(user)

    if (user) {
        router.push({
            name: 'Documents',
        })
    }

    loading.value = false
})
</script>

<template>
    <div v-if="loading">
        <Loading />
    </div>

    <div v-else class="absolute inset-0 flex flex-col space-y-10 justify-center items-center">
        <img class="w-32" src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png" alt="" />

        <button @click="signIn" class="flex items-center space-x-2 bg-blue-500 text-white px-10 py-2 text-sm rounded">Sign In with Google</button>
    </div>
</template>
