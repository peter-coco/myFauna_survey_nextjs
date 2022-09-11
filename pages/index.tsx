import Button from '@components/button/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/intro');
  };
  return (
    <div className="px-4 py-10 max-w-sm mx-auto flex flex-col items-center justify-between h-screen">
      <Head>
        <title>나는 어떤 타입의 동물일까?</title>
      </Head>
      <h1 className="font-bold text-xl text-gray-900">나는 어떤 타입의 동물일까?</h1>
      <Image width={246} height={280} src="/images/main.jpeg" alt="main-image" />
      <Button text="테스트 시작!" type="homeNIntro" onClick={onClick} />
      <h3 className="font-bold text-lg text-center text-gray-900">
        참여자 수 <div> 1000000</div>
      </h3>
    </div>
  );
};

export default Home;
