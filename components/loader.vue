<template>
<div v-if="overlay" style="position: absolute; height: 100vh; width: 100vw; z-index: 100;">
    <v-row justify="center">
        <v-sheet class="d-flex align-center justify-center" height="105vh" width="100vw" color="#E63B30">
                <v-progress-circular
                :size="70"
                :width="7"
                color="#fff"
                indeterminate
                ></v-progress-circular>
        </v-sheet>
    </v-row>
</div>
</template>

<script>
export default {
    data(){
        return{
            overlay: true
        }
    },
    mounted(){
        if (process.browser) {
            window.onNuxtReady((app) => {
                this.overlay = false
            })
        }
    }
}
</script>

<style>

</style>