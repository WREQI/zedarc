var t = require("../../../../stock-hq-data/index.js"),
  e = require("../../../util/setColor.js"),
  i = require("../../../../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    props: {
      etfData: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return { listIndexObject: {} };
    },
    created: function () {
      this.getListIndexStorage();
    },
    methods: {
      setFontColor: e.setFontColor,
      getListIndexStorage: function () {
        var t = this,
          e = this.hqBridge.getStorage("kch_etf_list_index");
        e
          ? (this.listIndexObject = e)
          : this.etfData.forEach(function (e) {
              t.listIndexObject[e.index] = 0;
            }),
          this.hqBridge.report("hq.choose_hq.kcb.etf_section_show");
      },
      setListIndexStorage: function () {
        var t = this;
        this.etfData.forEach(function (e) {
          var i = +t.listIndexObject[e.index];
          i === e.list.length - 1
            ? (t.listIndexObject[e.index] = 0)
            : (t.listIndexObject[e.index] = i + 1);
        }),
          this.hqBridge.setStorage("kch_etf_list_index", this.listIndexObject);
      },
      showTip: function () {
        i.StockBridge.openExtraWebview(
          "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id=TN2022081015320383288fe4&cid=VD2022081014571583d78888"
        ),
          this.hqBridge.report("hq.choose_hq.kcb.etf_tip_icon_click");
      },
      getFontSize: function (t) {
        return t.length <= 8
          ? "0.37rem"
          : t.length <= 12
          ? 0.37 - 0.03 * (t.length - 8) + "rem"
          : "0.22rem";
      },
      getBigNum: function (e) {
        return t.utils.bigNumberToText(e);
      },
      getListIndex: function (t) {
        return this.listIndexObject[t] || 0;
      },
      gotoDetail: function (e, n) {
        var s = t.utils.splitSymbol(e),
          o = s.market,
          d = s.scode;
        i.StockBridge.routeTo({
          url: "/pages/quote/quote?market=".concat(o, "&scode=").concat(d),
        }),
          this.hqBridge.report("hq.choose_hq.kcb.etf_item_click", {
            stockid: e,
            index: n,
          });
      },
    },
  },
  s = i._export_sfc(n, [
    [
      "render",
      function (t, e, n, s, o, d) {
        return i.e(
          {
            a: i.o(function (t) {
              return d.showTip();
            }, 5211),
            b: n.etfData && n.etfData.length > 0,
          },
          n.etfData && n.etfData.length > 0
            ? {
                c: i.f(n.etfData, function (t, e, n) {
                  return i.e(
                    { a: t.list && t.list.length > 0 },
                    t.list && t.list.length > 0
                      ? i.e(
                          {
                            b: i.t(t.list[d.getListIndex(t.index)].name),
                            c: d.getFontSize(
                              t.list[d.getListIndex(t.index)].name
                            ),
                            d: t.list[d.getListIndex(t.index)].zdf,
                          },
                          t.list[d.getListIndex(t.index)].zdf
                            ? {
                                e: i.t(t.list[d.getListIndex(t.index)].zdf),
                                f: i.n(
                                  d.setFontColor(
                                    t.list[d.getListIndex(t.index)].zdf
                                  )
                                ),
                              }
                            : {},
                          {
                            g:
                              t.list[d.getListIndex(t.index)].tags &&
                              t.list[d.getListIndex(t.index)].tags.length,
                          },
                          t.list[d.getListIndex(t.index)].tags &&
                            t.list[d.getListIndex(t.index)].tags.length
                            ? {
                                h: i.f(
                                  t.list[d.getListIndex(t.index)].tags
                                    .map(function (t) {
                                      return t;
                                    })
                                    .sort(function (t) {
                                      return 12 === t.label ? -1 : 0;
                                    }),
                                  function (t, e, n) {
                                    return {
                                      a: i.t(t.name),
                                      b: t.label,
                                      c: i.n(
                                        12 === t.label
                                          ? "color-rise"
                                          : "color-blue"
                                      ),
                                    };
                                  }
                                ),
                              }
                            : t.list[d.getListIndex(t.index)].gm
                            ? {
                                j: i.t(
                                  d.getBigNum(
                                    t.list[d.getListIndex(t.index)].gm
                                  )
                                ),
                              }
                            : {},
                          {
                            i: t.list[d.getListIndex(t.index)].gm,
                            k: i.o(
                              function (e) {
                                return d.gotoDetail(
                                  t.list[d.getListIndex(t.index)].code,
                                  d.getListIndex(t.index)
                                );
                              },
                              5212,
                              t.index
                            ),
                          }
                        )
                      : {},
                    { l: t.index }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e8242dcd"],
  ]);
wx.createComponent(s);
