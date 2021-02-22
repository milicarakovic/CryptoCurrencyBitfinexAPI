const url = 'wss://api-pub.bitfinex.com/ws/2';

export default function subscribe(symbol, handler, errorHandler) {
  const ws = new WebSocket(url);

  ws.onmessage = function (msg) {
    handler(msg, ws);
  };

  let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol,
  });

  ws.onopen = function () {
    ws.send(msg);
  };

  ws.onerror = function (err) {
    errorHandler(err, ws);
  };

  return ws;
}
