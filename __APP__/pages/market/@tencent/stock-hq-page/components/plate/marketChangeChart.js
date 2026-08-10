var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  n = function (t, a, o) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[a] = o);
  },
  i = require("../../../../../../common/vendor.js"),
  m = {
    components: {
      TrendMap: function () {
        return "../../node-modules/@tencent/stock-hq-sbg/components/TrendMap.js";
      },
    },
    inject: {
      isHqShow: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
    },
    props: { tabOnShow: { type: Boolean, default: !0 } },
    data: function () {
      return {
        mapData: [],
        flagData: null,
        yesterday: 0,
        market: "",
        mBottomDate: null,
        mBottomName: "",
        mBottomZdf: null,
        mBottomType: 0,
        timer: null,
        onShow: !0,
        timeArr: [],
        isTrading: !1,
        realConut: 0,
      };
    },
    computed: {
      mBottomZdfStr: function () {
        if (isNaN(this.mBottomZdf) || null === this.mBottomZdf) return "";
        var t = 100 * this.mBottomZdf;
        return (t = t.toFixed(2)) > 0 ? "+".concat(t, "%") : "".concat(t, "%");
      },
      isPageShow: function () {
        var t;
        return null == (t = this.isHqShow) ? void 0 : t.call(this);
      },
    },
    watch: {
      tabOnShow: function (t, e) {
        t !== e &&
          ((this.onShow = t), t ? this.startGetData() : this.stopGetData());
      },
      isPageShow: function (t) {
        t && this.tabOnShow ? this.startGetData() : this.stopGetData();
      },
    },
    created: function () {
      this.getData();
      for (
        var t = new Date("2025/01/01 09:30").getTime(), e = 0;
        e < 121;
        e++
      ) {
        var a = new Date(t + 6e4 * e)
          .toTimeString()
          .slice(0, 5)
          .replace(":", "");
        this.timeArr.push(a);
      }
      for (
        var o = new Date("2025/01/01 13:00").getTime(), r = 0;
        r < 121;
        r++
      ) {
        var n = new Date(o + 6e4 * r)
          .toTimeString()
          .slice(0, 5)
          .replace(":", "");
        this.timeArr.push(n);
      }
    },
    mounted: function () {
      this.startGetData();
    },
    activated: function () {
      this.startGetData();
    },
    deactivated: function () {
      this.stopGetData();
    },
    beforeDestroy: function () {
      this.stopGetData();
    },
    methods: {
      startGetData: function () {
        var t = this;
        this.stopGetData();
        var e = new Date().toTimeString().slice(0, 5).replace(":", "");
        this.timer = setTimeout(function () {
          (e >= "0930" && e <= "1130") || (e >= "1300" && e <= "1500")
            ? ((t.isTrading = !0), t.getData())
            : (t.isTrading = !1),
            t.startGetData();
        }, 5e3);
      },
      stopGetData: function () {
        this.timer && (clearTimeout(this.timer), (this.timer = null));
      },
      getData: function () {
        var t = this;
        if (this.onShow) {
          var e = "";
          (e = ""
            .concat(
              (e =
                "https://proxy.finance.qq.com/cgi/cgi-bin/bkyidong/getyidong"),
              "?showfold=1&type=0&symbols=&grpid=&uin=&userInfo=null&lastId=&direction=1&num=1&_appver=11.0&app="
            )
            .concat(i.OriginTypeEnum.mpweapp)),
            i.StockBridge.request(e, "GET").then(function (e) {
              if (e && 0 === e.code && e.data) {
                var a = e.data || {},
                  o = a.minute_sh_index,
                  r = void 0 === o ? [] : o,
                  n = a.spec_yidong_list,
                  i = void 0 === n ? [] : n,
                  m = a.marketstat,
                  s = void 0 === m ? "" : m,
                  c = a.data,
                  u = void 0 === c ? [] : c;
                t.formateData(r, i, s), t.formatBottomData(u);
              }
            });
        }
      },
      formateData: function (e, i, m) {
        var s,
          c =
            (null == (s = null == e ? void 0 : e.data)
              ? void 0
              : s.map(function (t) {
                  var e = (null == t ? void 0 : t.split(" ")) || [];
                  return { time: e[0], price: e[1] };
                })) || [];
        (this.realConut = c.length),
          (this.mapData = this.timeArr.map(function (t) {
            var e,
              a =
                (null ==
                (e = c.find(function (e) {
                  return e.time === t;
                }))
                  ? void 0
                  : e.price) || 0;
            return { time: t, price: a };
          })),
          (this.flagData = (i || []).map(function (e) {
            return (function (e, i) {
              for (var m in i || (i = {})) o.call(i, m) && n(e, m, i[m]);
              if (a) {
                var s,
                  c = t(a(i));
                try {
                  for (c.s(); !(s = c.n()).done; ) {
                    m = s.value;
                    r.call(i, m) && n(e, m, i[m]);
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
              }
              return e;
            })(
              {
                time: e.DataTime.replace(
                  /\d{4}-\d{2}-\d{2} (\d{2}):(\d{2}):\d{2}/,
                  "$1$2"
                ),
              },
              e
            );
          })),
          (this.yesterday = (null == e ? void 0 : e.pre) || 0),
          (this.market = m);
      },
      formatBottomData: function (t) {
        var e,
          a = t[0] || {};
        (this.mBottomDate =
          null == (e = a.DataTime) ? void 0 : e.split(" ")[1]),
          (this.mBottomName = a.Name),
          (this.mBottomZdf = a.Zdf),
          (this.mBottomType = a.Type);
      },
      getBottomZdfStr: function () {
        if (null === this.mBottomZdf) return "";
        var t = 100 * this.mBottomZdf;
        return (t = t.toFixed(2)) > 0 ? "+".concat(t, "%") : "".concat(t, "%");
      },
      getBottomTypeStr: function () {
        switch (this.mBottomType) {
          case 8193:
            return "快速上涨";
          case 8194:
            return "快速下跌";
          case 12289:
            return "达60日新高";
          case 12290:
            return "达60日新低";
          case 24577:
            return "大幅上涨";
          case 24578:
            return "大幅下跌";
          case 28673:
            return "多股涨停";
          default:
            return "";
        }
      },
      getColor: function () {
        return this.mBottomZdf > 0
          ? "red"
          : this.mBottomZdf < 0
          ? "green"
          : "gray";
      },
    },
  };
Array || i.resolveComponent("TrendMap")();
var s = i._export_sfc(m, [
  [
    "render",
    function (t, e, a, o, r, n) {
      return i.e(
        {
          a: i.p({
            data: r.mapData,
            "time-arr": r.timeArr,
            market: r.market,
            "flag-data": r.flagData,
            "real-conut": r.realConut,
            "is-trading": r.isTrading,
            "tab-on-show": a.tabOnShow,
          }),
          b: r.mBottomDate && 3 === r.mBottomDate.split(":").length,
        },
        r.mBottomDate && 3 === r.mBottomDate.split(":").length
          ? {
              c: i.t(r.mBottomDate.split(":")[0]),
              d: i.t(r.mBottomDate.split(":")[1]),
              e: i.t(r.mBottomDate.split(":")[2]),
            }
          : {},
        { f: i.t(r.mBottomName), g: n.mBottomZdfStr },
        n.mBottomZdfStr
          ? { h: i.t("(".concat(n.mBottomZdfStr, ")")), i: i.n(n.getColor()) }
          : {},
        { j: i.t(n.getBottomTypeStr()) }
      );
    },
  ],
  ["__scopeId", "data-v-62351579"],
]);
wx.createComponent(s);
