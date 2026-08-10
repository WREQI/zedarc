var t = require("../../../../../../../common/vendor.js"),
  e = require("../../../../stock-news-sdk/index.js"),
  i = {
    name: "AnswerItemJgRate",
    props: {
      theme: { required: !0, type: String },
      jgList: { type: Array, default: [] },
      pjNum: { type: Number, default: 0 },
      jgchartData: { type: Array, default: [] },
      symbol: { type: String, default: "" },
      isHS: { type: Boolean, default: !1 },
      curRequestId: { required: !1, type: String, default: "" },
    },
    data: function () {
      return { isMP: !0, isWzq: !1 };
    },
    methods: {
      gotoJGDetail: function () {
        if (
          (t.StockBridge.report("jichu.ai_search.ai_plugin_click", {
            widgettype: "institution",
            stockid: this.symbol,
            requestid: this.curRequestId,
          }),
          t.StockBridge.report("jichu.ai_search.institution_click"),
          this.isMP)
        )
          t.StockRouter.routeTo({
            name: "jgpjDetail",
            query: { symbol: this.symbol },
          });
        else if (this.isWzq)
          t.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/lite/index.html#/quote/jgpjDetail?symbol=".concat(
              this.symbol
            )
          );
        else {
          var e = encodeURIComponent(
            JSON.stringify({
              p_key: "com.tencent.shy.search_ai",
              p_url: "jgrate?symbol=".concat(this.symbol),
              p_title: "机构评级",
            })
          );
          t.StockBridge.routeTo({ url: "qqstock://SHY?info=".concat(e) });
        }
      },
      gotoNewsDetail: function (i) {
        t.StockBridge.report("jichu.ai_search.institution_click");
        var n = ((this.isHS ? i.ybInfo : i) || {}).id;
        n &&
          (this.isWzq
            ? t.StockBridge.openExtraWebview(
                "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                  n
                )
              )
            : e.sdk.navigateToNewsDetail({ instance: this, id: n }));
      },
    },
  },
  n = t._export_sfc(i, [
    [
      "render",
      function (e, i, n, a, r, o) {
        return t.e(
          { a: n.jgList && n.jgList.length },
          n.jgList && n.jgList.length
            ? t.e(
                { b: n.pjNum },
                n.pjNum
                  ? t.e(
                      {
                        c: t.f(n.jgchartData, function (e, i, a) {
                          return t.e(
                            {
                              a: t.n(0 === i ? "ra-left" : ""),
                              b: t.n(
                                i === n.jgchartData.length - 1 ? "ra-right" : ""
                              ),
                              c: e.color,
                              d: i !== n.jgchartData.length - 1,
                            },
                            (n.jgchartData.length, {}),
                            {
                              e: i,
                              f: t.n(
                                i === n.jgchartData.length - 1 ? "nomar" : ""
                              ),
                              g: "".concat(e.width, "%"),
                            }
                          );
                        }),
                        d: t.n(1 === n.jgchartData.length ? "ra-all" : ""),
                        e: t.f(n.jgchartData, function (e, i, a) {
                          return {
                            a: e.color,
                            b: t.t(e.name),
                            c: t.t(e.num),
                            d: t.n(
                              i === n.jgchartData.length - 1 ? "no-mar" : ""
                            ),
                            e: i,
                          };
                        }),
                        f: t.t(n.isHS ? "" : "%"),
                        g: n.jgchartData.length <= 2,
                      },
                      n.jgchartData.length <= 2 ? { h: t.t(n.pjNum) } : {},
                      { i: n.jgchartData.length > 2 },
                      n.jgchartData.length > 2 ? { j: t.t(n.pjNum) } : {}
                    )
                  : {},
                { k: n.isHS },
                n.isHS
                  ? t.e({ l: n.pjNum }, (n.pjNum, {}), {
                      m: t.f(n.jgList, function (e, i, n) {
                        return {
                          a: t.t(e.fbrq && e.fbrq.slice(0, 10)),
                          b: t.t(e.jgjc),
                          c: t.t(e.tzpj),
                          d: i,
                        };
                      }),
                    })
                  : {},
                { n: n.jgList.length && !n.isHS },
                n.jgList.length && !n.isHS
                  ? {
                      o: t.f(n.jgList, function (e, i, a) {
                        return t.e(
                          {
                            a: t.t(e.title || e.ybInfo.title),
                            b: t.t(e.jgjc),
                            c: t.t(e.time || (e.ybInfo && e.ybInfo.time)),
                            d: i !== n.jgList.length - 1,
                          },
                          (n.jgList.length, {}),
                          {
                            e: i,
                            f: t.o(
                              function (t) {
                                return o.gotoNewsDetail(e);
                              },
                              5786,
                              i
                            ),
                          }
                        );
                      }),
                    }
                  : {},
                {
                  p: t.n(r.isMP ? "mp" : ""),
                  q: t.n("skin-".concat(n.theme)),
                  r: t.o(function (t) {
                    return o.gotoJGDetail();
                  }, 5787),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-796afa13"],
  ]);
wx.createComponent(n);
