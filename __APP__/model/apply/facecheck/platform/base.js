var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var l = Object.defineProperty,
  u = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? l(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != s(r) ? r + "" : r, t),
      t
    );
  };
require("../../../../service/sdk/lib/api.js");
var a = require("../../../../service/sdk/platform/mp-weixin.js"),
  o = require("../../../../service/log/index.js"),
  c = require("../../useApply.js"),
  p = require("../../../../cgi/apply.js"),
  v = require("../../../../utils/wxFaceV2/index.js"),
  C = require("../../../../service/aegis/platform/not-wujie.js"),
  f = new o.Log();
exports.BaseFaceCheck = (function () {
  function s() {
    n(this, s),
      u(this, "$sdk", a.sdk),
      u(this, "$log", f),
      u(this, "faceRes", null),
      u(this, "v2Ctx", null),
      u(this, "times", 1);
  }
  var l, o;
  return (
    i(s, [
      {
        key: "hasV2Context",
        value: function () {
          var e;
          return !!(null == (e = this.v2Ctx) ? void 0 : e.seqNo);
        },
      },
      {
        key: "resetV2Ctx",
        value: function () {
          this.v2Ctx = null;
        },
      },
      {
        key: "prepareV2",
        value:
          ((o = t(
            e().mark(function t(n) {
              var i, s, l, u, a, o, c, f, h, x, b;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((this.v2Ctx = null),
                          !(null == n ? void 0 : n.forceV1))
                        ) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 2:
                        if (
                          !(null == (i = null == n ? void 0 : n.v2Ctx)
                            ? void 0
                            : i.faceVerifyKey) ||
                          !(null == (s = null == n ? void 0 : n.v2Ctx)
                            ? void 0
                            : s.seqNo)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          ((this.v2Ctx = r({}, n.v2Ctx)),
                          null ==
                            (u =
                              null == (l = C.aegisReporter)
                                ? void 0
                                : l.reportEvent) ||
                            u.call(l, "MONITOR-FACECHECK-V2-START"),
                          this.v2Ctx)
                        );
                      case 4:
                        return (e.next = 6), v.isWxFaceV2Enabled();
                      case 6:
                        if (e.sent.enabled) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.next = 11),
                          p.applyCgi.queryWxFaceVerifyKey()
                        );
                      case 11:
                        return (
                          (b = e.sent),
                          e.abrupt(
                            "return",
                            (null == b ? void 0 : b.face_verify_key) &&
                              (null == b ? void 0 : b.seq_no)
                              ? ((this.v2Ctx = {
                                  faceVerifyKey: b.face_verify_key,
                                  seqNo: b.seq_no,
                                }),
                                null ==
                                  (o =
                                    null == (a = C.aegisReporter)
                                      ? void 0
                                      : a.reportEvent) ||
                                  o.call(a, "MONITOR-FACECHECK-V2-START"),
                                this.v2Ctx)
                              : (null ==
                                  (f =
                                    null == (c = C.aegisReporter)
                                      ? void 0
                                      : c.reportEvent) ||
                                  f.call(
                                    c,
                                    "MONITOR-FACECHECK-V2-QUERY-KEY-NULL",
                                    { ext2: JSON.stringify(b) }
                                  ),
                                null)
                          )
                        );
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.t0 = e.catch(8)),
                          e.abrupt(
                            "return",
                            (null ==
                              (x =
                                null == (h = C.aegisReporter)
                                  ? void 0
                                  : h.reportEvent) ||
                              x.call(h, "MONITOR-FACECHECK-V2-QUERY-KEY-FAIL", {
                                ext2:
                                  (null == e.t0 ? void 0 : e.t0.message) ||
                                  String(e.t0),
                              }),
                            null)
                          )
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                this,
                [[8, 15]]
              );
            })
          )),
          function (e) {
            return o.apply(this, arguments);
          }),
      },
      {
        key: "verifyFace",
        value:
          ((l = t(
            e().mark(function r() {
              var t, n, i, s, l, u, a, o, v, f, h, x, b, d, y;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this.faceRes) {
                          e.next = 2;
                          break;
                        }
                        throw "无人脸验证数据";
                      case 2:
                        return (
                          (l = c.useApply()),
                          (u = l.commitApplyData),
                          (a = this.faceRes),
                          (o = a.src),
                          (v = a.srcId),
                          (f = a.errMsg),
                          (h = a.errCode),
                          (x = a.seqNo),
                          (d = {
                            src_id: v,
                            src: o,
                            err_code: h,
                            err_msg: f,
                            use_new_wx_info: (b = !!x) ? "1" : "0",
                          }),
                          b && x && (d.seq_no = x),
                          (e.prev = 4),
                          (e.next = 7),
                          u(p.ACTION.LIVE_RESULT, d)
                        );
                      case 7:
                        if ("1" === (y = e.sent).live_result) {
                          e.next = 11;
                          break;
                        }
                        throw (
                          (b &&
                            (null ==
                              (n =
                                null == (t = C.aegisReporter)
                                  ? void 0
                                  : t.reportEvent) ||
                              n.call(t, "MONITOR-FACECHECK-V2-BACKEND-FAIL", {
                                ext2: y.errmsg || y.retmsg,
                              })),
                          y.errmsg || y.retmsg)
                        );
                      case 11:
                        return e.abrupt(
                          "return",
                          (b &&
                            (null ==
                              (s =
                                null == (i = C.aegisReporter)
                                  ? void 0
                                  : i.reportEvent) ||
                              s.call(i, "MONITOR-FACECHECK-V2-SUCCESS")),
                          !0)
                        );
                      case 12:
                        return (e.prev = 12), (this.v2Ctx = null), e.finish(12);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                this,
                [[4, , 12, 15]]
              );
            })
          )),
          function () {
            return l.apply(this, arguments);
          }),
      },
    ]),
    s
  );
})();
