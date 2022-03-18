const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();

server.on('request', (req, res)=>{
    const url = req.url;
    let filePath = '';
    if(url === '/'){	// 如果只有 /，需要具体到 index.html
        filePath = path.join(__dirname, '/clock/index.html');
    }else{
        filePath = path.join(_dirname, '/clock', url)
    }
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if(err) return res.end('404 not found');
        res.end(data);
    })
});

server.listen(8080, () => {
    console.log('server running at http://127.0.0.1')
})