<template>
  <header class="header-layout"> 
      
  </header>
  
</template>
<script>

import { eventBus } from '../services/event-bus.service'

export default {
  data(){
    return {
      
    }
  },
  created() {
    eventBus.on('go-to-details',this.changeToDetailsHeader)
    
  },
  methods:{
    
  },
  computed: {

  },
  components: {
    
  }
}
</script>