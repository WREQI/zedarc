var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../../service/broker.js");
var o = require("../../../common/components/Dialog/index.js"),
  i = require("../../../adapter/router.js"),
  r = require("../../../config/broker/11100/index.js");
exports.checkAuthHandle = function (t, a) {
  return new Promise(function (l, u) {
    var d,
      c,
      m,
      s,
      g,
      h,
      f,
      v,
      b = null == (d = n.getCurrentInstance()) ? void 0 : d.proxy,
      k = {
        no_kc_auth: {
          enable: !(null == (c = r.brokerConfig.dictionary.Enties.kechuang)
            ? void 0
            : c.hidden),
          confirmBtn: "开通科创板权限",
          name: "BizKeChuangOpen",
        },
        no_kc_growth_auth: {
          enable: !(null ==
          (m = r.brokerConfig.dictionary.Enties.kechuanggrowth)
            ? void 0
            : m.hidden),
          confirmBtn: "开通成长层权限",
          name: "BizKeChuangGrowthOpen",
        },
        no_ggt_auth: {
          enable: !(null == (s = r.brokerConfig.dictionary.Enties.ggt)
            ? void 0
            : s.hidden),
          confirmBtn: "开通权限",
          name: "BizGGTOpen",
        },
        no_st_auth: {
          enable: !(null == (g = r.brokerConfig.dictionary.Enties.st)
            ? void 0
            : g.hidden),
          confirmBtn: "开通ST权限",
          name: "BizSt",
        },
        no_gem_auth: {
          enable: !(null == (h = r.brokerConfig.dictionary.Enties.gem)
            ? void 0
            : h.hidden),
          confirmBtn: "立即开通",
          name: "BizGem",
        },
        no_gemLow_auth: {
          enable: !(null == (f = r.brokerConfig.dictionary.Enties.gem)
            ? void 0
            : f.hidden),
          confirmBtn: "立即升级",
          name: "BizGem",
        },
        no_kzz_auth: {
          enable: !(null == (v = r.brokerConfig.dictionary.Enties.kzz)
            ? void 0
            : v.hidden),
          confirmBtn: "开通权限",
          name: "BizKzz",
        },
      },
      B = t.retcode,
      _ = t.retmsg,
      C = t.data,
      z = i.route().query,
      p = void 0 === z ? {} : z,
      y = k[B];
    y.enable
      ? o.Dialog({
          title: null == y ? void 0 : y.title,
          context: b,
          message: _,
          confirmButtonText: null == y ? void 0 : y.confirmBtn,
          showCancelButton: !0,
          onConfirm: function () {
            if (null == a ? void 0 : a.onConfirm)
              return null == a ? void 0 : a.onConfirm(y);
            i.router().push({
              name: null == y ? void 0 : y.name,
              query: e(
                { market: p.market, code: p.code, holder: p.holder },
                C || {}
              ),
            });
          },
        })
      : o.Dialog({
          title: null == y ? void 0 : y.title,
          context: b,
          message: _,
        }),
      u(t);
  });
};
