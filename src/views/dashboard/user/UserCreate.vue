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
                        <input type="text" class="input w-full border mt-2" placeholder="Input text">
                    </div>
                    <div class="mt-3">
                        <label>Email</label>
                        <input type="text" class="input w-full border mt-2" placeholder="Enter user email">
                    </div>
                    <div class="mt-3">
                        <label>Position</label>
                        <input type="text" class="input w-full border mt-2" placeholder="Enter user position">
                    </div>
                    <div class="mt-3">
                        <label>Progress</label>
                        <input type="number" class="input w-full border mt-2" placeholder="Enter user progress">
                    </div>
                    <div class="text-right mt-5">
                        <button type="button" class="button w-24 border dark:border-dark-5 text-gray-700 dark:text-gray-300 mr-1">Cancel</button>
                        <button type="button" class="button w-24 bg-theme-1 text-white">Save</button>
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
  }
</script>

<style scoped>

</style>