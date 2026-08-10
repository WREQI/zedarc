require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("./declare.js"),
  a = {
    ALL_ITEM_LIST: {
      edu: {
        label: "学历",
        key: "edu",
        title: "请选择你的学历",
        placeholder: "请选择",
        type: e.INPUT_TYPE.MULTI_RADIO,
        errMsg: "学历不能为空，请选择后提交",
        stat: "trade.apply.personaldate.qualifications",
        warn: "",
      },
      job: {
        label: "职业",
        key: "job",
        otherKey: "job_options",
        title: "请选择你的职业",
        placeholder: "请选择",
        type: e.INPUT_TYPE.MULTI_RADIO,
        errMsg: "职业不能为空，请选择后提交",
        stat: "trade.apply.personaldate.occupation",
        warn: "",
      },
      business: {
        label: "行业",
        key: "business",
        title: "请选择你的行业",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "行业不能为空，请选择后提交",
        stat: "trade.apply.personaldate.business",
        warn: "",
      },
      company: {
        label: "工作单位",
        key: "company",
        title: "请填写工作单位",
        placeholder: "请填写",
        type: e.INPUT_TYPE.TEXT,
        errMsg: "请输入你的工作单位",
        stat: "trade.apply.personaldate.unit",
        extraData: ["job"],
        warn: "",
        replaceLabel: "学校",
        originLabel: "工作单位",
      },
      job_title_enum: {
        label: "职务",
        key: "job_title_enum",
        otherKey: "job_title_options",
        otherId: "7",
        title: "请选择你的职务",
        placeholder: "请选择",
        type: e.INPUT_TYPE.MULTI_RADIO,
        errMsg: "请输入你的职务",
        stat: "trade.apply.personaldate.job",
        warn: "",
      },
      income: {
        label: "月收入(元)",
        key: "income",
        title: "请选择你的收入(元)",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择你的月收入",
        stat: "trade.apply.personaldate.income",
        warn: "",
      },
      year_income: {
        label: "年收入(元)",
        key: "year_income",
        title: "请选择年收入范围",
        placeholder: "请选择",
        type: e.INPUT_TYPE.MULTI_RADIO,
        errMsg: "请输入你的年收入",
        stat: "trade.apply.personaldate.income",
        warn: "",
      },
      mail_address: {
        label: "联系地址",
        key: "mail_address",
        title: "请填写联系地址",
        placeholder: "请填写",
        type: e.INPUT_TYPE.ADDR,
        errMsg: "请输入你的联系地址",
        stat: "trade.apply.personaldate.address",
        warn: "",
      },
      house_address: {
        label: "住址",
        key: "house_address",
        title: "请填写住址",
        placeholder: "请填写",
        type: e.INPUT_TYPE.ADDR,
        errMsg: "请输入你的住址",
        stat: "trade.apply.personaldate.house_address",
        warn: "",
      },
      zip_code: {
        label: "邮编",
        key: "zip_code",
        title: "请填写你的邮编",
        placeholder: "请填写",
        type: e.INPUT_TYPE.TEXT,
        errMsg: "请输入你的邮编",
        stat: "trade.apply.personaldate.zipcode",
        warn: "",
      },
      past_transaction_compliance: {
        label: "以往交易合规",
        key: "past_transaction_compliance",
        title: "请选择",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择以往交易合规",
        stat: "trade.apply.personaldate.past_transaction_compliance",
        warn: "",
      },
      org: {
        label: "开户营业部",
        key: "org",
        title: "请选择开户营业部",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择开户营业部",
        stat: "trade.apply.personaldate.org",
        warn: "",
      },
      tel: {
        label: "手机号码",
        key: "tel",
        title: "请填写手机号",
        placeholder: "请填写",
        type: e.INPUT_TYPE.MOBILE,
        errMsg: "请输入你的手机号码",
        stat: "trade.apply.personaldate.phonenum",
        warn: "",
      },
      ctrl: {
        label: "实际控制人",
        key: "ctrl",
        title: "请选择该账户的实际控制人",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择实际控制人",
        stat: "trade.apply.personaldate.controller",
        warn: "",
      },
      benifit: {
        label: "实际受益人",
        key: "benifit",
        title: "请选择该账户的实际受益人",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择实际受益人",
        stat: "trade.apply.personaldate.beneficiary",
        warn: "",
      },
      credit_record: {
        label: "诚信记录",
        sub_label: "含交易合规情况",
        key: "credit_record",
        otherKey: "credit_record_options",
        title: "请选择",
        placeholder: "请选择",
        type: e.INPUT_TYPE.CHECK,
        errMsg: "请选择你的诚信记录",
        stat: "trade.apply.personaldate.honesty",
        warn: "",
      },
      tax: {
        label: "纳税国别",
        key: "tax",
        title: "请选择你的个人税收居民身份",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择你的纳税国别",
        stat: "trade.apply.personaldate.tax",
        warn: "",
      },
      natural_person_flag: {
        label: "自然人标识",
        key: "natural_person_flag",
        title: "特定自然人标识",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择自然人标识",
        stat: "trade.apply.personaldate.natural_person_flag",
        warn: "",
      },
      past_transaction: {
        label: "过往交易",
        key: "past_transaction",
        title: "过往交易是否合规合法",
        placeholder: "请选择",
        type: e.INPUT_TYPE.RADIO,
        errMsg: "请选择过往交易合规情况",
        stat: "trade.apply.personaldate.past_transaction",
        warn: "",
      },
    },
    ALL_ITEM_CFG: {
      job: {
        minLength: 2,
        maxLength: 20,
        valid: function (e, a) {
          var t,
            r = e.selectId,
            l = null == (t = this.val.get(r)) ? void 0 : t.name;
          if (l && /^证券从业/.test(l)) throw "".concat(l, "不能开通股东账户");
        },
      },
      company: {
        minLength: 4,
        maxLength: 20,
        trim: function (e) {
          return e
            .replace(/[^\d\w\u4e00-\u9fa5\s]/g, "")
            .trim()
            .replace(/\s+/g, " ");
        },
        valid: function (e, a) {
          var t = e.inputVal;
          return a.job &&
            !["230", "235"].includes(a.job) &&
            ["无单位", "无工作", "无业", "无工作单位"].some(function (e) {
              return t.includes(e);
            })
            ? { result: !1, msg: "工作单位与所选职业存在冲突" }
            : { result: !0 };
        },
      },
      zip_code: {
        type: "number",
        minLength: 6,
        maxLength: 6,
        trim: function (e) {
          return e.trim().replace(/\D/g, "");
        },
        valid: function (e, a) {
          var t = e.inputVal;
          if (!/\d{6}/.test(t)) throw "邮编格式不正确";
        },
      },
      past_transaction_compliance: { isRow: !0 },
      job_title_enum: {
        minLength: 2,
        maxLength: 20,
        placeholder: "例如：仓库管理员",
      },
      mail_address: {
        type: "text",
        minLength: 4,
        maxLength: 60,
        placeholder: "请填写详细地址",
        info: '请精确到<span class="warning">道路、小区、门牌号</span>',
        trim: function (e) {
          return e.trim().replace(/\s+/g, " ");
        },
      },
      ctrl: { isRow: !0 },
      benifit: { isRow: !0 },
      credit_record: {
        minLength: 4,
        maxLength: 20,
        specialInfo:
          '<span class="color-2">如有不良诚信记录，请勾选（可多选）</span>',
      },
      natural_person_flag: { isRow: !0 },
      past_transaction: { isRow: !0 },
    },
    LOCAL_DICT: {
      ctrl: [
        { name: "本人", id: "0" },
        {
          name: "非本人",
          id: "1",
          show: {
            errInfo:
              "<span class=red>“实际控制客户的自然人”为非本人，资金账户不能成功开立，请重新选择</span>",
          },
        },
      ],
      benifit: [
        { name: "本人", id: "0" },
        {
          name: "非本人",
          id: "1",
          show: {
            errInfo:
              "<span class=red>“交易的实际受益人”为非本人，资金账户不能成功开立，请重新选择</span>",
          },
        },
      ],
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
          name: "监管机构、自律组织",
          id: "4",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "投资者在证券经营机构的失信记录",
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
      past_transaction_compliance: [
        { name: "是", id: "0" },
        {
          name: "否",
          id: "1",
          show: {
            errInfo: "<span class=red>不符合开户要求，请重新选择</span>",
          },
        },
      ],
      tax: [
        { name: "仅为中国税收居民", id: "0" },
        {
          name: "仅为非居民",
          id: "1",
          show: {
            errInfo:
              "<span class=red>网上开户仅适用于中国税收居民，您可前往附近营业部办理开户</span>",
          },
        },
        {
          name: "本人既是中国纳税居民又是其它国家(地区)纳税居民",
          id: "2",
          show: {
            errInfo:
              "<span class=red>网上开户仅适用于中国税收居民，您可前往附近营业部办理开户</span>",
          },
        },
      ],
    },
  };
exports.originItem = a;
