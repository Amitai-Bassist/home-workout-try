<template>
  <section class="container home text-center">
    <hero></hero>
    <featers></featers>
    <stay-productive></stay-productive>
    
    
  </section>

  
</template>

<script>
import hero from '../cmps/hero.vue';
import featers from '../cmps/featers.vue';
import stayProductive from '../cmps/stay-productive.vue';
export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  },
  components: {
    hero,
    featers,
    stayProductive
  }

  
}
</script>
