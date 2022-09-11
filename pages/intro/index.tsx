import Button from '@components/button/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Intro: NextPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/survey/1');
  };

  return (
    <div className="px-4 py-10 max-w-sm mx-auto flex flex-col items-center justify-between h-screen">
      <Head>
        <title>나는 어떤 타입의 동물일까? - 설명</title>
      </Head>
      <div className="top-10 relative">
        <Image width={260} height={320} src="/images/intro.jpeg" alt="intro-image" />
      </div>
      <h3 className="font-bold text-lg text-center text-gray-900 ">
        깊은 산속에 가면 나와 닮을 동물을 비춰주는 옹달샘이 있다고 한다. 호기심 가득한 마음을 품고
        옹담샘에 내 얼굴을 비춰보았다.
      </h3>

      <Button text="나와 닮은 동물은?" type="homeNIntro" onClick={onClick} />
    </div>
  );
};

export default Intro;
