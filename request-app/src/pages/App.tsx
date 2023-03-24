import React from 'react';

import { useSelector } from 'react-redux';
import { SectionList, QusetionConfigList, InputConfigList} from '../redux/Selector';

import { SectionType, QuestionConfigType, InputConfigType, AnswerDataType, StoreStateType } from "../types/StoreTypes";

import '../style/App.css';

import Footer from '../components/Footer';

// 入力フォームのComponentをImportする
import TextInput from '../components/input/Text';
import TextAreaInput from '../components/input/TextArea';
import RadioBtn from '../components/input/RadioBtn';
import CheckBoxSingle from '../components/input/CheckBoxSingle';
import CheckBoxMulti from '../components/input/CheckBoxMulti';
import SelectBox from '../components/input/SelectBox';


// 入力フォームに振り分ける処理をする => Switch

const SwitchInputType = (inputId: number, inputType: string, inputConfig: InputConfigType) => {
  switch (inputType) {
    case 'text':
      return <TextInput key={inputId} {...inputConfig} />;
  }
};


// 質問設定 & 入力フォーム設定データを合成したComponents
const QuestionInputFormMerge: React.FC = () => {

  const qusetionConfigList = useSelector(QusetionConfigList);
  console.log({qusetionConfigList});

  const inputConfigList = useSelector(InputConfigList);
  console.log({inputConfigList});

  // 質問設定に紐づく入力フォームを画面に表示する
  return (
    <div>
      {
        qusetionConfigList.map((question: QuestionConfigType, index: number) => {
          return (
            <div key={`question_${question.question_id}`} >
              <h4 className='question'>
              { question.required_flag ? <span className='required'>必須</span> : <span className='optionally'>任意</span> }
              <span>{question.question_text}</span>
              </h4>
              <div>
                {
                  question.input_id.map((id: number) => {
                    const inputForm: InputConfigType = inputConfigList.find((input: InputConfigType) => input.input_id === id);
                    return (
                      <div key={`input_${inputForm.input_id}`}>
                        <p>{inputForm.description}</p>
                        <input type={inputForm.input_type} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            
          )
        })
      }
    </div>
  )
};

const App: React.FC = () => {
  
  let sectionList = useSelector(SectionList);
  const sections = [] as SectionType[];
  let sort_count = 1;
  sectionList.forEach((section: SectionType) => {    
    if (section.sort_order === sort_count) {
      sort_count++;
      sections.push(section);
    }
  });
  console.log({sectionList});

  return (
    <article className="App-Page">

      {/* Header-Section */}
      <header className='wrapper'>
        <h2>
          <span className='title'>Request</span>
          <span className='sub-title'>ご要望受付</span>
        </h2>
        <p>ご要望は下記アンケートフォームよりご入力ください。お問い合わせは上の「お問い合わせ」をクリックいただき、メールよりご連絡ください。</p>

        <div className='time-slider'>
          <ul>
            <li className='active'>情報のご入力</li>
            <li>入力内容の確認</li>
            <li>受付の完了</li>
          </ul>
        </div>
      </header>

      {/* Main-Section */}
      <main id='main-container' className='wrapper'>

      <TextInput key='1' {...{
        input_id: 16,
        input_type: "text",
        description: "ご所属(企業・団体名)",
        required_flag: true,
        option_list: [],
        sort_order: 1,
      }} />

      <TextAreaInput key='2' {...{
        input_id: 16,
        input_type: "textarea",
        description: "【内容】",
        required_flag: false,
        option_list: [],
        sort_order: 1,
      }} />

      <RadioBtn key='3' 
      {...{
        input_id: 15,
        input_type: "radio",
        description: '次からお選びください',
        required_flag: true,
        option_list: ["フルリモート", "フル出社", "ハイブリッド"],
        sort_order: 1,
      }} />

      <CheckBoxSingle key='4' 
      {...{
        input_id: 15,
        input_type: "checkbox",
        description: 'ロボ玉ですか？',
        required_flag: false,
        option_list: ["フルリモート", "フル出社", "ハイブリッド"],
        sort_order: 1,
      }} />

      <CheckBoxMulti key='5' 
      {...{
        input_id: 10,
        input_type: "checkbox_multi",
        description: null,
        required_flag: true,
        option_list: [ "仕事で活用するため", "社内研修での活用", "エンジニア転職のため", "スキルアップ(自主学習)のため", "その他" ],
        sort_order: 1,
      }} />

      <SelectBox key='6' 
      {...{
        input_id: 12,
        input_type: "selectbox",
        description: '次の中から好きな講座を1つ選んでください',
        required_flag: true,
        option_list: [ "JavaScript初級講座", "JavaScript中級講座", "JavaScript上級講座", "Python初級講座", "Python中級講座", "Python上級講座", "PHP初級講座", "PHP中級講座", "PHP上級講座" ],
        sort_order: null,
      }} />
      

        {
          sections.map((section: SectionType, index: number) => {
            return (
              <section key={`section_${section.section_id}`}>
                <h3 className='section-title'>{section.section_title}</h3>
                <div className='section-contents'>
                  <QuestionInputFormMerge />
                </div>
              </section>
            )
          })
        }


        {/* 確認チェック & 確認画面に進むボタン-Section  */}
        <div className='confirm'>
          <div className='confirm-check'>
            <input type="checkbox" />
            <p>自社、自組織が保有する情報を提供いただける場合は、後日当方よりご連絡させていただきますので、連絡先等のご記入をお願いいたします。それ以外のお送りいただいた要望内容については、原則返信は行っておりませんので、あらかじめご了承ください。</p>
          </div>
          <div className='submit-box'>
            <button className='submit-btn'>確認画面に進む</button>
          </div>
        </div>

      </main>

      {/* Footer-Section */}
      <Footer />
    </article>
  );
}

export default App;