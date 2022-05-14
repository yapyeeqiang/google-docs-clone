<script setup lang="ts">
import DocumentHeader from '@/components/DocumentHeader.vue'
import DocumentEditor from '@/components/DocumentEditor.vue'
import { useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import Loading from '../components/Loading.vue'

const route = useRoute()
const documentID = route.params.id as string

const loading = ref(true)
const documentTitle = ref('')

const editor = useEditor({
    content: '',
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3],
            },
            orderedList: {
                HTMLAttributes: {
                    class: 'list-decimal',
                },
            },
            bulletList: {
                HTMLAttributes: {
                    class: 'list-disc',
                },
            },
        }),
        Underline,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
    ],

    async onDestroy() {
        await updateDoc(doc(db, 'docs', documentID), {
            title: documentTitle.value,
            content: editor.value?.getHTML(),
        })
    },
})

onMounted(async () => {
    if (!documentID) return

    const document = await getDoc(doc(db, 'docs', documentID))
    const docData = document.data()

    if (!docData) return

    documentTitle.value = docData.title
    editor.value?.commands.setContent(docData.content)

    loading.value = false
})
</script>

<template>
    <div v-if="loading">
        <Loading />
    </div>

    <DocumentHeader v-model:documentTitle="documentTitle" :editor="editor" />

    <main class="bg-gray-100">
        <div class="flex justify-center pt-4 pb-2">
            <DocumentEditor :editor="editor" />
        </div>
    </main>
</template>

<style>
.ProseMirror {
    background-color: white;
    width: 794px;
    min-height: 1123px;
    outline: none;
    padding: 100px;
}

.ProseMirror h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}

.ProseMirror h2 {
    font-size: 1.5rem;
    line-height: 2rem;
}

.ProseMirror h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
}
</style>
