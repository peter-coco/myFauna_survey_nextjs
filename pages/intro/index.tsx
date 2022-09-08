import Button from '@components/button/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Intro: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Intro</title>
      </Head>
      <img src=""></img>
      <h2>
        깊은 산속에 가면 나와 닮을 동물을 비춰주는 옹달샘이 있다고 한다. 호기심 가득한 마음을 품고
        옹담샘에 내 얼굴을 비춰보았다.
      </h2>
      <Button text="나와 닮은 동물은?" />
    </div>
  );
};

export default Intro;
