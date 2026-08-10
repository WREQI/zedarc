var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../../service/broker.js");
var a = require("../../../service/aegis/platform/not-wujie.js"),
  i = require("../../../components/MilestoneDialog/constants.js"),
  s = require("../../../config/broker/11100/index.js"),
  o = "ITG",
  u = [o].concat(t(i.ALL_EXCITE_DELY_IDS || []));
exports.useAssetOperMatlDely = function (t) {
  var i = t.popupQueue,
    l = t.milestonePopupId,
    c = t.operateAdv,
    p = t.milestoneDialogRef,
    v = t.getPositionStocks,
    d = n.ref({});
  n.provide("bandAssistMap", d);
  var f,
    b,
    h = n.ref(null),
    m = n.computed(function () {
      return c.getByDelyId(o);
    });
  return {
    bandAssistMap: d,
    operateAdvItgData: m,
    fetchOperMatlDelyData:
      ((b = r(
        e().mark(function r() {
          var t, o, f, b, m, A, x, D;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      i.refresh([l]), (e.prev = 1), (e.next = 4), c.fetchAll(u)
                    );
                  case 4:
                    (m = e.sent),
                      (A = m.exciteData),
                      (x = m.bandAssistList),
                      (h.value = A),
                      !(null ==
                      (o =
                        null == (t = s.brokerConfig.dictionary)
                          ? void 0
                          : t.Enties)
                        ? void 0
                        : o.bandAssist) ||
                      s.brokerConfig.dictionary.Enties.bandAssist.hidden
                        ? (d.value = {})
                        : ((D = {}),
                          (x || []).forEach(function (e) {
                            e.scode && e.text && (D[e.scode] = e.text);
                          }),
                          (d.value = D)),
                      n.nextTick$1(function () {
                        var e;
                        null == (e = p.value) ||
                          e.fetchAndEvaluate({
                            exciteData: h.value,
                            positionData: v(),
                          });
                      }),
                      (e.next = 14);
                    break;
                  case 11:
                    (e.prev = 11),
                      (e.t0 = e.catch(1)),
                      null ==
                        (b =
                          null == (f = a.aegisReporter)
                            ? void 0
                            : f.reportEvent) ||
                        b.call(f, "fetchOperMatlDely_failed", {
                          ext4: JSON.stringify(e.t0),
                        }),
                      (h.value = null),
                      i.skip(l);
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[1, 11]]
          );
        })
      )),
      function () {
        return b.apply(this, arguments);
      }),
    handleOperateAdvClose:
      ((f = r(
        e().mark(function r(t) {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), c.closeAdv(o, t);
                case 2:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function (e) {
        return f.apply(this, arguments);
      }),
  };
};
