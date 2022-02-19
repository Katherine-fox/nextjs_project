import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/ForFun.module.scss';
import frame_src from '../styles/images/tv_frame.png';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/';

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return{
        props: {
            data
        }
    }
}

function Rick_morty({data}) {
    const {info, results: defaultResults = []} = data;
    const [results, setResults] = useState(defaultResults);
    const [page, setPage] = useState({
        ...info, current: defaultEndpoint
    })
    const {current} = page;

    useEffect(() => {

        if (current === defaultEndpoint) return;

        async function request(){

            const res = await fetch(current)
            const nextData = await res.json();

            setPage({
                current, ... nextData.info
            })

            if (!nextData.info?.prev) {
                setResults(nextData.results);
                return;
            }

            setResults(prev => {
                return [
                    ...prev,
                    ...nextData.results
                ] 
            })
        }

      request();
    }, [current]);

    const handleLoadMore = () =>{
        setPage(prev=>{
            return {
                ...prev, 
                current: page?.next
            }
        })
    }
    
    return (
        <div  className={styles.container}>
            <h1>{'Rick & Morty Complete Characters Collection'}</h1>
            <div className={styles.block_wrapper}>
                {
                    results?.map((result, key)=>{
                        const img_src = result.image;
                        return (
                            <div key={result.id} className={styles.block}>
                                <div className={styles.img_wrapper}>
                                    <img src={img_src} alt={result.name}/>
                                </div>
                                
                                <div className={styles.text_wrapper}>
                                    <h4>Name: {result.name}</h4>
                                    <p>Gender: {result.gender}</p>
                                    <p>Status: {result.status}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={handleLoadMore}>More</button>
        </div>
    )
}

export default Rick_morty;
