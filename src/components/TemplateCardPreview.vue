<script setup lang="ts">
defineProps<{
    id: string
    image: string
    title: string
    style?: string
}>()

const emit = defineEmits<{
    (e: 'createNewTemplate', title: string): void
}>()
</script>

<template>
    <div class="min-h-[183px] min-w-[144px] space-y-2">
        <div @click.prevent="emit('createNewTemplate', title)" class="border hover:border-blue-400 rounded overflow-hidden cursor-pointer">
            <img class="h-full w-full object-cover" :src="image" alt="" />
        </div>

        <div class="h-8">
            <h3 class="text-sm font-medium truncate">{{ title ?? 'Blank' }}</h3>
            <p v-if="style" class="text-sm font-thin truncate">{{ style }}</p>
        </div>
    </div>
</template>
