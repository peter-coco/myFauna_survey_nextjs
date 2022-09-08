import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Survey: NextPage = () => {
  const [loadingToggle, setLoadingToggle] = useState(false);

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
      <div></div>
      <button></button>
      <button></button>
    </div>
  );
};

export default Survey;
