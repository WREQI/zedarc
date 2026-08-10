require("../../app.js");
var i = require("../../common/vendor.js"),
  t = i.defineStore("digital-human", function () {
    var t = i.ref(!0),
      m = i.ref(!1),
      g = i.ref(!1);
    return {
      isSupportDigitalHuman: m,
      isMuted: t,
      handleMute: function () {
        t.value = !t.value;
      },
      routeToVideoIdMap: {
        ApplyBindCard: "1-1",
        ApplyIdCard: "2-1",
        ApplyProfile: "3-1",
        ApplyFacecheck: "4-1",
        ApplyVideo: "5-1",
        ApplySetPwd: "6-1",
        ApplyRiskTest: "7-1",
        ApplySubmit: "8-1",
        ApplyProgress: "9-1",
        ApplyRecover: "9-7",
      },
      srcMap: {
        0: "https://st.gtimg.com/image/mp-broker/digital-guide/0.mp4",
        "1-1": "https://st.gtimg.com/image/mp-broker/digital-guide/1-1.mp4",
        "2-1": "https://st.gtimg.com/image/mp-broker/digital-guide/2-1.mp4",
        "2-1-1": "https://st.gtimg.com/image/mp-broker/digital-guide/2-1-1.mp4",
        "2-2": "https://st.gtimg.com/image/mp-broker/digital-guide/2-2.mp4",
        "2-3": "https://st.gtimg.com/image/mp-broker/digital-guide/2-3.mp4",
        "2-4": "https://st.gtimg.com/image/mp-broker/digital-guide/2-4.mp4",
        "3-1": "https://st.gtimg.com/image/mp-broker/digital-guide/3-1.mp4",
        "3-2": "https://st.gtimg.com/image/mp-broker/digital-guide/3-2.mp4",
        "4-1": "https://st.gtimg.com/image/mp-broker/digital-guide/4-1.mp4",
        "4-2": "https://st.gtimg.com/image/mp-broker/digital-guide/4-2.mp4",
        "5-1": "https://st.gtimg.com/image/mp-broker/digital-guide/5-1.mp4",
        "5-2": "https://st.gtimg.com/image/mp-broker/digital-guide/5-2.mp4",
        "6-1": "https://st.gtimg.com/image/mp-broker/digital-guide/6-1.mp4",
        "7-1": "https://st.gtimg.com/image/mp-broker/digital-guide/7-1.mp4",
        "7-2": "https://st.gtimg.com/image/mp-broker/digital-guide/7-2.mp4",
        "7-3": "https://st.gtimg.com/image/mp-broker/digital-guide/7-3.mp4",
        "7-4": "https://st.gtimg.com/image/mp-broker/digital-guide/7-4.mp4",
        "7-5": "https://st.gtimg.com/image/mp-broker/digital-guide/7-5.mp4",
        "8-1": "https://st.gtimg.com/image/mp-broker/digital-guide/8-1.mp4",
        "9-1": "https://st.gtimg.com/image/mp-broker/digital-guide/9-1.mp4",
        "9-2": "https://st.gtimg.com/image/mp-broker/digital-guide/9-2.mp4",
        "9-3": "https://st.gtimg.com/image/mp-broker/digital-guide/9-3.mp4",
        "9-4": "https://st.gtimg.com/image/mp-broker/digital-guide/9-4.mp4",
        "9-5": "https://st.gtimg.com/image/mp-broker/digital-guide/9-5.mp4",
        "9-6": "https://st.gtimg.com/image/mp-broker/digital-guide/9-6.mp4",
        "9-7": "https://st.gtimg.com/image/mp-broker/digital-guide/9-7.mp4",
      },
      subtitleMap: {
        0: "欢迎来到华林证券，开户手续预计3分钟即可完成。",
        "1-1":
          "您可选择绑定一张常用银行卡用于开户后的资金转账，暂不支持绑定信用卡",
        "2-1": "根据监管要求，开立证券账户需要提供本人的二代身份证原件。",
        "2-1-1":
          "根据监管要求，开立证券账户需要提供本人手机号码及二代身份证信息。",
        "2-2": "请核对身份证信息是否准确。点击确认进入下一步吧",
        "2-3":
          "根据监管要求，需要上传本人的二代身份证原件才能开户成功，暂不支持香港身份证，港澳通行证，台胞证等其它证件。",
        "2-4":
          "请将身份证放置在桌面拍摄。拍摄过程中注意保持身份证边角完整，证件内容不反光模糊。",
        "3-1":
          "按监管要求，您需要填写一些基本信息。别担心，这些信息我们都是严格保密的",
        "3-2": "再确认下手机号，咱们就能继续下一步，很快的！",
        "4-1":
          "为确认是您本人开户，需进行人脸识别验证。请正对手机保持光线明亮，根据指引进行操作",
        "4-2":
          "哎呀！没抓到您好看的脸呢，还请调整下您的位置或者角度，咱们再试一次。",
        "5-1":
          "现在开始视频录制，请保持周边安静明亮，竖直手机，打开外放音。录制过程中不能佩戴口罩，耳机以及帽子，确保五官始终在镜头内。请根据录制提示进行操作。",
        "5-2": "页面出现了一些问题，请再尝试一下",
        "6-1":
          "接下来请设置股票账户的交易和资金密码，密码⼀定要保密不要让别人知道",
        "7-1": "30秒了解自己的风险偏好，为您匹配适合的投资产品，投资更安全",
        "7-2": "加油加油，已经快完成一半了",
        "7-3": "很棒哦，马上就搞定啦",
        "7-4": "最后一题啦！",
        "7-5": "您的风险评测已完成，没问题的话可点击确定进入下一步。",
        "8-1": "最后一步啦！请选择完对应的A股市场就可以提交审核开户成功啦。",
        "9-1":
          "恭喜您！您已成功提交开户申请，请耐心等待券商侧审核结果。（正常工作时间预计30分钟左右反馈结果）",
        "9-2":
          "抱歉，您上传的身份证不符合监管要求，开户申请未通过，请点击底部按钮重新上传。",
        "9-3":
          "抱歉，您个人信息存在不完整或者内容冲突，开户审核未通过，请点击底部按钮更新。",
        "9-4":
          "抱歉，因照片不符合要求，开户申请未通过，请点击底部按钮重拍（请勿遮挡或闭眼）",
        "9-5":
          "抱歉，因视频不符合要求，开户申请未通过，请点击底部按钮重录（确保无遮挡，画面完整，音质清晰）",
        "9-6":
          "抱歉，银行卡绑定失败，开户申请未通过，请点击底部按钮重新绑定（需一类卡且核对密码）",
        "9-7": "抱歉，您的开户申请没通过，请点击底部按钮重新申请哦。",
      },
      soundTips: g,
    };
  });
exports.useDigitalHuman = t;
