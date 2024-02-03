<template>
  <Head>
    <Title>Get Info About Me - Discover Your IP Address, Check Internet Speed and More</Title>
    <Meta name="description" content="Get detailed information about your device, including your city, country, exact location, and time zone. Check the speed of your internet connection using this free tool."/>
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <Link rel="canonical" href="https://get-info-about.me" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#14222e" />
    <Meta name="keywords" content="ip, city, country, location, time zone, internet speed" /> 
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

@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Anonymous Pro", monospace;
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