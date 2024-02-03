<template>
  <li class="link-card">
		<router-link :to="to">
			<h2>
				{{ title }}
				<span>&rarr;</span>
			</h2>
			<p>
				{{ body }}
			</p>
		</router-link>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardLink',
  props: {
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
	.link-card {
		width: 100%;
		list-style: none;
		display: flex;
		padding: 1px;
		background-image: none;
		background-size: 200%;
		border-radius: 24px;
		background-position: 100%;
		transition: background-position 2s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.link-card > a {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		padding: 20px 25px;
		border-radius: 24px;
		color: white;
		background: linear-gradient(45deg, transparent 50%, rgba(255, 255, 255, 0.08));
    background-color: #223140;
		opacity: 0.8;
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
		transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}
	p {
		margin-top: 0.5rem;
		margin-bottom: 0;
		font-size: 16px;
	}
	.link-card:is(:hover, :focus-within) {
		background-position: 0;
		background-image: var(--accent-gradient);
	}
	.link-card:is(:hover, :focus-within) h2 {
		color: rgb(var(--accent-light));
	}
</style>
