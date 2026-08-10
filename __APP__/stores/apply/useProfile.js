var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var i = require("../../common/vendor.js"),
  a = require("../../model/apply/profile/declare.js"),
  n = require("../../model/apply/useApply.js"),
  o = require("../../model/apply/profile/helper.js"),
  s = require("../../model/apply/profile/utils/index.js"),
  c = i.defineStore("profile", function () {
    var c,
      u,
      l = i.ref([]),
      d = i.ref([]),
      p = i.reactive({
        cred_id: "",
        cred_name: "",
        edu: "",
        job: "",
        job_options: "",
        business: "",
        company: "",
        job_title: "",
        job_title_enum: "",
        job_title_options: "",
        income: "",
        year_income: "",
        mail_address: "",
        house_address: "",
        org: "",
        zip_code: "",
        tel: "",
        verify_tel: "",
        ctrl: "",
        benifit: "",
        credit_record: "",
        credit_record_options: "",
        tax: "",
        province_code: "",
        city_code: "",
        area_code: "",
        detailed_address: "",
        past_transaction_compliance: "",
      });
    function f(e) {
      var r = e.data,
        t = e.isInit,
        a = void 0 !== t && t,
        c = n.useApply().applyInfo;
      (r = r || p) &&
        c &&
        Object.keys(r).forEach(function (e) {
          var t,
            n = s.ageUtil.getAge(c.value.cred_id),
            u = s.sexUtil.getSex(c.value.cred_id),
            f = p[e],
            m = r[e],
            y = o.linkageRule({
              modifiedKey: e,
              modifiedVal: { oldVal: f, newVal: m },
              isInit: a,
              formList: l.value,
              dictsList: d.value,
              personInfos: { age: n, sex: u },
            }),
            _ = y.data,
            b = y.item;
          i.isEmpty(b) ||
            ((t = b),
            Object.keys(t).forEach(function (e) {
              l.value.get(e) &&
                Object.keys(t[e]).forEach(function (r) {
                  var i = l.value.getIdx(e);
                  l.value[i][r] = t[e][r];
                });
            })),
            i.isEmpty(_) || v(_),
            v(r);
        });
    }
    function v(e) {
      var r = e || p,
        i = [];
      Object.keys(r).forEach(function (n) {
        e && (p[n] = e[n]);
        var o = l.value.findIndex(function (e) {
          return e.key === n;
        });
        if (-1 !== o) {
          var s = l.value[o],
            c = "";
          if (
            [
              a.INPUT_TYPE.PICKER,
              a.INPUT_TYPE.RADIO,
              a.INPUT_TYPE.MULTI_RADIO,
              a.INPUT_TYPE.CHECK,
            ].includes(s.type)
          ) {
            var u = [],
              d = r[n].split("+").filter(function (e) {
                return e;
              });
            d.forEach(function (e) {
              var t;
              if (e === s.data.otherId && r[s.otherKey]) u.push(r[s.otherKey]);
              else {
                var i =
                  (null == (t = s.data.val.get(e)) ? void 0 : t.name) || "";
                u.push(i);
              }
            }),
              (i = d),
              (c = u.join(",") || "");
          } else c = r[n];
          l.value[o] = t(t({}, s), {}, { content: c, feIds: i, warn: "" });
        }
      });
    }
    return {
      formList: l,
      formData: p,
      dictsList: d,
      setFormList:
        ((u = r(
          e().mark(function r(t) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    l.value = t;
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function (e) {
          return u.apply(this, arguments);
        }),
      setDictsList:
        ((c = r(
          e().mark(function r(t) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    d.value = t;
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function (e) {
          return c.apply(this, arguments);
        }),
      setFormData: function (e) {
        Object.keys(p).forEach(function (r) {
          p[r] = e[r] || p[r];
        });
      },
      updateData: function (e) {
        var r = e.data,
          t = e.isDeep,
          i = e.isInit,
          a = e.ignoreLink,
          o = n.useApply().setLocalApplyInfo;
        a ? v(r) : f({ data: r, isInit: i }), t && o(r);
      },
    };
  });
exports.useProfileStore = c;
