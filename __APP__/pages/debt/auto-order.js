var e = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../model/debt/useDebtAutoOrder.js"),
  n = require("../../common/vendor.js"),
  i = require("../../stores/app/useMode.js"),
  s = {
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      SettingForm: function () {
        return "./components/AutoOrderSettingForm.js";
      },
      SelectSheet: function () {
        return "./components/AutoOrderSelectSheet.js";
      },
      ConfirmDialog: function () {
        return "./components/AutoOrderConfirmDialog.js";
      },
      CondResult: function () {
        return "../../components/SubmitResult/ActionSheetResult.js";
      },
      TimePicker: function () {
        return "./components/TimePicker.js";
      },
    },
    setup: function () {
      var s = n.getCurrentInstance().proxy,
        a = r.useDebtAutoOrder();
      n.provide("debtAutoOrderHook", a);
      var l = i.useModeStore(),
        u = n.storeToRefs(l).simpleMode;
      n.provide("simpleMode", u);
      var c,
        m,
        f = n.ref(!1),
        d = a.FORM_INSTRUCTION,
        p = a.formList,
        v = a.isOrderSaving,
        h = a.orderStatus,
        S = a.selectedKeyToCfg,
        g = a.initPageStatus,
        C = a.preSubmitCheck,
        T = a.autoDebtResultState,
        b = a.hideAutoDebtResult,
        R = a.markTimeRedDotClicked,
        k = n.ref(!1),
        D = n.ref({}),
        w = n.ref(""),
        O = n.ref(""),
        M = n.ref(!1),
        _ = n.computed(function () {
          return h.value === r.AUTO_ORDER_STATUS.UNSET;
        }),
        y = n.ref(!1),
        I = n.ref(["09", "40"]);
      function A(e) {
        M.value = !!e;
      }
      function P() {
        y.value = !1;
      }
      function x(e) {
        var t, o;
        null ==
          (o =
            null == (t = s.$refs.condResult)
              ? void 0
              : t.$refs.simleAnimResult) || o.changeStatus(e);
      }
      return (
        n.onMounted(
          o(
            t().mark(function e() {
              var o, r, n, i;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (f.value = !1),
                          (r =
                            (null == (o = s.$route) ? void 0 : o.query) || {}),
                          (n = r.forceSetting),
                          (i = r.conf_from_flag),
                          (e.next = 5),
                          g({ forceSetting: n, confFromFlag: i })
                        );
                      case 5:
                        return (e.prev = 5), (f.value = !0), e.finish(5);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, , 5, 8]]
              );
            })
          )
        ),
        {
          FORM_INSTRUCTION: d,
          formList: p,
          isSelectSheetShow: k,
          sheetKey: w,
          sheetTitle: O,
          sheetCfg: D,
          showConfirmDialog: M,
          simpleMode: u,
          isDataReady: f,
          isUnset: _,
          isTimePickerShow: y,
          timePickerSelectedVal: I,
          onSheetVisbleChange: function (e) {
            k.value !== !!e &&
              ((k.value = e), e || ((w.value = ""), (D.value = {})));
          },
          onConfirmVisbleChange: A,
          onFormCellClick: function () {
            var t,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (o.key !== r.FORM_KEY_LIST.TIME)
              (O.value = o.title),
                (w.value = o.key),
                (D.value = S(o.key)),
                (k.value = !0);
            else {
              R();
              var n =
                null == (t = a.selectedData.value)
                  ? void 0
                  : t[r.FORM_KEY_LIST.TIME];
              if (null == n ? void 0 : n.value) {
                var i = n.value.split(":"),
                  s = e(i, 2),
                  l = s[0],
                  u = s[1];
                I.value = [l, u];
              } else I.value = ["15", "00"];
              y.value = !0;
            }
          },
          onSaveSetting:
            ((m = o(
              t().mark(function e() {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (v.value = !0), (e.next = 3), C();
                      case 3:
                        if (!e.sent) {
                          e.next = 7;
                          break;
                        }
                        (M.value = !0), (v.value = !1), (e.next = 8);
                        break;
                      case 7:
                        v.value = !1;
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return m.apply(this, arguments);
            }),
          handleConfirm:
            ((c = o(
              t().mark(function e() {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          A(!1),
                          (e.next = 3),
                          a.submitAutoOrder({ callback: x })
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return c.apply(this, arguments);
            }),
          onTimePickerClose: P,
          onTimePickerConfirm: function (e) {
            var t = e.selectedVal;
            a.setSelectedData([
              {
                key: r.FORM_KEY_LIST.TIME,
                type: r.DEBT_TIME_TYPE.CUSTOM,
                value: t,
              },
            ]),
              P();
          },
          autoDebtResultState: T,
          hideAutoDebtResult: b,
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("setting-form") +
    n.resolveComponent("select-sheet") +
    n.resolveComponent("time-picker") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("confirm-dialog") +
    n.resolveComponent("CondResult") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math;
var a = n._export_sfc(s, [
  [
    "render",
    function (e, t, o, r, i, s) {
      return n.e(
        { a: e.rootFontSize, b: r.isDataReady },
        r.isDataReady
          ? {
              c: n.o(r.onFormCellClick),
              d: n.o(r.onSaveSetting),
              e: n.t(r.FORM_INSTRUCTION.pageBottomDescHeader),
              f: r.isUnset
                ? r.FORM_INSTRUCTION.pageBottomDescUnset
                : r.FORM_INSTRUCTION.pageBottomDesc,
            }
          : {},
        { g: r.isSelectSheetShow },
        r.isSelectSheetShow
          ? {
              h: n.o(r.onSheetVisbleChange),
              i: n.p({
                visible: r.isSelectSheetShow,
                "sheet-title": r.sheetTitle,
                "sheet-key": r.sheetKey,
                "sheet-cfg": r.sheetCfg,
              }),
            }
          : {},
        { j: r.isTimePickerShow },
        r.isTimePickerShow
          ? {
              k: n.o(r.onTimePickerClose),
              l: n.o(r.onTimePickerConfirm),
              m: n.p({
                value: r.isTimePickerShow,
                "selected-val": r.timePickerSelectedVal,
                title: "自动下单时间",
              }),
            }
          : {},
        {
          n: n.o(function (t) {
            return e.$router.push({ name: "ConditionProtocol" });
          }),
          o: r.simpleMode ? 1 : "",
          p: n.p({ id: "condition-order-risk-dialog" }),
          q: r.showConfirmDialog,
        },
        r.showConfirmDialog
          ? {
              r: n.o(function (e) {
                return (r.showConfirmDialog = e);
              }),
              s: n.o(r.handleConfirm),
              t: n.o(r.onConfirmVisbleChange),
              v: n.p({
                value: r.showConfirmDialog,
                visible: r.showConfirmDialog,
              }),
            }
          : {},
        {
          w: n.sr("condResult", "1080ab71-6,1080ab71-0"),
          x: n.o(r.hideAutoDebtResult),
          y: n.p({ visible: r.autoDebtResultState }),
          z: n.p({ id: "mp-dialog" }),
          A: n.sr("#global-wrap", "1080ab71-0"),
          B: n.p({
            id: "global-wrap",
            filePath: "/debt/auto-order",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-1080ab71"],
]);
wx.createPage(a);
