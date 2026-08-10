var e = require("../../../common/vendor.js"),
  n = getApp().globalData,
  t = {
    data: function () {
      return { skin: "" };
    },
    mounted: function () {
      (this.skin = e.wx$1.getStorageSync("user/skin")),
        e.Request.reportMTAData({ eventName: "xcx_change_skin_pv" });
    },
    methods: {
      setSkin: function (t) {
        var i = this;
        (this.skin = t),
          e.wx$1.setStorageSync("user/skin", t),
          n.wx.request({
            url: "/cgi-bin/usersetting.fcgi",
            data: { front_skin: JSON.stringify({ xcx: this.skin || "black" }) },
            success: function () {
              n.setSkin(),
                e.Request.reportMTAData({
                  eventName: "xcx_change_skin_".concat(i.skin),
                });
            },
          });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var i = e._export_sfc(t, [
  [
    "render",
    function (n, t, i, s, r, o) {
      return {
        a: n.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.n("white" == r.skin ? "ticked" : ""),
        d: e.o(function (e) {
          return o.setSkin("white");
        }, 235),
        e: e.n("black" == r.skin ? "ticked" : ""),
        f: e.o(function (e) {
          return o.setSkin("black");
        }, 236),
      };
    },
  ],
]);
wx.createPage(i);
