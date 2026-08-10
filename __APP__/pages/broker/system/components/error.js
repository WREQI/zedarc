var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  o = function (e, n, a) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  i = function (r, i) {
    for (var u in i || (i = {})) a.call(i, u) && o(r, u, i[u]);
    if (n) {
      var l,
        c = e(n(i));
      try {
        for (c.s(); !(l = c.n()).done; ) {
          u = l.value;
          t.call(i, u) && o(r, u, i[u]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return r;
  },
  u = require("../../../../common/vendor.js"),
  l = {
    default: "网络繁忙，页面无法正常打开",
    maintain: "证券公司系统维护，请稍后再试",
  },
  c = {
    props: {
      reason: { type: String, default: "" },
      broker: { type: String, default: "" },
    },
    setup: function (e, r) {
      var n = r.emit,
        a = "black" === u.wx$1.getStorageSync("user/skin") ? "black" : "white",
        t = u.ref("about:blank"),
        o = u.ref(l.default),
        c = u.ref(""),
        s = u.ref(""),
        m = u.ref("");
      t.value = "https://st.gtimg.com/image/mp-weapp/trade/maintain4-".concat(
        a,
        ".png"
      );
      var p = u.useBrokerInfo(),
        f = p.dealerList,
        b = p.brokerInfo,
        k = function () {
          var r = i(
              i({}, u.getCurrentRoute().query),
              e.reason && e.broker ? e : {}
            ),
            n = r.reason,
            p = r.broker;
          (s.value = n), n && (o.value = l[n] || l.default);
          var k = "maintain" === n;
          if (
            (k &&
              (t.value =
                "https://st.gtimg.com/image/mp-weapp/trade/maintain3-".concat(
                  a,
                  ".png"
                )),
            p)
          ) {
            if (k) {
              var h =
                f.value.find(function (e) {
                  return e.code === p;
                }) || {};
              h.maintainText && (o.value = h.maintainText);
            }
            var d = b[p] || {},
              g = d.name,
              v = d.tel;
            g && v && ((c.value = "".concat(g, "客服电话：")), (m.value = v));
          }
        };
      return (
        u.onMounted(function () {
          n("ready"), k();
        }),
        {
          skin: a,
          imgSrc: t,
          errReason: s,
          message: o,
          brokerContactText: c,
          toChoose: function () {
            u.wx$1.switchTab({ url: "/pages/index/index" });
          },
          brokerPhoneNumber: m,
          makePhoneCall: function () {
            u.wx$1.makePhoneCall({ phoneNumber: m.value });
          },
          updateData: k,
        }
      );
    },
    onPageShow: function () {
      this.updateData();
    },
  },
  s = u._export_sfc(c, [
    [
      "render",
      function (e, r, n, a, t, o) {
        return u.e(
          { a: a.imgSrc, b: "maintain" === a.errReason },
          (a.errReason, {}),
          { c: u.t(a.message), d: a.brokerPhoneNumber },
          a.brokerPhoneNumber
            ? {
                e: u.t(a.brokerPhoneNumber),
                f: u.o(function () {
                  return a.makePhoneCall && a.makePhoneCall.apply(a, arguments);
                }, 1237),
              }
            : {},
          { g: "maintain" !== a.errReason },
          (a.errReason, {}),
          { h: "maintain" === a.errReason },
          "maintain" === a.errReason
            ? {
                i: u.o(function () {
                  return a.toChoose && a.toChoose.apply(a, arguments);
                }, 1238),
              }
            : {},
          { j: a.errReason },
          a.errReason
            ? { k: u.t(String(a.errReason || "").toUpperCase()) }
            : {},
          { l: a.brokerPhoneNumber },
          a.brokerPhoneNumber
            ? {
                m: u.t(a.brokerContactText),
                n: u.t(a.brokerPhoneNumber),
                o: u.o(function () {
                  return a.makePhoneCall && a.makePhoneCall.apply(a, arguments);
                }, 1239),
              }
            : {},
          { p: u.n("skin-".concat(a.skin)), q: a.skin }
        );
      },
    ],
    ["__scopeId", "data-v-f57aea05"],
  ]);
wx.createComponent(s);
