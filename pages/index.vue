<template>
  <main>
    <h1>What is My IP</h1>
    <div class="wrapper">
      <IpInfo
        class="user-info"
        :ip="data?.ip"
        :city="data?.city?.names?.en"
        :country="data?.country?.iso_code"
        :loc="[data?.location?.latitude || 42, data?.location?.longitude || 42]"
        :timezone="data?.location?.time_zone"
        :hostname="data?.autonomous_system_organization"
        @on-search="onSearch"
      />
      <div class="links">
        <CardLink to="/check-speed" title="Internet Speed" body="Check internet speed" />
      </div>
    </div>
    <a
      href="https://en.wikipedia.org/wiki/IP_address"
      aria-label="More information about IP address"
      class="more-info"
      target="_blank"
    >
      More information about IP address
    </a>
  </main>
</template>

<script setup>
const ip = ref(null);

const { data, execute } = useLazyFetch('/api/ip', {
  query: {
    ip
  }
});

async function onSearch(address) {
  ip.value = address;
  execute();
}

const jsonld = {
  "@context": "http://schema.org",
  "@type": "WebApplication",
  "name": "IP Address Lookup Tool",
  "url": "https://get-info-about.me/",
  "logo": "https://get-info-about.me/logo.png",
  "description": "Discover your device's IP address with our advanced IP lookup tool. Gain instant access to detailed information, including your city, country, precise location, and time zone, all in one place.",
  "applicationCategory": "Utilities",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "availability": "http://schema.org/InStock"
  },
  "browserRequirements": "Requires any modern web browser",
  "operatingSystem": "All",
  "softwareVersion": "1.0",
  "featureList": "IP Address Detection, Geolocation Information, Real-time Analysis",
  "screenshot": "https://get-info-about.me/screenshot.jpg",
  "accessibilityAPI": "ARIA"
}

useHead({
  title: `What's My IP? Discover Your IP Address, Location, and More`,
  meta: [
    {
      name: 'description',
      content: `Discover your device's IP address with our advanced IP lookup tool. Gain instant access to detailed information, including your city, country, precise location, and time zone, all in one place.`
    },
    {
      name: 'keywords',
      content: 'ip, city, country, location, time zone, what is my ip, my ip, my ip address, my ip info, my ip address info, my ip address info, my ip address info, my ip address info'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: jsonld
    }
  ]
});
</script>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 4rem 15px;
    color: white;
    font-size: 20px;
    line-height: 1.6;
    overflow: hidden;
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

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  .more-info {
    color: #fff;
    margin-top: 20px;
    font-size: 1rem;
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

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;

    @media (max-width: 992px) {
      max-width: 650px;
    }
  
    @media (max-width: 768px) {
      max-width: 500px;
    }
  
    @media (max-width: 568px) {
      max-width: 100%;
    }
  }
  .user-info {
    width: 100%;
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
