const http = require('http')

const server = http.createServer((req,res) =>{
let site  = req.url;
if(site ==='/home'){
    res.setHeader('Content-Type','text/html')
    res.write('<html> <head> <h1>Welcome to the Homepage</h1></head></html>')
    res.end();
}
if(site === '/about'){
    res.setHeader('Content-Type','text/html')
  res.write('<html> <head> <h1>Welcome to the About us page</h1></head></html>')
  res.end();
}
  
})

server.listen(3000)