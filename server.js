// nodeのコアモジュールのhttpを使う
var http = require('http')
var server = http.createServer();
let port = 3000

server.on('request', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
        // リクエストされた処理により表示内容を分けてみる
    switch (req.url) {
        case '/about':
            msg = 'welcome about page';
            break;
        case '/company':
            msg = 'welcome my company page';
            break;
        default:
            msg = 'page not found';
            break;
    }
    res.write(msg);
    res.end();
});

// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(port);