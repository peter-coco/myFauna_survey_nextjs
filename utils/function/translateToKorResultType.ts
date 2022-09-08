import { resultType } from '@utils/type/resultType';

const translateToKorResultType = (type: resultType): string => {
  if (type === 'dog') {
    return '멍무이';
  } else if (type === 'cat') {
    return '냠미';
  } else if (type === 'cow') {
    return '소소';
  } else if (type === 'bear') {
    return '곰쥬';
  } else if (type === 'hamster') {
    return '햄찌';
  } else if (type === 'fox') {
    return '여우리';
  } else if (type === 'rabbit') {
    return '토토';
  } else if (type === 'raccon') {
    return '너부리';
  } else if (type === 'hedgehog') {
    return '고슴이';
  }
  return '';
};

export default translateToKorResultType;
