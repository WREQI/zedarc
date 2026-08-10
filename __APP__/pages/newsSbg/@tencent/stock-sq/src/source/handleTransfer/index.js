var n = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../utils/service/index.js"),
  e = require("../../../../stock-community-base/utils/commentFilter.js"),
  o = require("../../../../stock-community-base/utils/knife.js"),
  r = require("../../../../../../../common/vendor.js"),
  i = o.sdk.getUserInfo,
  a = {
    name: "handleTransfer",
    components: {
      BaseImage: function () {
        return "../baseImage/index.js";
      },
      shortContent: function () {
        return "../shortContent/index.js";
      },
      longContent: function () {
        return "../longContent/index.js";
      },
      otherSource: function () {
        return "../otherSource/transfer.js";
      },
    },
    props: { options: { type: Object, default: function () {} } },
    data: function () {
      return {
        isShort: ["short", "reply", "turnNews", "turn", "share"],
        originalContent: {},
        transferContent: {},
        transferedUserInfo: null,
        contentInfor: null,
        turnLog: [],
      };
    },
    created: function () {
      this.turnHandler(this.options);
    },
    methods: {
      getUserInfo: function () {
        return (
          (t = this),
          null,
          (e = n().mark(function t() {
            var e;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!this.transferedUserInfo) {
                        n.next = 2;
                        break;
                      }
                      return n.abrupt("return");
                    case 2:
                      return (n.next = 4), i();
                    case 4:
                      (e = n.sent) &&
                        (this.transferedUserInfo = {
                          user_id: e.gOpenid,
                          user_name: e.nickName,
                        });
                    case 6:
                    case "end":
                      return n.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (n, o) {
            var r = function (n) {
                try {
                  a(e.next(n));
                } catch (n) {
                  o(n);
                }
              },
              i = function (n) {
                try {
                  a(e.throw(n));
                } catch (n) {
                  o(n);
                }
              },
              a = function (t) {
                return t.done
                  ? n(t.value)
                  : Promise.resolve(t.value).then(r, i);
              };
            a((e = e.apply(t, null)).next());
          })
        );
        var t, e;
      },
      turnHandler: function (n) {
        this.getUserInfo();
        var t = this;
        n.turnTopId
          ? Promise.all([
              this.getTransfer(n.turnTopId, 0),
              this.getTransfer(n.id, 1),
            ]).then(function () {
              t.updateTransferInfo();
            })
          : this.getTransfer(n.id, 0).then(function () {
              t.updateTransferInfo();
            });
      },
      getTransfer: function (n, o) {
        if (!n) return Promise.reject();
        var r = this,
          i = { subjectId: n };
        return t.getCommentDetail(i).then(function (n) {
          var t = n.data;
          return (
            t &&
              t.content &&
              t.content.content &&
              ((t.content.content = t.content.content.replace(/\n/g, "")),
              1 === o && (r.turnUserContent = t.content.content)),
            0 === o && t && "1" === t.status && (t = { data: "removed" }),
            e.CommentFilter(t).then(function (n) {
              r[0 === o ? "originalContent" : "transferContent"] =
                n.commentsData[0];
            })
          );
        });
      },
      updateTransferInfo: function () {
        var n = this,
          t = n.originalContent,
          e = n.transferContent;
        this.$emit("dataReady", { originalContent: t, transferContent: e });
        var o = t || {},
          r = e || {},
          i = "",
          a = ""
            .concat("long" === o.showType ? "文章·" : "")
            .concat(o.title, " ")
            .concat(
              "turnNews" === o.showType ? "" : o.sub_content || o.content
            ),
          s = o.resourceText ? this.getIcon(o.resourceText) : o.imageList[0];
        if (
          ((n.turnLog = r.turnLog ? r.turnLog : []),
          -1 === ["long", "short", "removed"].indexOf(o.showType)
            ? n.turnLog.push(o)
            : (i = "".concat(o.user_name, "：")),
          "turnReply" === n.options.type4 &&
            n.options.replyData &&
            n.turnLog.unshift(JSON.parse(n.options.replyData)),
          "share" === o.showType && o.detailInfo && o.detailInfo.stockProp)
        ) {
          var c = o.detailInfo.stockProp;
          (i = "".concat(c.tag, " ") || i || ""),
            (a = c.desc || a || ""),
            (s = c.icon || s || "");
        }
        "removed" === o.showType &&
          ((i = ""), (a = "很抱歉，原帖已被删除"), (s = ""));
        var u = o.status,
          f = o.owner;
        [2, 3].indexOf(+u) > -1 &&
          0 == +f &&
          ((i = ""), (a = "很抱歉，该帖目前不支持浏览哦"), (s = "")),
          (this.contentInfor = { partOne: i, partTwo: a, thumbPic: s });
      },
      getIcon: function (n) {
        var t = "";
        switch (n) {
          case "公告":
            t =
              "https://mat1.gtimg.com/finance/images/stock/p/hybrid/563dbf6bc877e030.png";
            break;
          case "研报":
            t =
              "https://mat1.gtimg.com/finance/images/stock/p/hybrid/97dec1191ed6a489.png";
            break;
          default:
            t =
              "https://mat1.gtimg.com/finance/images/stock/p/hybrid/43e052e2a5ad82a9.png";
        }
        return t;
      },
    },
  };
Array ||
  (r.resolveComponent("shortContent") + r.resolveComponent("otherSource"))();
var s = r._export_sfc(a, [
  [
    "render",
    function (n, t, e, o, i, a) {
      return r.e(
        { a: i.turnLog.length },
        i.turnLog.length
          ? {
              b: r.f(i.turnLog, function (n, t, e) {
                return {
                  a: r.t(n.user_name),
                  b: n.user_id,
                  c: t,
                  d: "21177ed4-0-" + e,
                  e: r.p({ disabled: !0, itemData: n }),
                };
              }),
            }
          : {},
        { c: i.contentInfor },
        i.contentInfor
          ? r.e(
              { d: "turnNews" === i.originalContent.showType },
              "turnNews" === i.originalContent.showType
                ? { e: r.p({ itemData: i.originalContent }) }
                : r.e(
                    { f: i.contentInfor.thumbPic },
                    i.contentInfor.thumbPic
                      ? { g: "url(".concat(i.contentInfor.thumbPic, ")") }
                      : {},
                    {
                      h:
                        i.originalContent &&
                        -1 !== i.isShort.indexOf(i.originalContent.showType),
                    },
                    i.originalContent &&
                      -1 !== i.isShort.indexOf(i.originalContent.showType)
                      ? r.e(
                          { i: !!i.contentInfor.partOne },
                          i.contentInfor.partOne
                            ? { j: r.t(i.contentInfor.partOne) }
                            : {},
                          {
                            k: r.p({
                              itemData: i.originalContent,
                              showImg: !0,
                              disabled: !0,
                              pageType: "fatieqi",
                            }),
                          }
                        )
                      : {},
                    { l: "long" === i.originalContent.showType },
                    "long" === i.originalContent.showType
                      ? {
                          m: r.t(i.contentInfor.partOne),
                          n: r.t(i.originalContent.newsTitle),
                          o: r.t(i.originalContent.newsContent),
                        }
                      : {},
                    { p: "removed" === i.originalContent.showType },
                    "removed" === i.originalContent.showType
                      ? { q: r.t(i.contentInfor.partTwo) }
                      : {}
                  )
            )
          : {},
        { r: i.turnLog.length ? "" : 1 }
      );
    },
  ],
  ["__scopeId", "data-v-21177ed4"],
]);
wx.createComponent(s);
