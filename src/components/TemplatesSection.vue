<script setup lang="ts">
import { db } from '@/firebase'
import { useRouter } from 'vue-router'
import { DotsVerticalIcon, SelectorIcon } from '@heroicons/vue/outline'
import { addDoc, collection } from 'firebase/firestore'
import TemplateCardPreview from './TemplateCardPreview.vue'

const templates = [
    {
        id: '1',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png',
        title: 'Blank',
    },
    {
        id: '2',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/1N22MokKKV3QXA3nlU_porvLxm06GbLFVfFP6TCNAogY_400_2.png',
        title: 'Resume',
        style: 'Swiss',
    },
    {
        id: '3',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png',
        title: 'Resume',
        style: 'Serif',
    },
    {
        id: '4',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/1hmFHxE9pkr0wBH6PTVqWmG58X0a3j-YW7mJFGdzRLJI_400_2.png',
        title: 'Business letter',
        style: 'Modern writer',
    },
    {
        id: '5',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/1DyJIHsdEfsQSpOP00XnjLKqkBmqYh5t34zfaKyi9ekQ_400_1.png',
        title: 'Software development proposal',
        style: 'by PandaDoc',
    },
    {
        id: '6',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/1XykI9TfWo4IoUqGLjQ-D8NIU4jZ1Ml9OI8-Euj5FrA0_400_3.png',
        title: 'Project proposal',
        style: 'Tropic',
    },
    {
        id: '7',
        image: 'https://ssl.gstatic.com/docs/templates/thumbnails/1ogrWWMsheGBcV6KkLiI4mrnBrKG9hnMz1eOdPREiyPI_400_3.png',
        title: 'Meeting notes',
        style: 'Tropic',
    },
]

const router = useRouter()

const createBlankTemplate = async () => {
    const docRef = await addDoc(collection(db, 'docs'), {
        title: 'Untitled document',
        content: '',
    })

    router.push({
        name: 'Document',
        params: {
            id: docRef.id,
        },
    })
}

const createNewTemplate = async (title: string) => {
    if (title === 'Blank') {
        await createBlankTemplate()
    }
}
</script>

<template>
    <section class="bg-gray-100" id="templates">
        <div class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-4">
            <div class="flex items-center justify-between">
                <p class="text-sm text-gray-700">Start a new document</p>
                <div class="flex items-center space-x-4 divide-x-2">
                    <button class="flex items-center space-x-2">
                        <p class="text-sm text-gray-600">Template gallery</p>
                        <SelectorIcon class="h-5 w-5 text-gray-600" aria-hidden="true" />
                    </button>
                    <div class="pl-4">
                        <DotsVerticalIcon class="h-5 w-5 text-gray-600" />
                    </div>
                </div>
            </div>

            <div class="py-4 flex space-x-4 overflow-auto">
                <TemplateCardPreview @create-new-template="createNewTemplate" v-for="template in templates" :key="template.id" :id="template.id" :image="template.image" :title="template.title" :style="template?.style" />
            </div>
        </div>
    </section>
</template>
