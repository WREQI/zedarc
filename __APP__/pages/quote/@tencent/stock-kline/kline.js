var i = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  h = function (i, t, n) {
    return t in i
      ? e(i, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (i[t] = n);
  },
  c = function (i, e) {
    for (var n in e || (e = {})) a.call(e, n) && h(i, n, e[n]);
    if (s) {
      var o,
        c = t(s(e));
      try {
        for (c.s(); !(o = c.n()).done; ) {
          n = o.value;
          r.call(e, n) && h(i, n, e[n]);
        }
      } catch (i) {
        c.e(i);
      } finally {
        c.f();
      }
    }
    return i;
  },
  p = function (i, t) {
    return n(i, o(t));
  },
  l = require("../../../../common/vendor.js"),
  d = require("view/mins.js");
function u(i) {
  return [
    "oneMonth",
    "threeMonth",
    "halfYear",
    "oneYear",
    "threeYear",
    "fiveYear",
    "allYear",
  ].includes(i);
}
function v(i, t) {
  var e = {};
  return (
    ["m5", "m10", "m15", "m20", "m30", "m60", "m120"].forEach(function (t) {
      var n = ""
        .concat("0" === i[4] ? i.substr(5, 1) : i.substr(4, 2), "-")
        .concat(i.substr(6, 2));
      e[t] = "13" === i.substr(8, 2) ? "11:30/13:00" : n;
    }),
    p(
      c(
        {
          day: i.substr(0, 7),
          week: i.substr(0, 7),
          month: i.substr(0, 4),
          m1:
            "m1" === t
              ? "".concat(i.substr(8, 2), ":").concat(i.substr(10, 2))
              : "",
        },
        e
      ),
      {
        season: i.substr(0, 7),
        year: i.substr(0, 4),
        oneMonth: i.substr(0, 10),
        threeMonth: i.substr(0, 7),
        halfYear: i.substr(0, 7),
        oneYear: i.substr(0, 7),
        threeYear: i.substr(0, 7),
        fiveYear: i.substr(0, 7),
        allYear: i.substr(0, 7),
      }
    )[t]
  );
}
var w = {
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
        ratio: this.options.devicePixelRatio || d.getPixelRatio(),
        type: "",
        isMini: !!this.options.platform || d.isMiniPorgram(),
        disableScroll: !1,
      };
    },
    mounted: function () {
      var i = this,
        t = this.options.platform || d.getPlatform();
      if (((this.isAndroid = "android" === t), this.isMini))
        this.$nextTick(function () {
          i.queryCanvasForMP();
        });
      else {
        var e = this.$refs["".concat(this.cid, "-content-ref")];
        (this.contentElem = e),
          this.splitLayer
            ? (this.crossElem = this.$refs["".concat(this.cid, "-cross-ref")])
            : (this.crossElem = e),
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
          l.wx$1
            .createSelectorQuery()
            .in(this)
            .selectAll("#".concat(i.cid, "-content,#").concat(i.cid, "-cross"))
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e, n;
              if (
                (null == t ? void 0 : t.length) &&
                (null == (e = t[0][0]) ? void 0 : e.node)
              ) {
                var o = t[0][0].node;
                if (
                  ((o.width = i.width * i.ratio),
                  (o.height = i.height * i.ratio),
                  (i.contentElem = o),
                  i.splitLayer)
                )
                  if (null == (n = t[0][1]) ? void 0 : n.node) {
                    var s = t[0][1].node;
                    (s.width = i.width * i.ratio),
                      (s.height = i.height * i.ratio),
                      (i.crossElem = s);
                  } else i.crossElem = o;
                else i.crossElem = o;
                d.PreLoadImages.initForMP(i.contentElem),
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
      getPointPosition: function (i) {
        return this.view ? this.view.getPointPosition(i) : null;
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
        var t = this;
        this.view.showCrossLine(i, function (i) {
          (t.event.isCrossLine = !0),
            (t.event.isCrossLineTouchEnd = !0),
            t.$emit("onTouchMove", c({}, i));
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
          var t = this.options,
            e = t.options,
            n = t.themeSkin;
          this.isMini && this.setDisableScroll("kline-landscape" === e.layout),
            e.isSupportChip &&
              e.isShowChip &&
              (e.count = "kline-landscape" === e.layout ? 71 : 45);
          var o = e.type,
            s = u(o) || "line" === e.candleType,
            a = this;
          try {
            if (!this.isMini) {
              var r = getComputedStyle(document.documentElement),
                h = r.getPropertyValue("--color-rise"),
                l = r.getPropertyValue("--color-drop");
              h &&
                l &&
                ((d.Color.kline.plain.rise = h),
                (d.Color.kline.plain.drop = l));
            }
            "object" == i(n) &&
              Object.keys(n).map(function (i) {
                var t = n[i];
                t &&
                  d.Color.kline[i] &&
                  (d.Color.kline[i] = c(c({}, d.Color.kline[i]), t));
              });
          } catch (i) {}
          try {
            var w = this.contentElem;
            this.splitLayer && (w = [this.contentElem, this.crossElem]),
              (this.view = new d.Kline(
                w,
                p(c({}, e), {
                  isMiniPorgram: this.isMini,
                  canvasWidth: this.width,
                  canvasHeight: this.height,
                  fixedWidth: s,
                  devicePixelRatio: this.ratio,
                  splitLayer: this.splitLayer,
                  getXAxis: function (i, t, n, s, a, r) {
                    var h = n.time || "",
                      c = s[i - 1] ? s[i - 1].time : "";
                    if (
                      (function (i, t, e, n, o, s, a) {
                        var r = !1;
                        if (!e) return r;
                        var h = t.substr(0, 7),
                          c = e.substr(0, 7),
                          p = t.substr(0, 8),
                          l = e.substr(0, 8),
                          d = o.length && o[o.length - 1].x,
                          u = o.length && o[o.length - 1].text;
                        if (d && !(n > d + 150) && "month" != i) return r;
                        var v = parseInt(t.substr(5, 2), 10),
                          w = parseInt(t.substr(0, 4), 10),
                          m = parseInt(e.substr(0, 4), 10);
                        switch (i) {
                          case "day":
                          case "threeMonth":
                          case "halfYear":
                          case "oneYear":
                            r = h !== c;
                            break;
                          case "week":
                          case "season":
                            r = (v + 1) % 4 == 0 && h !== c;
                            break;
                          case "month":
                            r = w % 2 == 0 && t.substr(0, 4) !== e.substr(0, 4);
                            break;
                          case "m1":
                            r = t.substr(8, 3) !== e.substr(8, 3);
                            break;
                          case "m5":
                          case "m10":
                          case "m15":
                          case "m20":
                          case "m30":
                          case "m60":
                          case "m120":
                            a <= 1 &&
                              s <
                                {
                                  m5: 100,
                                  m15: 50,
                                  m30: 30,
                                  m60: 10,
                                  m120: 10,
                                }[i] &&
                              "13" === t.substr(8, 2) &&
                              "13" !== e.substr(8, 2) &&
                              (u && "11:30/13:00" === u && (r = !1), (r = !0)),
                              p !== l && (r = !0);
                            break;
                          case "year":
                            r = t.substr(0, 4) !== e.substr(0, 4);
                            break;
                          case "oneMonth":
                            r = n > d + 180;
                            break;
                          case "threeYear":
                          case "fiveYear":
                          case "allYear":
                            r = m !== w;
                        }
                        return r;
                      })(o, h, c, t, a, r, e.market)
                    )
                      return { text: v(h, o), x: t };
                  },
                }),
                this.isMini ? 2 : 0
              ));
          } catch (i) {
            this.$emit("error", {
              key: i.message,
              options: p(c({}, e), {
                isMiniPorgram: this.isMini,
                canvasWidth: this.width,
                canvasHeight: this.height,
                fixedWidth: s,
                devicePixelRatio: this.ratio,
              }),
            });
          }
          try {
            var m = this.view.layout,
              f = m.height,
              g = m.indicatorHeight,
              S = e.setting.indicatorCount,
              y = 1 - g / f,
              C = g / f / S;
            this.indicatorPercent = [];
            for (var b = 0; b < S; b++) this.indicatorPercent.push(y + C * b);
          } catch (i) {}
          var D = new d.ListMgr(
            p(
              c(
                {
                  request: function (i) {
                    return new Promise(function (t, n) {
                      var o = setTimeout(function () {
                        n();
                      }, 5e3);
                      if (i)
                        if (/-/.test(i) && "bc" !== e.market) {
                          var s = new Date(i);
                          s.setDate(s.getDate() - 1);
                          var r = s.getFullYear(),
                            h =
                              s.getMonth() + 1 < 10
                                ? "0".concat(s.getMonth() + 1)
                                : s.getMonth() + 1,
                            c =
                              s.getDate() < 10
                                ? "0".concat(s.getDate())
                                : s.getDate();
                          a.$emit(
                            "getMore",
                            "".concat(r).concat(h).concat(c),
                            function (i) {
                              t(i), clearTimeout(o);
                            }
                          );
                        } else
                          a.$emit("getMore", i, function (i) {
                            t(i), clearTimeout(o);
                          });
                      else
                        a.options.data
                          ? (t(a.options.data), clearTimeout(o))
                          : a.$emit("getInitData", function (i) {
                              t(i), clearTimeout(o);
                            });
                    });
                  },
                  query: function () {
                    return new Promise(function (i) {
                      a.$emit("queryPriceRemind", function (t) {
                        i(t);
                      });
                    });
                  },
                },
                e
              ),
              {
                defaultCount:
                  e.count || (a.view && a.view.props.isShowChip ? 45 : 60),
                queryCount: e.queryCount || 320,
              }
            )
          );
          try {
            D.fetchForInit(function (i, t) {
              if (a.view) {
                if (
                  (e.isSupportChip && a.updateChip(i[i.length - 1]),
                  a.view.initAreaSelect && a.view.initAreaSelect(i),
                  D.macdPatternHelper)
                ) {
                  var n = D.macdPatternHelper,
                    o = n.delta,
                    s = n.item;
                  o && a.view.changeCount(o),
                    a.view.draw(i, t, s),
                    a.changeBoardOptions();
                } else
                  /Focus/.test(e.guideMode) && D.guideModeDelta > 0
                    ? (a.view.changeCount(D.guideModeDelta), a.handleDraw(i, t))
                    : a.handleDraw(i, t);
                e.enableDrawBoard && a.initBoard(),
                  a.view.props.isShowAreaSelect &&
                    a.$emit("areaSelectChange", a.view.getAreaSelectData());
              }
            }),
              (this.model = D),
              (this.view.props.model = D);
          } catch (i) {
            this.$emit("error", {
              key: "[init modal error]: ".concat(i.message),
              options: p(c({}, e), {
                isMiniPorgram: this.isMini,
                canvasWidth: this.width,
                canvasHeight: this.height,
                fixedWidth: s,
                devicePixelRatio: this.ratio,
              }),
            });
          }
        }
      },
      initEvent: function () {
        var i = this,
          t = (this.options || {}).options,
          e = u((t || {}).type);
        this.event = new d.StockChartEvent(
          this.crossElem,
          p(c({}, this.options.options), { isMiniPorgram: this.isMini }),
          {
            onTouchStart: function (t) {
              i.view.props &&
                i.view.props.isShowAreaSelect &&
                i.view.isTapAreaSelect(t);
            },
            onTap: function (e) {
              var n = e.changedTouches[0],
                o = i.view.props || {},
                s = o.isShowAreaSelect,
                a = void 0 !== s && s,
                r = o.isShowChip,
                h = void 0 !== r && r;
              if (a && i.view.isTapAreaSelect(n))
                return (
                  i.$emit("onAreaSwitch", {
                    isShowAreaSelect: !a,
                    source: "kline",
                  }),
                  !0
                );
              if (t.isSupportChip && i.view.isTapChipSwitch(n))
                return i.$emit("onChipSwitch", { isShowChip: !h }), !0;
              if (t.isSupportChip && i.view.isTapChipType(n))
                return i.handleDraw(), !0;
              if (t.isSupportChip && i.view.isTapChipTextRegion(n))
                return i.handleDraw(), !0;
              if (
                (i.view.isTapMacdRnkEntry(n) &&
                  "macdRankEntry" === i.view.isTapMacdRnkEntry(n) &&
                  (e.preventDefault && e.preventDefault(),
                  i.$emit("macdRankEntry")),
                i.view.candle.candleIndicator.isTapTipRegion(n))
              )
                return i.$emit("onTipTap", "tradeLine"), !0;
              if (
                i.view.props.guideMode &&
                i.view.candle.isTapGuideHintRegion(n)
              )
                return i.$emit("onTipTap", "guideHint"), !0;
              if (i.view.isTapTradeEntranceBarRegion(n))
                return i.$emit("onBarTap", "trade"), !0;
              if (
                "kline-portrait" === t.layout ||
                (t.isWzqMiniProgram && !t.hideIndicator)
              ) {
                var c = i.view.isTapButtonRegion(n);
                if (!isNaN(c))
                  return (
                    e.preventDefault && e.preventDefault(),
                    i.$emit("onPopup", c),
                    !0
                  );
                if ("foldArrow" === c)
                  return (
                    e.preventDefault && e.preventDefault(),
                    i.view.draw(null, null, null, null, !0),
                    i.changeBoardOptions(),
                    !0
                  );
                var p = i.view.isTapIndicatorRegion(n);
                if (p > 0) {
                  var l = i.view.getNextIndicator(p);
                  return (
                    i.model.switchIndicator(p, l),
                    i.view.switchIndicator(p, l),
                    i.$emit("onChange", p, l),
                    !0
                  );
                }
              }
              return "kline-portrait" === t.layout &&
                i.view.isTapKlineRegin(n) &&
                t.isWzqMiniProgram
                ? (i.$emit("onTap", e), !0)
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
            onSwipeX: function (e) {
              if (i.view) {
                if (i.model.needBounce) {
                  if (!e)
                    return void i.model.fetchBoundary(function (e, n) {
                      i.view &&
                        (t.isSupportChip && e && i.updateChip(e[e.length - 1]),
                        i.view.props.isShowAreaSelect &&
                          (i.view.areaSelect.update("swipe", { list: e }),
                          i.$emit(
                            "areaSelectChange",
                            i.view.getAreaSelectData()
                          )),
                        i.handleDraw(e, n));
                    });
                  if (i.model.reachBoundary)
                    return (
                      (i.model.reachBoundary = !1),
                      void (i.event.isInertia = !1)
                    );
                }
                if (e) {
                  var n =
                    Math.ceil(i.view.props.count / 60) *
                    (i.event.isInertia ? 3 : 1);
                  i.model &&
                    i.model.fetchForSwipe(e < 0 ? -n : n, function (e, n) {
                      i.view &&
                        (t.isSupportChip && i.updateChip(e[e.length - 1]),
                        i.view.props.isShowAreaSelect &&
                          (i.view.areaSelect.update("swipe", { list: e }),
                          i.$emit(
                            "areaSelectChange",
                            i.view.getAreaSelectData()
                          )),
                        i.handleDraw(e, n));
                    });
                } else i.handleDraw();
                i.$emit("onSwipeX", e);
              }
            },
            onSwipeY: function () {
              d.tradeShowBar && d.swiping && (d.setSwiping(!1), i.handleDraw());
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
                if (t.isSupportChip) {
                  var n = i.view.crossLine.changeCoords(e).index,
                    o = i.view.getValueY(e);
                  i.updateChip(i.view.data.items[n], o);
                }
                i.view.props &&
                  t.isWzqMiniProgram &&
                  (i.view.props.hideMainIndicatorText = !1),
                  i.setDisableScroll(i.isMini),
                  i.view.showCrossLine(e, function (t, e) {
                    i.$emit("onTouchMove", c({}, t)),
                      e && i.$emit("extraInfoSelected"),
                      i.changeBoardOptions();
                  });
              }
            },
            onTouchCancle: function () {
              i.isMini &&
                "kline-landscape" != t.layout &&
                i.setDisableScroll(!1),
                i.view &&
                  (t.isSupportChip &&
                    i.view.data.items.length &&
                    i.updateChip(
                      i.view.data.items[i.view.data.items.length - 1]
                    ),
                  i.view.props &&
                    t.isWzqMiniProgram &&
                    (i.view.props.hideMainIndicatorText =
                      "kline-landscape" !== t.layout),
                  i.handleDraw()),
                i.$emit("onTouchCancle");
            },
            onTouchEnd: function () {
              i.view &&
                i.view.props.isShowAreaSelect &&
                (i.view.cancelAreaActive(), i.handleDraw()),
                i.$emit("onTouchEnd");
            },
            onPinch: function (n, o) {
              if (!e) {
                var s = i.view.getRatio(n),
                  a = this.isAndroid ? 6 : 4,
                  r = o ? -a : a;
                i.model.fetchForPinch(s, r, function (e) {
                  var n = e.list,
                    o = e.extraData,
                    s = e.type,
                    a = void 0 === s ? "kline" : s;
                  i.view.changeLineType(a),
                    "line" !== a
                      ? (i.view.changeCount(r),
                        t.isSupportChip && i.updateChip(n[n.length - 1]),
                        i.view.props.isShowAreaSelect &&
                          (i.view.areaSelect.update("scale", {
                            list: n,
                            props: i.view.props,
                          }),
                          i.$emit(
                            "areaSelectChange",
                            i.view.getAreaSelectData()
                          )),
                        i.handleDraw(n, o))
                      : i.handleDraw();
                }),
                  i.$emit("onPinch", o);
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
      updateChip: function (i, t) {
        if (i && this.view) {
          var e = this.view.layout.getChart(),
            n = {
              width:
                (this.view.layout.chipRegion.width - 10) / this.ratio + "px",
              height:
                (this.view.layout.chipRegion.height - e.height - e.y) /
                  this.ratio +
                "px",
            },
            o = this.model.getChipList(i, t);
          this.view.updateChip(o),
            this.$emit("ChipInfoChange", {
              layout: n,
              chipData: p(c({}, o), { chipTime: i.time }),
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
  m = l._export_sfc(w, [
    [
      "render",
      function (i, t, e, n, o, s) {
        return l.e(
          {
            a: e.cid + "-content",
            b: e.cid + "-content-ref",
            c: e.width * o.ratio,
            d: e.height * o.ratio,
            e: e.width + "px",
            f: e.height + "px",
            g: o.disableScroll,
            h: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4684),
            i: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4685),
            j: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4686),
            k: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4687),
            l: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4688),
            m: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4689),
            n: l.o(function () {
              return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
            }, 4690),
            o: e.splitLayer,
          },
          e.splitLayer
            ? {
                p: e.cid + "-cross",
                q: e.cid + "-cross-ref",
                r: e.width * o.ratio,
                s: e.height * o.ratio,
                t: e.width + "px",
                v: e.height + "px",
                w: s.dispatchEvent,
                x: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4691),
                y: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4692),
                z: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4693),
                A: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4694),
                B: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4695),
                C: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4696),
                D: l.o(function () {
                  return s.dispatchEvent && s.dispatchEvent.apply(s, arguments);
                }, 4697),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(m);
