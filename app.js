'use strinct';

//window.alert('準備ができたらOKを押して、千葉県検定をスタートしよう！');
const quiz = [
  {
    question: '千葉県の人口はおよそ何人？',
    answers: ['470万人','560万人', '630万人', '750万人'],
    correct: '630万人'
  },
  {
    question: '千葉県の県庁所在地はどこ？',
    answers: ['千葉市','船橋市', '市川市', '松戸市'],
    correct: '千葉市'
  },
  {
    question: '千葉県が誇る日本最大級の空港は？',
    answers: ['羽田空港','成田空港', '新千歳空港', '木更津飛行場'],
    correct: '成田空港'
  },
  {
    question: '千葉市に存在しないものはどれ？',
    answers: ['ZOZOマリンスタジアム','フクダ電子アリーナ', '千葉国際総合水泳場', '千葉県総合スポーツセンター'],
    correct: '千葉国際総合水泳場'
  },
  {
    question: '千葉県にある高校の総数は？',
    answers: ['135校','190校', '230校', '275校'],
    correct: '190校'
  },
];


let quizIndex = 0;
let quizLength = quiz.length;
let score = 0;
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;


//問題と選択肢の生成
const setupquiz = () => {
  document.getElementById('question-sentence').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupquiz();

//正解かどうかを判定

const seigohantei = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解です');
    score++;
  } else {
    window.alert('不正解です');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupquiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + 'です！');
  }

  //正誤判定ののちに次の問題へシフト

};
let handle = 0;
while (handle < buttonLength) {
  $button[handle].addEventListener('click', (e) => {
    seigohantei(e)
  });
  handle++;
}
