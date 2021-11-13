import React, {useState} from 'react';
import '../../../../../assets/icon/style.css';
import classes from './search.module.scss';
import {MobileProducts} from "../../../../../redux/data/auth/apiFunction";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchResult from "./SearchResult";
import {Button, Modal} from "react-bootstrap";
const Search=()=>{

    const [searchTerm, setSearchTerm] = React.useState("");
    // const [searchResults, setSearchResults] = React.useState();
    let searchResults=[];
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    console.log(searchTerm)
    React.useEffect(async () => {
        let response=null;
        try {
            response=await MobileProducts();

        }catch (e){
            console.log('Error')
        }
        let j=0;
        for(let i=0;i<response.length;i++){
            if(response[i].ProductNamePr.toLowerCase().includes(searchTerm)){
                searchResults[j]=response[i];
                j++
            }
        }
        console.log(searchResults.length)

        console.log(searchResults.map(item => (
            item.ProductTitle)));

    }, [searchTerm]);

console.log(searchResults.length);

    if(searchResults.length>=1){
        console.log(searchResults.length);
        return(
            <SearchResult results={searchResults} />
        )
    }
    else {
        return(
            <div className={classes.Search}>
                <div >
                    <span class="icon-search"></span>
                </div>
                <div >
                    <input
                        type="text"
                        placeholder="جستجو در دیجی کالا..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>
        )
    }


}
export default Search;
