# Digital-Clock-Nodejs-Demo

Nodejs 的学习 demo，使用 http 创建服务器根据请求的url从文件中读取数据并给客户端响应数据

## clock时钟的 web 服务器

1. 导入 `http` `fs` `path` 模块，创建服务器实例 server

```js
const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
```

2. 监听 web 服务器的 request 事件

一共有三个资源会被请求：

`/clock/index.html`

`/clock/index.css`

`/clock/index.js`

```js
server.on('request', (req, res)=>{
    
})
```

3. 获取请求的 `url` 地址，根据地址判断请求的资源，并拼接具体的资源存放路径

```js
const url = req.url;
let filePath = '';
if(url === '/'){	// 如果只有 /，需要具体到 index.html
    filePath = path.join(__dirname, '/clock/index.html');
}else{
    filePath = path.join(_dirname, '/clock', url)
}
```

4. 根据获取的文件路径读取对应的内容，并响应给客户端

```js
fs.readFile(filePath, 'utf8', (err, data)=>{
    if(err) return res.end('404 not found');
    res.end(data);
})
```

5. 启动服务器

```js
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1')
})
```

完成代码：

```js
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
```

