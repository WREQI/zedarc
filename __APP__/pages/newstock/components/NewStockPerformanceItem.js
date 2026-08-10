require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../cgi/newstock.js"),
  i = require("../config.js"),
  o = {
    name: "NewsStockPerformanceItem",
    props: {
      isInit: { type: Boolean, default: !1 },
      segmentsActiveIndex: { type: [Number, String], default: 0 },
      listsData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      subStatisInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        titleStr: "上市概览",
        leftTopSubTitle: "--",
        rightTopSubTitle: "--",
        leftBottomSubTitle: "--",
        rightBottomSubTitle: "--",
        cellDayTitle: "",
        cellNumTitle: "",
        SUB_INFO_TYPE: e.SUB_INFO_TYPE,
        isHidePerformanceBlock: i.RiskCfg.isHidePerformanceBlock,
      };
    },
    watch: {
      segmentsActiveIndex: {
        handler: function (t) {
          switch (t) {
            case e.SUB_INFO_TYPE.STOCK:
              (this.titleStr = "新股上市概览"),
                (this.leftTopSubTitle = "新股数量"),
                (this.rightTopSubTitle = "平均连续涨停"),
                (this.leftBottomSubTitle = "首日平均涨幅"),
                (this.rightBottomSubTitle = "平均每签首日获利"),
                (this.cellDayTitle = "连续涨停"),
                (this.cellNumTitle = "首日获利");
              break;
            case e.SUB_INFO_TYPE.CYB_STOCK:
              (this.titleStr = "创业板新股上市概览"),
                (this.leftTopSubTitle = "近期发行数量"),
                (this.rightTopSubTitle = "破发数量"),
                (this.leftBottomSubTitle = "首日平均涨幅"),
                (this.rightBottomSubTitle = "平均每签首日获利"),
                (this.cellDayTitle = "首日涨幅"),
                (this.cellNumTitle = "首日获利");
              break;
            case e.SUB_INFO_TYPE.KCB_STOCK:
              (this.titleStr = "科创板新股上市概览"),
                (this.leftTopSubTitle = "近期发行数量"),
                (this.rightTopSubTitle = "破发数量"),
                (this.leftBottomSubTitle = "首日平均涨幅"),
                (this.rightBottomSubTitle = "平均每签首日获利"),
                (this.cellDayTitle = "首日涨幅"),
                (this.cellNumTitle = "首日获利");
              break;
            default:
              (this.titleStr = "上市概览"),
                (this.cellDayTitle = "连续涨停"),
                (this.cellNumTitle = "每签获利");
          }
        },
        immediate: !0,
      },
    },
    methods: {
      toHq: function (e) {
        t.index.navToQuote(e);
      },
    },
  };
Array || (t.resolveComponent("ValueColor") + t.resolveComponent("Loading"))(),
  Math;
var l = t._export_sfc(o, [
  [
    "render",
    function (e, i, o, l, s, n) {
      return t.e(
        { a: !s.isHidePerformanceBlock },
        s.isHidePerformanceBlock ? {} : { b: t.t(s.titleStr) },
        { c: !s.isHidePerformanceBlock },
        s.isHidePerformanceBlock
          ? {}
          : {
              d: t.t(
                o.subStatisInfo.leftTopTitle
                  ? o.subStatisInfo.leftTopTitle
                  : "--"
              ),
              e: t.t(s.leftTopSubTitle),
              f: t.t(
                o.subStatisInfo.rightTopTitle
                  ? o.subStatisInfo.rightTopTitle
                  : "--"
              ),
              g: t.t(s.rightTopSubTitle),
              h: t.t(
                o.subStatisInfo.leftBottomTitle
                  ? o.subStatisInfo.leftBottomTitle
                  : "--"
              ),
              i: t.t(s.leftBottomSubTitle),
              j: t.t(
                e.$filters.money.formatNoUnit(
                  o.subStatisInfo.rightBottomTitle,
                  !0
                )
              ),
              k: t.p({
                value: o.subStatisInfo.rightBottomTitle
                  ? o.subStatisInfo.rightBottomTitle
                  : "--",
              }),
              l: t.t(s.rightBottomSubTitle),
            },
        { m: o.segmentsActiveIndex !== s.SUB_INFO_TYPE.STOCK },
        o.segmentsActiveIndex !== s.SUB_INFO_TYPE.STOCK
          ? { n: t.t(s.cellDayTitle) }
          : {},
        { o: t.t(s.cellNumTitle), p: !o.isInit },
        o.isInit ? {} : { q: t.p({ size: "40rpx" }) },
        {
          r: t.f(o.listsData, function (i, l, r) {
            return t.e(
              {
                a: t.t(i.name),
                b: t.t(i.code),
                c: t.t(e.$filters.marketId(i.market, ".")),
                d: t.t(e.$filters.time.format(i.go_date, "YY-MM-DD")),
              },
              o.segmentsActiveIndex === s.SUB_INFO_TYPE.STOCK
                ? {
                    e: t.t(
                      e.$filters.money.formatNoUnit(i.profit_per_unit || 0, !0)
                    ),
                    f: "234bcbaf-2-" + r,
                    g: t.p({ value: i.profit_per_unit || 0 }),
                  }
                : {},
              o.segmentsActiveIndex === s.SUB_INFO_TYPE.CYB_STOCK
                ? { h: t.t(i.go_rise_fall) }
                : {},
              o.segmentsActiveIndex === s.SUB_INFO_TYPE.CYB_STOCK
                ? {
                    i: t.t(
                      e.$filters.money.formatNoUnit(i.go_profit_unit || 0, !0)
                    ),
                    j: "234bcbaf-3-" + r,
                    k: t.p({ value: i.go_profit_unit || 0 }),
                  }
                : {},
              o.segmentsActiveIndex === s.SUB_INFO_TYPE.KCB_STOCK
                ? { l: t.t(i.go_rise_fall) }
                : {},
              o.segmentsActiveIndex === s.SUB_INFO_TYPE.KCB_STOCK
                ? {
                    m: t.t(
                      e.$filters.money.formatNoUnit(i.go_profit_unit || 0, !0)
                    ),
                    n: "234bcbaf-4-" + r,
                    o: t.p({ value: i.go_profit_unit || 0 }),
                  }
                : {},
              {
                p: l,
                q: t.o(function (t) {
                  return n.toHq(i);
                }, l),
              }
            );
          }),
          s: o.segmentsActiveIndex === s.SUB_INFO_TYPE.STOCK,
          t: o.segmentsActiveIndex === s.SUB_INFO_TYPE.CYB_STOCK,
          v: o.segmentsActiveIndex === s.SUB_INFO_TYPE.CYB_STOCK,
          w: o.segmentsActiveIndex === s.SUB_INFO_TYPE.KCB_STOCK,
          x: o.segmentsActiveIndex === s.SUB_INFO_TYPE.KCB_STOCK,
        }
      );
    },
  ],
  ["__scopeId", "data-v-234bcbaf"],
]);
wx.createComponent(l);
