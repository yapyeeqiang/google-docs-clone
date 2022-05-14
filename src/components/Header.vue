<script setup lang="ts">
import { auth } from '@/firebase'
import { MenuIcon, SearchIcon, ViewGridIcon } from '@heroicons/vue/outline'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

defineProps<{
    photoURL: string | null
}>()

const router = useRouter()

const logOut = async () => {
    try {
        await signOut(auth)

        router.push({
            name: 'SignIn',
        })
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <header class="bg-white shadow-sm">
        <div class="flex justify-between items-center p-4 sm:px-6 md:px-8">
            <div class="lg:flex-[1] flex items-center space-x-2 sm:space-x-4">
                <MenuIcon class="h-5 w-5 text-gray-600" />
                <div class="flex items-center space-x-2">
                    <div class="hidden sm:block h-8 w-8">
                        <img class="h-full w-full" src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png" alt="" />
                    </div>
                    <h2 class="text-gray-500 text-xl">Docs</h2>
                </div>
            </div>

            <div class="hidden sm:block flex-[2] ml-16 mr-8">
                <div class="flex items-center space-x-4 border border-transparent bg-gray-100 rounded-lg px-3 py-2">
                    <SearchIcon class="h-5 w-5 text-gray-600" />
                    <input class="bg-transparent outline-none placeholder:text-gray-500 placeholder:text-sm" type="text" placeholder="Search" />
                </div>
            </div>

            <div class="lg:flex-[1] flex items-center justify-end space-x-4">
                <SearchIcon class="h-5 w-5 text-gray-600 sm:hidden" />
                <ViewGridIcon class="h-5 w-5 text-gray-600" />
                <div @click="logOut" class="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                    <img v-if="photoURL" class="h-full w-full object-cover" :src="photoURL" alt="Profile Image" />
                </div>
            </div>
        </div>
    </header>
</template>
