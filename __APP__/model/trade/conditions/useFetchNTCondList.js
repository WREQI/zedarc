require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  u = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var i = require("../../../common/vendor.js"),
  a = require("../../../cgi/condition.js"),
  o = require("../../../service/aegis/platform/not-wujie.js"),
  s = require("../../../config/enum/condition.js"),
  c = {
    INIT: "init",
    FETCHING: i.COMMON_PAGE_STATUS.LOADING,
    DONE: "done",
    ERROR: i.COMMON_PAGE_STATUS.ERROR,
  };
exports.useFetchNoTriggerCondList = function () {
  var l,
    d,
    p = i.ref({}),
    v = i.ref(
      (u((l = {}), s.CondStatus.WAIT, c.INIT),
      u(l, s.CondStatus.INVALID, c.INIT),
      u(l, s.CondStatus.COMPLETE, c.INIT),
      l)
    ),
    f = i.ref("0"),
    T = i.ref(s.CondStatus.WAIT);
  return {
    fetchNoTriggerCondList:
      ((d = n(
        e().mark(function n() {
          var u, i, l;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      [c.INIT, c.ERROR].includes(v.value[T.value]) &&
                        (v.value[T.value] = c.FETCHING),
                      (i = []),
                      T.value !== s.CondStatus.COMPLETE)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (e.next = 6),
                      a.conditionOrderApi.queryCondOrderList({
                        page_num: 0,
                        page_size: 20,
                      })
                    );
                  case 6:
                    (u = e.sent),
                      (i = (u.order_list || []).filter(function (e) {
                        return s.LEGAL_COND_TYPES.includes(e.cond_type);
                      })),
                      (e.next = 16);
                    break;
                  case 10:
                    return (
                      (e.next = 12),
                      a.conditionOrderApi.orderQueryList({
                        qry_status: T.value,
                        page_num: 0,
                        page_size: 20,
                      })
                    );
                  case 12:
                    if (
                      ((u = e.sent),
                      (i = (u.cond_list || []).filter(function (e) {
                        return s.LEGAL_COND_TYPES.includes(e.cond_type);
                      })),
                      !(null == u ? void 0 : u.repo_cond))
                    ) {
                      e.next = 16;
                      break;
                    }
                    i = [r(r({}, u.repo_cond), {}, { isRepoCond: !0 })].concat(
                      t(i)
                    );
                  case 16:
                    (l = i.map(function (e) {
                      return r(r({}, e), {}, { cond_status_type: T.value });
                    })),
                      (p.value[T.value] = l),
                      T.value === s.CondStatus.WAIT && (f.value = u.total_num),
                      (v.value[T.value] = c.DONE),
                      (e.next = 23);
                    break;
                  case 20:
                    (e.prev = 20),
                      (e.t0 = e.catch(0)),
                      (v.value[T.value] = c.ERROR),
                      o.aegisReporter.reportEvent(
                        "order-cond-list-process-fail",
                        { ext2: JSON.stringify(e.t0) }
                      );
                  case 23:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[0, 20]]
          );
        })
      )),
      function () {
        return d.apply(this, arguments);
      }),
    setCondStatusType: function (e) {
      T.value = e;
    },
    noTriggerConditions: p,
    fetchStatus: v,
    totalNum: f,
    condStatusType: T,
  };
};
