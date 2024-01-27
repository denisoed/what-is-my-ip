<template>
  <main>
    <Logo class="logo-position" />
    <h1>What is My <span class="text-gradient">IP</span></h1>
    <IpInfo
      class="user-info"
      :ip="info.ip"
      :country="info.country"
      :city="info.city"
      :loc="info.loc"
      :timezone="info.timezone"
      :org="info.org"
      :hostname="info.hostname"
    />
  </main>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const info = ref({});

    async function fetchInitData() {
      const { data } = await useFetch('/api/info');
      info.value = data?.value || {};
    }

    fetchInitData();

    return { info }
  },
});
</script>

<style lang="scss">
  main {
    margin: auto;
    padding: 4rem;
    width: 800px;
    max-width: calc(100% - 2rem);
    color: white;
    font-size: 20px;
    line-height: 1.6;
  }
  .logo-position {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translatex(-50%);
    width: 220px;
    height: auto;
    z-index: 1;
  }
  h1 {
    position: relative;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-bottom: 1em;
    z-index: 2;
    margin: 0;
  }
  .text-gradient {
    background-image: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-position: 0%;
  }
  .link-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
    gap: 2rem;
    padding: 0;
  }
  .user-info {
    z-index: 1;
    margin-top: 50px;
  }
</style>
