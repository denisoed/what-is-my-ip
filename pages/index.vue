<template>
  <main>
    <h1>What is My IP</h1>
    <IpInfo
      class="user-info"
      :ip="info.ip"
      :country="info.country"
      :city="info.city"
      :loc="info.loc"
      :timezone="info.timezone"
      :hostname="info.hostname"
    />
    <div class="links">
      <CardLink to="/check-speed" title="Internet Speed" body="Check internet speed" />
    </div>
  </main>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const info = ref({});
    
    async function fetchInitData() {
      try {
        const runtimeConfig = useRuntimeConfig();
        const response = await fetch(runtimeConfig.public.API_BASE_URL);
        const data = await response.json();
        info.value = {
          ip: data?.ip,
          city: data?.city?.names?.en,
          loc: [data?.location?.latitude || 42, data?.location?.longitude || 42],
          timezone: data?.location?.time_zone,
          country: data?.country?.iso_code,
          hostname: data?.autonomous_system_organization
        };  
      } catch {
        console.error('Server is not available');
      }
    }

    onBeforeMount(() => {
      fetchInitData();
    });

    return { info }
  },
});
</script>

<style lang="scss">
  main {
    margin: auto;
    padding: 4rem 55px;
    width: 800px;
    color: white;
    font-size: 20px;
    line-height: 1.6;
    overflow: hidden;

    @media (max-width: 992px) {
      max-width: 650px;
    }

    @media (max-width: 768px) {
      max-width: 500px;
    }

    @media (max-width: 568px) {
      max-width: 100%;
      padding: 4rem 25px;
    }
    
    @media (max-width: 568px) {
      padding: 4rem 15px;
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
    color: #aaffff;

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
  .links {
    width: 100%;
    display: flex;
    gap: 16px;
    margin-top: 30px;
  }
</style>
