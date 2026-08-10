var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  s = require("../../utils/getPlatform.js"),
  n = require("../../cgi/trace.js"),
  i = require("../../stores/user/useUserinfo.js"),
  o = require("../../stores/app/useMode.js"),
  u = require("../../service/aegis/platform/not-wujie.js"),
  a = s.getPlatform(),
  l = a.isZxg,
  c = a.isMpPlugin,
  p = {
    components: {
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
    },
    emits: ["skip", "close"],
    setup: function (s, a) {
      var p,
        d = a.emit,
        f = t.getCurrentInstance().proxy,
        v = t.ref(!1),
        h = t.ref([]),
        m = t.ref(0),
        k = i.useUserinfoStore().updateUserInfoValue,
        x = t.inject("isAssetIndex", !1),
        I = o.useModeStore(),
        _ = t.storeToRefs(I).simpleMode;
      return (
        t.onMounted(
          r(
            e().mark(function r() {
              var t, s, i, o, a;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          n.TraceCgi.traceInfo({ action: "0" })
                        );
                      case 3:
                        (a = e.sent),
                          (null == (t = null == a ? void 0 : a.push_list)
                            ? void 0
                            : t.length) > 0
                            ? ((m.value = 0),
                              (h.value = a.push_list),
                              (v.value = !0))
                            : d("skip"),
                          (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          null ==
                            (o =
                              null ==
                              (i =
                                null == (s = u.aegisReporter) ? void 0 : s.sdk)
                                ? void 0
                                : i.error) || o.call(i, e.t0),
                          d("skip");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[0, 7]]
              );
            })
          )
        ),
        {
          simpleMode: _,
          isShowRiskPopup: v,
          riskInfoList: h,
          curIndex: m,
          isMpPlugin: c,
          isZxg: l,
          isAssetIndex: x,
          handleConfirm:
            ((p = r(
              e().mark(function r() {
                var t, s, i, o, a, l, c;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !(null ==
                            (s = null == (t = h.value) ? void 0 : t[m.value])
                              ? void 0
                              : s.push_id)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            n.TraceCgi.traceInfo({
                              action: "1",
                              push_id: h.value[m.value].push_id,
                              trace_type: "0",
                            })
                          );
                        case 4:
                          e.next = 9;
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(1)),
                            null ==
                              (a =
                                null ==
                                (o =
                                  null == (i = u.aegisReporter)
                                    ? void 0
                                    : i.sdk)
                                  ? void 0
                                  : o.error) || a.call(o, e.t0);
                        case 9:
                          (
                            null ==
                            (c =
                              null == (l = h.value) ? void 0 : l[m.value + 1])
                              ? void 0
                              : c.push_title
                          )
                            ? (m.value += 1)
                            : ((v.value = !1),
                              k({ key: "show_trace_notice", value: "0" }),
                              d("close")),
                            f.$stat.click(
                              "trade.asset.money_trade_risk_popup_confirm"
                            );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 6]]
                );
              })
            )),
            function () {
              return p.apply(this, arguments);
            }),
        }
      );
    },
  };
Array || t.resolveComponent("action-sheet")();
var d = t._export_sfc(p, [
  [
    "render",
    function (e, r, s, n, i, o) {
      return t.e(
        { a: n.isShowRiskPopup },
        n.isShowRiskPopup
          ? {
              b: t.t(
                n.riskInfoList[n.curIndex] &&
                  n.riskInfoList[n.curIndex].push_text
                  ? n.riskInfoList[n.curIndex].push_text
                  : ""
              ),
              c: t.t(
                n.riskInfoList[n.curIndex + 1] &&
                  n.riskInfoList[n.curIndex + 1].push_title
                  ? "，查看下一条"
                  : ""
              ),
              d: t.o(function () {
                return n.handleConfirm && n.handleConfirm.apply(n, arguments);
              }),
              e: n.isMpPlugin || n.isZxg || !n.isAssetIndex ? 1 : "",
              f: t.n(n.simpleMode ? "trace-risk-popup__simple-mode" : ""),
              g: t.o(function (e) {
                return (n.isShowRiskPopup = e);
              }),
              h: t.p({
                value: !0,
                "picker-style": !0,
                title:
                  n.riskInfoList[n.curIndex] &&
                  n.riskInfoList[n.curIndex].push_title
                    ? n.riskInfoList[n.curIndex].push_title
                    : "",
                "hide-close-icon": !0,
                "confirm-button": !1,
                "show-title-border-bottom": !1,
                "mask-closable": !1,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-f596120e"],
]);
wx.createComponent(d);
