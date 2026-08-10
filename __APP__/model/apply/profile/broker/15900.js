var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var n = require("../../../../common/components/Dialog/index.js"),
  s = require("../../../../pages/apply/utils/addressValidator.js"),
  a = {
    linkageRule: function (e, r) {
      return { data: e.data, item: e.item };
    },
    dictionary: {
      credit_record: [
        { name: "无任何不良诚信记录", id: "8", special: !0, single: !0 },
        {
          name: "中国人民银行征信中心",
          id: "0",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "最高人民法院失信被执行人名单",
          id: "1",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "工商行政管理机构",
          id: "2",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "税务管理机构",
          id: "3",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "监管机构、自律组织、证券期货交易所",
          id: "4",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "证券期货经营机构",
          id: "5",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "其他违规情况",
          id: "7",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
      ],
    },
    itemConfig: {},
    beforeSubmit: function (a) {
      var i,
        t =
          (null == (i = a.formList.get("mail_address")) ? void 0 : i.content) ||
          "";
      return new Promise(
        (function () {
          var a = r(
            e().mark(function r(a) {
              var i;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", void a(!0));
                    case 2:
                      return (e.next = 4), s.validateAddress(t);
                    case 4:
                      (i = e.sent).isValid
                        ? a(!0)
                        : n.Dialog({
                            messageType: "html",
                            messageAlign: "justify",
                            message: i.errorMessage,
                            confirmButtonText: "确认",
                            showCancelButton: !1,
                            onConfirm: function () {
                              return a(!1);
                            },
                          });
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          );
          return function (e) {
            return a.apply(this, arguments);
          };
        })()
      );
    },
  };
exports.brokerConfig = a;
