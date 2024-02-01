<template>
  <Head>
    <Title>What is My IP? - Discover Your IP Address: Detailed Info on IP, City, Country, Location, and Time Zone</Title>
    <Meta name="description" content="Easily find out the IP address of your device, along with comprehensive details including your city, country, exact location, and time zone. A quick and user-friendly way to get all the information you need about your IP."/>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <Link rel="canonical" href="https://get-info-about.me" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
    <Meta name="keywords" content="IP Address Lookup, Find My IP, IP Location Finder, Check IP Address, What is My IP, IP Address Tracker, Geolocation IP, IP Address Details, Network IP Check, IP Country Locator, Discover IP Address, IP Address Query, My IP Information, IP Address Analysis, IP and Time Zone, Online IP Checker, IP Geolocation Tool, IP Address Identifier, My Internet IP, IP Address and City" /> 
  </Head>
  <NuxtPage />
</template>

<style lang="scss">
:root {
  --accent: 34, 49, 64;
  --accent-light: 89, 109, 130;
  --accent-dark: 49, 10, 101;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    rgb(var(--accent-light)) 30%,
    white 60%
  );
}

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Josefin Sans', sans-serif;
  min-height: 100vh;
  background: linear-gradient(45deg, #14222e, #2c3c5a);
  color: #eaeaea;
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