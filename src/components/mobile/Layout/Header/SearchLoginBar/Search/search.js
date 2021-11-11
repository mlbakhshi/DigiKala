import React from 'react';
import '../../../../../../assets/icon/style.css';
import classes from './search.module.scss';
import {MobileProducts} from "../../../../../../redux/data/auth/apiFunction";
const Search=()=>{
    const [searchTerm, setSearchTerm] = React.useState("");
    // const [searchResults, setSearchResults] = React.useState();
    let searchResults=[];
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
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
        console.log(searchResults)

        console.log(searchResults.map(item => (
            item.ProductTitle)));

    }, [searchTerm]);

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
                {/*<ul>*/}
                {/*    {*/}

                {/*        searchResults.map(item=> (*/}
                {/*            <li key={item.ID}>{item.ProductTitle}</li>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</ul>*/}

            </div>

        </div>
    )
}
export default Search;
