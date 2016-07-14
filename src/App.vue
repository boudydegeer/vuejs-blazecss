<template>
  <div id="app">
		<h3>Address</h3>
		<b-address title="The Simpsons">
			742 Evergreen Terrace,<br>
			Springfield,<br>
			80085,<br>
			USA<br>
		</b-address>

		<h3>Alerts</h3>
		<b-alert primary with-button :dismiss="false">
			This is my alert
		</b-alert>

		<h3>Buttons</h3>
		<b-button>My Button</b-button>

  </div>
</template>

<script>
    import BAddress from './components/Address'
    import BAlert from './components/Alert'
    import BButton from './components/Button'

    export default {
      components: {
        BAddress,
        BAlert,
        BButton
      }
    }
</script>
