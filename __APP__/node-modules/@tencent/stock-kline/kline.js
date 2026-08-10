var i = require("../../../@babel/runtime/helpers/typeof"),
  t = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = {
    props: {
      options: { type: Object, default: {} },
      width: { type: Number },
      height: { type: Number },
      cid: { type: String, default: "kline" },
      splitLayer: { type: Boolean, default: !1 },
    },
    watch: {
      options: function (i, t) {
        var e = this,
          n = this.event && this.event.isCrossLine,
          o = "kline-landscape" === i.options.layout;
        if (i.options.type !== t.options.type)
          n && this.event.hideCrossLine(), this.init();
        else if (i.options.fq !== t.options.fq)
          n && this.event.hideCrossLine(), this.init();
        else if (
          o ||
          i.options.setting.indicatorCount === t.options.setting.indicatorCount
        )
          if (i.options.isShowAreaSelect !== t.options.isShowAreaSelect)
            n && this.event.hideCrossLine(),
              this.view &&
                this.view.props &&
                ((this.view.props.isShowAreaSelect =
                  i.options.isShowAreaSelect),
                this.view.initAreaSelect && this.view.initAreaSelect(),
                this.handleDraw(),
                this.view.props.isShowAreaSelect &&
                  this.$emit(
                    "areaSelectChange",
                    this.view.getAreaSelectData()
                  ));
          else if (i.options.isShowChip !== t.options.isShowChip)
            this.chipSwitchChange(i.options.isShowChip);
          else if (i.options.isShowVolatile !== t.options.isShowVolatile)
            this.toggleAIVolatile(i.options.isShowVolatile);
          else if (
            i.options.isShowSupPreSignal !== t.options.isShowSupPreSignal
          )
            this.toggleSupPreSignal(i.options.isShowSupPreSignal);
          else if (
            i.options &&
            i.options.setting &&
            t.options &&
            t.options.setting &&
            i.options.setting.maTypes.toString() !==
              t.options.setting.maTypes.toString()
          )
            n && this.event.hideCrossLine(), this.init();
          else if (
            i.options &&
            i.options.setting &&
            t.options &&
            t.options.setting &&
            i.options.setting.tradeLine !== t.options.setting.tradeLine
          )
            n && this.event.hideCrossLine(), this.init();
          else {
            var s = !1;
            i.options.mainIndicator !== t.options.mainIndicator &&
              ((s = !0),
              n && this.event.hideCrossLine(),
              this.model &&
                (this.model.switchIndicator(0, i.options.mainIndicator),
                this.model.repaint(function (t, n) {
                  e.view &&
                    e.view.props &&
                    (e.view.props.mainIndicator = i.options.mainIndicator),
                    e.handleDraw(t, n);
                })));
            for (var a = i.options.setting.indicatorCount, r = 1; r <= a; r++) {
              var h = "".concat(
                ["curr", "second", "third", "fourth"][r - 1],
                "Indicator"
              );
              i.options[h] !== t.options[h] &&
                ((s = !0),
                n && this.event.hideCrossLine(),
                this.model && this.model.switchIndicator(r, i.options[h]),
                this.view && this.view.switchIndicator(r, i.options[h]));
            }
            if (n || s || !this.model) return;
            i.data &&
              this.model.updateRepaint(i.data, function (i, t) {
                e.view && e.view.draw(i, t);
              }),
              this.isMini &&
                this.$emit("getInitData", function (i) {
                  e.model.updateRepaint(i, function (i, t) {
                    e.view && e.handleDraw(i, t);
                  });
                });
          }
        else n && this.event.hideCrossLine(), this.init();
      },
    },
    data: function () {
      return {
        ratio: this.options.devicePixelRatio || e.getPixelRatio(),
        type: "",
        isMini: !!this.options.platform || e.isMiniPorgram(),
        disableScroll: !1,
      };
    },
    mounted: function () {
      var i = this,
        t = this.options.platform || e.getPlatform();
      if (((this.isAndroid = "android" === t), this.isMini))
        this.$nextTick(function () {
          i.queryCanvasForMP();
        });
      else {
        var n = this.$refs["".concat(this.cid, "-content-ref")];
        (this.contentElem = n),
          this.splitLayer
            ? (this.crossElem = this.$refs["".concat(this.cid, "-cross-ref")])
            : (this.crossElem = n),
          this.init();
      }
    },
    beforeDestroy: function () {
      (this.contentElem = null),
        (this.crossElem = null),
        (this.view = null),
        (this.event = null),
        (this.model = null);
    },
    methods: {
      queryCanvasForMP: function () {
        if (this.isMini) {
          var i = this;
          e.wx$1
            .createSelectorQuery()
            .in(this)
            .selectAll("#".concat(i.cid, "-content,#").concat(i.cid, "-cross"))
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var n, o;
              if (
                (null == t ? void 0 : t.length) &&
                (null == (n = t[0][0]) ? void 0 : n.node)
              ) {
                var s = t[0][0].node;
                if (
                  ((s.width = i.width * i.ratio),
                  (s.height = i.height * i.ratio),
                  (i.contentElem = s),
                  i.splitLayer)
                )
                  if (null == (o = t[0][1]) ? void 0 : o.node) {
                    var a = t[0][1].node;
                    (a.width = i.width * i.ratio),
                      (a.height = i.height * i.ratio),
                      (i.crossElem = a);
                  } else i.crossElem = s;
                else i.crossElem = s;
                e.PreLoadImages.initForMP(i.contentElem),
                  setTimeout(function () {
                    i.init();
                  }, 0);
              } else i.$emit("error", { key: "query element error" });
            });
        }
      },
      setDisableScroll: function (i) {
        this.disableScroll = i;
      },
      onAddedChange: function (i) {
        var t = this;
        this.model &&
          this.model.ZXRepaint(i, function (i, e) {
            t.handleDraw(i, e);
          });
      },
      updateTradeData: function (i) {
        var t = this;
        try {
          this.model &&
            this.model.tradeRepaint &&
            this.model.tradeRepaint(i, function (i, e) {
              t.handleDraw(i, e);
            });
        } catch (i) {}
      },
      clearTradeData: function () {
        var i = this;
        this.model.tradeClear(function (t, e) {
          i.handleDraw(t, e);
        });
      },
      toggleMACDPattern: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.macdPattern = i),
          this.model.macdPatternRepaint(i, function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleAIVolatile: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.tradeLine = !1),
          (this.view.props.isShowVolatile = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleSupPreSignal: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.isShowSupPreSignal = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      closeMACDPatternHint: function () {
        var i = this;
        this.view &&
          this.view.props &&
          ((this.view.props.showMACDPatternHint = !1),
          this.model.repaint(function (t, e) {
            i.handleDraw(t, e);
          }));
      },
      closeMACDRedDot: function () {
        var i = this;
        this.view &&
          this.view.props &&
          ((this.view.props.showMACDRedDot = !1),
          this.model.repaint(function (t, e) {
            i.handleDraw(t, e);
          }));
      },
      toggleMagicNine: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.magicNine = i),
          this.model.magicNineRepaint(i, function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleTradeSecret: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.tradeSecret = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      updateTradeSecret: function (i) {
        var t = this;
        this.model.tradeSecretRepaint(i, function (i, e) {
          t.handleDraw(i, e);
        });
      },
      toggleGap: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.gap = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleYkStyle: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.yangKStyle = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleTradeLine: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.tradeLine = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleSupportPressureLine: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.supportPressureLine = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleTrendLineMiniWzq: function (i) {
        var t = this;
        this.view &&
          this.view.props &&
          ((this.view.props.setting.trendline = i),
          (this.model.setting.trendline = i),
          this.model.repaint(function (i, e) {
            t.handleDraw(i, e);
          }));
      },
      toggleTrendLine: function (i) {
        this.view &&
          this.view.props &&
          ((this.view.props.setting.trendline = i),
          (this.model.setting.trendline = i),
          this.model.getCurrTrendline());
      },
      removeGuideHint: function () {
        var i = this;
        this.view &&
          this.view.props &&
          ((this.view.props.guideMode = void 0),
          this.model.repaint(function (t, e) {
            i.handleDraw(t, e);
          }));
      },
      getSiblingData: function (i) {
        return this.model.getSiblingData(i);
      },
      getRightData: function () {
        return this.model.getRightData();
      },
      switchCrossLine: function (i) {
        var t = this;
        if (this.event && this.event.isCrossLine) {
          var e = this.view.lastScene;
          if (!e) return;
          var n = e.eventPoint,
            o = e.count;
          (0 === n.index && -1 === i) || (n.index === o - 1 && 1 === i)
            ? this.model.fetchForSwipe(i, function (i, e) {
                t.handleDraw(i, e), t._switchCrossLine(0);
              })
            : this._switchCrossLine(i);
        } else this._switchCrossLine("right");
      },
      _switchCrossLine: function (i) {
        var e = this;
        this.view.showCrossLine(i, function (i) {
          (e.event.isCrossLine = !0),
            (e.event.isCrossLineTouchEnd = !0),
            e.$emit("onTouchMove", t({}, i));
        });
      },
      toggleKlineWithHistoryMins: function (i) {
        this.event && this.event.toggleKlineWithHistoryMins(i);
      },
      dispatchEvent: function (i) {
        var t = (this.options || {}).options || {},
          e = t.disableInteract,
          n = t.type;
        !e &&
          this.view &&
          ((this.event && this.type === n) ||
            ((this.type = n), this.initEvent()),
          this.event.handleEvent(i));
      },
      cancelEvent: function () {
        this.event && this.event.cancleAll();
      },
      init: function () {
        if (this.contentElem) {
          var n = this.options,
            o = n.options,
            s = n.themeSkin;
          this.isMini && this.setDisableScroll("kline-landscape" === o.layout),
            o.isSupportChip &&
              o.isShowChip &&
              (o.count = "kline-landscape" === o.layout ? 71 : 45);
          var a = o.type,
            r = e.isRichKline(a) || "line" === o.candleType,
            h = this;
          try {
            if (!this.isMini) {
              var p = getComputedStyle(document.documentElement),
                c = p.getPropertyValue("--color-rise"),
                l = p.getPropertyValue("--color-drop");
              c &&
                l &&
                ((e.Color.kline.plain.rise = c),
                (e.Color.kline.plain.drop = l));
            }
            "object" == i(s) &&
              Object.keys(s).map(function (i) {
                var n = s[i];
                n &&
                  e.Color.kline[i] &&
                  (e.Color.kline[i] = t(t({}, e.Color.kline[i]), n));
              });
          } catch (i) {}
          try {
            var d = this.contentElem;
            this.splitLayer && (d = [this.contentElem, this.crossElem]),
              (this.view = new e.Kline(
                d,
                t(
                  t({}, o),
                  {},
                  {
                    isMiniPorgram: this.isMini,
                    canvasWidth: this.width,
                    canvasHeight: this.height,
                    fixedWidth: r,
                    devicePixelRatio: this.ratio,
                    splitLayer: this.splitLayer,
                    getXAxis: function (i, t, n, s, r, h) {
                      var p = n.time || "",
                        c = s[i - 1] ? s[i - 1].time : "";
                      if (e.isNewBoundary(a, p, c, t, r, h, o.market))
                        return { text: e.formatAxisTime(p, a), x: t };
                    },
                  }
                ),
                this.isMini ? 2 : 0
              ));
          } catch (i) {
            this.$emit("error", {
              key: i.message,
              options: t(
                t({}, o),
                {},
                {
                  isMiniPorgram: this.isMini,
                  canvasWidth: this.width,
                  canvasHeight: this.height,
                  fixedWidth: r,
                  devicePixelRatio: this.ratio,
                }
              ),
            });
          }
          try {
            var v = this.view.layout,
              u = v.height,
              w = v.indicatorHeight,
              g = o.setting.indicatorCount,
              m = 1 - w / u,
              f = w / u / g;
            this.indicatorPercent = [];
            for (var S = 0; S < g; S++) this.indicatorPercent.push(m + f * S);
          } catch (i) {}
          var y = new e.ListMgr(
            t(
              t(
                {
                  request: function (i) {
                    return new Promise(function (t, e) {
                      var n = setTimeout(function () {
                        e();
                      }, 5e3);
                      if (i)
                        if (/-/.test(i) && "bc" !== o.market) {
                          var s = new Date(i);
                          s.setDate(s.getDate() - 1);
                          var a = s.getFullYear(),
                            r =
                              s.getMonth() + 1 < 10
                                ? "0".concat(s.getMonth() + 1)
                                : s.getMonth() + 1,
                            p =
                              s.getDate() < 10
                                ? "0".concat(s.getDate())
                                : s.getDate();
                          h.$emit(
                            "getMore",
                            "".concat(a).concat(r).concat(p),
                            function (i) {
                              t(i), clearTimeout(n);
                            }
                          );
                        } else
                          h.$emit("getMore", i, function (i) {
                            t(i), clearTimeout(n);
                          });
                      else
                        h.options.data
                          ? (t(h.options.data), clearTimeout(n))
                          : h.$emit("getInitData", function (i) {
                              t(i), clearTimeout(n);
                            });
                    });
                  },
                  query: function () {
                    return new Promise(function (i) {
                      h.$emit("queryPriceRemind", function (t) {
                        i(t);
                      });
                    });
                  },
                },
                o
              ),
              {},
              {
                defaultCount:
                  o.count || (h.view && h.view.props.isShowChip ? 45 : 60),
                queryCount: o.queryCount || 320,
              }
            )
          );
          try {
            y.fetchForInit(function (i, t) {
              if (h.view) {
                if (
                  (o.isSupportChip && h.updateChip(i[i.length - 1]),
                  h.view.initAreaSelect && h.view.initAreaSelect(i),
                  y.macdPatternHelper)
                ) {
                  var e = y.macdPatternHelper,
                    n = e.delta,
                    s = e.item;
                  n && h.view.changeCount(n),
                    h.view.draw(i, t, s),
                    h.changeBoardOptions();
                } else
                  /Focus/.test(o.guideMode) && y.guideModeDelta > 0
                    ? (h.view.changeCount(y.guideModeDelta), h.handleDraw(i, t))
                    : h.handleDraw(i, t);
                o.enableDrawBoard && h.initBoard(),
                  h.view.props.isShowAreaSelect &&
                    h.$emit("areaSelectChange", h.view.getAreaSelectData());
              }
            }),
              (this.model = y),
              (this.view.props.model = y);
          } catch (i) {
            this.$emit("error", {
              key: "[init modal error]: ".concat(i.message),
              options: t(
                t({}, o),
                {},
                {
                  isMiniPorgram: this.isMini,
                  canvasWidth: this.width,
                  canvasHeight: this.height,
                  fixedWidth: r,
                  devicePixelRatio: this.ratio,
                }
              ),
            });
          }
        }
      },
      initEvent: function () {
        var i = this,
          n = (this.options || {}).options,
          o = (n || {}).type,
          s = e.isRichKline(o);
        this.event = new e.StockChartEvent(
          this.crossElem,
          t(t({}, this.options.options), {}, { isMiniPorgram: this.isMini }),
          {
            onTouchStart: function (t) {
              i.view.props &&
                i.view.props.isShowAreaSelect &&
                i.view.isTapAreaSelect(t);
            },
            onTap: function (t) {
              var e = t.changedTouches[0],
                o = i.view.props || {},
                s = o.isShowAreaSelect,
                a = void 0 !== s && s,
                r = o.isShowChip,
                h = void 0 !== r && r;
              if (a && i.view.isTapAreaSelect(e))
                return (
                  i.$emit("onAreaSwitch", {
                    isShowAreaSelect: !a,
                    source: "kline",
                  }),
                  !0
                );
              if (n.isSupportChip && i.view.isTapChipSwitch(e))
                return i.$emit("onChipSwitch", { isShowChip: !h }), !0;
              if (n.isSupportChip && i.view.isTapChipType(e))
                return i.handleDraw(), !0;
              if (n.isSupportChip && i.view.isTapChipTextRegion(e))
                return i.handleDraw(), !0;
              if (
                (i.view.isTapMacdRnkEntry(e) &&
                  "macdRankEntry" === i.view.isTapMacdRnkEntry(e) &&
                  (t.preventDefault && t.preventDefault(),
                  i.$emit("macdRankEntry")),
                i.view.candle.candleIndicator.isTapTipRegion(e))
              )
                return i.$emit("onTipTap", "tradeLine"), !0;
              if (
                i.view.props.guideMode &&
                i.view.candle.isTapGuideHintRegion(e)
              )
                return i.$emit("onTipTap", "guideHint"), !0;
              if (i.view.isTapTradeEntranceBarRegion(e))
                return i.$emit("onBarTap", "trade"), !0;
              if (
                "kline-portrait" === n.layout ||
                (n.isWzqMiniProgram && !n.hideIndicator)
              ) {
                var p = i.view.isTapButtonRegion(e);
                if (!isNaN(p))
                  return (
                    t.preventDefault && t.preventDefault(),
                    i.$emit("onPopup", p),
                    !0
                  );
                if ("foldArrow" === p)
                  return (
                    t.preventDefault && t.preventDefault(),
                    i.view.draw(null, null, null, null, !0),
                    i.changeBoardOptions(),
                    !0
                  );
                var c = i.view.isTapIndicatorRegion(e);
                if (c > 0) {
                  var l = i.view.getNextIndicator(c);
                  return (
                    i.model.switchIndicator(c, l),
                    i.view.switchIndicator(c, l),
                    i.$emit("onChange", c, l),
                    !0
                  );
                }
              }
              return "kline-portrait" === n.layout &&
                i.view.isTapKlineRegin(e) &&
                n.isWzqMiniProgram
                ? (i.$emit("onTap", t), !0)
                : void 0;
            },
            onCrossLineTap: function (t) {
              var e = t.changedTouches[0];
              return i.view.isTapZxBarRegion(e)
                ? (i.$emit("onAreaSwitch", {
                    isShowAreaSelect: !0,
                    source: "cross",
                  }),
                  !0)
                : i.view.isTapTradeBarRegion(e)
                ? (i.$emit("onBarTap", "trade", i.view.tradeBarData), !0)
                : i.view.crossLine.isTapTimeBarRegion(e)
                ? (i.event.isKlineWithHistoryMins ||
                    (i.$emit("onBarTap", "time", i.view.crossLine.timeBarData),
                    i.toggleKlineWithHistoryMins(!0)),
                  !0)
                : void 0;
            },
            onDoubleTap: function (t) {
              i.$emit("onDoubleTap", t);
            },
            onSwipeX: function (t) {
              if (i.view) {
                if (i.model.needBounce) {
                  if (!t)
                    return void i.model.fetchBoundary(function (t, e) {
                      i.view &&
                        (n.isSupportChip && t && i.updateChip(t[t.length - 1]),
                        i.view.props.isShowAreaSelect &&
                          (i.view.areaSelect.update("swipe", { list: t }),
                          i.$emit(
                            "areaSelectChange",
                            i.view.getAreaSelectData()
                          )),
                        i.handleDraw(t, e));
                    });
                  if (i.model.reachBoundary)
                    return (
                      (i.model.reachBoundary = !1),
                      void (i.event.isInertia = !1)
                    );
                }
                if (t) {
                  var e =
                    Math.ceil(i.view.props.count / 60) *
                    (i.event.isInertia ? 3 : 1);
                  i.model &&
                    i.model.fetchForSwipe(t < 0 ? -e : e, function (t, e) {
                      i.view &&
                        (n.isSupportChip && i.updateChip(t[t.length - 1]),
                        i.view.props.isShowAreaSelect &&
                          (i.view.areaSelect.update("swipe", { list: t }),
                          i.$emit(
                            "areaSelectChange",
                            i.view.getAreaSelectData()
                          )),
                        i.handleDraw(t, e));
                    });
                } else i.handleDraw();
                i.$emit("onSwipeX", t);
              }
            },
            onSwipeY: function () {
              e.tradeShowBar && e.swiping && (e.setSwiping(!1), i.handleDraw());
            },
            onBeforeTouchMove: function (t) {
              return (
                !!(
                  i.view &&
                  i.view.props.isShowAreaSelect &&
                  i.view.hasAreaSelectActive()
                ) &&
                (i.view.touchMoveAreaSelect(t, i.changeBoardOptions),
                i.$emit("areaSelectChange", i.view.getAreaSelectData()),
                !0)
              );
            },
            onTouchMove: function (e) {
              if (
                !(!i.view || (i.view.props && i.view.props.isShowAreaSelect))
              ) {
                if (n.isSupportChip) {
                  var o = i.view.crossLine.changeCoords(e).index,
                    s = i.view.getValueY(e);
                  i.updateChip(i.view.data.items[o], s);
                }
                i.view.props &&
                  n.isWzqMiniProgram &&
                  (i.view.props.hideMainIndicatorText = !1),
                  i.setDisableScroll(i.isMini),
                  i.view.showCrossLine(e, function (e, n) {
                    i.$emit("onTouchMove", t({}, e)),
                      n && i.$emit("extraInfoSelected"),
                      i.changeBoardOptions();
                  });
              }
            },
            onTouchCancle: function () {
              i.isMini &&
                "kline-landscape" != n.layout &&
                i.setDisableScroll(!1),
                i.view &&
                  (n.isSupportChip &&
                    i.view.data.items.length &&
                    i.updateChip(
                      i.view.data.items[i.view.data.items.length - 1]
                    ),
                  i.view.props &&
                    n.isWzqMiniProgram &&
                    (i.view.props.hideMainIndicatorText =
                      "kline-landscape" !== n.layout),
                  i.handleDraw()),
                i.$emit("onTouchCancle");
            },
            onTouchEnd: function () {
              i.view &&
                i.view.props.isShowAreaSelect &&
                (i.view.cancelAreaActive(), i.handleDraw()),
                i.$emit("onTouchEnd");
            },
            onPinch: function (t, e) {
              if (!s) {
                var o = i.view.getRatio(t),
                  a = this.isAndroid ? 6 : 4,
                  r = e ? -a : a;
                i.model.fetchForPinch(o, r, function (t) {
                  var e = t.list,
                    o = t.extraData,
                    s = t.type,
                    a = void 0 === s ? "kline" : s;
                  i.view.changeLineType(a),
                    "line" !== a
                      ? (i.view.changeCount(r),
                        n.isSupportChip && i.updateChip(e[e.length - 1]),
                        i.view.props.isShowAreaSelect &&
                          (i.view.areaSelect.update("scale", {
                            list: e,
                            props: i.view.props,
                          }),
                          i.$emit(
                            "areaSelectChange",
                            i.view.getAreaSelectData()
                          )),
                        i.handleDraw(e, o))
                      : i.handleDraw();
                }),
                  i.$emit("onPinch", e);
              }
            },
            onPinchEnd: function () {
              i.$emit("onPinchEnd", {
                type: i.view.props.fixedWidth ? "line" : "candle",
              });
            },
          }
        );
      },
      updateChip: function (i, e) {
        if (i && this.view) {
          var n = this.view.layout.getChart(),
            o = {
              width:
                (this.view.layout.chipRegion.width - 10) / this.ratio + "px",
              height:
                (this.view.layout.chipRegion.height - n.height - n.y) /
                  this.ratio +
                "px",
            },
            s = this.model.getChipList(i, e);
          this.view.updateChip(s),
            this.$emit("ChipInfoChange", {
              layout: o,
              chipData: t(t({}, s), {}, { chipTime: i.time }),
            });
        }
      },
      chipSwitchChange: function (i) {
        if (this.view && this.view.layout && this.model) {
          var t = Math.ceil(
            this.view.layout.chipRegion.width / this.view.props.itemWidth
          );
          (this.model.count += i ? -t : t),
            i
              ? this.model.index + t < this.model.list.length &&
                (this.model.index += t)
              : (this.model.index = Math.max(this.model.index - t, 0)),
            this.model.getCurrTrendline(),
            this.view.updatePropByChip(
              i,
              this.model.list.slice(
                this.model.index,
                this.model.index + this.model.count
              )
            ),
            this.initBoard(!0);
        }
      },
      initBoard: function () {
        var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (
          this.options.options.enableDrawBoard &&
          this.view.layout &&
          this.view.layout.chart
        ) {
          var t = this.view.layout.chart,
            e = t.width,
            n = t.height,
            o = t.x,
            s = t.y;
          (this.boardStyle = {
            width: this.width,
            height: this.height,
            chart: {
              width: e / this.ratio,
              height: n / this.ratio,
              left: o / this.ratio,
              top: s / this.ratio,
            },
          }),
            this.changeBoardOptions(!0),
            this.$emit("drawInit", {
              layout: this.boardStyle,
              options: this.boardOptions,
              reload: !i,
            });
        }
      },
      changeBoardOptions: function (i) {
        if (
          this.options.options.enableDrawBoard &&
          this.view.data &&
          this.view.props &&
          this.view.candle
        ) {
          var t = this.view.props,
            e = t.count,
            n = t.itemWidth,
            o = t.barWidth,
            s = t.spaceWidth;
          (this.boardOptions = {
            chartType: "kline",
            type: this.options.options.type,
            xAxis: {
              count: e,
              itemWidth: n / this.ratio,
              barWidth: o / this.ratio,
              spaceWidth: s / this.ratio,
              viewItems: this.view.data.items.map(function (i) {
                return i.time;
              }),
              tradeDate: this.model.list.map(function (i) {
                return i.time;
              }),
            },
            yAxis: {
              maxMin: { max: this.view.candle.max, min: this.view.candle.min },
            },
            ctx: this.view.ctx,
          }),
            i ||
              this.$emit("optionChange", {
                layout: this.boardStyle,
                options: this.boardOptions,
              });
        }
      },
      handleDraw: function (i, t) {
        this.view &&
          (this.view.draw(i, t),
          this.changeBoardOptions(),
          this.$emit("drawEnd"));
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (i, t, n, o, s, a) {
        return e.e(
          {
            a: n.cid + "-content",
            b: n.cid + "-content-ref",
            c: n.width * s.ratio,
            d: n.height * s.ratio,
            e: n.width + "px",
            f: n.height + "px",
            g: s.disableScroll,
            h: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            i: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            j: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            k: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            l: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            m: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            n: e.o(function () {
              return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
            }),
            o: n.splitLayer,
          },
          n.splitLayer
            ? {
                p: n.cid + "-cross",
                q: n.cid + "-cross-ref",
                r: n.width * s.ratio,
                s: n.height * s.ratio,
                t: n.width + "px",
                v: n.height + "px",
                w: a.dispatchEvent,
                x: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                y: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                z: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                A: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                B: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                C: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
                D: e.o(function () {
                  return a.dispatchEvent && a.dispatchEvent.apply(a, arguments);
                }),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(o);
