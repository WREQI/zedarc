var o = require("../../../common/vendor.js"),
  t = [
    {
      title: "腾讯自选股小程序隐私政策",
      url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=7",
    },
    {
      title: "腾讯自选股小程序第三方信息共享清单",
      url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=9",
    },
    {
      title: "腾讯自选股小程序儿童隐私保护声明",
      url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=8",
    },
    {
      title: "腾讯自选股小程序第三方SDK目录",
      url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=39",
    },
  ],
  l = {
    data: function () {
      return { allProtocolList: t };
    },
    onLoad: function () {
      o.StockBridge.store.subscribeProtocolStatus(this.updateAllProtocolList);
    },
    methods: {
      updateAllProtocolList: function () {
        this.allProtocolList = t;
      },
      goProtocol: function (t) {
        var l,
          r,
          e = t.target.dataset.from,
          a = getCurrentPages(),
          c = a[a.length - 1].route;
        if (((this.frompage = c), "about" !== e))
          return (
            (l = t.detail.val),
            (r = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(l)
            )),
            o.wx$1.navigateTo({ url: r }),
            !1
          );
        (l = t.target.dataset.url),
          (r = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(l)
          )),
          o.wx$1.navigateTo({ url: r }),
          o.Request.reportMTAData({ eventName: "ZXG.ABOUT.READ_PROTOCOL" });
      },
    },
  },
  r = o._export_sfc(l, [
    [
      "render",
      function (t, l, r, e, a, c) {
        return o.e(
          { a: a.allProtocolList.length > 0 },
          a.allProtocolList.length > 0
            ? {
                b: o.t(a.allProtocolList[0].title),
                c: a.allProtocolList[0].url,
                d: o.o(function () {
                  return c.goProtocol && c.goProtocol.apply(c, arguments);
                }, 649),
                e: o.t(a.allProtocolList[1].title),
                f: a.allProtocolList[1].url,
                g: o.o(function () {
                  return c.goProtocol && c.goProtocol.apply(c, arguments);
                }, 650),
                h: o.t(a.allProtocolList[2].title),
                i: a.allProtocolList[2].url,
                j: o.o(function () {
                  return c.goProtocol && c.goProtocol.apply(c, arguments);
                }, 651),
                k: t.index,
                l: o.t(a.allProtocolList[3].title),
                m: a.allProtocolList[3].url,
                n: o.o(function () {
                  return c.goProtocol && c.goProtocol.apply(c, arguments);
                }, 652),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-3c59fde5"],
  ]);
wx.createComponent(r);
