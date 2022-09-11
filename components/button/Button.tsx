import { cls } from '@utils/function/cls';

interface Props {
  text: string;
  type: 'homeNintro' | 'surveyNResult';
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        'rounded-full shadow-2xl w-1/2 h-14 font-semibold text-gray-900 border-2 border-gray-300',
        type === 'surveyNResult' ? 'bg-white' : 'bg-red-300'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
