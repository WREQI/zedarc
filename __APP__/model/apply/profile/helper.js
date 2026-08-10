require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var o,
  a = Object.defineProperty,
  l = function (e, i, n) {
    return (
      (function (e, i, n) {
        i in e
          ? a(e, i, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[i] = n);
      })(e, "symbol" != t(i) ? i + "" : i, n),
      n
    );
  },
  u = require("./broker/11100.js"),
  s = require("./declare.js"),
  c = require("./items.js");
require("../../../service/broker.js");
var d = require("../../../config/broker/11100/index.js"),
  b = require("../../../common/vendor.js"),
  f = (null == (o = u.brokerConfig) ? void 0 : o.jobCompanyDisabledList) || [
    "234",
    "236",
    "237",
  ];
(exports.ProfileHelper = (function () {
  function t(r) {
    var o = this;
    n(this, t),
      l(this, "applyReq"),
      l(
        this,
        "getItemList",
        (function () {
          var n = i(
            e().mark(function i(n) {
              var r, t, a, l, s, b, f, m;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = n.listCfg),
                        (a = n.applyInfo),
                        (l = n.isRecoverMode),
                        (s = a.cred_id),
                        (b = Object.keys(t).filter(function (e) {
                          return t[e] && (!l || "tel" !== e);
                        })),
                        (e.next = 3),
                        o.applyReq.getDict({
                          dealerCode: d.brokerConfig.base.code,
                          credId: s,
                          itemList: b,
                        })
                      );
                    case 3:
                      return (
                        (f = e.sent),
                        (f = Object.assign(
                          {},
                          c.originItem.LOCAL_DICT,
                          null == (r = u.brokerConfig) ? void 0 : r.dictionary,
                          f
                        )),
                        (m = o.gernarateItemList(b, f)),
                        e.abrupt(
                          "return",
                          (Object.defineProperty(m, "get", {
                            enumerable: !1,
                            value: function (e) {
                              return this.find(function (i) {
                                return i.key === e;
                              });
                            },
                          }),
                          Object.defineProperty(m, "getIdx", {
                            enumerable: !1,
                            value: function (e) {
                              return this.findIndex(function (i) {
                                return i.key === e;
                              });
                            },
                          }),
                          { formList: m, dictsList: f })
                        )
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, i);
            })
          );
          return function (e) {
            return n.apply(this, arguments);
          };
        })()
      ),
      (this.applyReq = r);
  }
  return (
    r(t, [
      {
        key: "gernarateItemList",
        value: function (e, i) {
          var n,
            r,
            t,
            o = [],
            a =
              (null ==
              (t =
                null ==
                (r = null == (n = d.brokerConfig.apply) ? void 0 : n.stepConfig)
                  ? void 0
                  : r.profile)
                ? void 0
                : t.optional) || [];
          return (
            e.forEach(function (e) {
              var n,
                r,
                t,
                l,
                d = Object.assign({}, c.originItem.ALL_ITEM_LIST[e]);
              (d.required = !(null == a ? void 0 : a.includes(e))),
                d.required ||
                  "job_title_enum" !== e ||
                  (d.type = s.INPUT_TYPE.RADIO),
                (d.data = Object.assign(
                  {
                    val:
                      null == (r = null == (n = i[e]) ? void 0 : n.slice)
                        ? void 0
                        : r.call(n),
                  },
                  c.originItem.ALL_ITEM_CFG[e],
                  null ==
                    (l = null == (t = u.brokerConfig) ? void 0 : t.itemConfig)
                    ? void 0
                    : l[e]
                )),
                b.isArray(d.data.val) &&
                  (Object.defineProperty(d.data.val, "get", {
                    enumerable: !1,
                    value: function (e) {
                      return this.find(function (i) {
                        return i.id === e;
                      });
                    },
                  }),
                  Object.defineProperty(d.data.val, "indexOfId", {
                    enumerable: !1,
                    value: function (e) {
                      var i = this.find(function (i) {
                        return i.id === e;
                      });
                      return this.indexOf(i);
                    },
                  })),
                o.push(d);
            }),
            o
          );
        },
      },
    ]),
    t
  );
})()),
  (exports.beforeSubmit = function (e) {
    var i;
    return (
      e.extraInfo || (e.extraInfo = {}),
      !(null == (i = u.brokerConfig) ? void 0 : i.beforeSubmit) ||
        u.brokerConfig.beforeSubmit(e)
    );
  }),
  (exports.checkRule = function (e, i) {
    var n = !0,
      r = {};
    if (!f.includes(e.job)) {
      Object.values(["无单位", "无工作", "无业", "无工作单位"]).forEach(
        function (t) {
          e.company.includes(t) &&
            (Object.assign(r, {
              company: {
                warn: "工作单位与职业「".concat(
                  i.get("job").content,
                  "」存在冲突，请修改"
                ),
              },
            }),
            (n = !1));
        }
      );
    }
    return { result: n, data: {}, item: r };
  }),
  (exports.handleSetBrokerDefaultData = function (e) {
    return u.brokerConfig.handleSetBrokerDefaultData
      ? u.brokerConfig.handleSetBrokerDefaultData(e)
      : {};
  }),
  (exports.linkageRule = function (e) {
    var i,
      n,
      r,
      t,
      o,
      a,
      l,
      s = e.modifiedKey,
      c = e.isInit,
      d = e.modifiedVal,
      b = d.oldVal,
      m = d.newVal,
      p = {},
      g = {},
      v =
        (function (e, i) {
          if (e)
            return i.find(function (i) {
              var n, r, t;
              return null ==
                (t =
                  null == (r = null == (n = e.data.val) ? void 0 : n.get)
                    ? void 0
                    : r.call(n, i))
                ? void 0
                : t.id;
            });
        })(e.formList.get("job_title_enum"), ["8", "7"]) || "";
    if ("job" === s) {
      var j = (null == (i = u.brokerConfig)
        ? void 0
        : i.jobCompanyDisabledList) || ["236", "237"];
      switch (
        (Object.assign(g, { tax: { hidden: ["217", "232"].includes(m) } }), m)
      ) {
        case "236":
          Object.assign(p, { job_title_enum: v, job_title_options: "无" });
          break;
        case "237":
          Object.assign(p, { job_title_enum: v, job_title_options: "学生" });
      }
      var y = ["236", "237"];
      Object.assign(g, { job_title_enum: { disabled: y.includes(m) } }),
        y.includes(m)
          ? (Object.assign(g, {
              year_income: {
                content:
                  null ==
                  (r = null == (n = e.dictsList) ? void 0 : n.year_income)
                    ? void 0
                    : r[0].name,
                disabled: !0,
              },
            }),
            Object.assign(p, {
              year_income:
                null == (o = null == (t = e.dictsList) ? void 0 : t.year_income)
                  ? void 0
                  : o[0].id,
            }))
          : Object.assign(g, { year_income: { disabled: !1 } }),
        Object.assign(g, { company: { disabled: j.includes(m) } }),
        j.includes(m) && Object.assign(p, { company: "无工作单位" });
    }
    return c
      ? (null == (a = u.brokerConfig) ? void 0 : a.linkageRule)
        ? u.brokerConfig.linkageRule({ data: p, item: g }, e)
        : { data: p, item: g }
      : ("job" === s &&
          ("234" === m &&
            Object.assign(p, {
              job_title_enum: v,
              job_title_options: "无",
              company: "无工作单位",
            }),
          f.includes(b) &&
            !f.includes(m) &&
            Object.assign(p, {
              job_title_enum: "",
              job_title_options: "",
              company: "",
            })),
        (null == (l = u.brokerConfig) ? void 0 : l.linkageRule)
          ? u.brokerConfig.linkageRule({ data: p, item: g }, e)
          : { data: p, item: g });
  });
