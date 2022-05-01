import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles_rm from '../styles/ForFun.module.scss';
import frame_src from '../styles/images/tv_frame.png';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Character_card from './character_card';

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
    const [searchQuery, setSearchQuery] = useState("");

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

    const handleLoadMore = () => {
        setPage(prev=>{
            return {
                ...prev, 
                current: page?.next
            }
        })
    }

    const buildBlocks = (e) => {
        
        let filtered_results;

        if (searchQuery){
            filtered_results = results.filter(result => result.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }else{
            filtered_results = results;
        }

        return filtered_results.map((result, key)=>{
            return (
                <Link href={{
                    pathname: "/character_card",
                    query: result, // the data
                  }}>
                    <a className={styles_rm.block}>
                        <div className={styles_rm.img_wrapper}>
                            <img src={result.image} alt={result.name}/>
                        </div>
                        <div className={styles_rm.text_wrapper}>
                            <h4>Name: {result.name}</h4>
                            <p>Gender: {result.gender}</p>
                            <p>Status: {result.status}</p>
                        </div> 
                    </a>
                </Link>
            )
        })    
    }
    
    return (
        <div className={styles_rm.container}>
            <h1>{'Rick & Morty Complete Characters Collection'}</h1>
            <TextField
            label="Search character"
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles_rm.search_field}
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
            />
            <div className={styles_rm.block_wrapper}>
                {buildBlocks()}
            </div>
            <button onClick={handleLoadMore}>More</button>
        </div>
    )
}

export default Rick_morty;
