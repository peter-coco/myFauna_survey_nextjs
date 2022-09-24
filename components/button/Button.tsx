import { cls } from '@utils/function/cls';

interface Props {
  text: string;
  type: 'homeNIntro' | 'surveyNResult';
  onClick?: () => void;
}

// work-break keep-all은 안되다니...
const Button = ({ text, type, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        'rounded-3xl shadow-xl w-1/2 font-semibold text-gray-800 border-2 border-gray-300 p-3 flex items-center justify-center',
        type === 'surveyNResult' ? 'bg-white' : 'bg-red-300'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
