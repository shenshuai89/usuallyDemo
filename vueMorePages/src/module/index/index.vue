<template>
	<div id="index">
		这是index页面<br>
		<hello-world></hello-world>
	</div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld'
export default{
	data(){
		return{

		}
	},
	mounted(){
		console.log("这是index页面")
	},
	methods:{

	},
	components: {
	    HelloWorld
	}
}
</script>

<style scoped>
	#index {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}
</style>


