<script setup lang="ts">
import { StarIcon, FolderAddIcon, CloudIcon, ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/vue/outline'
import { LockClosedIcon } from '@heroicons/vue/solid'
import type { Editor } from '@tiptap/vue-3'

const props = defineProps<{
    documentTitle: string
    editor: Editor | undefined
}>()

const emit = defineEmits<{
    (e: 'update:documentTitle', value: string): void
}>()

const selectDocumentTitle = (e: any) => {
    e.target.select()
}
const checkDocumentTitle = () => {
    if (props.documentTitle.length > 0) return

    emit('update:documentTitle', 'Untitled document')
}

const updateDocumentTitle = (e: Event) => {
    emit('update:documentTitle', (e.target as HTMLInputElement).value)
}
</script>

<template>
    <header class="bg-white divide-y">
        <div class="flex items-center space-x-4 px-5 py-3">
            <div @click="$router.push('/documents')" class="h-10 w-10 cursor-pointer">
                <img class="h-full w-full" src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png" alt="" />
            </div>

            <div class="flex-1 flex items-center justify-between">
                <div class="">
                    <div class="flex items-center">
                        <input :value="documentTitle" @input="updateDocumentTitle" :class="[documentTitle === 'Untitled document' && 'text-gray-500', 'px-2 focus:text-black']" @focusin="selectDocumentTitle" @focusout="checkDocumentTitle" />

                        <div class="flex-1 flex items-center space-x-3">
                            <StarIcon class="w-4 h-4 text-gray-600" />
                            <FolderAddIcon class="w-4 h-4 text-gray-600" />
                            <CloudIcon class="w-4 h-4 text-gray-600" />
                        </div>
                    </div>
                    <div class="space-x-1">
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">File</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">Edit</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">View</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">Insert</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">Format</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">Tools</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">Extensions</button>
                        <button class="text-sm px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">Help</button>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <button class="flex items-center space-x-2 bg-blue-500 px-3 py-2 rounded">
                        <LockClosedIcon class="w-4 h-4 text-white" />
                        <span class="text-white text-sm font-medium">Share</span>
                    </button>

                    <div class="w-8 h-8 rounded-full overflow-hidden">
                        <img class="h-full w-full object-cover" src="https://yeeqiang.me/avatar.jpeg" alt="Profile Image" />
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 py-2 flex items-center space-x-4 divide-x">
            <div class="flex items-center">
                <ArrowSmLeftIcon @click="editor?.commands.undo()" class="w-7 h-7 text-gray-600 cursor-pointer hover:bg-gray-100 rounded p-1" />
                <ArrowSmRightIcon @click="editor?.commands.redo()" class="w-7 h-7 text-gray-600 cursor-pointer hover:bg-gray-100 rounded p-1" />
            </div>

            <div class="pl-4 flex items-center space-x-1">
                <button @click="editor?.chain().focus().toggleBold().run()" :class="[editor?.isActive('bold') ? 'bg-blue-100' : 'hover:bg-gray-100', 'w-7 h-7  cursor-pointer rounded']">
                    <svg :class="[editor?.isActive('bold') && 'fill-blue-600', 'p-1.5']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
                    </svg>
                </button>
                <button @click="editor?.chain().focus().toggleItalic().run()" :class="[editor?.isActive('italic') ? 'bg-blue-100' : 'hover:bg-gray-100', 'w-7 h-7  cursor-pointer rounded']">
                    <svg :class="[editor?.isActive('italic') && 'fill-blue-600 ', 'p-1.5']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
                    </svg>
                </button>
                <button @click="editor?.commands.toggleUnderline()" :class="[editor?.isActive('underline') ? 'bg-blue-100' : 'hover:bg-gray-100', 'w-7 h-7  cursor-pointer rounded']">
                    <svg :class="[editor?.isActive('underline') && 'fill-blue-600 ', 'p-1.5']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>
