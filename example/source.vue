<template lang="pug">
div(ok)
  h1(:class="$style.red") hello
</template>

<script>
import requests from 'marengo-requests'
export default {
	marengo: {
		env: {},
		kext: {
			requests
		},
		body: {
			requests: {
				search: {
					base: 'https://www.instagram.com/web/search/topsearch/?context=blended&query=',
					acceptor: {
						purpose: res => res.data
					}
				}
			}
		}
	},
  data () {
    return {
      msg: 'fesfff'
    }
  },
  mounted() {
  	this.$requests('search').get('salah').purpose(console.log).fire()
  }
}
</script>

<style module>
.red {
  color: red;
}
</style>
