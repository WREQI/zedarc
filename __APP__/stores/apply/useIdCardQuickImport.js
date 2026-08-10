var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  c = require("../../cgi/apply.js"),
  u = require("./useChannel.js"),
  s = require("../../model/apply/useApply.js");
require("../../service/broker.js"),
  require("../../service/abt/mp-weixin.js"),
  require("../../service/stat/mp-weixin.js");
var a = {
    IDLE: "idle",
    PULL_FAIL: "pull_fail",
    OCR_FAIL_RETRY: "ocr_fail_retry",
    OCR_FAIL_NO_RETRY: "ocr_fail_no_retry",
    SUCCESS: "success",
  },
  i = t.defineStore("ApplyIdCardQuickImport", function () {
    var i = u.useChannelStore(),
      l = null,
      o = null,
      p = t.ref(!1),
      _ = t.ref(!1),
      f = t.ref(""),
      m = t.ref(a.IDLE),
      d = [
        "id_number_enc_gm",
        "name_enc_gm",
        "ocr_cred_address_enc_gm",
        "cred_address_enc_gm",
        "cred_valid_gm",
        "cred_authority_enc_gm",
      ],
      C = s.useApply().abtApplyFlexible,
      y = {};
    C.value && (y = { apply_noflex_check: 1 });
    var h,
      A,
      b = t.ref(!1);
    function v() {
      return Promise.resolve();
    }
    function x() {
      return b.value ? { apply_noflex_check: 1 } : {};
    }
    function P() {
      return i.isPayProjectChannel ? "1" : "0";
    }
    return {
      isAutoImport: p,
      isPulling: _,
      ocrFailMsg: f,
      pullStatus: m,
      PULL_STATUS: a,
      abtNoflexCheck: b,
      fetchNoflexCheckAbt: v,
      preFetch:
        ((A = n(
          e().mark(function n() {
            var t;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = c.applyCgi.processApplyAccount(
                          c.ACTION.QUERY_CFT_CRED
                        )),
                        (e.prev = 1),
                        (e.next = 4),
                        o
                      );
                    case 4:
                      if ("0" !== e.sent.cred_status) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 9), Promise.all([i.fetchChannelInfo(), v()])
                      );
                    case 9:
                      (t = P()),
                        (l = c.applyCgi.processApplyAccount(
                          c.ACTION.PULL_CFT_CRED,
                          r(r({ is_ocr_abt: t }, y), x()),
                          { decodeFields: d }
                        ));
                    case 11:
                      e.next = 15;
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(1));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[1, 13]]
            );
          })
        )),
        function () {
          return A.apply(this, arguments);
        }),
      queryCredStatus: function () {
        return o || c.applyCgi.processApplyAccount(c.ACTION.QUERY_CFT_CRED);
      },
      pull:
        ((h = n(
          e().mark(function n() {
            var t;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!l) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", l);
                    case 2:
                      return (
                        (t = "0"),
                        (e.prev = 3),
                        (e.next = 6),
                        Promise.all([i.fetchChannelInfo(), v()])
                      );
                    case 6:
                      (t = P()), (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(3));
                    case 11:
                      return e.abrupt(
                        "return",
                        c.applyCgi.processApplyAccount(
                          c.ACTION.PULL_CFT_CRED,
                          r(r({ is_ocr_abt: t }, y), x()),
                          { decodeFields: d }
                        )
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[3, 9]]
            );
          })
        )),
        function () {
          return h.apply(this, arguments);
        }),
      resetPrePullPromise: function () {
        l = null;
      },
      resetPreQueryPromise: function () {
        o = null;
      },
    };
  });
(exports.PULL_STATUS = a),
  (exports.minLoadingPromise = function () {
    return new Promise(function (e) {
      return setTimeout(e, 1e3);
    });
  }),
  (exports.useIdCardQuickImport = i);
