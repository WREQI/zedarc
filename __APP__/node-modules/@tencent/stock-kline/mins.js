var i = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = {
    props: {
      options: { type: Object, default: {} },
      width: { type: Number },
      height: { type: Number },
      cid: { type: String, default: "mins" },
    },
    computed: {
      refName: function () {
        return "mins-canvas".concat(this.options.options.type);
      },
      shinePosStyle: function () {
        return -1 === this.shinePos.x
          ? "display: none"
          : "position: absolute;left: "
              .concat(this.shinePos.x, "px; top: ")
              .concat(this.shinePos.y, "px;");
      },
      shineDotStyle: function () {
        return "background: ".concat(this.shinePos.color, ";");
      },
    },
    watch: {
      options: function (i, e) {
        var n = this,
          o = this.event && this.event.isCrossLine;
        if (
          (i.isTrading || (this.view && this.view.clearShine()),
          i.options.minsIndicator !== e.options.minsIndicator)
        )
          o && this.event.hideCrossLine(),
            this.view && this.view.switchIndicator(i.options.minsIndicator);
        else if (
          i.options.showAuction !== e.options.showAuction ||
          i.options.auctionCount !== e.options.auctionCount
        )
          this.view && this.view.clearShine(), this.init();
        else if (
          i.options.labels &&
          i.options.labels.length > 0 &&
          e.options.labels &&
          e.options.labels.length > 0 &&
          i.options.labels[0] !== e.options.labels[0]
        )
          this.init();
        else if (i.options.hideIndicator !== e.options.hideIndicator)
          this.view && this.view.clearShine(), this.init();
        else if (i.options.showIOPV !== e.options.showIOPV) this.init();
        else {
          if (o || !this.view) return;
          i.data &&
            this.view.draw({
              data: t.cloneDeep(i.data),
              auctionData: i.auctionData,
              isTrading: i.isTrading,
            }),
            this.isMini &&
              this.$emit("getInitData", function (t) {
                n.view &&
                  n.view.draw({
                    data: t.data,
                    auctionData: t.auctionData,
                    isTrading: i.isTrading,
                    isAuctionTime: i.isAuctionTime,
                  });
              });
        }
      },
    },
    data: function () {
      return {
        ratio: this.options.devicePixelRatio || t.getPixelRatio(),
        isMini: !!this.options.platform || t.isMiniPorgram(),
        showChart: !0,
        shinePos: { x: -1, y: -1, color: "transparent" },
        disableScroll: !1,
      };
    },
    mounted: function () {
      var i = this;
      this.isMini
        ? this.$nextTick(function () {
            i.queryCanvasForMP();
          })
        : ((this.elem =
            this.$refs["mins-canvas".concat(this.options.options.type)]),
          this.init());
    },
    beforeDestroy: function () {
      this.view && (this.view.ctx = null),
        (this.elem = null),
        (this.view = null),
        (this.event = null),
        (this.showChart = !1);
    },
    methods: {
      queryCanvasForMP: function () {
        if (this.isMini) {
          var i = this;
          t.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#".concat(i.cid))
            .fields({ node: !0, size: !0 })
            .exec(function (e) {
              var n;
              if (
                (null == e ? void 0 : e.length) &&
                (null == (n = e[0]) ? void 0 : n.node)
              ) {
                var o = e[0].node;
                (o.width = i.width * i.ratio),
                  (o.height = i.height * i.ratio),
                  (i.elem = o),
                  t.PreLoadImages.initForMP(i.elem),
                  setTimeout(function () {
                    i.init();
                  }, 0);
              } else i.$emit("error", { key: "query element error" });
            });
        }
      },
      init: function () {
        var e = this;
        if (this.elem) {
          (this.options.options.minsIndicator &&
            !this.options.options.isHistoryMins) ||
            (this.options.options.minsIndicator = "volume"),
            this.isMini &&
              this.setDisableScroll(
                "mins-landscape" === this.options.options.layout
              );
          try {
            var n = getComputedStyle(document.documentElement),
              o = n.getPropertyValue("--color-rise"),
              s = n.getPropertyValue("--color-drop"),
              a = n.getPropertyValue("--color-blue");
            if (o && s && a) {
              (t.Color.mins.plain.rise = o),
                (t.Color.mins.plain.drop = s),
                (t.Color.mins.plain.chart.priceLine = a);
              var r = parseInt(a.trim().slice(1, 3), 16),
                h = parseInt(a.trim().slice(3, 5), 16),
                c = parseInt(a.trim().slice(5, 7), 16);
              (t.Color.mins.plain.chart.rgba.shinePoint = "rgba("
                .concat(r, ", ")
                .concat(h, ", ")
                .concat(c, ", 1)")),
                (t.Color.mins.plain.chart.avgPriceLine = "#dac100");
            }
          } catch (i) {}
          try {
            (this.view = new t.Mins(
              this.elem,
              this.placeShine,
              i(
                i({}, this.options.options),
                {},
                {
                  isMiniPorgram: this.isMini,
                  canvasWidth: this.width,
                  canvasHeight: this.height,
                  devicePixelRatio: this.ratio,
                }
              ),
              this.isMini ? 2 : 0,
              null
            )),
              this.options.data
                ? this.repaint()
                : this.$emit("getInitData", function (i) {
                    e.repaint(i);
                  });
            var p = this.view.layout,
              l = p.height,
              u = p.indicatorHeight;
            (this.firstPercent = 1 - u / l), this.initEvent();
          } catch (t) {
            this.$emit("error", {
              key: t.message,
              options: i(
                i({}, this.options.options),
                {},
                {
                  isMiniPorgram: this.isMini,
                  canvasWidth: this.width,
                  canvasHeight: this.height,
                  devicePixelRatio: this.ratio,
                }
              ),
            });
          }
        }
      },
      dispatchEvent: function (i) {
        !this.options.options.disableInteract &&
          this.view &&
          (this.event || this.initEvent(), this.event.handleEvent(i));
      },
      placeShine: function (i, t, e) {
        this.shinePos = { x: i, y: t, color: e };
      },
      setDisableScroll: function (i) {
        this.disableScroll = i;
      },
      cancelEvent: function () {
        this.event && this.event.cancleAll();
      },
      initEvent: function () {
        var e = this,
          n = this.options.options;
        this.event ||
          (this.event = new t.StockChartEvent(
            this.elem,
            i(i({}, this.options.options), {}, { isMiniPorgram: this.isMini }),
            {
              onTap: function (i) {
                if ("fmins" !== n.type && !n.isHistoryMins) {
                  var t = i.changedTouches[0];
                  if (
                    /portrait/.test(n.layout) ||
                    (n.isWzqMiniProgram && !n.hideIndicator)
                  ) {
                    if (e.view && e.view.isTapButtonRegion(t))
                      return (
                        i.preventDefault && i.preventDefault(),
                        e.$emit("onPopup", 1),
                        !0
                      );
                    if (e.view && e.view.isTapIndicatorRegion(t)) {
                      var o = e.view.switchIndicator();
                      return e.$emit("onChange", o), !0;
                    }
                  }
                  if (e.view && e.view.isTapTipRegion(t))
                    return e.$emit("onTipTap", "iopv"), !0;
                }
                e.$emit("onTap", i);
              },
              onCrossLineTap: function (i) {
                var t = i.changedTouches[0];
                if (e.view && e.view.isTapTradeBarRegion(t))
                  return e.$emit("onBarTap", "trade", e.view.tradeBarData), !0;
              },
              onDoubleTap: function (i) {
                e.$emit("onDoubleTap", i);
              },
              onTouchMove: function (t) {
                e.view &&
                  (e.setDisableScroll(e.isMini),
                  e.view.showCrossLine(t, function (t) {
                    e.$emit("onTouchMove", i({}, t));
                  }));
              },
              onTouchCancle: function () {
                e.isMini &&
                  "mins-landscape" != e.options.options.layout &&
                  e.setDisableScroll(!1),
                  e.view && (e.view.draw(), e.$emit("onTouchCancle"));
              },
            }
          ));
      },
      getPointPosition: function (i, t) {
        return this.view ? this.view.getPointPosition(i, t) : null;
      },
      updateTradeData: function (i) {
        this.view && this.view.updateTradeData(i);
      },
      clearTradeData: function () {
        this.view && this.view.clearTradeData();
      },
      repaint: function (t) {
        if (!this.event || !this.event.isCrossLine) {
          var e = {
            isTrading: this.options.isTrading,
            isAuctionTime: this.options.isAuctionTime,
            data: this.options.data,
            auctionData: this.options.auctionData,
          };
          this.view && this.view.draw(i(i({}, e), t));
        }
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (i, e, n, o, s, a) {
        return t.e(
          { a: s.showChart },
          s.showChart
            ? {
                b: n.cid,
                c: n.width * s.ratio,
                d: n.height * s.ratio,
                e: n.width + "px",
                f: n.height + "px",
                g: a.refName,
                h: s.disableScroll,
                i: t.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                j: t.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                k: t.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                l: t.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                m: t.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                n: t.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                o: t.s(a.shineDotStyle),
                p: t.s(a.shineDotStyle),
                q: t.s(a.shinePosStyle),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(n);
