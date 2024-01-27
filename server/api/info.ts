export default defineEventHandler(async () => {
  const responseIp = await fetch('https://api.ipify.org/?format=json');
  const { ip } = await responseIp.json();
  const response = await fetch(`https://ipinfo.io/${ip}/json`);
  return await response.json();
});
