require("../../../../app.js");
var e = require("../../../../common/vendor.js");
require("../../../../service/sdk/lib/api.js");
var r = require("../../../../service/sdk/platform/mp-weixin.js");
Math || e.unref(n)();
var n = function () {
    return "../../../../common/components/Popup/index.js";
  },
  o = {
    __name: "DepartmentInfo",
    props: {
      show: { type: Boolean, required: !0 },
      name: { type: String, required: !0 },
      address: { type: String, default: "" },
      phone: { type: String, default: "" },
    },
    emits: ["close", "navToDeptSearch"],
    setup: function (n, o) {
      var t = o.emit,
        a = n,
        s = e.computed(function () {
          if (a.phone) return a.phone.split(",")[0];
        }),
        i = function () {
          t("close");
        },
        u = function () {
          t("navToDeptSearch");
        };
      return function (o, t) {
        return e.e(
          { a: e.o(i), b: e.t(a.name), c: a.address || s.value },
          a.address || s.value
            ? e.e(
                { d: a.address },
                a.address ? { e: e.t(a.address) } : {},
                { f: s.value },
                s.value
                  ? {
                      g: e.t(s.value),
                      h: e.o(function (e) {
                        var n;
                        (n = s.value) &&
                          r.sdk.makePhoneCall(n.replace(/-/g, ""));
                      }),
                    }
                  : {}
              )
            : {},
          {
            i: e.o(u),
            j: e.o(i),
            k: e.p({
              show: n.show,
              center: !1,
              mask: !0,
              position: "bottom",
              "mask-closable": !0,
            }),
          }
        );
      };
    },
  },
  t = e._export_sfc(o, [["__scopeId", "data-v-2b2bd2e8"]]);
wx.createComponent(t);
