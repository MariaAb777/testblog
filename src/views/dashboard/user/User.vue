<template>
    <div class="content">
        <!-- BEGIN: Top Bar -->
        <!-- END: Top Bar -->
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Profile Layout
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6">
            <!-- BEGIN: Profile Menu -->
            <div class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                <div class="intro-y box mt-5">
                    <div class="relative flex items-center p-5">
                        <div class="w-12 h-12 image-fit">
                            <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" :src="user.avatar">
                        </div>
                        <div class="ml-4 mr-auto">
                            <div class="font-medium text-base">{{user.userName}}</div>
                            <div class="text-gray-600">{{user.email}}</div>
                        </div>
                    </div>
                    <div class="p-5 border-t border-gray-200 dark:border-dark-5">
                        <a class="flex items-center text-theme-1 dark:text-theme-10 font-medium" href=""> <i data-feather="activity" class="w-4 h-4 mr-2"></i> Personal Information </a>
                        <a class="flex items-center mt-5" href=""> <i data-feather="box" class="w-4 h-4 mr-2"></i> Name: {{user.userName}} </a>
                        <a class="flex items-center mt-5" href=""> <i data-feather="lock" class="w-4 h-4 mr-2"></i> Position:  {{user.position}} </a>
                        <a class="flex items-center mt-5" href=""> <i data-feather="settings" class="w-4 h-4 mr-2"></i> Progress:  {{user.progress}}  </a>
                    </div>

                    <div class="p-5 border-t flex">
                        <button type="button" class="button button--sm block bg-theme-1 text-white" @click="edit">Edit</button>
                        <button type="button" class="button button--sm border text-gray-700 dark:border-dark-5 dark:text-gray-300 ml-auto" @click="cancel">Cancel</button>
                    </div>
                </div>

            </div>
            <!-- END: Profile Menu -->

        </div>
    </div>
</template>

<script>
  export default {
    name: 'User',
    data(){
      return {
        user:null
      }
    },
    methods:{
      getUserFromLocalStorage(){
        let users  = JSON.parse(window.localStorage.getItem('users'))
        this.user = users.filter((item)=> {
          return item.id === this.$route.params.id
        })[0]
        console.log(this.user)
      },
      edit(){
        this.$router.push({name:'UserEdit',params:{ id:this.user.id}})
      },
      cancel(){
        this.$router.push('/users');

      }
    },
    created () {
        this.getUserFromLocalStorage()
    }
  }
</script>

<style scoped>

</style>