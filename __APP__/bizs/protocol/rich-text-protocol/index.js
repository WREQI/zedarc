var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  r = require("./fill-variable.js"),
  i = require("../loading-provider/enum.js"),
  s = require("../../../cgi/applyInfo.js"),
  a = require("../../../cgi/apply.js"),
  c = require("../../../model/protocol/useProtocol.js"),
  u = require("./BaseProtocolConfig.js"),
  l = require("../../../cgi/signProtocol.js"),
  f = require("../../../service/aegis/platform/not-wujie.js"),
  p = require("../../../stores/user/useUserinfo.js"),
  h = require("../commission-bar/useCommission.js");
require("../../../service/broker.js");
var m = require("../../../config/broker/11100/index.js"),
  d = c.useProtocols().getProtocol,
  g = {
    components: {
      RichTextComp: function () {
        return "./rich-text-mp.js";
      },
    },
    inject: ["changeProtocolStatus", "setErrorMessage"],
    props: {
      protocolKey: { type: String, required: !0 },
      matchInfo: { type: Object, default: function () {} },
      investInfo: { type: Object, default: function () {} },
    },
    setup: function (e) {
      var t = p.useUserinfoStore(),
        r = o.storeToRefs(t).userinfo,
        i = o.ref({}),
        s = o.inject("protocolConfig", {}),
        a = o.ref({}),
        c = o.computed(function () {
          return n(n({}, a.value), e.matchInfo);
        });
      return {
        userinfo: r,
        config: i,
        insideMatchInfo: a,
        computedMatchInfo: c,
        protocolConfig: s,
      };
    },
    data: function () {
      return { rawContent: "", content: "", hasRequestMatchInfo: !1 };
    },
    watch: {
      protocolKey: {
        immediate: !0,
        handler: function (e) {
          var t = this;
          this.$nextTick(function () {
            t.loadHtml(e);
          });
        },
      },
      computedMatchInfo: {
        handler: function (e) {
          var t = this;
          this.$nextTick(function () {
            t.config = new u.BaseProtocolConfig({ matchInfo: e });
          });
        },
        immediate: !0,
      },
      userinfo: {
        handler: function () {
          this.config = new u.BaseProtocolConfig({
            matchInfo: this.computedMatchInfo,
          });
        },
      },
      config: {
        handler: function () {
          this.transferContent();
        },
      },
    },
    methods: {
      replaceStyle: function (e) {
        return e.replace(/color: windowtext(;)?/g, "");
      },
      selfChangeProtocolStatus: function (e) {
        this.changeProtocolStatus && this.changeProtocolStatus(e);
      },
      loadHtml: function (r) {
        var a = this;
        return t(
          e().mark(function t() {
            var c, p, m, g, v, b, x, C, y, I, k, q, T;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((g = r)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((a.content = []),
                        void (
                          a.setErrorMessage && a.setErrorMessage("协议配置出错")
                        ))
                      );
                    case 3:
                      if (
                        !(null == (v = a.$route.query)
                          ? void 0
                          : v.need_apply_account_query) ||
                        a.hasRequestMatchInfo
                      ) {
                        e.next = 20;
                        break;
                      }
                      return (e.prev = 5), (e.next = 8), s.applyInfoCgi.get();
                    case 8:
                      return (b = e.sent), (e.next = 11), a.toProtocolVar(b);
                    case 11:
                      (a.insideMatchInfo = e.sent),
                        (a.config = new u.BaseProtocolConfig({
                          matchInfo: a.computedMatchInfo,
                        })),
                        (a.hasRequestMatchInfo = !0),
                        (e.next = 18);
                      break;
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(5));
                    case 18:
                      e.next = 34;
                      break;
                    case 20:
                      if ("1" !== (null == v ? void 0 : v.bizType)) {
                        e.next = 33;
                        break;
                      }
                      return (
                        (e.prev = 21),
                        (e.next = 24),
                        l.signProtocol.signUpdateRiskTest({
                          riskMatchBusiness: "1",
                        })
                      );
                    case 24:
                      (x = e.sent), (a.insideMatchInfo = x), (e.next = 31);
                      break;
                    case 28:
                      (e.prev = 28),
                        (e.t1 = e.catch(21)),
                        f.aegisReporter.sdk.error({
                          msg: "signUpdateRiskTestQueryError",
                          ext2: JSON.stringify(e.t1 || ""),
                          trace: "trace",
                        });
                    case 31:
                      e.next = 34;
                      break;
                    case 33:
                      a.investInfo && (a.insideMatchInfo = a.investInfo);
                    case 34:
                      if (!(null == v ? void 0 : v.commissionType)) {
                        e.next = 47;
                        break;
                      }
                      return (
                        (e.prev = 35),
                        (C = h.useCommission()),
                        (y = C.getCommissionTableContent),
                        (e.next = 40),
                        y({ type: null == v ? void 0 : v.commissionType })
                      );
                    case 40:
                      (I = e.sent),
                        (a.insideMatchInfo = n(
                          n({}, a.insideMatchInfo),
                          {},
                          { commissionTable: I }
                        )),
                        (e.next = 47);
                      break;
                    case 44:
                      (e.prev = 44),
                        (e.t2 = e.catch(35)),
                        o.index.showToast({
                          title: "佣金费率获取失败, 请稍候重试",
                          icon: "none",
                        });
                    case 47:
                      return (e.prev = 47), (e.next = 50), d(g);
                    case 50:
                      (k = e.sent),
                        (q =
                          (null ==
                          (p =
                            null == (c = null == k ? void 0 : k.data)
                              ? void 0
                              : c[0])
                            ? void 0
                            : p.content) || "{}"),
                        (T =
                          (null == (m = JSON.parse(q)) ? void 0 : m.content) ||
                          ""),
                        a.selfChangeProtocolStatus(i.PROTOCOL_STATUS.SUCCESS),
                        (a.rawContent = T),
                        (a.config = new u.BaseProtocolConfig({
                          matchInfo: a.computedMatchInfo,
                        })),
                        (e.next = 59);
                      break;
                    case 56:
                      (e.prev = 56),
                        (e.t3 = e.catch(47)),
                        a.selfChangeProtocolStatus(i.PROTOCOL_STATUS.FAIL);
                    case 59:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [
                [5, 16],
                [21, 28],
                [35, 44],
                [47, 56],
              ]
            );
          })
        )();
      },
      transferContent: function () {
        var e = o.isEmpty(this.protocolConfig)
          ? this.config
          : this.protocolConfig;
        o.isEmpty(this.computedMatchInfo) ||
          (e.matchInfo = this.computedMatchInfo);
        var t = r.fillVariable(this.rawContent, e),
          n = this.replaceStyle(t);
        (this.content = n.replace(/<a .*?>(.*?)<\/a>/gi, "<span>$1</span>")),
          (this.content = this.content.replace(
            /(")(\/mp\/protocol\/image\/)/gi,
            "$1https://".concat(m.brokerConfig.base.domain, "$2")
          ));
      },
      toProtocolVar: function (r) {
        var i = this;
        return t(
          e().mark(function t() {
            var s, c, u, l, f, p, m, d;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((c = (r.invest_type || "1")
                          .split("")
                          .map(function (e) {
                            return e - 1;
                          })),
                        (u = ""),
                        (l = r.dealerbranchname || ""),
                        "1" !=
                          "".concat(
                            null == (s = i.$route.query) ? void 0 : s.commission
                          ))
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.prev = 2), (e.next = 5), a.applyCgi.queryCommission()
                      );
                    case 5:
                      (f = e.sent),
                        (p = f.commission_protocol),
                        (m = f.branch_name),
                        (u = h.getTableRenderStr({
                          content: p.map(function (e) {
                            return null == e ? void 0 : e.split("|");
                          }),
                        })),
                        (l = m),
                        (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(2)),
                        o.index.showToast({
                          title: "佣金费率获取失败, 请稍候重试",
                          icon: "none",
                        });
                    case 14:
                      return (
                        (d = {
                          match_type: r.match_type,
                          credentialname: r.cred_name,
                          credentialid: r.cred_id,
                          riskLevel: r.risk_level || "1",
                          investTerm: String((r.invest_time || 1) - 1),
                          investRange: c,
                          commissionTable: u,
                          dealerbranchname: l,
                        }),
                        e.abrupt("return", n(n({}, r), d))
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[2, 11]]
            );
          })
        )();
      },
    },
  };
Array || o.resolveComponent("rich-text-comp")();
var v = o._export_sfc(g, [
  [
    "render",
    function (e, t, n, r, i, s) {
      return { a: o.p({ content: i.content }) };
    },
  ],
]);
wx.createComponent(v);
