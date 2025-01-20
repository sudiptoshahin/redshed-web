<template>
    <section class="sidemenu">
        <div class="">
            <div class="">
                <img :src="icons.LogoSvg" class="logo-dash" />
                 <!-- <LogoSvg /> -->
            </div>
        </div>
        <!-- <img :src="icons.DeleteSvg" alt="Icon" /> -->
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import DeleteSvg from "../../../../images/icons/delete.svg";
import LogoSvg from "../../../../images/logo.svg";
// import anLogo from "./../../../../images/logo.svg";

export default defineComponent({
    name: 'SideMenu',
    setup() {
        const icons = {
            DeleteSvg,
            LogoSvg,
            // anLogo
        }

        return {
            icons,
        };
    },
});
</script>

<style scoped>
.sidemenu {
    width: 25%;
    height: 100vh;
    background-color: rgb(255, 180, 180);
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.34);
}
</style>