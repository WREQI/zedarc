var t = require("../../../../../stock-news-core/utils/bus.js"),
  e = require("../../../../../stock-news-core/utils/report.js"),
  i = require("../../../../../../../../common/vendor.js"),
  s = {
    options: { styleIsolation: "shared" },
    data: function () {
      return {
        vipStatus: 0,
        btnText: "",
        leftDay: "",
        isWeb: !0,
        isWZQ: !1,
        pageVisible: !1,
        exposeReported: !1,
        intersectionObserver: null,
      };
    },
    beforeDestroy: function () {
      this.intersectionObserver && this.intersectionObserver.disconnect();
    },
    watch: {
      data: function () {
        var e = this;
        shy.getUserInfo(function (t) {
          (e.userInfo = t), e.init();
        }),
          this.data.user_rights &&
            0 == this.data.user_rights.expire_time &&
            this.needAlertProtocol &&
            this.showAlert("protocol"),
          this.data.user_rights &&
            1 == this.data.user_rights.valid &&
            (shy.setBottomBarPlaceholderInfo({
              icon: "comments",
              content: "写评论",
            }),
            t.BUS.$emit("news_close_comment", { isVIP: !1 })),
          (this.needAlertProtocol = !1);
      },
    },
    props: ["data"],
    created: function () {
      var i = this;
      this.init(),
        t.BUS.$on(
          "onshareResult",
          function (t) {
            -1 !== [3, 4, 5, 6, 8].indexOf(i.vipStatus) &&
            "success" === t.state &&
            i.isActShare
              ? (shy.setStorage("news_vip_need_show_right", "1"),
                (i.isActShare = !1))
              : (i.isActShare = !1);
          },
          "vipMore"
        ),
        shy.getUserInfo(function (t) {
          (i.qlskey = t.fskey), (i.qluin = t.openid), (i.userInfo = t);
        }),
        shy.onLoginStateChange(function (e) {
          t.BUS.$emit("vip_pay_success"), (i.userInfo = e);
        }),
        shy.subscribeNotification(
          "news_vip_protocol_agree",
          "com.tencent.shy.news_vip",
          function (t) {
            i.doShareAct();
          },
          !0
        ),
        shy.subscribeNotification(
          "news_vip_hide_right",
          "com.tencent.shy.news_vip",
          function (t) {
            shy.setStorage("news_vip_need_show_right", "0");
          },
          !0
        ),
        shy.onPageVisible(function (t) {
          i.pageVisible ||
            ((i.pageVisible = !0),
            (i.alertTimer = setTimeout(function () {
              clearTimeout(i.alertTimer),
                i.userInfo &&
                  "none" !== i.userInfo.type &&
                  shy.getStorage("news_vip_need_show_right", function (t) {
                    1 == t.data &&
                      (i.showAlert("right"),
                      shy.setStorage("news_vip_need_show_right", "0"));
                  });
            }, 200)));
        }, "news-vip-rights"),
        shy.onPageInvisible(function (t) {
          i.alertTimer && clearTimeout(i.alertTimer), (i.pageVisible = !1);
        }, "news-vip-rights"),
        (17 != this.data.news_type && 17 != this.data.type) ||
          e.report("news.vip.article.content_click", { news_id: this.data.id });
    },
    mounted: function () {
      this.checkVipExpose();
    },
    methods: {
      init: function () {
        var t = this.data.payment_ctrl || {},
          e = this.data.user_rights || {};
        1 == this.data.charge_type
          ? 1 == t.support_payment
            ? ((this.vipStatus = 7), (this.btnText = "开通VIP资讯"))
            : e.left_days >= 0 && e.left_days < 2
            ? ((this.vipStatus = 8), (this.btnText = "分享好友领取VIP资讯"))
            : ((this.vipStatus = 10), (this.btnText = "当前为限时免费文章"))
          : 1 == t.support_payment
          ? 1 == e.valid
            ? e.left_days > 7
              ? (this.vipStatus = 0)
              : ((this.btnText = "续费"),
                (this.vipStatus = 1),
                e.left_days >= 0 &&
                  e.left_days < 2 &&
                  ((this.vipStatus = 9), (this.leftDay = e.left_days)))
            : ((this.vipStatus = 2), (this.btnText = "解锁全文"))
          : ((this.btnText = "分享好友领取VIP资讯"),
            0 != e.expire_time
              ? 1 == e.valid
                ? e.left_days < 2 && e.left_days >= 0
                  ? ((this.vipStatus = 4), (this.leftDay = e.left_days))
                  : (this.vipStatus = 3)
                : (this.vipStatus = 5)
              : (this.vipStatus = 6));
      },
      openApp: function (e) {
        t.BUS.$emit("download_open_app", this.data.id);
      },
      getShareTicket: function () {
        var t = this;
        return new Promise(function (e, i) {
          shy.request({
            url: "https://wzq.tenpay.com/cgi-bin/activity.fcgi?activity=qyfree",
            method: "POST",
            dataType: "json",
            data: {
              activity: "qyfree",
              action: "share",
              qy_id: "5",
              channel: 1,
              target_act: 1,
              data: encodeURIComponent(
                "nickName="
                  .concat(t.userInfo.nickName, "&avatarUrl=")
                  .concat(encodeURIComponent(t.userInfo.headUrl))
              ),
            },
            header: {
              referer: "https://wzq.tenpay.com",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            success: function (i) {
              i = i.data;
              var s = encodeURIComponent(
                  "qqstock://stockhybrid/com.tencent.shy.news_vip/index?shareOpenid=".concat(
                    t.userInfo.openid
                  )
                ),
                n = encodeURIComponent("qqstock://newstab/newsVIP");
              (t.tickParam = "ticket="
                .concat(i.ticket, "&ticket_time=")
                .concat(i.ticket_time, "&tuser=")
                .concat(i.tuser, "&wxurl=")
                .concat(s, "&expressUrl=")
                .concat(n)),
                e(i);
            },
            fail: function (t) {
              shy.showToast("top", "获取分享票据失败"), i(t);
            },
          });
        });
      },
      shareAct: function () {
        var t = {
          iconUrl:
            "https://zqact.tenpay.com/resources/img/zxg_wx_sharelogo.jpg",
          summary: "尽览专属优质内容，数量有限 先到先得。",
          title: "【腾讯自选股】VIP资讯权益限时领",
          url: "https://zqact.tenpay.com/activity/page/190813qyShareBefore?bizId=5&".concat(
            this.tickParam,
            "&stat_data=Obu71p00pn011"
          ),
        };
        this.isActShare = !0;
        var e = ["wx", "qq", "pyq", "qzone"];
        shy.getUserInfo(function (i) {
          "2019-09-01 08:17:25" === i.buildTime && (e = ["wx", "pyq"]),
            shy.openShareView({ to: e, type: "link", params: t });
        });
      },
      doShareAct: function () {
        var t = this;
        this.getShareTicket().then(function (e) {
          t.shareAct();
        });
      },
      checkLoginStatus: function () {
        var e = this;
        shy.getUserInfo(function (i) {
          i && "none" !== i.type
            ? ((e.userInfo = i), e.showAlert("protocol"))
            : shy.login(function (i) {
                "success" === i.status &&
                  (t.BUS.$emit("vip_pay_success"),
                  (e.userInfo = i),
                  (e.needAlertProtocol = !0));
              });
        });
      },
      showAlert: function (t) {
        var e = { p_key: "com.tencent.shy.news_vip", p_url: t },
          i = "qqstock://securityCode?info=".concat(
            encodeURIComponent(JSON.stringify(e))
          );
        shy.navigateTo({ url: i });
      },
      goRights: function () {
        this.openApp();
      },
      clickBtn: function () {
        this.openApp();
      },
      payBtnClick: function () {
        e.report("news.newspage.article.unlock_click", {
          news_id: this.data.id,
        });
      },
      onPayFinish: function () {
        t.BUS.$emit("vip_pay_success");
      },
      onPayClose: function () {
        t.BUS.$emit("vip_pay_success");
      },
      onPayExpire: function () {},
      onPayBtnClick: function () {
        var t = this.data.user_rights.valid;
        0 == t
          ? e.report("news.newspage.article.unlock_click", {})
          : 1 == t && e.report("news.newspage.article.renew_click", {});
      },
      goToVipTab: function () {
        e.report("news.newsdetail.vip_btn_all_click", {}),
          shy.navigateTo({
            url: "qqstock://GotoAppLocation?info=".concat(
              encodeURIComponent(JSON.stringify({ path: "newstab/newsVIP" }))
            ),
          });
      },
      checkVipExpose: function () {},
    },
  },
  n = i._export_sfc(s, [
    [
      "render",
      function (t, e, s, n, o, a) {
        return i.e(
          { a: 0 != o.vipStatus },
          0 != o.vipStatus
            ? i.e(
                {
                  b: i.n(
                    2 === o.vipStatus || 5 === o.vipStatus || 6 === o.vipStatus
                      ? ""
                      : "no-shadow"
                  ),
                  c:
                    2 === o.vipStatus || 5 === o.vipStatus || 6 === o.vipStatus,
                },
                2 === o.vipStatus || 5 === o.vipStatus || 6 === o.vipStatus
                  ? { d: i.t(s.data.left_percent) }
                  : {},
                {
                  e:
                    (o.vipStatus >= 4 && o.vipStatus <= 6) ||
                    8 === o.vipStatus ||
                    9 === o.vipStatus,
                },
                (o.vipStatus >= 4 && o.vipStatus <= 6) ||
                  8 === o.vipStatus ||
                  9 === o.vipStatus
                  ? {
                      f: i.t(o.btnText),
                      g: i.o(function () {
                        return a.clickBtn && a.clickBtn.apply(a, arguments);
                      }, 5358),
                    }
                  : {},
                { h: o.vipStatus > 0 },
                o.vipStatus > 0
                  ? i.e(
                      { i: !o.isWeb },
                      o.isWeb
                        ? {}
                        : {
                            j: i.o(function () {
                              return (
                                a.goToVipTab && a.goToVipTab.apply(a, arguments)
                              );
                            }, 5359),
                          },
                      { k: i.n(o.isWeb ? "button-center" : "") }
                    )
                  : {},
                {
                  l: i.n(
                    2 === o.vipStatus || 5 === o.vipStatus || 6 === o.vipStatus
                      ? ""
                      : "no-shadow"
                  ),
                }
              )
            : {}
        );
      },
    ],
  ]);
wx.createComponent(n);
