<template>
  <Head>
    <Title>What is My IP</Title>
    <Meta name="description" content="Check the IP address assigned to your device. Show my IP city, country, location, time zone and more"/>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
  </Head>
  <NuxtPage />
</template>

<style lang="scss">
:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
  --accent-dark: 49, 10, 101;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    rgb(var(--accent-light)) 30%,
    white 60%
  );
}

html, body {
  font-family: system-ui, sans-serif;
  background: #13151a;
  background-size: 224px;
}

::-webkit-scrollbar {
  width: 10px;
  padding: 2px;
  cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #424242;
  padding: 2px;
  cursor: pointer !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #808080;
  cursor: pointer !important;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  cursor: pointer !important;
}
</style>