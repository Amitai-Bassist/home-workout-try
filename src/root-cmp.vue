<template>
    <app-upper-header />
    <app-second-header/>
  <section >
    <router-view/>
  </section>
  <app-footer/>
</template>

<script>


import { store } from './store/store'
import appUpperHeader from './cmps/app-upper-header.vue'
import appFooter from './cmps/app-footer.vue'


export default {

  created() {
    console.log('Vue App created')
  },
  components: {
    appUpperHeader,
    appFooter,
  },
}
</script>