import React from 'react';
import Head from 'next/head'
import Image from 'next/image';
import for_fun_styles from '../styles/ForFun.module.scss';
import styles from '../styles/Layout.module.scss';
import Link from 'next/link';

function For_fun() {
  return <div className={for_fun_styles.container}>
      <h2>WORK WITH API</h2>

      <div>
          <div className='block'>
          <Link href="/rick_morty" className='text wrap'>
                <a>
                    <h3>WUBBA LUBBA DUB DUB</h3>
                </a>
            </Link>
          </div>
      </div>

  </div>;
}

export default For_fun;
