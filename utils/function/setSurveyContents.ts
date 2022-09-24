import { ContentsForm } from 'pages/survey/[index]';

export const setSurveyContents = (surveyNo: number): ContentsForm => {
  let question;
  let topButtonText;
  let bottomButtonText;

  if (surveyNo === 1) {
    question = '나는';
    topButtonText = '활발한 사람이다';
    bottomButtonText = '조용한 사람이다';
  } else if (surveyNo === 2) {
    question = '흥미로운 일이 생기면';
    topButtonText = ' 일단 행동으로 옮긴다.';
    bottomButtonText = '생각하는 시간을 가진다.';
  } else if (surveyNo === 3) {
    question = '불합리한 일을 겪을 경우';
    topButtonText = '아닌걸 아니라고 말한다.';
    bottomButtonText = '참고 넘어간다.';
  } else if (surveyNo === 4) {
    question = '혼자있을 때';
    topButtonText = '친구들과 약속을 잡고 나간다.';
    bottomButtonText = '집에서 취미활동을 한다.';
  } else if (surveyNo === 5) {
    question = '내가 좋아하는 취미활동은';
    topButtonText = '활동적이고 액티브한 것 ';
    bottomButtonText = '정적이고 편안한 것';
  } else if (surveyNo === 6) {
    question = '내가 좋아하는 공간은';
    topButtonText = '놀이동산, 공원, 야구장';
    bottomButtonText = '미술관, 서점, 카페';
  } else if (surveyNo === 7) {
    question = '나는 슬프거나 화날 때';
    topButtonText = '친구들과 함께 나누며 푼다.';
    bottomButtonText = '감정의 원인에 대해 생각한다.';
  } else if (surveyNo === 8) {
    question = '내 의견을 말할 때';
    topButtonText = '나에게 필요한 걸 생각하며 말한다.';
    bottomButtonText = '상대방의 기분을 생각하며 말한다.';
  } else if (surveyNo === 9) {
    question = '낯선 사람이 나에게 말을 걸면 ';
    topButtonText = '같이 신나게 떠든다.';
    bottomButtonText = '얘기를 듣고 공감한다.';
  } else if (surveyNo === 10) {
    question = '여러 사람과 있을 때';
    topButtonText = '두루두루 말을 많이 한다.';
    bottomButtonText = '소수의 사람들과 말한다. ';
  } else if (surveyNo === 11) {
    question = '사람들은 종종 나에게 ';
    topButtonText = '활동적이고 진취적이라고 한다.';
    bottomButtonText = '배려심이 많고 섬세하다고 한다.';
  } else if (surveyNo === 12) {
    question = '어떤 일을 할 때';
    topButtonText = '할 일을 찾아서 한다.';
    bottomButtonText = '주어진 업무만 한다.';
  } else if (surveyNo === 13) {
    question = '나는 팀을';
    topButtonText = '이끄는 사람이다.';
    bottomButtonText = '도우는 사람이다.';
  } else if (surveyNo === 14) {
    question = '나는 주로';
    topButtonText = '이상을 꿈꾼다.';
    bottomButtonText = '현실을 본다.';
  } else if (surveyNo === 15) {
    question = '무언가를 이룰 때';
    topButtonText = '정한 목표를 꼭 이뤄낸다. ';
    bottomButtonText = '정한 목표를 자주 바꾼다.';
  } else if (surveyNo === 16) {
    question = '나는 다른 사람이 나를 볼 때';
    topButtonText = '진취적이고 열정있는 사람으로 봤으면 한다.';
    bottomButtonText = '예리하고 꼼꼼한 사람으로 봤으면 한다.';
  } else if (surveyNo === 17) {
    question = '내가 더 끌리는 말은';
    topButtonText = '결코 끌 수 없는 열정으로 삶을 살아라.';
    bottomButtonText = '겨울이 오면 봄이 멀지 않으리.';
  } else {
    question = '다른 사람이 나를 볼 때';
    topButtonText = '진취적이고 열정있는 사람으로 봤으면 한다.';
    bottomButtonText = '예리하고 꼼꼼한 사람으로 봤으면 한다.';
  }

  return {
    question,
    topButtonText,
    bottomButtonText,
  };
};
