import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { resultType } from '@utils/type/resultType';
import translateToKorResultType from '@utils/function/translateToKorResultType';
import { useCallback, useEffect, useState } from 'react';
import { setResultContents } from '@utils/function/setResultContents,';
import Image from 'next/image';

export interface ResultTypeContent {
  animalNickname: string;
  animalName: string;
  animalSaying: string;
  animalDescription: string[];
  letterTitle: string;
  letter: string;
  likeAnimal: resultType;
  dislikeAnimal: resultType;
}

const Result: NextPage = () => {
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

  const isResultType = useCallback((type: resultType) => resultType.includes(type), []);
  const router = useRouter();
  const [resultContent, setResultContent] = useState<ResultTypeContent | undefined>();
  useEffect(() => {
    if (isResultType(router.query.type as resultType)) {
      setResultContent(setResultContents(router.query.type as resultType));
    }
  }, [router.query.type]);

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
      <Image
        src={`/images/result_${router.query.type}.jpeg`}
        alt="result_animal_image"
        width="10"
        height="10"
      />
      <h2>
        {resultContent?.animalNickname}, {resultContent?.animalName}
      </h2>
      <h3>{resultContent?.animalSaying}</h3>
      <ul>
        {resultContent?.animalDescription.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
      <div>{resultContent?.letterTitle}</div>
      <div>{resultContent?.letter}</div>
      <div>
        <div>내 결과 공유하기</div>
        <div>
          <Image src={`/images/kakaoLogo.png`} alt="share_kakao" width="10" height="10" />
          <Image src={`/images/shareLink.png`} alt="share_link" width="10" height="10" />
        </div>
      </div>
      <div>
        <div>동물별 궁합</div>
        <div>
          <div>
            <div>좋아요</div>
            <Image
              src={`/images/result_${resultContent?.likeAnimal}.jpeg`}
              alt="likeAnimal_with_result_animal_image"
              width="10"
              height="10"
            />
            <div></div>
            <div></div>
          </div>
          <div>
            <div>아쉬워요</div>
            <Image
              src={`/images/result_${resultContent?.dislikeAnimal}.jpeg`}
              alt="dislikAnimal_with_result_animal_image"
              width="10"
              height="10"
            />
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
        <Image src="/images/replace_logo.png" alt="maker_image" width="10" height="10" />
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
