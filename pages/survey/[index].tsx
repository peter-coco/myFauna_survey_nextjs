import Button from '@components/button/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Survey: NextPage = () => {
  const router = useRouter();
  const [loadingToggle, setLoadingToggle] = useState(false);

  const onClick = (select: 'top' | 'bottom') => {
    // router.query;
    if (select === 'top') {
    }
    if (select === 'bottom') {
    }

    if (Number(router.query.index) === 17) {
      router.push('/result');
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
    <div>
      <Head>
        <title>Survey</title>
      </Head>
      <img src=""></img>
      <div>나는</div>
      <Button text="활발한 사람이다." type="homeNIntro" onClick={() => onClick('top')} />
      <Button text="조용한 사람이다." type="homeNIntro" onClick={() => onClick('bottom')} />
    </div>
  );
};

export default Survey;
