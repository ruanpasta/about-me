<script lang="ts">
	import { Gradient, Row } from '../common'
	import { classMap } from '$helpers/classMap'
	import { onMount } from 'svelte'

	export let link = false
	export let inactive = false
	export let onClick = () => {}

	let externalClass = ''
	export { externalClass as class }
</script>

<button
	type="button"
	class={classMap({
		[externalClass]: true,
		'about-me-button': true,
		'about-me-button--inactive': inactive
	})}
	{...$$restProps}
	on:click={onClick}
	on:keydown={() => {}}
>
	<Gradient
		class="about-me-button__container"
		show={!link}
		rounded={$$restProps.rounded}
		position={$$restProps.rounded ? 'all' : 'bottom'}
	>
		<div class={!inactive ? 'about-me-button__container__content' : null}>
			<Row justify="start">
				<slot name="leftIcon" />
				<slot />
			</Row>
		</div>
	</Gradient>
</button>

<style lang="scss" global>
	.about-me-button {
		&--inactive {
			@apply cursor-default;
		}

		&__container__content {
			@apply transition ease-in-out delay-150;
			@apply hover:scale-110 hover:font-bold;
			@apply duration-150;
		}
	}
</style>
