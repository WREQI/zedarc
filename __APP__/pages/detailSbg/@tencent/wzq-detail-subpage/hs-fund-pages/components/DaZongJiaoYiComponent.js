var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../utils/hqDataFormat.js"),
  o = require("../../../../../../common/vendor.js"),
  r = require("../../../stock-hq-core/config/css-token.js"),
  a = {
    name: "DzjyCard",
    props: {
      data: { type: Object },
      getColor: { type: Function, default: function () {} },
      gotoTeachPage: { type: Function, default: function () {} },
      font_medium: { type: Object, default: function () {} },
    },
    data: function () {
      return {
        isBroker: o.isBroker,
        dzjySummary: { s0: "", v0: "", v1: "", v2: "", v3: "", v4: "", v5: "" },
        dzjyInfo: [],
        dzjyShowInfo: [],
        showDzjyCard: !0,
        showNumsCard: !1,
      };
    },
    watch: {
      data: function () {
        this.getDzjyData();
      },
    },
    computed: {
      themeColor: function () {
        var t = r.CSSTOKEN.DEFAULT;
        return {
          bigRed:
            (t =
              "black" === this.skin
                ? r.CSSTOKEN.BLACK || r.CSSTOKEN.DEFAULT
                : r.CSSTOKEN[o.isBroker] || r.CSSTOKEN.DEFAULT).bigRed ||
            "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          gray: t.gray || "#7a8499",
          lightRed: t.lightRed || "#DA6148",
          lightGreen: t.lightGreen || "#55B163",
          normalRed: t.bigRed || "#E63535",
          normalGreen: t.bigGreen || "#1CAA3C",
          lightGray1: t.lightGray1 || "#7a8499",
          borderLight: t.borderLight || "#e9ebf0",
        };
      },
    },
    mounted: function () {
      this.getDzjyData();
    },
    methods: {
      getDzjyData: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = this.data) && n.data && n.data.length > 0
                        ? (n && n.summary && Object.keys(n.summary).length > 1
                            ? ((this.showNumsCard = !0),
                              this.getDzjyNums(n.summary))
                            : (this.showNumsCard = !1),
                          this.getDzjyInfo(n.data),
                          this.initDzjyShowInfo(this.dzjyInfo))
                        : (this.showDzjyCard = !1);
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, o) {
            var r = function (t) {
                try {
                  i(n.next(t));
                } catch (t) {
                  o(t);
                }
              },
              a = function (t) {
                try {
                  i(n.throw(t));
                } catch (t) {
                  o(t);
                }
              },
              i = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, a);
              };
            i((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      getDzjyNums: function (t) {
        (this.dzjySummary.v0 = t.v0
          ? n.hqDataFormat.bigNumberToTextForFinance(
              1e4 * parseFloat(t.v0),
              2,
              "",
              1e4,
              !1,
              !0
            )
          : "--"),
          (this.dzjySummary.v1 = t.v1 ? "".concat(t.v1, "次") : "--"),
          (this.dzjySummary.v2 = t.v2 ? "".concat(t.v2, "次") : "--"),
          (this.dzjySummary.v3 = t.v3
            ? n.hqDataFormat.bigNumberToTextForFinance(
                1e4 * parseFloat(t.v3),
                2,
                "",
                1e4,
                !1,
                !0
              )
            : "--"),
          (this.dzjySummary.v4 = t.v4 ? "".concat(t.v4, "%") : "--"),
          (this.dzjySummary.v5 = t.v5
            ? t.v5 >= 0
              ? "+".concat(t.v5, "%")
              : "".concat(t.v5, "%")
            : "--"),
          t.v0 || (this.showNumsCard = !1);
      },
      getDzjyInfo: function (t) {
        var e = this,
          n = 0;
        t.forEach(function (t) {
          var r = o.dayjs(t.date).format("YYYY-MM-DD");
          t.list.forEach(function (t) {
            (e.dzjyInfo[n] = []),
              (e.dzjyInfo[n][0] = r),
              (e.dzjyInfo[n][1] = t.cjj),
              (e.dzjyInfo[n][2] = "".concat(t.cje, "万")),
              (e.dzjyInfo[n][3] =
                t.yjl > 0 ? "+".concat(t.yjl, "%") : "".concat(t.yjl, "%")),
              n++;
          });
        });
      },
      initDzjyShowInfo: function (e) {
        var n;
        e.length <= 20
          ? (this.dzjyShowInfo = this.dzjyInfo)
          : (n = this.dzjyShowInfo).push.apply(n, t(e.slice(0, 20)));
      },
      getDzjyShowData: function () {
        var e,
          n,
          o = this.dzjyInfo.length,
          r = this.dzjyShowInfo.length;
        r !== o &&
          (o - r > 20
            ? (e = this.dzjyShowInfo).push.apply(
                e,
                t(this.dzjyInfo.slice(r, r + 20))
              )
            : (n = this.dzjyShowInfo).push.apply(
                n,
                t(this.dzjyInfo.slice(r, o))
              ));
      },
    },
  },
  i = o._export_sfc(a, [
    [
      "render",
      function (t, e, n, r, a, i) {
        return o.e(
          { a: a.showNumsCard },
          a.showNumsCard
            ? {
                b: o.t(a.dzjySummary.v0),
                c: o.s(n.font_medium),
                d: o.t(a.dzjySummary.v1),
                e: o.s(n.font_medium),
                f: o.t(a.dzjySummary.v2),
                g: o.s(n.font_medium),
                h: o.t(a.dzjySummary.v3),
                i: o.s(n.font_medium),
                j: o.t(a.dzjySummary.v4),
                k: n.getColor(a.dzjySummary.v4),
                l: o.t(a.dzjySummary.v5),
                m: n.getColor(a.dzjySummary.v5),
              }
            : {},
          {
            n: o.f(a.dzjyShowInfo, function (t, e, r) {
              return {
                a: o.t(t[0]),
                b: o.t(t[1]),
                c: o.t(t[2]),
                d: o.t(t[3]),
                e: n.getColor(t[3]),
                f: e,
              };
            }),
            o: o.s(n.font_medium),
            p: o.s(n.font_medium),
            q: o.s(n.font_medium),
            r: a.showNumsCard ? "" : "no-nums-card-content",
          }
        );
      },
    ],
    ["__scopeId", "data-v-87ea3ba4"],
  ]);
wx.createComponent(i);
