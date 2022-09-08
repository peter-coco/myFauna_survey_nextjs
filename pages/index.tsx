import Button from '@components/button/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>나는 어떤 타입의 동물일까?</title>
      </Head>
      <h1>나는 어떤 타입의 동물일까?</h1>
      <img src=""></img>
      <Button text="테스트 시작!" />
      <h3>참여자 수 : 1000000</h3>
    </div>
  );
};

export default Home;
