<template>
  <div class="">
    <span>hello {{name}} </span>
  </div>
</template>
<script>
// import axios from 'axios'
import {getTen} from './home.js'
export default {
  data () {
    return {
      name: 'hi'
    }
  },
  methods: {
  },
  mounted () {
    getTen().then(function (data) {
      console.log('success ', data.data, data.total)
    })
  }
}
</script>
