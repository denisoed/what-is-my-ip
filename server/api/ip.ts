import requestIp from 'request-ip';
import maxmind, { CityResponse } from 'maxmind';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const ip = query?.ip || requestIp.getClientIp(event.node.req).replace(/^.*:/, '');
  const country = await maxmind.open<CityResponse>('db/GeoLite2-Country.mmdb');
  const city = await maxmind.open<CityResponse>('db/GeoLite2-City.mmdb');
  const asn = await maxmind.open<CityResponse>('db/GeoLite2-ASN.mmdb');
  const countryInfo = country.get(ip);
  const cityInfo = city.get(ip);
  const asnInfo = asn.get(ip);
  return { ip, ...(countryInfo || {}), ...(cityInfo || {}), ...(asnInfo || {}) };
});
