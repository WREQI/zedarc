require("../../app.js");
var t = require("../../common/vendor.js"),
  e = require("../../utils/getPlatform.js"),
  n = require("../../utils/navigator.js"),
  a = require("../../config/mpConfig.js"),
  i = require("../../service/navigateMp.js"),
  r = require("../../model/apply/useApply.js"),
  o = {
    name: "MultiBrokerEntry",
    props: { pageType: { type: String, default: "" } },
    setup: function () {
      var o = r.useApply().curStepConf,
        p = t.getCurrentInstance().proxy,
        s = e.getPlatform(),
        c = s.bizPlatform,
        u = s.isMpPlugin,
        d = s.isZxg,
        l = s.isWeixin,
        h = s.isLctXcx;
      var y = "h5-weixin" === c,
        C = [];
      function g() {
        o.investorEducation &&
          C.push({
            id: "investor_education",
            text: "新入市专栏",
            path: "https://webapps.yongjinbao.com.cn/ims/content-view/view?contentId=9BB1CD07395BDA403EFA1535608E1888",
            stat: "investor_education",
          });
      }
      return (
        d &&
          "yanbao" === t.index.$host.openExtraWebview &&
          C.push({
            id: "BACK_TO_YANBAO",
            text: "返回脱水研报",
            path: "",
            stat: "",
          }),
        l &&
          C.push({
            id: "BACK_TO_CHOOSE_INDEX",
            text: "返回自选",
            path: "",
            stat: "",
          }),
        y &&
          (h
            ? C.push({
                id: "LOGIN_ACCOUNT",
                text: "登录证券账户",
                path: "/account/canbindlist",
                stat: "bindaccount",
              })
            : C.push(
                {
                  id: "CHECK_APPLY_RECORDS",
                  text: "更换券商开户",
                  path: "/account/applyrecords",
                  stat: "applyrecords",
                },
                {
                  id: "LOGIN_ACCOUNT",
                  text: "登录证券账户",
                  path: "/account/canbindlist",
                  stat: "bindaccount",
                }
              ),
          g()),
        u &&
          (C.push(
            {
              id: "CHECK_APPLY_RECORDS",
              text: "更换券商开户",
              path: "/pages/account/applyrecords",
              stat: "applyrecords",
            },
            {
              id: "LOGIN_ACCOUNT",
              text: "登录证券账户",
              path: "/pages/apply/index",
              stat: "bindaccount",
            }
          ),
          g()),
        d &&
          (C.push({
            id: "CHECK_APPLY_RECORDS",
            text: "更换券商开户",
            path: "/account/applyrecords",
            stat: "applyrecords",
          }),
          g()),
        {
          enrtyCfg: C,
          canEntryShow: !0,
          onEntryClick: function (e) {
            return "investor_education" === e.id
              ? ((r = e.path), void t.index.$host.jumpUrl({ url: r }))
              : "BACK_TO_YANBAO" === e.id
              ? (p.$sdk.setAppDiskStorage("trade_task", "closeWindow"),
                void p.$sdk.closeWindow())
              : void ("BACK_TO_CHOOSE_INDEX" !== e.id
                  ? (null == e ? void 0 : e.path) &&
                    (y || d
                      ? setTimeout(function () {
                          n.hrefToWzqDomain(
                            e.path,
                            {},
                            { openUrlWithExtraWebview: d }
                          );
                        }, 200)
                      : u &&
                        i.navigateTo({
                          url: null == e ? void 0 : e.path,
                          linkType: a.linkTypeMap.plugin2MainMp,
                        }))
                  : (function () {
                      var t = "/pages/index/index";
                      u
                        ? i.navigateTo({
                            url: t,
                            linkType: a.linkTypeMap.plugin2MainMp,
                          })
                        : i.navigateBackMiniProgram({
                            extraData: { path: "".concat(t, "?isRelaunch=1") },
                          });
                    })());
            var r;
          },
        }
      );
    },
  },
  p = t._export_sfc(o, [
    [
      "render",
      function (e, n, a, i, r, o) {
        return t.e(
          { a: i.canEntryShow && i.enrtyCfg.length > 0 },
          i.canEntryShow && i.enrtyCfg.length > 0
            ? {
                b: t.f(i.enrtyCfg, function (e, n, r) {
                  return t.e(
                    { a: n > 0 },
                    {},
                    { b: e.redDot },
                    (e.redDot, {}),
                    {
                      c: t.t(e.text),
                      d: "trade.apply."
                        .concat(a.pageType, ".multibrokerentry.")
                        .concat(e.stat),
                      e: t.o(function (t) {
                        return i.onEntryClick(e);
                      }, e.id),
                      f: e.id,
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-4308e120"],
  ]);
wx.createComponent(p);
