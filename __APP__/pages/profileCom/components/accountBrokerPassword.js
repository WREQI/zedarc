var n = require("../hooks/useMultiBrokerCardInfo.js"),
  e = require("../../../common/vendor.js"),
  r = {
    components: {
      ZhaoShang: function () {
        return "../../../components/zhaoshang/password.js";
      },
      HuaLin: function () {
        return "../../../components/hualin/password.js";
      },
    },
    props: { from: { type: String, default: "" } },
    setup: function () {
      var r = n.useMultiBrokerCard(),
        o = r.bindingList,
        a = r.isMaintain,
        t = e.computed(function () {
          return o.value.some(function (n) {
            return (
              n.code === e.BROKER_CODE.ZHAOSHANG && !a(n, e.BULLETIN_TYPE.TRADE)
            );
          });
        }),
        u = e.computed(function () {
          return o.value.some(function (n) {
            return (
              n.code === e.BROKER_CODE.HUALIN && !a(n, e.BULLETIN_TYPE.TRADE)
            );
          });
        }),
        c = e.inject("cardLoadManager");
      return {
        canZhangshangRender: e.computed(function () {
          return c.canRender(e.BROKER_CODE.ZHAOSHANG) && t.value;
        }),
        canHualinRender: e.computed(function () {
          return c.canRender(e.BROKER_CODE.HUALIN) && u.value;
        }),
      };
    },
  };
Array || (e.resolveComponent("zhao-shang") + e.resolveComponent("hua-lin"))();
var o = e._export_sfc(r, [
  [
    "render",
    function (n, r, o, a, t, u) {
      return e.e(
        { a: a.canZhangshangRender },
        a.canZhangshangRender ? { b: e.p({ from: o.from }) } : {},
        { c: a.canHualinRender },
        a.canHualinRender ? { d: e.p({ from: o.from }) } : {}
      );
    },
  ],
]);
wx.createComponent(o);
