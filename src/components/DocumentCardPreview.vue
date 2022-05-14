<script setup lang="ts">
import { DotsVerticalIcon } from '@heroicons/vue/outline'

defineProps<{
    title: string
}>()
</script>

<template>
    <div class="border hover:border-blue-500 cursor-pointer rounded overflow-hidden divide-y">
        <div class="w-[190px] sm:w-[208px] h-[263px]">
            <img
                class="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/fife/AAWUweV3NKTt112zuSLea0SzoZaT5E389wIbAemQPP0bSVX5UAWBX9c0FmCTxlmYkoyjIXDklAFmMarLftPcV65Y0HOed8qHjgdFWoedsmNEeeJymt3habphOMKNda_Mxeq-8nFHvCQOYd1QXczxOxmz0ixJiXWqND2xTY_uHI8vIlYunj211ssY4a8QIsOjNqlPyyvoz-u8EjOrY2wfnc6gPnG4nEQ5Hi5RCIfZXd7i4fjUpD22R27laF5bbS0ILhEGSNUD2j-uPdtDhUMXE-i2bdHvZ6crTXXxD1xhVo7EmfzoGBQVhqzkdHpX8ukUkG5jmtu_Br4Nu3azgMSj4Xy-qL-hl4YM6Y5kT2_fHAaSLKmmM70ulmJ3PoRuq6lgLW7sOGwsZoiFHmIXyUf0dIk9gR_LCf4kRdH8TcWU2KGuTu1VODwPpeYLCj1dfo7vfYMHrBKVyjnzty9yK3yQxP2FLeTs7EhgRzKM9SNFKIwbCesmHKJBZ2k77Or8n6ZdPaQbfqSczZMnOVBHt3EHjw3HpffNxCPZZlxh_J3V9_KJRc_L7Hv2WXTcRaa0TXWyp3FrnwwiGDBSHpgskf93JQ4ksJCigGoG_-xr2lC3qE413e4Yr5QThl8BCkz8DaucSK1eTfyWAT0iuoRi6R8e5eDj405U5uvF4f_TY2bI9aSwEsoGY7TrcRSYYvN2lY_PYy19o_LnAFLBDafsQFaPaNYbEGhTKYj7xeoWSHPbFVoP5gcO36Q3nnvcw8yGYkAl3KITYVSNU5tWWlMmfVglZpCt7kJmNzsqmEwgD2r-9TPpayP7QlUYeXY5nNPg40QwN_HpmbL3lQdhvmGaM01PkspRYh_elmHRtGXRG6kR162WPSdc7OujpDZOCL4Y2_zUPEpS3p3PAxueXeynhVIRfyUDBq3Ydgv-ufKJXyp64Sa-Z9lJQBWd5hnkSL9bUPLvCtdQSCFdX9xSgLM7mqXQtUXe_AES6fhbsmSsTscUSCqxg-iavYYqSMSShnVs9UUv0cqw67fIz-TVzFjtsDJq0lueqNZ5It7GV5AVuXFrM-NDuQRQMlgc76tHAEIJjeZ9u5IblprX3gtGSEsSuVGk_uvc7SmSFYWBOJ9fnOFou3PEkJmZIUFSenqY5PwmTYEznRMDTFJ0mxY4lt-W9ME286vB4zlR0TT-wn0GxrrG62vQ4jyB3uFISqQ3Rh9U08L6vp7yHnyPPhTdVBmYgnqegrsRF57CioqxuQ9ux34Hq2BGaQIDC3tH8EEeVsCLUoXkHDX1E5camHcPe3Uc5f0uSUlU=w208"
                alt=""
            />
        </div>

        <div class="px-5 py-3 space-y-1">
            <h3 class="text-sm truncate">{{ title }}</h3>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <img class="w-4 h-4" src="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" alt="" />
                    <!-- <p class="text-xs text-gray-400">Opened {{ lastOpened }}</p> -->
                </div>

                <div class="-mr-2">
                    <DotsVerticalIcon class="h-5 w-5 text-gray-600" />
                </div>
            </div>
        </div>
    </div>
</template>
