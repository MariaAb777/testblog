<template>
    <div class="w-full">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                User Create Form
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-6">
                <!-- BEGIN: Form Layout -->
                <div class="intro-y box p-5">
                    <div>
                        <label>Name</label>
                        <input type="text" class="input w-full border mt-2" :class="{'border-red-800':nameError}" placeholder="Input text" v-model="form.userName">
                    </div>
                    <div class="mt-3">
                        <label>Email</label>
                        <input type="text" class='input w-full border mt-2' :class="{'border-red-800':emailError}"  placeholder="Enter user email" v-model="form.email">
                    </div>
                    <div class="mt-3">
                        <label>Position</label>
                        <input type="text" class="input w-full border mt-2" :class="{'border-red-800':positionError}" placeholder="Enter user position" v-model="form.position">
                    </div>
                    <div class="mt-3">
                        <label>Progress</label>
                        <input type="number" class="input w-full border mt-2" :class="{'border-red-800':progressError}" placeholder="Enter user progress" v-model="form.progress">
                    </div>
                    <div class="text-right mt-5">
                        <button type="button" class="button w-24 border dark:border-dark-5 text-gray-700 dark:text-gray-300 mr-1" @click="cancel">Cancel</button>
                        <button type="button" class="button w-24 bg-theme-1 text-white" @click="save">Save</button>
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
    data(){
      return {
        form:{
          userName:'',
          email:'',
          position:'',
          progress:0
        },
        nameError: false,
        emailError:false,
        positionError:false,
        progressError:false,

      }
    },
    methods:{
      cancel(){
        this.form={
          userName:'',
            email:'',
            position:'',
            progress:0
        }
        this.$router.push({ name: 'Login' })
      },
      save(){
        let users = JSON.parse(window.localStorage.getItem('users'))
        localStorage.setItem('user', JSON.stringify(this.form))

      },
    }
  }
</script>

<style scoped>

</style>