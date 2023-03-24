
// 1. Section
export interface SectionType {
  section_id: number;
  section_title: string;
  sort_order: number;
};

// 2. 質問設定
export interface QuestionConfigType {
  question_id: number;
  question_text: string;
  required_flag: boolean;
  section_id: number;
  input_id: number[];
  sort_order: number | null;
};

const inputTypeList = ['text', 'textarea', 'mail', 'number', 'radio', 'checkbox', 'checkbox_multi', 'selectbox', 'selectbox_multi' ] as const;
type InputFormKinds = typeof inputTypeList[number];

// 3. 入力フォーム設定
export interface InputConfigType {
  input_id: number;
  input_type: InputFormKinds;
  description: string | null;
  required_flag: boolean;
  option_list: string[];
  sort_order: number | null;
};

// 4. 回答
export interface AnswerDataType {
  answer_at: Date;
  answer_data: JSON;
};

// 5. Storeで管理するStateの型定義
export interface StoreStateType {
  section_list: SectionType[];
  question_config_list: QuestionConfigType[];
  input_config_list: InputConfigType[];
  answer_list: [];
}

