<template>
    <div class="content">
        <h2 class="intro-y text-lg font-medium mt-10">
            Users Layout
        </h2>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
                <button class="button text-white bg-theme-1 shadow-md mr-2" @click="goto('user-create')">Add New User</button>
                <div class="dropdown">
                    <button class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300">
                        <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4"
                                                                                   data-feather="plus"></i> </span>
                    </button>
                    <div class="dropdown-box w-40">
                        <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                               href="">
                                <i class="w-4 h-4 mr-2" data-feather="users"></i> Add Group </a>
                            <a class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                               href="">
                                <i class="w-4 h-4 mr-2" data-feather="message-circle"></i> Send Message </a>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block mx-auto text-gray-600">Showing 1 to 10 of 150 entries</div>
                <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <div class="w-56 relative text-gray-700 dark:text-gray-300">
                        <input class="input w-56 box pr-10 placeholder-theme-13" placeholder="Search..." type="text">
                        <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-feather="search"></i>
                    </div>
                </div>
            </div>
            <user v-for="(user,index) in getUsers" :key="index" :user="user" @removeUser="removeUser"></user>
        </div>
    </div>
</template>

<script>
    import user from "../../../components/dashboard/User"
  export default {
    name: 'Users',
    components:{user},
    data(){
      return {
        users:[]
      }
    },
    computed:{
      getUsers(){
        return this.users
      }
    },
    methods:{
      removeUser(user){
        this.users = this.users.filter(item=>{
            return item.id !== user.id
        })
        window.localStorage.setItem('users', JSON.stringify(this.users))

      },
      goto(path){
        this.$router.push(path);
      }
    },
    created () {
      this.users = JSON.parse(window.localStorage.getItem('users'))
    }
  }
</script>

<style scoped>

</style>