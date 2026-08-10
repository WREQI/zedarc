var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  a = require("../../../../../../common/vendor.js"),
  u = require("../../../stock-news-core/utils/knife.js"),
  c = require("../../../stock-news-core/utils/force2https.js"),
  d = require("../../../stock-community-base/utils/api/index.js"),
  p = require("help.js"),
  l = d.api.goPageCommon,
  s = {
    components: {},
    props: {
      reportPrefix: { type: String, default: p.PageType.FOLLOW },
      reportWithParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemIndex: { type: Number, default: 0 },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (t) {
      var d = t.reportPrefix,
        p = a.getCurrentInstance().proxy || a.getCurrentInstance(),
        s = a.inject("stockBridge"),
        m = a.computed(function () {
          var e;
          return c.forceHttpsAdvanced(
            (null == (e = t.itemData) ? void 0 : e.user_image) || ""
          );
        }),
        f = a.computed(function () {
          var e, r;
          return 1001 === (null == (e = t.itemData) ? void 0 : e.vip_type)
            ? "https://st.gtimg.com/design/f704103913d3b44e7f7edce709d02fe9.webp"
            : 1002 === (null == (r = t.itemData) ? void 0 : r.vip_type)
            ? "https://st.gtimg.com/design/ebcf024baba0ed9dd5db02368cbe5644.webp"
            : "";
        }),
        v = a.computed(function () {
          var e;
          return (null == (e = t.itemData) ? void 0 : e.user_name) || "";
        }),
        b = a.computed(function () {
          var e;
          return (null == (e = t.itemData) ? void 0 : e.user_medal) || [];
        }),
        g = a.computed(function () {
          var e;
          return (null == (e = t.itemData) ? void 0 : e.user_desc) || "";
        }),
        y = a.computed(function () {
          var e,
            r = null == (e = t.itemData) ? void 0 : e.follow_time;
          if (r) {
            var n = new Date("".concat(r)).getTime();
            return u.timeFormat(n / 1e3, u.timeFormatType.combination);
          }
          return "";
        }),
        h = a.computed(function () {
          return (function (t, a) {
            for (var u in a || (a = {})) n.call(a, u) && i(t, u, a[u]);
            if (r) {
              var c,
                d = e(r(a));
              try {
                for (d.s(); !(c = d.n()).done; ) {
                  u = c.value;
                  o.call(a, u) && i(t, u, a[u]);
                }
              } catch (e) {
                d.e(e);
              } finally {
                d.f();
              }
            }
            return t;
          })({ positionid: t.itemIndex }, t.reportWithParams);
        });
      return (
        a.onMounted(function () {}),
        {
          headImg: m,
          headVip: f,
          userName: v,
          userMedal: b,
          userDescription: g,
          followDate: y,
          onClickItem: function () {
            var e,
              r = {
                eventName: "person",
                userId: (null == (e = t.itemData) ? void 0 : e.user_id) || "",
                instance: p,
              };
            l(r), s.report("".concat(d, ".item_click"), h.value);
          },
          forceHttpsAdvanced: c.forceHttpsAdvanced,
        }
      );
    },
  },
  m = a._export_sfc(s, [
    [
      "render",
      function (e, t, r, n, o, i) {
        return a.e(
          { a: n.headImg, b: n.headVip },
          n.headVip ? { c: n.headVip } : {},
          {
            d: a.t(n.userName),
            e: a.n(n.headVip ? "vip" : ""),
            f: n.userMedal.length > 0,
          },
          n.userMedal.length > 0
            ? {
                g: a.f(n.userMedal, function (e, t, r) {
                  return { a: t, b: n.forceHttpsAdvanced(e.medal_url || "") };
                }),
              }
            : {},
          {
            h: a.t(n.userDescription),
            i: a.t(n.followDate),
            j: "follow-item-".concat(r.itemData.user_id),
            k: a.o(function () {
              return n.onClickItem && n.onClickItem.apply(n, arguments);
            }, 4154),
          }
        );
      },
    ],
    ["__scopeId", "data-v-71204b63"],
  ]);
wx.createComponent(m);
