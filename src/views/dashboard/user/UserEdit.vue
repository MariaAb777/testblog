<template>
    <div class="w-full">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                User Create Form
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-6">
                <div class="intro-y box p-5">
                    <div>
                        <label>Name</label>
                        <input :class="{'border-red-800':nameError}" class="input w-full border mt-2"
                               placeholder="Input text"
                               type="text" v-model="user.userName">
                    </div>
                    <div class="mt-3">
                        <label>Email</label>
                        <input :class="{'border-red-800':emailError}" class='input w-full border mt-2'
                               placeholder="Enter user email"
                               type="text" v-model="user.email">
                    </div>
                    <div class="mt-3">
                        <label>Position</label>
                        <input :class="{'border-red-800':positionError}" class="input w-full border mt-2"
                               placeholder="Enter user position"
                               type="text" v-model="user.position">
                    </div>
                    <div class="mt-3">
                        <label>Progress</label>
                        <input :class="{'border-red-800':progressError}" class="input w-full border mt-2"
                               placeholder="Enter user progress"
                               type="number" v-model="user.progress">
                    </div>
                    <div class="text-right mt-5">
                        <button @click="cancel"
                                class="button w-24 border dark:border-dark-5 text-gray-700 dark:text-gray-300 mr-1"
                                type="button">Cancel
                        </button>
                        <button @click="update" class="button w-24 bg-theme-1 text-white" type="button">Update</button>
                    </div>
                </div>
                <!-- END: Form Layout -->
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'UserCreate',
    data () {
      return {
        user: {
          id:'',
          userName: '',
          email: '',
          position: '',
          progress: 0,
          avatar: '',
        },
        nameError: false,
        emailError: false,
        positionError: false,
        progressError: false,
        users:[]
      }
    },
    methods: {
      generateId () {
        return '_' + Math.random().toString(36).substr(2, 9)
      },
      cancel () {
        this.user = {
          userName: '',
          email: '',
          position: '',
          progress: 0,
        }
        this.$router.push({ name: 'Login' })
      },
      update () {
        let index = this.users.findIndex(item => item.id === this.user.id)
        this.users[index] = this.user
        console.log(this.users[index], index)
        // window.localStorage.setItem('users', JSON.stringify(this.users))
        // this.$router.push('/users')
      },
    },
    created () {
      let users = JSON.parse(window.localStorage.getItem('users'))
      this.user = users.find(item=>item.id === this.$route.params.id);

    },
  }
</script>

<style scoped>

</style>