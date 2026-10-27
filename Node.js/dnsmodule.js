const dns = require('dns');  
dns.lookup('www.google.com', (err, addresses, family) => {  
console.log('addresses:', addresses);   //ip address
console.log('family:',family);  //family i.e. IPv4 or IPv6
});