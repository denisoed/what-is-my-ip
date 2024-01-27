function getIPFromRequest(request: any) {
  return (
    request.ip ||
    request.headers['fastly-client-ip'] ||
    request.headers['x-forwarded-for']?.split(',')[0].trim() ||
    request.connection.remoteAddress ||
    request.socket.remoteAddress ||
    ''
  );
}

export default defineEventHandler(async ({ node }) => {
  const responseIp = await fetch('https://api.ipify.org/?format=json');
  const { ip: devIp } = await responseIp.json();  
  const prodIp = getIPFromRequest(node.req);
  const ip = process.env.NODE_ENV === 'development' ? devIp : prodIp;
  const response = await fetch(`https://ipinfo.io/${ip}/json`);
  return await response.json();
});
