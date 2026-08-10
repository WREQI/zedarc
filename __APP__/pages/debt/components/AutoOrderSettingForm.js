require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../model/debt/useDebtAutoOrder.js"),
  n = require("../../../common/components/Dialog/index.js"),
  o = require("../../../service/stat/mp-weixin.js"),
  r = require("../../../model/debt/debtAutoOrderTime.js"),
  i = {
    components: {
      StCellGroup: function () {
        return "../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../common/components/Cell/index.js";
      },
    },
    setup: function (i, s) {
      var u = s.emit,
        a = t.inject("debtAutoOrderHook"),
        c = a.FORM_INSTRUCTION,
        d = a.formList,
        l = a.orderStatus,
        m = a.orderInfo,
        S = a.changeOrderStatus,
        f = a.enterModifySetting,
        T = a.resumeAutoOrder,
        g = a.isSubDataValidate,
        v = a.isOrderSaving,
        p = a.isChangingStatus,
        _ = a.selectedData,
        O = a.showTimeRedDot,
        R = t.inject("simpleMode"),
        U = t.computed(function () {
          return l.value === e.AUTO_ORDER_STATUS.UNSET;
        }),
        A = t.computed(function () {
          return (U.value ? c.settingFormBottomDesc : c.formBottomDesc).trim();
        }),
        C = t.computed(function () {
          return m.value.end_time
            ? t.dayjs.unix(m.value.end_time).format("YYYY-MM-DD")
            : "";
        }),
        D = t.computed(function () {
          var t = function () {
            var t, n;
            if (r.isDebtAutoOrderNeedSetTime()) {
              var o =
                null ==
                (n = null == (t = _.value) ? void 0 : t[e.FORM_KEY_LIST.TIME])
                  ? void 0
                  : n.value;
              return o ? "交易日".concat(o, "自动下单") : "交易日自动下单";
            }
            return "交易日15:00-15:30自动下单";
          };
          return l.value === e.AUTO_ORDER_STATUS.START
            ? {
                text: "运行中",
                desc:
                  "" +
                  (C.value ? "".concat(t(), "，").concat(C.value, "截止") : ""),
                imgSrc:
                  "https://st.gtimg.com/image/mp-broker/trade/auto-order-debt/order-status-start".concat(
                    R.value ? "-simple" : "",
                    ".png"
                  ),
                btnText: "暂停运行",
              }
            : l.value === e.AUTO_ORDER_STATUS.PAUSE
            ? {
                text: "已暂停",
                desc: "恢复运行后，".concat(t()),
                imgSrc:
                  "https://st.gtimg.com/image/mp-broker/trade/auto-order-debt/order-status-pause.png",
                btnText: "恢复运行",
              }
            : {};
        }),
        b = t.computed(function () {
          return !g.value;
        });
      return {
        FORM_INSTRUCTION: c,
        AUTO_ORDER_STATUS: e.AUTO_ORDER_STATUS,
        formList: d,
        orderStatus: l,
        simpleMode: R,
        isUnset: U,
        formBottomDescText: A,
        isOrderSaving: v,
        isChangingStatus: p,
        statusInfo: D,
        isSaveBtnDisabled: b,
        onFormCellClick: function (t) {
          var e, n;
          U.value &&
            (o.stat.click(
              "trade.debt.auto_order.form_item_click.".concat(
                null ==
                  (n =
                    null == (e = null == t ? void 0 : t.key)
                      ? void 0
                      : e.toLowerCase)
                  ? void 0
                  : n.call(e)
              )
            ),
            u("formCellClick", t));
        },
        onSaveSetting: function () {
          o.stat.click("trade.debt.auto_order.save_setting_click"),
            u("saveSetting");
        },
        onStatusBtnClick: function () {
          l.value !== e.AUTO_ORDER_STATUS.START
            ? l.value !== e.AUTO_ORDER_STATUS.PAUSE || T()
            : n.Dialog({
                message: "终止后不再将余额自动扫入通用回购，是否确认终止？",
                showCancelButton: !0,
                confirmButtonText: "终止",
                onConfirm: function () {
                  S(e.CHANGE_ORDER_STATUS.PAUSE);
                },
              });
        },
        onModifySetting: function () {
          f();
        },
        FORM_KEY_LIST: e.FORM_KEY_LIST,
        showTimeRedDot: O,
      };
    },
  };
Array ||
  (t.resolveComponent("st-cell") + t.resolveComponent("st-cell-group"))();
var s = t._export_sfc(i, [
  [
    "render",
    function (e, n, o, r, i, s) {
      return t.e(
        { a: !r.isUnset },
        r.isUnset
          ? {}
          : t.e(
              { b: r.statusInfo.imgSrc },
              r.statusInfo.imgSrc ? { c: r.statusInfo.imgSrc } : {},
              { d: t.t(r.statusInfo.text), e: r.statusInfo.desc },
              r.statusInfo.desc ? { f: t.t(r.statusInfo.desc) } : {}
            ),
        {
          g: t.f(r.formList, function (e, n, o) {
            return t.e(
              {
                a: t.t(e.mainValue || (r.isUnset ? "" : "--")),
                b: e.key === r.FORM_KEY_LIST.TIME && r.showTimeRedDot,
              },
              (e.key === r.FORM_KEY_LIST.TIME && r.showTimeRedDot, {}),
              { c: e.subValue },
              e.subValue ? { d: t.t(e.subValue) } : {},
              {
                e: e.key,
                f: t.n(e.key.toLowerCase()),
                g: t.o(function (t) {
                  return r.onFormCellClick(e);
                }, e.key),
                h: "2fda3218-1-" + o + ",2fda3218-0",
                i: t.p({
                  title: e.title,
                  "arrow-direction": r.isUnset ? "right" : "",
                }),
              }
            );
          }),
          h: r.isUnset,
        },
        r.isUnset
          ? {
              i: r.isSaveBtnDisabled || r.isOrderSaving,
              j: r.isOrderSaving,
              k: t.o(function () {
                return r.onSaveSetting && r.onSaveSetting.apply(r, arguments);
              }),
            }
          : {
              l: t.t(r.statusInfo.btnText),
              m: r.isChangingStatus,
              n: t.o(function () {
                return (
                  r.onStatusBtnClick && r.onStatusBtnClick.apply(r, arguments)
                );
              }),
              o: r.isChangingStatus,
              p: t.o(function () {
                return (
                  r.onModifySetting && r.onModifySetting.apply(r, arguments)
                );
              }),
            },
        {
          q: t.t(r.formBottomDescText),
          r: t.n(r.isUnset ? "unset" : ""),
          s: t.n(r.simpleMode ? "simple" : ""),
          t: t.p({ border: !1 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2fda3218"],
]);
wx.createComponent(s);
