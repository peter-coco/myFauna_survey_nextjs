import { resultType } from '@utils/type/resultType';
import { ResultTypeContent } from 'pages/result/[type]';

export const setResultContents = (type: resultType): ResultTypeContent => {
  switch (type) {
    case 'raccon':
      return {
        animalNickname: '호기심 많은 연구가',
        animalName: '말랑말랑 너부리',
        animalSaying: '세상에는 흥미로운게 너무 많아!',
        animalDescription: [
          '• 특이하다는 말을 많이 들어요.',
          '• 궁금한 게 생기면 행동하고 봐요.',
          '• 누가 나를 좋아하든 말든 크게 관심이 없어요.',
          '• 하고 싶은 일은 꼭 해야 해요.',
          '• 밖에 나가서 돌아다니는 걸 좋아해요.',
          '• 관심사가 많아요.',
          '• 그래서 누구든 말할 거리가 넘쳐요.',
          '• 새로운 사람을 만나는 것에 거부감이 없어요.',
          '• 가끔 백치미를 보일 때가 있어요.',
          '• 친구에게 현실적인 해결책을 제시해요.',
        ],
        letterTitle: '💌      너부리가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'hamster',
        dislikeAnimal: 'fox',
      };
    case 'fox':
      return {
        animalNickname: '여유로운 휴식가',
        animalName: '말랑말랑 여우리',
        animalSaying: '급할 필요 있어? 천천히 가자',
        animalDescription: [
          '• 차 한 잔 마시는 여유를 가지고 있어요.',
          '• 어떤 일이든 조급하지 않고 차분하게 진행해요.',
          '• 은근한 고집이 있어요.',
          '• 굳이 새로운 사람을 사귀려고 하지 않아요.',
          '• 그렇다고 흠 잡힐 행동을 하지도 않아요.',
          '• 그래서 주변 사람과 두루두루 잘 지내요.',
          '• 좋아하는 사람과 싫어하는 사람이 명확해요.',
          '• 좋아하는 사람의 의견을 존중해줘요.',
          '• 누구와 경쟁하는 걸 좋아하지 않아요.',
          '• 나만의 페이스 유지를 중요하게 생각해요.',
        ],
        letterTitle: '💌       여우리가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'bear',
        dislikeAnimal: 'raccon',
      };
    case 'dog':
      return {
        animalNickname: '만인의 에너자이저',
        animalName: '말랑말랑 멍무이',
        animalSaying: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: [
          '• 주변 사람을 즐겁게 하는 밝은 에너지가 있어요.',
          '• 사람과 함께 있으면서 에너지를 얻어요.',
          '• 누구에게든 사랑받고 관심받는 걸 좋아해요.',
          '• 타인의 선택을 존중해줘요.',
          '• 내가 직접 무언가를 하겠다고 나서지는 않아요.',
          '• 관심이 생기면 적극적으로 호감을 표현해요.',
          '• 타인이 싫어하는 행동은 하지 않으려고 해요.',
          '• 혼자 있을 때 쉽게 우울해져요.',
          '• 조금 낯가림을 타지만 금방 친해져요.',
          '• 상처를 잘 받으면서도 쉽게 사람을 믿어요.',
        ],
        letterTitle: '💌      멍무이가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'rabbit',
        dislikeAnimal: 'bear',
      };
    case 'bear':
      return {
        animalNickname: '푸근한 대인배',
        animalName: '말랑말랑 곰쥬',
        animalSaying: '괜찮아. 누구든 실수할 수 있어.',
        animalDescription: [
          '• 각자의 개성을 존중해요.',
          '• 좋은 게 좋은거지라고 넘기는 경우가 많아요.',
          '• 주변에 좋아하는 사람이 많아요.',
          '• 어떤 의견이든 존중해주고 들어줘요.',
          '• 자기 의견을 고집하지 않아요.',
          '• 부탁을 거절하지 못해요.',
          '• 쉽게 화내지 않아요.',
          '• 급하게 행동하지 않고 느긋해요.',
          '• 남을 편하게 해주는 매력이 있어요.',
          '• 친구의 아픔을 잘 공감하고 위로해줘요.',
        ],
        letterTitle: '💌      곰쥬가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'fox',
        dislikeAnimal: 'dog',
      };
    case 'cow':
      return {
        animalNickname: '차분한 평화주의자',
        animalName: '말랑말랑 소소',
        animalSaying: '난 변치 않아.',
        animalDescription: [
          '• 사시사철 푸른 소나무 같은 면모가 있어요.',
          '• 어떠한 분쟁도 짜증도 일으키지 않아요.',
          '• 함부로 비난하고 판단하지 않아요.',
          '• 타인을 욕하는 걸 아주 싫어해요.',
          '• 그래서 남 욕은 절대 하지 않아요.',
          '• 어떤 친구든 무한신뢰를 줘요.',
          '• 우직하고 듬직해요.',
          '• 가끔 답답할 때도 있어요. ',
          '• 과묵하고 조용해요.',
          '• 친구가 속상해할 때 말없이 곁에 있어 줘요.',
        ],
        letterTitle: '💌      소소가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'hedgehog',
        dislikeAnimal: 'cat',
      };
    case 'hamster':
      return {
        animalNickname: '사랑스러운 협동가',
        animalName: '말랑말랑 햄찌',
        animalSaying: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: [
          '• 원하는 목표를 위해 끊임없이 노력해요.',
          '• 친구들에게 내가 하고 싶은걸 자주 말해요.',
          '• 혼자서 하는 것보다는 같이 하는 걸 좋아해요.',
          '• 낯가림을 타지만 친해지면 성격이 돌변해요.',
          '• 가끔 놀라울 정도로 활발해요.',
          '• 소심해지면 한없이 소심해져요.',
          '• 생각을 정리할 수 있는 공간이 꼭 필요해요.',
          '• 가끔 소식이 뚝 끊겼다가 나타나요.',
          '• 소수의 친구와 친하게 지내요.',
          '• 비밀이 많아요.',
        ],
        letterTitle: '💌      햄찌가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'raccon',
        dislikeAnimal: 'rabbit',
      };
    case 'rabbit':
      return {
        animalNickname: '개성강한 힙스터',
        animalName: '말랑말랑 토토',
        animalSaying: '철저한 자기관리는 필수지!',
        animalDescription: [
          '• 개성이 뚜렷해요.',
          '• 좋아하는 것과 싫어하는 게 명확해요.',
          '• 신경 쓰는 게 있어도 티를 내지 않아요.',
          '• 좋아하는 친구한테 의지를 많이 해요.',
          '• 고민을 말하지 않아요. 혼자서 생각해요.',
          '• 같이 일할 때 협업을 중요하게 생각해요.',
          '• 가끔 욱해요.',
          '• 친구 기분을 많이 신경 쓰고 챙겨줘요.',
          '• 바쁠 때는 일에만 집중하고 다른 건 신경 안 써요.',
          '• 나만의 공간을 중요하게 생각해요.',
        ],
        letterTitle: '💌      토토가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'dog',
        dislikeAnimal: 'hamster',
      };
    case 'cat':
      return {
        animalNickname: '은근한 최강자',
        animalName: '말랑말랑 냠미',
        animalSaying: '나를 귀찮게 하지마.',
        animalDescription: [
          '• 조용하지만 존재감이 있어요.',
          '• 주변에 챙겨주는 사람이 많아요.',
          '• 날카로운 직관력과 통찰력을 가지고 있어요.',
          '• 친구의 선을 지켜줘요.',
          '• 과한 친절을 부리지 않아요.',
          '• 혼자 있는 시간을 즐겨요.',
          '• 취미가 많아요.',
          '• 가끔 불쑥 여행을 떠나곤 해요.',
          '• 친구들에게 자주 안부 연락이 와요.',
          '• 눈치가 빠르고 말을 잘해요.',
        ],
        letterTitle: '💌      냠미가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'cow',
        dislikeAnimal: 'hedgehog',
      };
    case 'hedgehog':
      return {
        animalNickname: '고독한 사색가',
        animalName: '말랑말랑 고슴이',
        animalSaying: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: [
          '• 말수가 적고 수줍음을 잘 타요.',
          '• 자기만의 세계가 있어요.',
          '• 자주 멍을 때려요.',
          '• 의식의 흐름대로 생각하고 행동해요.',
          '• 행동과 말을 조심해요.',
          '• 말할까, 말까를 10번 넘게 고민해요.',
          '• 무슨 생각해? 라는 말을 자주 들어요.',
          '• 고독을 즐길 줄 알아요.',
          '• 외로움을 안 타요.',
          '• 누군가에게 피해를 주는 걸 싫어해요.',
        ],
        letterTitle: '💌      고슴이가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'cow',
        dislikeAnimal: 'cat',
      };
    default:
      return {
        animalNickname: '호기심 많은 연구가',
        animalName: '말랑말랑 너부리',
        animalSaying: '세상에는 흥미로운게 너무 많아!',
        animalDescription: [
          '• 특이하다는 말을 많이 들어요.',
          '• 궁금한 게 생기면 행동하고 봐요.',
          '• 누가 나를 좋아하든 말든 크게 관심이 없어요.',
          '• 하고 싶은 일은 꼭 해야 해요.',
          '• 밖에 나가서 돌아다니는 걸 좋아해요.',
          '• 관심사가 많아요.',
          '• 그래서 누구든 말할 거리가 넘쳐요.',
          '• 새로운 사람을 만나는 것에 거부감이 없어요.',
          '• 가끔 백치미를 보일 때가 있어요.',
          '• 친구에게 현실적인 해결책을 제시해요.',
        ],
        letterTitle: '💌      너부리가 보내는 편지      💌',
        letter: ``,
        likeAnimal: 'hamster',
        dislikeAnimal: 'fox',
      };
  }
};
