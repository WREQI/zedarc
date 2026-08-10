var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  a = require("../../cgi/biz/department.js"),
  i = require("../../service/static-resource.js"),
  u = (function (e) {
    return (e.nearby = "1"), (e.keyword = "2"), (e.city = "3"), e;
  })(u || {}),
  c = n.defineStore("department", function () {
    var u,
      c = n.ref(null),
      l = n.reactive({ lat: -1, lng: -1 }),
      s = n.ref(""),
      o = n.ref([]),
      d = n.ref([]),
      v = n.ref(""),
      f = n.computed(function () {
        return "2" === c.value && 0 === d.value.length;
      });
    return {
      setCurLocation: function (e) {
        (l.lat = e.lat), (l.lng = e.lng);
      },
      getCurLocation: function () {
        return l;
      },
      curCity: s,
      cityData: o,
      getCityData:
        ((u = r(
          e().mark(function r() {
            var n, a, u;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!((null == (n = o.value) ? void 0 : n.length) > 0)) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (e.next = 4),
                      i.requestStatic("/address-data/province-city.json")
                    );
                  case 4:
                    if (((e.t0 = a = e.sent.data), null != e.t0)) {
                      e.next = 9;
                      break;
                    }
                    (e.t1 = void 0), (e.next = 10);
                    break;
                  case 9:
                    e.t1 = a.map(function (e) {
                      return t(
                        t({}, e),
                        {},
                        {
                          value: e.name,
                          children: e.children.map(function (e) {
                            return t(t({}, e), {}, { value: e.name });
                          }),
                        }
                      );
                    });
                  case 10:
                    (u = e.t1), (o.value = u);
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function () {
          return u.apply(this, arguments);
        }),
      curSearchType: c,
      searchDepartment: function (e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = t({}, r);
        if (-1 === l.lat || -1 === l.lng) {
          if ("1" === e)
            return (
              (c.value = null),
              (d.value = []),
              (v.value = ""),
              Promise.resolve(d.value)
            );
        } else (u.latitude = String(l.lat)), (u.longitude = String(l.lng));
        return a.cgi
          .searchDepartment(t(t({}, u), {}, { limit: String(10) }))
          .then(function (r) {
            var a,
              u =
                (null == (a = r.branch_list)
                  ? void 0
                  : a.map(function (e, r) {
                      return t(
                        t({}, e),
                        {},
                        {
                          id: "marker-".concat(l, "-").concat(r),
                          position: {
                            lat: Number(e.latitude),
                            lng: Number(e.longitude),
                          },
                          distance:
                            e.distance && !isNaN(Number(e.distance))
                              ? Number(e.distance)
                              : null,
                        }
                      );
                    })) || [];
            if (i.once) return u;
            c.value = e;
            var l = new Date().getTime();
            return (
              (d.value = u
                .filter(function (e) {
                  return n.isNumber(e.distance);
                })
                .sort(function (e, t) {
                  return e.distance - t.distance;
                })
                .concat(
                  u.filter(function (e) {
                    return !n.isNumber(e.distance);
                  })
                )),
              (v.value = ""),
              d.value
            );
          });
      },
      departmentList: d,
      isEmptyKeywordResult: f,
      selectedDeptId: v,
    };
  });
(exports.SearchType = u), (exports.useDepartment = c);
