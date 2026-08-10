var e = require("../../../../../common/vendor.js"),
  t = "APPETFPAGE_BULLET_SHOW",
  i = {
    data: function () {
      return { visible: !1 };
    },
    created: function () {
      e.StockBridge.getStorage(t) || (this.visible = !0);
    },
    methods: {
      handleClose: function () {
        (this.visible = !1), e.StockBridge.setStorage(t, "1");
      },
      handleClick: function () {
        e.StockBridge.report("hq.etf.etf_bulletin_click"),
          setTimeout(function () {
            e.StockBridge.locationTo(
              "qqstock://hippy?info=%7B%22p_key%22%3A%22etfTeach%22%2C%22p_showNav%22%3Atrue%2C%22p_title%22%3A%22ETF%E5%AD%A6%E5%A0%82%22%7D"
            );
          }, 200);
      },
    },
  },
  o = e._export_sfc(i, [
    [
      "render",
      function (t, i, o, n, c, r) {
        return e.e(
          { a: c.visible },
          c.visible
            ? {
                b: e.o(function () {
                  return r.handleClose && r.handleClose.apply(r, arguments);
                }, 3541),
                c: e.o(function () {
                  return r.handleClick && r.handleClick.apply(r, arguments);
                }, 3542),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f078907f"],
  ]);
wx.createComponent(o);
