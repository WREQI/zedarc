var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  i = require("../../service/userinfoHelper.js"),
  s = require("../../stores/user/useUserinfo.js");
exports.useGlobalLoading = function () {
  var t,
    o,
    u = n.storeToRefs(s.useUserinfoStore()).userinfo;
  function a() {
    t && clearTimeout(t), (t = null), o && o(), n.index.hideLoading();
  }
  (u.value && !n.isEmpty(u.value)) ||
    ((t = setTimeout(
      r(
        e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      n.index.showLoading({ mask: !0, title: "加载中" }),
                      (e.next = 4),
                      i.userinfoHandler()
                    );
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    (e.prev = 6), (e.t0 = e.catch(0));
                  case 8:
                    return (e.prev = 8), a(), e.finish(8);
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 6, 8, 11]]
          );
        })
      ),
      300
    )),
    (o = n.watch(
      u,
      function (e) {
        e && !n.isEmpty(e) && (n.index.hideLoading(), a());
      },
      { immediate: !0 }
    ))),
    n.onBeforeUnmount(function () {
      a();
    });
};
