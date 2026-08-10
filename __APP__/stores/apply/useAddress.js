var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  t = require("../../model/apply/profile/utils/address.js"),
  a = require("../../common/components/Dialog/index.js"),
  i = n.defineStore("address", function () {
    var i = n.ref([null, null, null]),
      o = n.ref([null, null, null]),
      s = n.ref([]);
    return {
      codes: s,
      pickerData: i,
      pickedIndexes: o,
      onPickerChange: (function () {
        var n = r(
          e().mark(function r(n) {
            var u,
              c,
              d,
              p,
              f,
              m,
              v = arguments;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (u =
                          v.length > 1 && void 0 !== v[1]
                            ? v[1]
                            : { ignoreFail: !1 }),
                        (c = u.ignoreFail),
                        (e.prev = 2),
                        (e.next = 5),
                        t.addressUtil.getSelected(n, { ignoreFail: c })
                      );
                    case 5:
                      (d = e.sent),
                        (p = d.idxs),
                        (f = d.datas),
                        (m = d.codes),
                        (o.value = p),
                        (s.value = m),
                        (i.value = f),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(2)),
                        c ||
                          e.t0.retcode !== t.errType.fetchFail ||
                          a.Dialog({
                            message: e.t0.retmsg,
                            showCancelButton: !0,
                            confirmButtonText: "重试",
                            onConfirm: function () {
                              l(n, u);
                            },
                          });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[2, 12]]
            );
          })
        );
        function l(e) {
          return n.apply(this, arguments);
        }
        return l;
      })(),
    };
  });
exports.useAddressStore = i;
