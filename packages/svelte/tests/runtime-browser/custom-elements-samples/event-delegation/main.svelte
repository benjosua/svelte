<svelte:options customElement="test-delegation-element" />

<script>
	let clicks = $state(0);
</script>

<button onclick={() => clicks += 1}>clicked {clicks} times</button>
