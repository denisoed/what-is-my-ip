import { publicIpv4 } from 'public-ip';

export default defineEventHandler(async () => {
  const ip = await publicIpv4();
  const response = await fetch(`https://ipinfo.io/${ip}/json`);
  return await response.json();
});
