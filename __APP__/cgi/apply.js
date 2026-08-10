var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator");
require("../@babel/runtime/helpers/Objectvalues");
var t = require("../@babel/runtime/helpers/slicedToArray");
require("../@babel/runtime/helpers/Objectentries");
var n = require("../@babel/runtime/helpers/objectSpread2"),
  c = require("../@babel/runtime/helpers/classCallCheck"),
  i = require("../@babel/runtime/helpers/createClass"),
  o = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var a = require("../common/vendor.js"),
  _ = require("../config/cgi.js"),
  s = require("./base.js");
require("../service/broker.js");
var l = require("../service/cookie/mp-weixin.js"),
  p = require("../model/apply/profile/utils/index.js"),
  d = require("../config/key.js"),
  y = require("../utils/accountHelper.js"),
  A = require("../config/broker/11100/index.js"),
  f = new l.AdapterCookie(),
  C = (function (e) {
    return (
      (e.H5 = "0"),
      (e.WX = "1"),
      (e.REC = "2"),
      (e.WZQ = "3"),
      (e.VOIP = "4"),
      (e.MINIAPP = "5"),
      (e.OEM = "7"),
      e
    );
  })(C || {}),
  h = (function (e) {
    return (
      (e.QUERY = "query"),
      (e.QUERY_CFT_PROTOCOL = "query_cft_protocol"),
      (e.SIGN_CFT_PROTOCOL = "sign_cft_protocol"),
      (e.CARD_OCR = "card_ocr"),
      (e.CARD_SUMBIT = "card"),
      (e.CARD_AUTH_UNIONPAY = "unionpay_auth"),
      (e.CARD_AUTH_REGISTER = "unionpay_register"),
      (e.CARD_AUTH_RESULT = "unionpay_query"),
      (e.CARD_SUPPORT_BANK = "query_support_bankcard"),
      (e.CARD_QRY_CFT_BANKCARD = "query_cft_bankcard"),
      (e.CARD_SET_CFT_BANKCARD = "set_cft_bankcard"),
      (e.IDCARD_UPLOAD_FRONT = "idfront"),
      (e.IDCARD_UPLOAD_BACK = "idback"),
      (e.IDCARD_DOWNLOAD_FRONT = "download_idfront"),
      (e.IDCARD_DOWNLOAD_BACK = "download_idback"),
      (e.IDCARD_SUBMIT = "auth"),
      (e.PULL_CFT_CRED = "pull_cft_cred"),
      (e.QUERY_CFT_CRED = "query_cft_cred"),
      (e.PULL_CFT_TEL = "pull_cft_tel"),
      (e.PROFILE_SUBMIT = "full_userinfo"),
      (e.SUGGEST_ADDR = "suggest_addr"),
      (e.PROFILE_CHANGE_PHONE = "tel"),
      (e.PROFILE_SMS_CHECK = "check_identity"),
      (e.TEL_CHECK = "tel_check"),
      (e.QRY_TEL_ADDRESS_CHECK = "qry_tel_address_check"),
      (e.MODE = "mode"),
      (e.FACE_LIVE = "face_live"),
      (e.LIVE_RESULT = "live_result"),
      (e.LIVE_RESULT_CHECK = "face_check_result"),
      (e.QUERY_VERIFY_KEY = "query_verify_key"),
      (e.VERIFY_CHECK = "live_check"),
      (e.VIDEO_UPLOAD = "video"),
      (e.VIDEO_DOWNLOAD = "download_video"),
      (e.VIDEO_LIPCODE = "lip_code"),
      (e.VIDEO_RESULT = "video_result"),
      (e.VIDEO_VOICE_TTS = "query_tts"),
      (e.PASSWD_SET = "passwd"),
      (e.RISK = "risk"),
      (e.RE_RISK = "re_risk"),
      (e.MARKET = "market"),
      (e.QUERY_COMMISSION = "query_commission"),
      (e.PROTOCOL_INFO = "protocol_info"),
      (e.QUESTIONNAIRE = "questionnaire"),
      (e.APPLY = "apply"),
      (e.TOOL = "tool"),
      (e.APPLY_PROFIT_ACTIVITY = "apply_profit_activity"),
      (e.QUERY_AMS_CHANNEL = "query_ams_channel"),
      (e.QUERY_PRE_REVIEW = "query_pre_review"),
      e
    );
  })(h || {}),
  E = (function (e) {
    return (
      (e.JOB = "job"),
      (e.EDU = "edu"),
      (e.JOB_TITLE_ENUM = "duty"),
      (e.YEAR_INCOME = "yearincome"),
      e
    );
  })(E || {}),
  v = {
    query: {
      cred_id_enc: "cred_id",
      cred_name_enc: "cred_name",
      cred_address_enc: "cred_address",
      mail_address_enc: "mail_address",
      detailed_address_enc: "detailed_address",
      house_address_enc: "house_address",
      cred_authority_enc: "cred_authority",
    },
    pull_cft_cred: {
      id_number_enc: "cred_id",
      name_enc: "cred_name",
      cred_address_enc: "cred_address",
      cred_authority_enc: "cred_authority",
    },
  },
  I = new ((function (s) {
    o(h, s);
    var l,
      C = u(h);
    function h() {
      return c(this, h), C.apply(this, arguments);
    }
    return (
      i(h, [
        {
          key: "getFullApplyUrl",
          value: function (e) {
            return (
              "https://"
                .concat(A.brokerConfig.base.domain)
                .concat(_.CGI_PREFIX)
                .concat(_.API_APPLY_ACCOUNT, "?action=")
                .concat(e, "&apply_channel=")
                .concat(this.getApplyChannel(), "&t=")
                .concat(Date.now(), "&come_from=")
                .concat(this.comeFrom || "", "&cli_platform=")
                .concat(this.cliPlatform, "&cli_product=")
                .concat(this.cliProduct) + "&xcxname=zxgxcx"
            );
          },
        },
        {
          key: "getMediaSrcUrl",
          value: function (e, r) {
            var t = this.getFullApplyUrl(e);
            return [
              (null == r ? void 0 : r.isDirect)
                ? "".concat(t, "&is_direct=").concat(r.isDirect)
                : t,
              f.getCookiesStr().replace(/;/g, "&"),
            ].join("&");
          },
        },
        {
          key: "getVideoSrcUrl",
          value: function (e) {
            return [
              "https://"
                .concat(A.brokerConfig.base.domain)
                .concat(_.CGI_PREFIX)
                .concat(_.API_APPLY_ACCOUNT_VIDEO, "?action=")
                .concat(e, "&xcxname=zxgxcx&cli_platform=")
                .concat(this.cliPlatform, "&cli_product=")
                .concat(this.cliProduct),
              f.getCookiesStr().replace(/;/g, "&"),
            ].join("&");
          },
        },
        {
          key: "processApplyAccount",
          value: function (e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              c =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return this.request(
              "".concat(_.API_APPLY_ACCOUNT, "?action=").concat(e),
              n(
                n({ action: e }, r),
                {},
                { apply_channel: this.getApplyChannel() || "" }
              ),
              c
            ).then(function (r) {
              return (function (e, r) {
                var c = n({}, r);
                return (
                  v[e] &&
                    Object.entries(v[e]).forEach(function (e) {
                      var n = t(e, 2),
                        i = n[0],
                        o = n[1];
                      r[i] && (c[o] = p.base64toUtf8(r[i]) || r[i]);
                    }),
                  c
                );
              })(e, r);
            });
          },
        },
        {
          key: "requestShangtangFacecheck",
          value: function (e, r) {
            return this.processApplyAccount("face_live", {
              from: "shangtang_h5",
              data: JSON.stringify(r),
              sign: e,
            });
          },
        },
        {
          key: "queryPreReview",
          value: function () {
            return this.processApplyAccount("query_pre_review");
          },
        },
        {
          key: "queryWxFaceVerifyKey",
          value: function () {
            return this.processApplyAccount("query_verify_key", {
              face_src: y.getFaceSrcByPlatform(),
              use_new_wx_info: "1",
            });
          },
        },
        {
          key: "requestSmsCode",
          value: function (e, r) {
            return this.request(
              _.API_SEND_SMS,
              { type: e, tel: r },
              { encodeFields: ["tel", "id_number"] }
            );
          },
        },
        {
          key: "requestSmsCheck",
          value: function (e, r) {
            var t = r.phone,
              n = r.code;
            return this.request(
              _.API_CHECKIDENTITY,
              { action: e, sms_code: n, tel: t },
              { encodeFields: ["tel", "id_number"] }
            );
          },
        },
        {
          key: "getDict",
          value: function (e) {
            var r = this,
              t = e.dealerCode,
              n = e.credId,
              c = e.itemList;
            return new Promise(function (e, i) {
              var o = {};
              c.forEach(function (e) {
                E[e.toUpperCase()] &&
                  (o[e] = "open_".concat(E[e.toUpperCase()]));
              });
              var u = Object.values(o).join("|");
              r.request(_.API_DICTIONARY, {
                dealercode: t,
                cred_id: n,
                qry_item: u,
              })
                .then(function (r) {
                  var t = {};
                  Object.keys(o).forEach(function (e) {
                    var n = o[e];
                    if (r[n]) {
                      var c = [];
                      (r[n] || []).forEach(function (e) {
                        c[e.order] = e;
                      }),
                        (c = c.filter(function (e) {
                          return !!e;
                        })),
                        (t[e] = c);
                    }
                  }),
                    e(t);
                })
                .catch(function (e) {
                  i(e);
                });
            });
          },
        },
        {
          key: "processBankCards",
          value: function (e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return this.request(_.API_BANKCARDS, n({ action: e }, r));
          },
        },
        {
          key: "getVideoLipCode",
          value: function () {
            return this.processApplyAccount("lip_code").then(function (e) {
              return e.code;
            });
          },
        },
        {
          key: "getVideoVoiceTts",
          value: function () {
            return this.processApplyAccount("query_tts").then(function (e) {
              return { audio: e.audio || "", ttsLen: Number(e.tts_len || 0) };
            });
          },
        },
        {
          key: "getPhoneAuthStatus",
          value: function (e) {
            return this.processApplyAccount("tel", e, {
              encodeFields: ["tel"],
            });
          },
        },
        {
          key: "queryCommission",
          value: function () {
            return this.processApplyAccount("query_commission");
          },
        },
        {
          key: "queryProtocolInfo",
          value: function () {
            return this.processApplyAccount("protocol_info");
          },
        },
        {
          key: "setApplyChannel",
          value: function (e, r) {
            try {
              r && a.index.removeStorageSync(d.APPLY_CHANNEL),
                e &&
                  !this.getApplyChannel() &&
                  a.index.setStorageSync(d.APPLY_CHANNEL, e);
            } catch (e) {}
          },
        },
        {
          key: "getApplyChannel",
          value: function () {
            return a.index.getStorageSync(d.APPLY_CHANNEL);
          },
        },
        {
          key: "querySubscribeInfo",
          value:
            ((l = r(
              e().mark(function r() {
                var t, n;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.request(_.API_QUERY_SUBSCRIBE)
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            e.abrupt(
                              "return",
                              "0" !==
                                (null == (t = null == n ? void 0 : n.wzq)
                                  ? void 0
                                  : t.subscribe_status)
                            )
                          );
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return", !0)
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[0, 7]]
                );
              })
            )),
            function () {
              return l.apply(this, arguments);
            }),
        },
        {
          key: "querySupportBankcard",
          value: function () {
            return this.processApplyAccount("query_support_bankcard");
          },
        },
        {
          key: "queryCftBankcard",
          value: function (e) {
            return this.processApplyAccount("query_cft_bankcard", e);
          },
        },
        {
          key: "proccessApplyProfitActivity",
          value: function (e) {
            return this.processApplyAccount("apply_profit_activity", e);
          },
        },
      ]),
      h
    );
  })(s.BaseAPI))();
(exports.ACTION = h),
  (exports.BankAuthScene = { input: "0", cft: "1" }),
  (exports.RES_SRC = C),
  (exports.SEND_SMS_ACTION = "8"),
  (exports.applyCgi = I);
