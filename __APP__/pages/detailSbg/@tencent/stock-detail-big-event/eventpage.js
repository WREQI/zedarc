var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  a = require("../stock-hq-data/index.js"),
  c = require("../../../../common/vendor.js"),
  s = require("../stock-hq-core/config/const.js");
function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
!(function e(t, n) {
  function r(e, r, o) {
    if ("undefined" != typeof document) {
      "number" == typeof (o = u({}, n, o)).expires &&
        (o.expires = new Date(Date.now() + 864e5 * o.expires)),
        o.expires && (o.expires = o.expires.toUTCString()),
        (e = encodeURIComponent(e)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var i = "";
      for (var a in o)
        o[a] &&
          ((i += "; " + a), !0 !== o[a] && (i += "=" + o[a].split(";")[0]));
      return (document.cookie = e + "=" + t.write(r, e) + i);
    }
  }
  return Object.create(
    {
      set: r,
      get: function (e) {
        if ("undefined" != typeof document && (!arguments.length || e)) {
          for (
            var n = document.cookie ? document.cookie.split("; ") : [],
              r = {},
              o = 0;
            o < n.length;
            o++
          ) {
            var i = n[o].split("="),
              a = i.slice(1).join("=");
            try {
              var c = decodeURIComponent(i[0]);
              if (((r[c] = t.read(a, c)), e === c)) break;
            } catch (e) {}
          }
          return e ? r[e] : r;
        }
      },
      remove: function (e, t) {
        r(e, "", u({}, t, { expires: -1 }));
      },
      withAttributes: function (t) {
        return e(this.converter, u({}, this.attributes, t));
      },
      withConverter: function (t) {
        return e(u({}, this.converter, t), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(t) },
    }
  );
})(
  {
    read: function (e) {
      return (
        '"' === e[0] && (e = e.slice(1, -1)),
        e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      );
    },
    write: function (e) {
      return encodeURIComponent(e).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  },
  { path: "/" }
);
var l = function (t, a) {
    var u = c.getApiFullUrl(
      "cgi/cgi-bin/bigevent/getBigEventV2",
      c.API_HOST_ENUM.PROXY_QQ
    );
    return t
      .request(
        u,
        "post",
        (function (t, a) {
          for (var c in a || (a = {})) r.call(a, c) && i(t, c, a[c]);
          if (n) {
            var s,
              u = e(n(a));
            try {
              for (u.s(); !(s = u.n()).done; ) {
                c = s.value;
                o.call(a, c) && i(t, c, a[c]);
              }
            } catch (e) {
              u.e(e);
            } finally {
              u.f();
            }
          }
          return t;
        })({ app: "mp" === t.ENV ? s.SOURCEENUM.MP : "wzq" }, a)
      )
      .then(function (e) {
        return e.data || {};
      })
      .catch(function (e) {
        return e;
      });
  },
  g = {
    components: {
      Tab: function () {
        return "./components/EventTab.js";
      },
      Timeline: function () {
        return "./components/Timeline.js";
      },
      Empty: function () {
        return "./components/Empty/index.js";
      },
      Loading: function () {
        return "./common/Loading.js";
      },
    },
    props: ["symbol", "market", "skin"],
    inject: ["hqBridge"],
    data: function () {
      return {
        tabs: [
          { title: "全部", category: "" },
          { title: "财报披露", category: "1" },
          { title: "分红送配", category: "2" },
          { title: "股权变动", category: "3" },
          { title: "公司经营", category: "4" },
          { title: "交易提示", category: "5" },
          { title: "风险提示", category: "6" },
          { title: "其他", category: "100" },
        ],
        hkTabs: [
          { title: "全部", category: "" },
          { title: "财报披露", category: "1" },
          { title: "交易提示", category: "5" },
          { title: "公司经营", category: "4" },
          { title: "分红送配", category: "2" },
          { title: "拆并股", category: "7" },
          { title: "其他", category: "100" },
        ],
        usTabs: [
          { title: "全部", category: "" },
          { title: "财报披露", category: "1" },
          { title: "公司经营", category: "4" },
          { title: "分红送配", category: "2" },
          { title: "拆并股", category: "7" },
          { title: "其他", category: "100" },
        ],
        eventList: [],
        loading: !1,
        curIndex: 0,
        symbolValue: "",
      };
    },
    computed: {},
    created: function () {},
    mounted: function () {
      var e = this;
      this.symbol && this.market
        ? this.getTabs(this.symbol, this.market)
        : this.$watch(
            function () {
              return e.$route.query;
            },
            function () {
              var t = e.$route.query,
                n = t.symbol,
                r = t.market;
              (e.symbolValue = n), e.getTabs(n, r);
            },
            { immediate: !0 }
          );
    },
    methods: {
      getTabs: function (e, t) {
        a.utils.isHKMarket(t) && (this.tabs = this.hkTabs),
          a.utils.isUSMarket(t) && (this.tabs = this.usTabs),
          this.getEventsList(e, "");
      },
      getEventsList: function (e, t) {
        var n = this;
        (this.loading = !0),
          l(this.hqBridge, { symbol: e, category: t || "" })
            .then(function (e) {
              var t = (e || {}).data,
                r = void 0 === t ? [] : t;
              (n.eventList = r), (n.loading = !1);
            })
            .catch(function (e) {
              n.loading = !1;
            });
      },
      changeTab: function (e) {
        if (!this.loading) {
          this.curIndex = e;
          var t = this.tabs[e].category;
          this.hqBridge.report("hq.kch_eventbottom.eventcategory_click", {
            category: this.tabs[e],
          });
          var n = this.symbol || this.symbolValue;
          this.getEventsList(n, t);
        }
      },
    },
  };
Array ||
  (
    c.resolveComponent("Tab") +
    c.resolveComponent("Timeline") +
    c.resolveComponent("Empty") +
    c.resolveComponent("Loading")
  )();
var d = c._export_sfc(g, [
  [
    "render",
    function (e, t, n, r, o, i) {
      return c.e(
        {
          a: c.o(i.changeTab, 459),
          b: c.p({ tabs: o.tabs, curIndex: o.curIndex, skin: n.skin }),
          c: o.eventList.length > 0 && !o.loading,
        },
        o.eventList.length > 0 && !o.loading
          ? { d: c.p({ list: o.eventList }) }
          : {},
        { e: 0 === o.eventList.length && !o.loading },
        (0 !== o.eventList.length || o.loading, {}),
        { f: o.loading },
        (o.loading, {})
      );
    },
  ],
  ["__scopeId", "data-v-ec19cb7d"],
]);
wx.createComponent(d);
