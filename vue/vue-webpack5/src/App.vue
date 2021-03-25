<template>
  <div class="main-container">
    <div class="container">
        <h2>{{text}}</h2>
    </div>
    <hr/>
    <div class="image"></div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {},
  data() {
    return {
      text: "Hello Vue with WebPck 5"
    }
  },
  mounted() {
    
  },
  methods: {

  },
}
</script>

<style>
.small-container {
  max-width: 680px;
  margin: 0 auto;
}
</style>