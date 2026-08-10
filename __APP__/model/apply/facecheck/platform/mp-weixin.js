var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var c = require("./base.js"),
  u = require("../../../../service/sdk/lib/enum.js"),
  a = require("../../../../cgi/apply.js"),
  l = require("../../../../service/aegis/platform/not-wujie.js"),
  o = (function (c) {
    s(p, c);
    var o,
      d,
      v = n(p);
    function p() {
      return t(this, p), v.apply(this, arguments);
    }
    return (
      i(p, [
        {
          key: "faceCheck",
          value:
            ((d = r(
              e().mark(function r(t) {
                var i, s, n, c, u, o, d, v;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), this.prepareV2(t);
                        case 2:
                          if (!(u = e.sent)) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.prev = 4),
                            (e.next = 7),
                            this.$sdk.requestWxFaceVerifyV2({
                              faceVerifyKey: u.faceVerifyKey,
                            })
                          );
                        case 7:
                          return (
                            (o = e.sent),
                            e.abrupt(
                              "return",
                              void (this.faceRes = {
                                src: a.RES_SRC.OEM,
                                srcId:
                                  (null == o ? void 0 : o.verifyResult) ||
                                  (null == o ? void 0 : o.verify_result) ||
                                  u.faceVerifyKey,
                                errCode:
                                  (null == o ? void 0 : o.errcode) ||
                                  (null == o ? void 0 : o.err_code) ||
                                  "0",
                                errMsg:
                                  (null == o ? void 0 : o.errmsg) ||
                                  (null == o ? void 0 : o.err_msg) ||
                                  "",
                                seqNo: u.seqNo,
                              })
                            )
                          );
                        case 11:
                          if (
                            ((e.prev = 11),
                            (e.t0 = e.catch(4)),
                            null ==
                              (s =
                                null == (i = l.aegisReporter)
                                  ? void 0
                                  : i.reportEvent) ||
                              s.call(i, "MONITOR-FACECHECK-V2-SDK-FAIL", {
                                ext2:
                                  (null == e.t0 ? void 0 : e.t0.errmsg) ||
                                  (null == e.t0 ? void 0 : e.t0.errMsg) ||
                                  (null == e.t0 ? void 0 : e.t0.err_msg) ||
                                  String(e.t0),
                                ext3:
                                  (null == e.t0 ? void 0 : e.t0.errcode) ||
                                  (null == e.t0 ? void 0 : e.t0.errCode) ||
                                  (null == e.t0 ? void 0 : e.t0.err_code),
                              }),
                            (d = String(
                              (null == e.t0 ? void 0 : e.t0.errcode) ||
                                (null == e.t0 ? void 0 : e.t0.errCode) ||
                                (null == e.t0 ? void 0 : e.t0.err_code) ||
                                ""
                            )),
                            (v =
                              "-2" === d ||
                              "101" === d ||
                              /cancel/i.test(
                                (null == e.t0 ? void 0 : e.t0.errmsg) ||
                                  (null == e.t0 ? void 0 : e.t0.errMsg) ||
                                  ""
                              )),
                            this.resetV2Ctx(),
                            !v)
                          ) {
                            e.next = 17;
                            break;
                          }
                          throw {
                            errcode: null == e.t0 ? void 0 : e.t0.errcode,
                          };
                        case 17:
                          throw (
                            (null ==
                              (c =
                                null == (n = l.aegisReporter)
                                  ? void 0
                                  : n.reportEvent) ||
                              c.call(
                                n,
                                "MONITOR-FACECHECK-V2-FAIL-NO-FALLBACK"
                              ),
                            { errcode: null == e.t0 ? void 0 : e.t0.errcode })
                          );
                        case 18:
                          return e.abrupt("return", this.faceCheckV1(t));
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[4, 11]]
                );
              })
            )),
            function (e) {
              return d.apply(this, arguments);
            }),
        },
        {
          key: "faceCheckV1",
          value:
            ((o = r(
              e().mark(function r(t) {
                var i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), !t.user_id_key || t.id)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 4),
                            this.$sdk.requestWxFacePictureVerifyUnionVideo({
                              userIdKey: t.user_id_key,
                              checkAliveType:
                                u.ENUM_SDK_CONSTANTS.ALIVE_TYPE.AUTO,
                            })
                          );
                        case 4:
                          (e.t0 = e.sent), (e.next = 10);
                          break;
                        case 7:
                          return (
                            (e.next = 9),
                            this.$sdk.requestWxFacePictureVerifyUnionVideo({
                              name: t.name,
                              idCardNumber: t.id,
                              checkAliveType:
                                u.ENUM_SDK_CONSTANTS.ALIVE_TYPE.AUTO,
                            })
                          );
                        case 9:
                          e.t0 = e.sent;
                        case 10:
                          (i = e.t0),
                            (this.faceRes = {
                              src: a.RES_SRC.OEM,
                              srcId: i.verifyResult || "",
                              errCode: i.errcode || i.err_code,
                              errMsg: i.errmsg || i.err_msg,
                            }),
                            (e.next = 17);
                          break;
                        case 14:
                          throw (
                            ((e.prev = 14),
                            (e.t1 = e.catch(0)),
                            { errcode: e.t1.errcode })
                          );
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[0, 14]]
                );
              })
            )),
            function (e) {
              return o.apply(this, arguments);
            }),
        },
      ]),
      p
    );
  })(c.BaseFaceCheck);
exports.MpFaceCheck = o;
