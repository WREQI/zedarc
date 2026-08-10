var i = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  e = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  r = function (i, e, n) {
    return e in i
      ? t(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (i[e] = n);
  },
  h = function (t, e) {
    for (var n in e || (e = {})) s.call(e, n) && r(t, n, e[n]);
    if (o) {
      var h,
        c = i(o(e));
      try {
        for (c.s(); !(h = c.n()).done; ) {
          n = h.value;
          a.call(e, n) && r(t, n, e[n]);
        }
      } catch (i) {
        c.e(i);
      } finally {
        c.f();
      }
    }
    return t;
  },
  c = function (i, t) {
    return e(i, n(t));
  },
  l = require("../../../../common/vendor.js"),
  p = require("view/mins.js"),
  u = {
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
      options: function (i, t) {
        var e = this,
          n = this.event && this.event.isCrossLine;
        if (
          (i.isTrading || (this.view && this.view.clearShine()),
          i.options.minsIndicator !== t.options.minsIndicator)
        )
          n && this.event.hideCrossLine(),
            this.view && this.view.switchIndicator(i.options.minsIndicator);
        else if (
          i.options.showAuction !== t.options.showAuction ||
          i.options.auctionCount !== t.options.auctionCount
        )
          this.view && this.view.clearShine(), this.init();
        else if (
          i.options.labels &&
          i.options.labels.length > 0 &&
          t.options.labels &&
          t.options.labels.length > 0 &&
          i.options.labels[0] !== t.options.labels[0]
        )
          this.init();
        else if (i.options.hideIndicator !== t.options.hideIndicator)
          this.view && this.view.clearShine(), this.init();
        else if (i.options.showIOPV !== t.options.showIOPV) this.init();
        else {
          if (n || !this.view) return;
          i.data &&
            this.view.draw({
              data: i.data,
              auctionData: i.auctionData,
              isTrading: i.isTrading,
            }),
            this.isMini &&
              this.$emit("getInitData", function (t) {
                e.view &&
                  e.view.draw({
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
        ratio: this.options.devicePixelRatio || p.getPixelRatio(),
        isMini: !!this.options.platform || p.isMiniPorgram(),
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
          l.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#".concat(i.cid))
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e;
              if (
                (null == t ? void 0 : t.length) &&
                (null == (e = t[0]) ? void 0 : e.node)
              ) {
                var n = t[0].node;
                (n.width = i.width * i.ratio),
                  (n.height = i.height * i.ratio),
                  (i.elem = n),
                  p.PreLoadImages.initForMP(i.elem),
                  setTimeout(function () {
                    i.init();
                  }, 0);
              } else i.$emit("error", { key: "query element error" });
            });
        }
      },
      init: function () {
        var i = this;
        if (this.elem) {
          (this.options.options.minsIndicator &&
            !this.options.options.isHistoryMins) ||
            (this.options.options.minsIndicator = "volume"),
            this.isMini &&
              this.setDisableScroll(
                "mins-landscape" === this.options.options.layout
              );
          try {
            var t = getComputedStyle(document.documentElement),
              e = t.getPropertyValue("--color-rise"),
              n = t.getPropertyValue("--color-drop"),
              o = t.getPropertyValue("--color-blue");
            if (e && n && o) {
              (p.Color.mins.plain.rise = e),
                (p.Color.mins.plain.drop = n),
                (p.Color.mins.plain.chart.priceLine = o);
              var s = parseInt(o.trim().slice(1, 3), 16),
                a = parseInt(o.trim().slice(3, 5), 16),
                r = parseInt(o.trim().slice(5, 7), 16);
              (p.Color.mins.plain.chart.rgba.shinePoint = "rgba("
                .concat(s, ", ")
                .concat(a, ", ")
                .concat(r, ", 1)")),
                (p.Color.mins.plain.chart.avgPriceLine = "#dac100");
            }
          } catch (i) {}
          try {
            (this.view = new p.Mins(
              this.elem,
              this.placeShine,
              c(h({}, this.options.options), {
                isMiniPorgram: this.isMini,
                canvasWidth: this.width,
                canvasHeight: this.height,
                devicePixelRatio: this.ratio,
              }),
              this.isMini ? 2 : 0,
              null
            )),
              this.options.data
                ? this.repaint()
                : this.$emit("getInitData", function (t) {
                    i.repaint(t);
                  });
            var l = this.view.layout,
              u = l.height,
              v = l.indicatorHeight;
            (this.firstPercent = 1 - v / u), this.initEvent();
          } catch (i) {
            this.$emit("error", {
              key: i.message,
              options: c(h({}, this.options.options), {
                isMiniPorgram: this.isMini,
                canvasWidth: this.width,
                canvasHeight: this.height,
                devicePixelRatio: this.ratio,
              }),
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
        var i = this,
          t = this.options.options;
        this.event ||
          (this.event = new p.StockChartEvent(
            this.elem,
            c(h({}, this.options.options), { isMiniPorgram: this.isMini }),
            {
              onTap: function (e) {
                if ("fmins" !== t.type && !t.isHistoryMins) {
                  var n = e.changedTouches[0];
                  if (
                    /portrait/.test(t.layout) ||
                    (t.isWzqMiniProgram && !t.hideIndicator)
                  ) {
                    if (i.view && i.view.isTapButtonRegion(n))
                      return (
                        e.preventDefault && e.preventDefault(),
                        i.$emit("onPopup", 1),
                        !0
                      );
                    if (i.view && i.view.isTapIndicatorRegion(n)) {
                      var o = i.view.switchIndicator();
                      return i.$emit("onChange", o), !0;
                    }
                  }
                  if (i.view && i.view.isTapTipRegion(n))
                    return i.$emit("onTipTap", "iopv"), !0;
                }
                i.$emit("onTap", e);
              },
              onCrossLineTap: function (t) {
                var e = t.changedTouches[0];
                if (i.view && i.view.isTapTradeBarRegion(e))
                  return i.$emit("onBarTap", "trade", i.view.tradeBarData), !0;
              },
              onDoubleTap: function (t) {
                i.$emit("onDoubleTap", t);
              },
              onTouchMove: function (t) {
                i.view &&
                  (i.setDisableScroll(i.isMini),
                  i.view.showCrossLine(t, function (t) {
                    i.$emit("onTouchMove", h({}, t));
                  }));
              },
              onTouchCancle: function () {
                i.isMini &&
                  "mins-landscape" != i.options.options.layout &&
                  i.setDisableScroll(!1),
                  i.view && (i.view.draw(), i.$emit("onTouchCancle"));
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
      repaint: function (i) {
        if (!this.event || !this.event.isCrossLine) {
          var t = {
            isTrading: this.options.isTrading,
            isAuctionTime: this.options.isAuctionTime,
            data: this.options.data,
            auctionData: this.options.auctionData,
          };
          this.view && this.view.draw(h(h({}, t), i));
        }
      },
    },
  },
  v = l._export_sfc(u, [
    [
      "render",
      function (i, t, e, n, o, s) {
        return l.e(
          { a: o.showChart },
          o.showChart
            ? {
                b: e.cid,
                c: e.width * o.ratio,
                d: e.height * o.ratio,
                e: e.width + "px",
                f: e.height + "px",
                g: s.refName,
                h: o.disableScroll,
                i: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 3231),
                j: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 3232),
                k: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 3233),
                l: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 3234),
                m: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 3235),
                n: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 3236),
                o: l.s(s.shineDotStyle),
                p: l.s(s.shineDotStyle),
                q: l.s(s.shinePosStyle),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(v);
