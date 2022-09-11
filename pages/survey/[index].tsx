import Button from '@components/button/Button';
import useStore from '@store/store';
import { setResultOnSurvey } from '@utils/function/setResultOnSurvey';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Survey: NextPage = () => {
  const router = useRouter();
  const [loadingToggle, setLoadingToggle] = useState(false);

  const { surveyNo, surveyScore, addSurveyNo, calculateScore } = useStore();

  const onClick = (select: 'top' | 'bottom') => {
    // router.query;
    if (select === 'top') {
      calculateScore(1);
    }
    if (select === 'bottom') {
      calculateScore(-1);
    }

    if (surveyNo === 17) {
      const resultType = setResultOnSurvey(surveyScore);
      router.push(`/result/${resultType}`);
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
    }
  }, [router]);

  useEffect(() => {
    console.log(surveyScore);
  }, [surveyScore]);

  if (loadingToggle) {
    return (
      <div>
        <Head>
          <title>Loading...</title>
        </Head>
        <img></img>
        <h2>나와 닮은 동물을 찾는 중...</h2>
      </div>
    );
  }
  return (
    <div
      className={`px-4 py-20 max-w-sm mx-auto flex flex-col items-center justify-between h-screen bg-[url('/images/survey_bg${router.query.index}.jpeg')]`}
    >
      <Head>
        <title>Survey</title>
      </Head>
      <Image
        width={200}
        height={200}
        src={`/images/survey_logo${surveyNo}.jpeg`}
        alt="survey_image"
      />
      <div className="font-bold text-lg text-center text-gray-900">나는</div>
      <div className="w-full flex flex-col gap-4 items-center ">
        <Button text="활발한 사람이다." type="homeNIntro" onClick={() => onClick('top')} />
        <Button text="조용한 사람이다." type="homeNIntro" onClick={() => onClick('bottom')} />
      </div>
    </div>
  );
};

export default Survey;
