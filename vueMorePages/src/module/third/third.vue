<template>
	<div id="third">
		这是third页面<br>
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
		console.log("这是third页面")
	},
	methods:{

	},
	components: {
	    HelloWorld
	}
}
</script>

<style scoped>
	#third {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}
</style>


