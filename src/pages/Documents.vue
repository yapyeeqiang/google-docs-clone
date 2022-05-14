<script setup lang="ts">
import Header from '../components/Header.vue'
import TemplatesSection from '../components/TemplatesSection.vue'
import DocumentsSection from '../components/DocumentsSection.vue'
import { ref, watchEffect } from 'vue'
import { getCurrentUser } from '@/firebase'
import type { User } from 'firebase/auth'
import Loading from '../components/Loading.vue'

const loading = ref(true)

const userProfile = ref<string | null>('https://4xucy2kyby51ggkud2tadg3d-wpengine.netdna-ssl.com/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg')

watchEffect(async () => {
    const currentUser: User | null = await getCurrentUser()

    if (!currentUser) return

    userProfile.value = currentUser.photoURL
    loading.value = false
})
</script>

<template>
    <div v-if="loading">
        <Loading />
    </div>

    <Header :photoURL="userProfile" />

    <main>
        <TemplatesSection />

        <DocumentsSection />
    </main>
</template>
