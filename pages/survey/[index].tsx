import Button from '@components/button/Button';
import useStore from '@store/store';
import { setResultOnSurvey } from '@utils/function/setResultOnSurvey';
import { setSurveyContents } from '@utils/function/setSurveyContents';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface ContentsForm {
  question: string;
  topButtonText: string;
  bottomButtonText: string;
}

const Survey: NextPage = () => {
  const router = useRouter();
  const [loadingToggle, setLoadingToggle] = useState(false);
  const [timer, setTimer] = useState(2);
  const { surveyNo, surveyScore, addSurveyNo, resetSurveyNo, calculateScore } = useStore();
  const [contents, setContents] = useState<ContentsForm>(
    setSurveyContents(Number(router.query.index))
  );

  const onClick = (select: 'top' | 'bottom') => {
    // router.query;
    if (select === 'top') {
      calculateScore(1);
    }
    if (select === 'bottom') {
      calculateScore(-1);
    }

    if (surveyNo === 17) {
      setLoadingToggle(true);
    } else {
      addSurveyNo();
      router.push(`/survey/${surveyNo + 1}`);
    }
  };

  // index는 숫자여야 하며 0 이상 17이하여야한다.
  useEffect(() => {
    if (Object.keys(router.query).length !== 0) {
      if (isNaN(Number(router.query.index))) {
        router.push('/');
        return;
      } else if (Number(router.query.index) < 1 || Number(router.query.index) > 17) {
        router.push('/');
        return;
      }
      setContents(setSurveyContents(Number(router.query.index)));
    }
  }, [router]);

  useEffect(() => {
    if (loadingToggle) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((pre) => pre - 1);
        } else {
          // api 통신 필요 !
          // handleAddResultToDatabase();
          const resultType = setResultOnSurvey(surveyScore);
          router.push(`/result/${resultType}`);
          resetSurveyNo();
          return;
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [calculateScore, resetSurveyNo, loadingToggle, router, surveyScore, timer]);

  if (loadingToggle) {
    return (
      <div
        className={`relative px-4 py-20 max-w-sm mx-auto flex flex-col items-center justify-between h-screen`}
      >
        <Head>
          <title>Loading...</title>
        </Head>
        <div className="p-32 relative">
          <Image
            src={`/images/loading.gif`}
            alt="survey_image"
            layout="fill"
            quality="50" // 로딩 속도는 quality랑은 상관이 없나...?
          />
        </div>
        <h2 className="font-bold text-xl text-center text-gray-800 ">
          나와 닮은 동물을 찾는 중...
        </h2>
      </div>
    );
  }
  return (
    <div
      className={`relative px-4 py-20 max-w-sm mx-auto flex flex-col items-center gap-1 justify-between h-screen`}
    >
      <Head>
        <title>Survey</title>
      </Head>
      <Image
        src={`/images/survey_bg${router.query.index}.jpeg`}
        alt="survey_image"
        layout="fill"
        quality="50" // 로딩 속도는 quality랑은 상관이 없나...?
      />

      <div className="p-32 relative z-10">
        <Image
          src={`/images/survey_logo${surveyNo}.jpeg`}
          alt="survey_image"
          className="object-scale-down"
          layout="fill"
        />
      </div>

      <div className="font-bold text-lg text-center text-gray-800 z-10">{contents.question}</div>
      <div className="w-full flex flex-col gap-4 items-center z-10">
        <Button text={contents.topButtonText} type="surveyNResult" onClick={() => onClick('top')} />
        <Button
          text={contents.bottomButtonText}
          type="surveyNResult"
          onClick={() => onClick('bottom')}
        />
      </div>
    </div>
  );
};

export default Survey;
