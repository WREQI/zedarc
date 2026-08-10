var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../@babel/runtime/helpers/classCallCheck"),
  s = require("../@babel/runtime/helpers/createClass"),
  a = require("../@babel/runtime/helpers/inherits"),
  n = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./base.js"),
  i = require("../config/enum.js"),
  c = require("./apply.js"),
  l = new ((function (u) {
    a(d, u);
    var l,
      p = n(d);
    function d() {
      return t(this, d), p.apply(this, arguments);
    }
    return (
      s(d, [
        {
          key: "get",
          value:
            ((l = r(
              e().mark(function r() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          c.applyCgi
                            .processApplyAccount(
                              c.ACTION.QUERY,
                              {},
                              {
                                usingDefaultFilters: !1,
                                removeEmptyResponse: !1,
                                decodeFields: [
                                  "cred_name_enc_gm",
                                  "cred_id_enc_gm",
                                  "cred_address_enc_gm",
                                  "cred_valid_gm",
                                  "cred_authority_enc_gm",
                                  "mail_address_gm",
                                  "house_address_gm",
                                  "detailed_address_gm",
                                  "tel_gm",
                                ],
                              }
                            )
                            .then(function (e) {
                              return (
                                delete e.retcode,
                                delete e.retmsg,
                                (function (e) {
                                  switch (e.status) {
                                    case "1":
                                      e.userstate =
                                        "1" === e.is_reject
                                          ? i.USERSTATE.FAILED
                                          : i.USERSTATE.NOACCOUNT;
                                      break;
                                    case "2":
                                      e.userstate = i.USERSTATE.VERIFYING;
                                      break;
                                    case "3":
                                      e.userstate = i.USERSTATE.HASACCOUNT;
                                      break;
                                    case "4":
                                      (e.userstate = i.USERSTATE.FAILED),
                                        e.remain_steps;
                                  }
                                  return e;
                                })(e)
                              );
                            })
                            .catch(function (e) {
                              return {};
                            })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )),
            function () {
              return l.apply(this, arguments);
            }),
        },
      ]),
      d
    );
  })(u.BaseAPI))();
exports.applyInfoCgi = l;
