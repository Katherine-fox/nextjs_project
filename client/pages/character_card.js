import React from 'react';
import { useRouter } from "next/router";
import styles_rm from '../styles/ForFun.module.scss';

function Character_card({}) {

    const router = useRouter();
    const result = router.query;
  return (
    <>
        <h1>{result.name}</h1>
    </>
  )
}

export default Character_card