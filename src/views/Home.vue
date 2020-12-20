<template>
 <div>
   <MobileMenu></MobileMenu>
   <div class="flex">
     <side-nav></side-nav>
     <div class="content">
      <top-bar></top-bar>
    <router-view></router-view>
     </div>

   </div>
 </div>
</template>

<script>
// @ is an alias to /src

import MobileMenu from '../components/dashboard/MobileMenu'
import SideNav from '../components/dashboard/SideNav'
import TopBar from '../components/dashboard/TopBar'
export default {
  name: 'Home',
  components: { TopBar, SideNav, MobileMenu },
}
</script>
<style lang="scss">
</style>
