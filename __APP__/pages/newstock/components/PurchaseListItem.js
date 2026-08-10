require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var a = require("../../../common/vendor.js"),
  n = require("../../../model/newstock/useNewStock.js"),
  s = require("../../../common/components/Dialog/index.js");
require("../../../service/broker.js");
var u = require("../../../cgi/gem.js"),
  i = require("../../../service/stat/mp-weixin.js"),
  o = require("../../../config/broker/11100/index.js"),
  c = {
    name: "PurchaseListItem",
    props: {
      titleStr: { type: String, default: "" },
      marketStr: { type: String, default: "" },
      newPurchaseType: { type: Number, default: void 0 },
      purchaseList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (e) {
      var t = a.inject("purchaseListData"),
        r = a.computed(function () {
          return [
            n.NEW_PURCHASE_TYPE.XG_PT,
            n.NEW_PURCHASE_TYPE.XG_CYB,
            n.NEW_PURCHASE_TYPE.XG_KCB,
          ].includes(e.newPurchaseType);
        }),
        s = a.computed(function () {
          return r.value ? "股" : "张";
        });
      return {
        purchaseListData: t,
        selectHandler: function (a, s) {
          switch (
            (i.stat.click(
              "trade.playnew.item_select." + (s ? "unselect" : "select"),
              void 0,
              void 0,
              { item_type: r.value ? "stock" : "debt" }
            ),
            e.newPurchaseType)
          ) {
            case n.NEW_PURCHASE_TYPE.XG_CYB:
              return void (t.purchaseList_xg_cyb[a]._selected = !s);
            case n.NEW_PURCHASE_TYPE.XG_KCB:
              return void (t.purchaseList_xg_kcb[a]._selected = !s);
            case n.NEW_PURCHASE_TYPE.XG_PT:
              return void (t.purchaseList_xg[a]._selected = !s);
            case n.NEW_PURCHASE_TYPE.XZ_PT:
              return void (t.purchaseList_xz[a]._selected = !s);
            case n.NEW_PURCHASE_TYPE.XZ_CYB:
              return void (t.purchaseList_xz_cyb[a]._selected = !s);
            case n.NEW_PURCHASE_TYPE.XZ_KCB:
              return void (t.purchaseList_xz_kcb[a]._selected = !s);
          }
        },
        unit: s,
        formatUnit: function (e) {
          return isNaN(e)
            ? "--"
            : e >= 1e4
            ? "".concat((e / 1e4).toFixed(2).replace(/\.?0+$/, ""), "万")
            : e;
        },
      };
    },
    data: function () {
      return {
        purchaseType: "",
        options: [],
        PURCHASE_TYPE: n.PURCHASE_TYPE,
        APPLY_STATE: n.APPLY_STATE,
      };
    },
    computed: {
      isGemEnable: function () {
        var e;
        return !(null == (e = o.brokerConfig.dictionary.Enties.gem)
          ? void 0
          : e.hidden);
      },
      isKchEnable: function () {
        var e;
        return !(null == (e = o.brokerConfig.dictionary.Enties.kechuang)
          ? void 0
          : e.hidden);
      },
      isKchGrowthEnable: function () {
        var e;
        return !(null == (e = o.brokerConfig.dictionary.Enties.kechuanggrowth)
          ? void 0
          : e.hidden);
      },
      isKzzEnable: function () {
        var e;
        return !(null == (e = o.brokerConfig.dictionary.Enties.kzz)
          ? void 0
          : e.hidden);
      },
      optionsArr: function () {
        var e = this;
        return this.purchaseList.map(function (t) {
          return e.makeOptions(t);
        });
      },
    },
    methods: {
      goToDetails: function (e) {
        this.$stat.click("trade.playnew.newstock.stockdetails"),
          this.$router.push({
            name: "NewStockDetails",
            query: { pucode: e.code },
          });
      },
      toTips: function () {
        this.$router.push({
          name: "NewStockTips",
          query: {
            tab: this.newPurchaseType < n.NEW_PURCHASE_TYPE.XZ_PT ? "0" : "1",
          },
        });
      },
      makeOptions: function (e) {
        var t = [],
          r = 0,
          a = 500;
        for (
          e.purchase_type === n.PURCHASE_TYPE.DEBT && (a = 10),
            r = parseInt(e.max_purchase_quantity, 10);
          r > 0;

        )
          t.push({ text: r, value: r }), (r -= a);
        return t;
      },
      pickerDefaultValue: function (e, t) {
        return this.optionsArr[t].findIndex(function (t) {
          return t.value === e._purchaseAmount;
        });
      },
      onPickerChange: function (e, t, r) {
        var a = e.detail.value,
          n = this.optionsArr[r][a].value;
        this.$emit("select", { num: n, value: a, item: t, index: r });
      },
      onListItemPicker: function (e, t) {
        this.$stat.click("trade.playnew.newstock.number"),
          this.$emit("onPicker", {
            type: this.newPurchaseType,
            item: e,
            index: t,
          });
      },
      showAuthoDialog: function (e, t) {
        var r = t.text;
        this.$stat.click("trade.newstock.today.howtodo");
        var a = e.purchase_type === n.PURCHASE_TYPE.DEBT ? "新债" : "新股";
        s.Dialog({
          message: "如需申购"
            .concat(r)
            .concat(a, ",请到就近")
            .concat(o.brokerConfig.base.name, "营业部开通")
            .concat(r, "交易权限。若有疑问,请联系")
            .concat(o.brokerConfig.base.name, "客服:")
            .concat(o.brokerConfig.base.tel),
        });
      },
      toApplyCyb: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var a, n, i, c, p, _;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        !(null ==
                        (n =
                          null == (a = o.brokerConfig.hall) ? void 0 : a.third)
                          ? void 0
                          : n.enable) ||
                          !(null ==
                          (p =
                            null ==
                            (c =
                              null == (i = o.brokerConfig.hall)
                                ? void 0
                                : i.third)
                              ? void 0
                              : c.entry)
                            ? void 0
                            : p.gem))
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void e.$router.push({ name: "BizGemAuth" })
                      );
                    case 3:
                      return (t.next = 5), u.gemCgi.queryStatus(!0);
                    case 5:
                      "2" === (_ = t.sent).xgem_status
                        ? s.Dialog({
                            message:
                              "请在交易日9:00-16:00进行创业板交易权限升级。下一交易日为".concat(
                                _.xgem_opening_day,
                                "。"
                              ),
                          })
                        : e.$router.push({
                            name: "BizGemAuth",
                            query: { status: _.xgem_status, gemTransfer: "1" },
                          }),
                        (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(0)),
                        s.Dialog({ message: t.t0.retmsg });
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[0, 9]]
            );
          })
        )();
      },
      toApplyKzz: function () {
        this.$router.push({ name: "BizKzz" });
      },
      showExplain: function (t) {
        var r = {
          title: "发行市盈率",
          message:
            "<p>发行市盈率采用滚动市盈率(TTM)，若公司发行市盈率显著高于公司所处行业的平均市盈率，可能存在破发风险，请投资者谨慎决策。<p><p>市盈率数据和信息说明仅供参考，不构成任何投资建议，实际情况请以市场数据为准</p>",
          confirmBtn: "我知道了",
          messageType: "html",
          messageAlign: "left",
        };
        t === n.PURCHASE_TYPE.DEBT &&
          ((r.title = "转股溢价率"),
          (r.message =
            "<p>转股溢价率=转债价格/转股价值 -1，转股价值=（转债价格/转股价格） * 正股价格；是当前可转债价格相较于转股后价值的溢价程度。</p><p>溢价率会随当前正股股价波动。一般来说转股溢价率越高，投资者的盈利空间越小，转股溢价率越低，投资者盈利空间越大。</p><p>溢价率数据和信息说明仅供参考，不构成任何投资建议，实际情况请以市场数据为准。</p>")),
          s.Dialog(e({}, r));
      },
    },
  },
  p = a._export_sfc(c, [
    [
      "render",
      function (e, t, r, n, s, u) {
        return {
          a: a.t(r.titleStr),
          b: a.f(r.purchaseList, function (t, i, o) {
            return a.e(
              "P" === r.marketStr
                ? { a: a.t(e.$filters.marketId(t.market)) }
                : { b: a.t(r.marketStr) },
              {
                c: a.t(t.name),
                d: a.t(t.code),
                e: a.t(e.$filters.marketId(t.market, ".")),
                f: "1" === t.profit_state,
              },
              (t.profit_state, {}),
              {
                g: [
                  s.APPLY_STATE.notApply,
                  s.APPLY_STATE.applying,
                  s.APPLY_STATE.applyed,
                ].includes(t.purchase_status)
                  ? ""
                  : 1,
                h: a.o(function (e) {
                  return u.goToDetails(t);
                }, i),
                i: t.purchase_type !== s.PURCHASE_TYPE.DEBT,
              },
              t.purchase_type !== s.PURCHASE_TYPE.DEBT
                ? a.e(
                    {
                      j: a.t(t.comparable_company || "暂无"),
                      k: t.comparable_company,
                    },
                    (t.comparable_company, {}),
                    {
                      l: a.o(function (e) {
                        return u.goToDetails(t);
                      }, i),
                    }
                  )
                : {},
              {
                m: t._disabled ? 1 : "",
                n: t._selected ? 1 : "",
                o: [s.APPLY_STATE.applying, s.APPLY_STATE.applyed].includes(
                  t.purchase_status
                )
                  ? 1
                  : "",
                p: a.o(function (e) {
                  return !t._disabled && n.selectHandler(i, t._selected);
                }, i),
                q: a.t(t.issue_price),
                r: a.t(
                  t.purchase_type !== s.PURCHASE_TYPE.DEBT
                    ? "发行市盈率"
                    : "转股溢价率"
                ),
                s: a.o(function (e) {
                  return u.showExplain(t.purchase_type);
                }, i),
                t: t.purchase_type !== s.PURCHASE_TYPE.DEBT,
              },
              t.purchase_type !== s.PURCHASE_TYPE.DEBT
                ? {
                    v: a.t(
                      t.issue_price_earning_ratio &&
                        "-" !== t.issue_price_earning_ratio
                        ? t.issue_price_earning_ratio
                        : "--"
                    ),
                  }
                : {
                    w: a.t(
                      e.$filters.postfix(
                        t.premium_rate && "-" !== t.premium_rate
                          ? t.premium_rate
                          : "--",
                        ":percent:"
                      )
                    ),
                  },
              {
                x: a.t(n.formatUnit(t.purchase_amount_upper_limit)),
                y: t.purchase_status === s.APPLY_STATE.notApply,
              },
              t.purchase_status === s.APPLY_STATE.notApply
                ? a.e(
                    { z: t.purchase_type !== s.PURCHASE_TYPE.DEBT },
                    t.purchase_type !== s.PURCHASE_TYPE.DEBT
                      ? a.e(
                          { A: t._purchaseAmount > 0 },
                          t._purchaseAmount > 0
                            ? {
                                B: a.t(t._purchaseAmount),
                                C: u.pickerDefaultValue(t, i),
                                D: u.optionsArr[i],
                                E: a.o(function (e) {
                                  return u.onPickerChange(e, t, i);
                                }, i),
                              }
                            : {
                                F: a.o(function () {
                                  return (
                                    u.toTips && u.toTips.apply(u, arguments)
                                  );
                                }, i),
                              }
                        )
                      : a.e(
                          { G: t._purchaseAmount > 0 },
                          t._purchaseAmount > 0
                            ? {
                                H: a.t(t._purchaseAmount),
                                I: a.o(function (e) {
                                  return u.onListItemPicker(t, i);
                                }, i),
                              }
                            : {
                                J: a.o(function () {
                                  return (
                                    u.toTips && u.toTips.apply(u, arguments)
                                  );
                                }, i),
                              }
                        )
                  )
                : t.purchase_status === s.APPLY_STATE.applying
                ? a.e(
                    { L: t.purchase_quantity },
                    t.purchase_quantity
                      ? {
                          M: a.t(n.formatUnit(t.purchase_quantity)),
                          N: a.t(n.unit),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.applyed
                ? a.e(
                    { P: t.purchase_quantity },
                    t.purchase_quantity
                      ? {
                          Q: a.t(n.formatUnit(t.purchase_quantity)),
                          R: a.t(n.unit),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.noEdu
                ? {
                    T: a.o(function () {
                      return u.toTips && u.toTips.apply(u, arguments);
                    }, i),
                  }
                : t.purchase_status === s.APPLY_STATE.noCybPriv
                ? a.e(
                    { V: u.isGemEnable },
                    u.isGemEnable
                      ? {
                          W: a.o(function (t) {
                            return e.$router.push({
                              name: "BizGem",
                              query: { returl: e.$route.path },
                            });
                          }, i),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.noKcbPriv
                ? a.e(
                    { Y: u.isKchEnable },
                    u.isKchEnable
                      ? {
                          Z: a.o(function (t) {
                            return e.$router.push({ name: "BizKeChuangOpen" });
                          }, i),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.noKcbGrowthPriv
                ? a.e(
                    { ab: u.isKchGrowthEnable },
                    u.isKchGrowthEnable
                      ? {
                          ac: a.o(function (t) {
                            return e.$router.push({
                              name: "BizKeChuangGrowthOpen",
                            });
                          }, i),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.noShPriv
                ? {
                    ae: a.o(function (e) {
                      return u.showAuthoDialog(t, { text: "沪市" });
                    }, i),
                  }
                : t.purchase_status === s.APPLY_STATE.noSzPriv
                ? {
                    ag: a.o(function (e) {
                      return u.showAuthoDialog(t, { text: "深市" });
                    }, i),
                  }
                : t.purchase_status === s.APPLY_STATE.noCybPrivLimit
                ? a.e(
                    { ai: u.isGemEnable },
                    u.isGemEnable
                      ? {
                          aj: a.o(function () {
                            return (
                              u.toApplyCyb && u.toApplyCyb.apply(u, arguments)
                            );
                          }, i),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.noSzKzz
                ? a.e(
                    { al: u.isKzzEnable },
                    u.isKzzEnable
                      ? {
                          am: a.o(function () {
                            return (
                              u.toApplyKzz && u.toApplyKzz.apply(u, arguments)
                            );
                          }, i),
                        }
                      : {}
                  )
                : t.purchase_status === s.APPLY_STATE.noShKzz
                ? a.e(
                    { ao: u.isKzzEnable },
                    u.isKzzEnable
                      ? {
                          ap: a.o(function () {
                            return (
                              u.toApplyKzz && u.toApplyKzz.apply(u, arguments)
                            );
                          }, i),
                        }
                      : {}
                  )
                : { aq: a.t(t.purchase_status) },
              {
                K: t.purchase_status === s.APPLY_STATE.applying,
                O: t.purchase_status === s.APPLY_STATE.applyed,
                S: t.purchase_status === s.APPLY_STATE.noEdu,
                U: t.purchase_status === s.APPLY_STATE.noCybPriv,
                X: t.purchase_status === s.APPLY_STATE.noKcbPriv,
                aa: t.purchase_status === s.APPLY_STATE.noKcbGrowthPriv,
                ad: t.purchase_status === s.APPLY_STATE.noShPriv,
                af: t.purchase_status === s.APPLY_STATE.noSzPriv,
                ah: t.purchase_status === s.APPLY_STATE.noCybPrivLimit,
                ak: t.purchase_status === s.APPLY_STATE.noSzKzz,
                an: t.purchase_status === s.APPLY_STATE.noShKzz,
                ar: t._disabled && !t._selected ? 1 : "",
                as: i < r.purchaseList.length - 1 ? 1 : "",
                at: i,
              }
            );
          }),
          c: "P" === r.marketStr,
          d: a.t(n.unit),
        };
      },
    ],
    ["__scopeId", "data-v-38304dbf"],
  ]);
wx.createComponent(p);
