const http = require('http'),
      server = http.createServer();

server.on('request',(request,response)=>{
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
      response.write(' Container Loadbalancing Done Here.');
      response.write(' Made By Jitesh Patil');
   response.end();
});

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});
