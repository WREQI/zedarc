require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var e = require("../../common/vendor.js"),
  i = require("../../model/common/useZxgSupport.js"),
  t = require("../../model/trade/useConditionEntry.js"),
  n = require("../../model/debt/useDebtAutoOrderEntry.js"),
  o = require("../../service/stat/mp-weixin.js"),
  r = require("../../service/aegis/platform/not-wujie.js");
require("../../service/broker.js");
var a = require("../user/useUserinfo.js"),
  c = require("../../config/broker/11100/index.js"),
  s = e.defineStore("position-drawer", function () {
    var s = ["204001", "131810"],
      u = e.ref(""),
      v = e.ref(""),
      x = i.useZxgSupport(),
      y = t.useConditionEntry().isConditionEntry,
      p = n.useDebtAutoOrderEntry().isDebtAutoOrderEntry,
      f = a.useUserinfoStore(),
      b = e.computed(function () {
        var e;
        return (
          "hkstock" === v.value &&
          "1" === (null == (e = f.userinfo) ? void 0 : e.cur_switch_control)
        );
      }),
      k = e.computed(function () {
        return ((v.value ? d[v.value] : []) || []).filter(function (e) {
          var i, t, n;
          if ("analysis" === e.id) {
            var o = Boolean(
              x && !c.brokerConfig.dictionary.Enties.analysis.hidden
            );
            return "xinke" === v.value || "jiaxinbao" === v.value
              ? o &&
                  (null ==
                  (t = null == (i = c.brokerConfig.trade) ? void 0 : i.index)
                    ? void 0
                    : t.isSupportLicaiAnalysis)
              : o;
          }
          if ("share" === e.id) return Boolean(c.brokerConfig.hall.canShare);
          if ("condition-order" === e.id && "stock" === v.value)
            return Boolean(y.value);
          if ("condition-order" === e.id && "debt" === v.value) {
            var r = null == (n = u.value.split("-")) ? void 0 : n[2];
            return Boolean(p.value && s.includes(r));
          }
          return "currency-setting" !== e.id || b.value;
        });
      });
    function h() {
      o.stat.click("trade.asset.drawer_close"), (v.value = ""), (u.value = "");
    }
    return {
      curType: v,
      curUniKey: u,
      tab: k,
      switchDrawer: function (e) {
        var i = e.type,
          t = e.target,
          n = l({ type: i, target: t });
        u.value === n
          ? h()
          : d[i]
          ? ((u.value = n), (v.value = i))
          : (h(),
            r.aegisReporter.reportEvent("POSITION-DRAWER-TYPE-NOT-FOUND", {
              ext2: JSON.stringify({
                type: i,
                name: (null == t ? void 0 : t.name) || "",
              }),
            }));
      },
      closeDrawer: h,
      curDrawerIsShow: function (e) {
        var i = e.type,
          t = e.target,
          n = void 0 === t ? {} : t;
        return i === v.value && u.value === l({ type: i, target: n });
      },
    };
  }),
  u = (function (e) {
    return (
      (e.STOCK = "stock"),
      (e.DEBT = "debt"),
      (e.XINKE = "xinke"),
      (e.JIAXINBAO = "jiaxinbao"),
      (e.HKSTOCK = "hkstock"),
      e
    );
  })(u || {}),
  d = {
    stock: [
      { id: "buy", text: "买入", icon: "icon-buy" },
      { id: "sell", text: "卖出", icon: "icon-sell" },
      { id: "analysis", text: "分析", icon: "icon-analysis" },
      { id: "condition-order", text: "条件单", icon: "icon-condition-order" },
      { id: "quote", text: "行情", icon: "icon-hq" },
      { id: "share", text: "分享", icon: "icon-share" },
    ],
    hkstock: [
      { id: "buy", text: "买入", icon: "icon-buy" },
      { id: "sell", text: "卖出", icon: "icon-sell" },
      { id: "quote", text: "行情", icon: "icon-hq" },
      { id: "share", text: "分享", icon: "icon-share" },
      { id: "currency-setting", text: "币种设置", icon: "icon-currency" },
    ],
    debt: [
      { id: "trade", text: "下单", icon: "icon-trade" },
      { id: "analysis", text: "分析", icon: "icon-analysis" },
      { id: "condition-order", text: "条件单", icon: "icon-condition-order" },
      { id: "quote", text: "行情", icon: "icon-hq" },
    ],
    xinke: [
      { id: "trade", text: "购回", icon: "icon-repo" },
      { id: "analysis", text: "分析", icon: "icon-analysis" },
      { id: "quote", text: "详情", icon: "icon-detail" },
    ],
    jiaxinbao: [
      { id: "setting", text: "设置", icon: "icon-setting" },
      { id: "analysis", text: "分析", icon: "icon-analysis" },
      { id: "detail", text: "详情", icon: "icon-detail" },
    ],
  };
function l(e) {
  var i,
    t,
    n = e.type,
    o = e.target,
    r = void 0 === o ? {} : o,
    a = "stockholder_code",
    c = "contract_no",
    s = { stock: a, jiaxinbao: c, xinke: c, debt: c, hkstock: a }[n];
  return "drawer-"
    .concat(n, "-")
    .concat(
      null !== (i = null == r ? void 0 : r.code) && void 0 !== i ? i : 0,
      "-"
    )
    .concat(null !== (t = r[s]) && void 0 !== t ? t : 0);
}
(exports.EPositionType = u),
  (exports.getUniKey = l),
  (exports.usePositionDrawerStore = s);
