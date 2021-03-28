<template>
    <section>
        <div style="padding: 10px" v-for="stat in stats">
            <input type="checkbox" :value="stat" v-model="filterStats">
            <label>{{stat}}</label>
        </div>
    </section>

</template>

<script>
module.exports = {
  props: ['stats', 'filterStats']
};
</script>

<style scoped>
</style>