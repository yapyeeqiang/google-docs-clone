<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'

defineProps(['editor'])
</script>

<template>
    <EditorContent :editor="editor" />
</template>
