var e = require("../../@babel/runtime/helpers/slicedToArray");
require("../../@babel/runtime/helpers/Objectentries");
var r = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/typeof");
require("../../@babel/runtime/helpers/Objectvalues");
var n = require("../userinfoHelper.js"),
  o = require("../cookie/mp-weixin.js"),
  i = require("../../utils/getPlatform.js"),
  a = require("./reportSwitch.js"),
  u = new o.AdapterCookie(),
  d = i.getPlatform().platform,
  c = !1,
  f = function (e) {
    var r = e.data,
      t = e.reportFn;
    if (a.isReportEnabled()) {
      var n = p(r);
      if (r.openid || r.fopenid) t(n);
      else {
        var o = u.get("wzq_qluin");
        if (o && (void 0 !== r.openid || void 0 !== r.fopenid))
          return void 0 !== r.openid
            ? ((n.openid = o), void t(n))
            : ((n.fopenid = o), void t(n));
        "devtools" !== d && t(n);
      }
    }
  },
  s = Object.values({
    telNum: /^1(3\d|4[4-9]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-9])\d{8}$/,
    username:
      /^(?:欧阳|司马|上官|夏侯|诸葛|东方|皇甫|尉迟|公孙|轩辕|令狐|宇文|慕容|司徒|司空|王|李|张|刘|陈|杨|黄|赵|吴|周|徐|孙|马|朱|胡|郭|何|高|林|罗|郑|梁|谢|宋|唐|许|韩|冯|邓|曹|彭|曾|萧|田|董|潘|袁|于|蒋|蔡|余|杜|叶|程|苏|魏|吕|丁|任|沈|姚|卢|姜|崔|钟|谭|陆|汪|范|金|石|廖|贾|夏|韦|傅|方|白|邹|孟|熊|秦|邱|江|尹|薛|阎|段|雷|侯|龙|史|陶|黎|贺|顾|毛|郝|龚|邵|万|钱|严|覃|武|戴|莫|孔|向|汤|付|甯|肖)[\u4e00-\u9fa5]{1,2}$/,
    address:
      /^([\u4e00-\u9fa5]{2,7}(省|自治区|市)?[\u4e00-\u9fa5]{2,7}(市|区|县)?[\u4e00-\u9fa5]{2,7}(区|县)?)?(.{1,30})(小区|村委会|社区|村|街道|路|大道|街|巷|弄|号|大厦|公寓|写字楼|广场|酒店|宾馆|商场|超市|市场|中心|局|院|所|站|座|栋)(.{0,20})?$/,
    bankcard:
      /^(62\d{14,17}|4\d{12}(\d{3})?|5[1-5]\d{14}|6011\d{12}|3[47]\d{13})$/,
    idcard:
      /^([1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[0-9Xx])$|^([1-9]\d{5}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3})$/,
  }),
  p = function (n) {
    try {
      if (!n || "object" != t(n)) return n;
      var o = r({}, n);
      return (
        Object.entries(o).forEach(function (r) {
          var t = e(r, 2),
            n = t[0],
            i = t[1];
          s.some(function (e) {
            return e.test(i);
          }) && (o[n] = "*");
        }),
        o
      );
    } catch (e) {
      return n;
    }
  };
(exports.mtaPgvFactory = function (e) {
  return function (r) {
    var t = r.path,
      o = r.data,
      i = r.referrer,
      a = r.closeCrossDomain,
      u = r.forceReport;
    u
      ? f({
          data: o,
          reportFn: function (r) {
            e(t, r || o, i, a, u);
          },
        })
      : n
          .userinfoHandler()
          .then(function () {
            f({
              data: o,
              reportFn: function (r) {
                e(t, r || o, i, a);
              },
            });
          })
          .catch(function (r) {
            (null == r ? void 0 : r.retcode) ===
              n.ENUM_EXCEPTION_TYPE.USERINFO_CGI_FAIL &&
              f({
                data: o,
                reportFn: function (r) {
                  e(t, r || o, i, a, u);
                },
              });
          });
  };
}),
  (exports.mtaStatFactory = function (e) {
    return function (r) {
      var t = r.tag,
        o = r.data,
        i = r.referrer;
      r.forceReport || c
        ? f({
            data: o,
            reportFn: function (r) {
              e(t, r || o, i);
            },
          })
        : n
            .userinfoHandler()
            .then(function () {
              (c = !0),
                f({
                  data: o,
                  reportFn: function (r) {
                    e(t, r || o, i);
                  },
                });
            })
            .catch(function (r) {
              (null == r ? void 0 : r.retcode) ===
                n.ENUM_EXCEPTION_TYPE.USERINFO_CGI_FAIL &&
                f({
                  data: o,
                  reportFn: function (r) {
                    e(t, r || o, i);
                  },
                });
            });
    };
  });
