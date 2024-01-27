<template>
  <main>
    <Logo class="logo-position" />
    <h1>What is My <span class="text-gradient">IP</span></h1>
    <ClientOnly>
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
    </ClientOnly>
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
    padding: 4rem 15px;
    width: 800px;
    color: white;
    font-size: 20px;
    line-height: 1.6;
    overflow: hidden;

    @media (max-width: 768px) {
      max-width: 500px;
    }

    @media (max-width: 568px) {
      max-width: 100%;
    }
  }
  .logo-position {
    position: fixed;
    top: -15px;
    left: 50%;
    transform: translatex(-50%);
    width: 520px;
    height: auto;
    z-index: 1;
    opacity: 0.2;
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

    @media (max-width: 992px) {
      font-size: 3rem;
    }
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
