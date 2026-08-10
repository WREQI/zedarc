var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  a = require("../../service/aegis/platform/not-wujie.js"),
  c = require("../../model/apply/facecheck/index.js"),
  i = require("../../utils/accountHelper.js"),
  u = require("../../cgi/bind.js"),
  o = require("../../utils/wxFaceV2/index.js");
require("../../service/broker.js");
var l = require("../../common/components/Dialog/index.js"),
  s = require("../../config/broker/11100/index.js");
exports.useForgetMobile = function (d) {
  var f,
    v = new c.FaceController(),
    m = t.reactive({ name: "", idcard: "", account: "" }),
    _ = t.ref(""),
    x = t.ref(""),
    p = t.ref(""),
    C = null;
  function h() {
    var e = { name: "", idcard: "", account: "" };
    Object.keys(m).forEach(function (r) {
      m[r] = e[r];
    });
  }
  function g() {
    return _.value;
  }
  function b() {
    var e, r;
    (_.value = (null == (e = v.faceRes) ? void 0 : e.srcId) || ""),
      (x.value = m.idcard),
      (p.value = m.name),
      null == (r = d.handleSuccess) || r.call(d);
  }
  return {
    getIDName: function () {
      return p.value;
    },
    getIDNum: function () {
      return x.value;
    },
    getFaceCheckParams: function () {
      var e = g();
      return e || C
        ? C
          ? {
              face_verify_result: e,
              face_src: i.getFaceSrcByPlatform(),
              use_new_wx_info: "1",
              seq_no: C.seqNo,
            }
          : {
              face_verify_result: e,
              face_src: i.getFaceSrcByPlatform(),
              use_new_wx_info: "0",
            }
        : {};
    },
    getFaceCheckResult: g,
    clearFaceCheckResult: function () {
      (_.value = ""), (C = null), h();
    },
    isFaceCheckSuc: function () {
      return !!_.value || !!(null == C ? void 0 : C.seqNo);
    },
    setFormData: function (e) {
      Object.assign(m, e);
    },
    clearFormData: h,
    handleFaceCheck:
      ((f = n(
        r().mark(function c() {
          var i, f, _;
          return r().wrap(function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return c.abrupt(
                    "return",
                    "0" === d.scene
                      ? m.idcard && m.name
                        ? n(
                            r().mark(function e() {
                              var n, c, i, l, s, d;
                              return r().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (C = null),
                                          (e.prev = 1),
                                          t.index.showLoading({
                                            title: "正在处理",
                                            mask: !0,
                                          }),
                                          (e.next = 5),
                                          o.isWxFaceV2Enabled()
                                        );
                                      case 5:
                                        return (
                                          (c = e.sent),
                                          (i = c.enabled ? "1" : "0"),
                                          (e.next = 9),
                                          u.bindCgi.reqFacecheckToken({
                                            scene: "0",
                                            credentialId: m.idcard,
                                            credentialName: m.name,
                                            useNewWxInfo: i,
                                          })
                                        );
                                      case 9:
                                        if (
                                          ((l = e.sent),
                                          (s =
                                            null == l
                                              ? void 0
                                              : l.face_verify_key),
                                          (d = null == l ? void 0 : l.seq_no),
                                          t.index.hideLoading(),
                                          !(c.enabled && s && d))
                                        ) {
                                          e.next = 19;
                                          break;
                                        }
                                        return (
                                          (C = { faceVerifyKey: s, seqNo: d }),
                                          (e.next = 17),
                                          v.faceCheck({
                                            name: m.name,
                                            id: m.idcard,
                                            v2Ctx: C,
                                          })
                                        );
                                      case 17:
                                        e.next = 21;
                                        break;
                                      case 19:
                                        return (
                                          (e.next = 21),
                                          v.faceCheck({
                                            name: m.name,
                                            id: m.idcard,
                                            forceV1: !0,
                                          })
                                        );
                                      case 21:
                                        return (
                                          (null == (n = v.faceRes)
                                            ? void 0
                                            : n.seqNo) || (C = null),
                                          b(),
                                          e.abrupt("return", v.faceRes)
                                        );
                                      case 26:
                                        (e.prev = 26),
                                          (e.t0 = e.catch(1)),
                                          (C = null);
                                        try {
                                          t.index.hideLoading();
                                        } catch (e) {}
                                        throw (
                                          (a.aegisReporter.reportEvent(
                                            "FACE_CHECK_BY_NAME_FAIL",
                                            {
                                              ext2:
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.errcode) ||
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.errCode) ||
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.retcode),
                                              ext3:
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.errmsg) ||
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.errMsg) ||
                                                (null == e.t0
                                                  ? void 0
                                                  : e.t0.retmsg) ||
                                                String(e.t0 || ""),
                                            }
                                          ),
                                          e.t0)
                                        );
                                      case 31:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[1, 26]]
                              );
                            })
                          )()
                        : (null == (i = d.handleToComplete) || i.call(d),
                          {
                            errCode: "LACK_IDCARD_INFO",
                            errMsg: "请填写正确身份证和姓名",
                          })
                      : m.account
                      ? 10800 !== s.brokerConfig.base.code || m.idcard || m.name
                        ? n(
                            r().mark(function n() {
                              var c, i, s, f, _, x, p, h;
                              return r().wrap(
                                function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.prev = 0),
                                          t.index.showLoading({
                                            title: "正在处理",
                                            mask: !0,
                                          }),
                                          (r.next = 4),
                                          o.isWxFaceV2Enabled()
                                        );
                                      case 4:
                                        return (
                                          (s = r.sent),
                                          (f = s.enabled ? "1" : "0"),
                                          (_ = !(!m.idcard || !m.name)),
                                          (r.next = 9),
                                          u.bindCgi.reqFacecheckToken(
                                            e(
                                              {
                                                scene: d.scene,
                                                account: m.account,
                                                useNewWxInfo: f,
                                              },
                                              _
                                                ? {
                                                    credentialId: m.idcard,
                                                    credentialName: m.name,
                                                  }
                                                : {}
                                            )
                                          )
                                        );
                                      case 9:
                                        if (
                                          ((x = r.sent),
                                          (p =
                                            null == x
                                              ? void 0
                                              : x.face_verify_key),
                                          (h = null == x ? void 0 : x.seq_no),
                                          p)
                                        ) {
                                          r.next = 14;
                                          break;
                                        }
                                        throw {
                                          retcode: "GET_USERKEY_FAIL",
                                          retmsg: m.account,
                                        };
                                      case 14:
                                        if (((C = null), !s.enabled || !h)) {
                                          r.next = 21;
                                          break;
                                        }
                                        return (
                                          (C = { faceVerifyKey: p, seqNo: h }),
                                          (r.next = 19),
                                          v.faceCheck({
                                            user_id_key: p,
                                            v2Ctx: C,
                                          })
                                        );
                                      case 19:
                                        r.next = 23;
                                        break;
                                      case 21:
                                        return (
                                          (r.next = 23),
                                          v.faceCheck({
                                            user_id_key: p,
                                            forceV1: !0,
                                          })
                                        );
                                      case 23:
                                        return (
                                          (null == (c = v.faceRes)
                                            ? void 0
                                            : c.seqNo) || (C = null),
                                          t.index.hideLoading(),
                                          b(),
                                          r.abrupt("return", v.faceRes)
                                        );
                                      case 29:
                                        (r.prev = 29),
                                          (r.t0 = r.catch(0)),
                                          (C = null);
                                        try {
                                          t.index.hideLoading();
                                        } catch (e) {}
                                        return r.abrupt(
                                          "return",
                                          (a.aegisReporter.reportEvent(
                                            "FACE_CHECK_BY_TOKEN_FAIL",
                                            {
                                              ext2: r.t0.retcode,
                                              ext3:
                                                (null == r.t0
                                                  ? void 0
                                                  : r.t0.retmsg) ||
                                                JSON.stringify(r.t0 || {}),
                                            }
                                          ),
                                          "GET_USERKEY_FAIL" === r.t0.retcode
                                            ? l.Dialog({
                                                message:
                                                  "人脸识别暂不可用，请使用手机号码登录",
                                                confirmButtonText: "我知道了",
                                              })
                                            : null ==
                                                (i = d.handleToComplete) ||
                                              i.call(d),
                                          {
                                            errCode: "LACK_IDCARD_INFO",
                                            errMsg: "请填写正确身份证和姓名",
                                          })
                                        );
                                      case 34:
                                      case "end":
                                        return r.stop();
                                    }
                                },
                                n,
                                null,
                                [[0, 29]]
                              );
                            })
                          )()
                        : (null == (f = d.handleToComplete) || f.call(d),
                          {
                            errCode: "LACK_IDCARD_INFO",
                            errMsg: "请填写正确身份证和姓名",
                          })
                      : (null == (_ = d.handleToComplete) || _.call(d),
                        {
                          errCode: "LACK_ACCOUNT_INFO",
                          errMsg: "请填写正确资金账号",
                        })
                  );
                case 1:
                case "end":
                  return c.stop();
              }
          }, c);
        })
      )),
      function () {
        return f.apply(this, arguments);
      }),
  };
};
