<script setup lang="ts">
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import DocumentCardPreview from './DocumentCardPreview.vue'

interface DocumentPreview {
    id: string
    title: string
}

const documents = ref<DocumentPreview[]>([])

onMounted(async () => {
    const docsSnapshot = await getDocs(collection(db, 'docs'))

    docsSnapshot.forEach((doc) => {
        const data = doc.data()

        const item = {
            id: doc.id,
            title: data.title,
        }

        documents.value.push(item)
    })
})

const router = useRouter()

const openDocument = (documentID: string) => {
    router.push({
        name: 'Document',
        params: {
            id: documentID,
        },
    })
}
</script>

<template>
    <section id="documents">
        <div class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto pb-10">
            <div class="py-6">
                <p class="font-medium text-gray-700">Recent documents</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                <DocumentCardPreview @click="openDocument(document.id)" v-for="document in documents" :key="document.id" :title="document.title" />
            </div>
        </div>
    </section>
</template>
