var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js");
require("../../service/broker.js"), require("../../service/sdk/lib/api.js");
var a = require("../../service/sdk/platform/mp-weixin.js"),
  i = require("../../service/stat/mp-weixin.js"),
  o = require("../../model/biz/useEntryCheck.js"),
  c = require("../../common/components/Dialog/index.js"),
  s = require("../../config/broker/11100/index.js"),
  u = {
    __name: "EmptyBankcardTip",
    props: {
      title: String,
      showIcon: { type: Boolean, default: !0 },
      biz: { type: String, required: !0 },
    },
    setup: function (u) {
      var d,
        l = t.getCurrentInstance().proxy,
        p = s.brokerConfig.base.name,
        f = ((null == (d = s.brokerConfig.hall) ? void 0 : d.bankcard) || {})
          .emptyCard,
        m = void 0 === f ? {} : f,
        k = m.steps,
        b = void 0 === k ? [] : k,
        g = m.canAddCard,
        h = void 0 !== g && g;
      function v() {
        i.stat.click("trade.bankcard.emptycard.contact_click");
        var e = s.brokerConfig.base.tel;
        e && a.sdk.makePhoneCall(String(e).replace(/-/g, ""));
      }
      function y() {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = n(
          e().mark(function n() {
            var a, s, u, d, p, f;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      i.stat.click("trade.bankcard.emptycard.addcard_click"),
                      (e.next = 3),
                      t.to(o.useEntryCheck().checkChangeBankcard())
                    );
                  case 3:
                    (a = e.sent),
                      (s = r(a, 2)),
                      (u = s[0]),
                      (d = r(s[1], 2)),
                      (p = d[0]),
                      (f = d[1]),
                      !u && p
                        ? l.$router.push({ name: "BizAddBankcard" })
                        : c.Dialog({
                            message:
                              (null == u ? void 0 : u.retmsg) ||
                              (null == f ? void 0 : f.retmsg) ||
                              "网络繁忙 请稍后再试",
                            messageType: "html",
                          });
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )).apply(this, arguments);
      }
      i.stat.click("trade.bankcard.emptycard.brow");
      var C = (function () {
        var e,
          r,
          n =
            null ==
            (r = null == (e = s.brokerConfig.dictionary) ? void 0 : e.Enties)
              ? void 0
              : r.addBankcard;
        return !!n && !n.hidden && h;
      })();
      return function (e, r) {
        return t.e(
          { a: u.showIcon },
          (u.showIcon, {}),
          {
            b: t.t(u.title || "当前未绑定银行卡"),
            c: t.t(u.biz),
            d: t.unref(b).length > 0,
          },
          t.unref(b).length > 0 ? { e: t.t(t.unref(p)) } : {},
          { f: 0 === t.unref(b).length ? 1 : "", g: t.unref(b).length > 0 },
          t.unref(b).length > 0
            ? {
                h: t.f(t.unref(b), function (e, r, n) {
                  return { a: t.t(r + 1), b: t.t(e), c: r };
                }),
              }
            : {},
          { i: t.unref(C) },
          t.unref(C) ? { j: t.o(y) } : { k: t.o(v) }
        );
      };
    },
  },
  d = t._export_sfc(u, [["__scopeId", "data-v-546a52ee"]]);
wx.createComponent(d);
