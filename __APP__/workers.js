define(
  "static/workers/request/index.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var a = null,
      e = 0;
    function t() {
      e <= 0 ||
        (clearInterval(a),
        (a = null),
        (a = setInterval(function () {
          worker.postMessage({ type: "ask", timestamp: Date.now() });
        }, e)));
    }
    worker.onMessage(function (n) {
      n.data && n.data.ask_interval > 0 && ((e = n.data.ask_interval), t()),
        "hide" === n.type && (clearInterval(a), (a = null)),
        "show" === n.type && t();
    });
  }
);
