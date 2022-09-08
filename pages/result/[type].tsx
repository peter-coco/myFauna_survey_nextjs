import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { resultType } from '@utils/type/resultType';
import translateToKorResultType from '@utils/function/translateToKorResultType';

const Result: NextPage = () => {
  const router = useRouter();
  const resultType: resultType[] = [
    'dog',
    'cat',
    'cow',
    'bear',
    'hamster',
    'fox',
    'rabbit',
    'raccon',
    'hedgehog',
  ];
  const isResultType = (type: resultType) => resultType.includes(type);

  // 잚못된 result 페이지로 들어간 경우.
  if (!isResultType(router.query.type as resultType)) {
    return (
      <>
        <Head>
          <title>나의 동물 유형은? : 없는 타입의 동물</title>
        </Head>
        <div>해당 동물 타입의 결과는 없어요 ㅠ</div>
        <button>홈으로 가기 !</button>
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>
          나의 동물 유형은? : {translateToKorResultType(router.query.type as resultType)}{' '}
        </title>
      </Head>
      <h3>나와 비슷한 유형의 사람이 100% 있어요.</h3>
      <img src=""></img>
      <h2>만인의 에너자이저 말랑말랑 멍무이</h2>
      <h3>혼자있지 말고 나랑 같이 놀자!</h3>
      <ul>
        <li>주변 사람을 즐겁게 하는 밝은 에너지가 있어요.</li>
        <li> 사람과 함께 있으면서 에너지를 얻어요.</li>
        <li>누구에게든 사랑받고 관심받는 걸 좋아해요.</li>
        <li> 타인의 선택을 존중해줘요.</li>
        <li> 내가 직접 무언가를 하겠다고 나서지는 않아요.</li>
        <li> 관심이 생기면 적극적으로 호감을 표현해요.</li>
        <li> 타인이 싫어하는 행동은 하지 않으려고 해요.</li>
        <li> 혼자 있을 때 쉽게 우울해져요.</li>
        <li> 조금 낯가림을 타지만 금방 친해져요.</li>
        <li> 상처를 잘 받으면서도 쉽게 사람을 믿어요.</li>
      </ul>
      <div></div>
      <div></div>
      <div>
        <div>내 결과 공유하기</div>
        <div>
          <img></img>
          <img></img>
        </div>
      </div>
      <div>
        <div>동물별 궁합</div>
        <div>
          <div>
            <div>좋아요</div>
            <img></img>
            <div></div>
            <div></div>
          </div>
          <div>
            <div>아쉬워요</div>
            <img></img>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div>테스트는 어땠나요?</div>
        <div>
          <div>
            <div>
              <div></div>
              <div>잘했어요</div>
            </div>
            <div>00</div>
          </div>
          <div>
            <div>
              <div></div>
              <div>잘했어요</div>
            </div>
            <div>00</div>
          </div>
          <div>
            <div>
              <div></div>
              <div>잘했어요</div>
            </div>
            <div>00</div>
          </div>
          <div>
            <div>
              <div></div>
              <div>잘했어요</div>
            </div>
            <div>00</div>
          </div>
        </div>
      </div>
      <div>
        <div>만든이</div>
        <img></img>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button></button>
    </div>
  );
};

export default Result;
