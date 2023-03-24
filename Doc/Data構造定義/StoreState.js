
// 1. セクション・List
const section_list =[
  {
    section_id: 1,
    section_title: "ご要望・アンケート",
    sort_order: 1
  },
  {
    section_id: 2,
    section_title: "回答者・アンケート",
    sort_order: 2
  },
];

// 2. 質問事項のList
const question_config_list = [
  {
    question_id: 1,
    question_text: "既存の学習サービスに関するご要望",
    required_flag: false,
    section_id:1,
    input_id: [1, 2],
    sort_order: 1,
  },
  {
    question_id: 2,
    question_text: "新しい学習サービスの追加のご要望",
    required_flag: false,
    section_id:1,
    input_id: [3, 4],
    sort_order: 2,
  },
  {
    question_id: 3,
    question_text: "システムの機能についてのご要望",
    required_flag: false,
    section_id:1,
    input_id: [5, 6],
    sort_order: 3,
  },
  {
    question_id: 4,
    question_text: "APIについてのご要望",
    required_flag: false,
    section_id:1,
    input_id: [7, 8],
    sort_order: 4,
  },
  {
    question_id: 5,
    question_text: "その他のご要望",
    required_flag: false,
    section_id:1,
    input_id: [9],
    sort_order: 5,
  },
  {
    question_id: 6,
    question_text: "エンジニア学習支援サービスの主な利用目的(複数選択可)",
    required_flag: true,
    section_id:2,
    input_id: [10],
    sort_order: 1,
  },
  {
    question_id: 7,
    question_text: "よく利用する学習サービスを選択してください(複数選択可)",
    required_flag: true,
    section_id:2,
    input_id: [11],
    sort_order: 2,
  },
  {
    question_id: 8,
    question_text: "エンジニアの方の場合は、職種を教えてください",
    required_flag: true,
    section_id:2,
    input_id: [11, 12],
    sort_order: 3,
  },
  {
    question_id: 9,
    question_text: "現在の就業形態を教えてください",
    required_flag: true,
    section_id:2,
    input_id: [13],
    sort_order: 4,
  },
  {
    question_id: 10,
    question_text: "興味のあるプログラミング言語・技術を選択してください(複数選択可)",
    required_flag: true,
    section_id:2,
    input_id: [14],
    sort_order: 5,
  },
  {
    question_id: 11,
    question_text: "差支えなければ回答者についてお答えください。",
    required_flag: false,
    section_id:2,
    input_id: [15, 16, 17, 18, 19],
    sort_order: 6,
  },
];



// 3. 入力フォームのList

const input_config_list = [
  {
    input_id: 1,
    input_type: "selectbox",
    description: "ご要望に関する学習サービスを選択してください(複数選択可)",
    required_flag: false,
    option_list: [ "JavaScript初級講座", "JavaScript中級講座", "JavaScript上級講座", "Python初級講座", "Python中級講座", "Python上級講座", "PHP初級講座", "PHP中級講座", "PHP上級講座" ],
    sort_order: 1,
  },
  {
    input_id: 2,
    input_type: "textarea",
    description: "既存の学習サービスに追加して欲しい内容を記載してください。",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 3,
    input_type: "selectbox",
    description: "新しい学習サービスの追加要望に関する技術を選択してください(複数選択可)",
    required_flag: false,
    option_list: ["JavaScript", "React", "Vue", "Next.js", "Python", "PHP",],
    sort_order: 1,
  },
  {
    input_id: 4,
    input_type: "textarea",
    description: "新しく学習サービスに追加して欲しい内容を記載してください。",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 5,
    input_type: "radio",
    description: "ご要望に近い内容を選択してください。",
    required_flag: false,
    option_list: ["ユーザー学習状況・取得APIについて", "講座情報・取得APIについて", "APIの機能拡張について", "APIの利用方法について", "その他"],
    sort_order: 1,
  },
  {
    input_id: 6,
    input_type: "textarea",
    description: "【内容】",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 7,
    input_type: "radio",
    description: "ご要望に近い内容を選択してください。",
    required_flag: false,
    option_list: [ "ユーザー学習状況・取得APIについて", "講座情報・取得APIについて", "APIの機能拡張について", "APIの利用方法について", "その他"  ],
    sort_order: 1,
  },
  {
    input_id: 8,
    input_type: "textarea",
    description: "【内容】",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 9,
    input_type: "textarea",
    description: "【内容】",
    required_flag: false,
    option_list: [],
    sort_order: 1,
  },
  {
    input_id: 10,
    input_type: "checkbox",
    description: null,
    required_flag: true,
    option_list: [ "仕事で活用するため", "社内研修での活用", "エンジニア転職のため", "スキルアップ(自主学習)のため", "その他" ],
    sort_order: 1,
  },
  {
    input_id: 11,
    input_type: "text",
    description: "その他を選んだ方は、こちらに利用目的を記入してください",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 12,
    input_type: "selectbox",
    description: null,
    required_flag: true,
    option_list: [ "JavaScript初級講座", "JavaScript中級講座", "JavaScript上級講座", "Python初級講座", "Python中級講座", "Python上級講座", "PHP初級講座", "PHP中級講座", "PHP上級講座" ],
    sort_order: null,
  },
  {
    input_id: 13,
    input_type: "radio",
    description: "エンジニア以外の方や職種の記載がない方は、その他を選んでください。",
    required_flag: true,
    option_list: ["フロントエンドエンジニア", "バックエンドエンジニア", "インフラエンジニア", "機械学習(ML)エンジニア", "QAエンジニア", "その他"],
    sort_order: 1,
  },
  {
    input_id: 14,
    input_type: "text",
    description: "その他を選んだ方は、こちらにご自身の職種を記入してください。",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 15,
    input_type: "radio",
    description: null,
    required_flag: true,
    option_list: ["フルリモート", "フル出社", "ハイブリッド"],
    sort_order: 1,
  },
  {
    input_id: 16,
    input_type: "text",
    description: "ご所属(企業・団体名)",
    required_flag: false,
    option_list: [],
    sort_order: 1,
  },
  {
    input_id: 17,
    input_type: "text",
    description: "お名前",
    required_flag: false,
    option_list: [],
    sort_order: 2,
  },
  {
    input_id: 18,
    input_type: "mail",
    description: "連絡先(メールアドレス)",
    required_flag: false,
    option_list: [],
    sort_order: 3,
  },
  {
    input_id: 19,
    input_type: "number",
    description: "年齢",
    required_flag: false,
    option_list: [],
    sort_order: 4,
  },
  {
    input_id: 20,
    input_type: "radio",
    description: "性別",
    required_flag: false,
    option_list: ["男", "女", "どちらでもない"],
    sort_order: 5,
  },
];






