
// [ StoreStateのDataをuseSelectorに渡すための関数をまとめたファイル ]

import React from "react";

// 1. セクション分け(区切り・大分類)のData
export const SectionList = (state: any)=> {
  return (
      state.StoreState.section_list
  );
};

// 2. 質問設定のData
export const QusetionConfigList = (state: any)=> {
  return (
      state.StoreState.question_config_list
  );
};

// 3. 入力フォームの設定Data
export const InputConfigList = (state: any)=> {
  return (
      state.StoreState.input_config_list
  );
};

