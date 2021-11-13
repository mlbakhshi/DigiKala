
import React from "react";
import classes from "./search.module.scss";
// import Box from "@mui/material/Box";
import styled from '@emotion/styled'
import Grid from "@mui/material/Grid";
// import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Toolbar from "../toolbar/toolbar";
import Footer from "../../Footer/footer";


const SearchResult=(props)=>{


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Item>Item</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Item</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Item</Item>
                </Grid>
            </React.Fragment>
        );
    }

return(
    <div >
        <Toolbar />
        <div className={classes.Search}>
        {/*<ul>*/}
        {/*    <Box sx={{ flexGrow: 1 }}>*/}
        {/*        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>*/}
        {/*            {Array.from(Array(props.result.length)).map((_, index) => (*/}
        {/*                <Grid item xs={2} sm={4} md={4} key={index}>*/}
        {/*                    <Item>xs=2</Item>*/}
        {/*                </Grid>*/}
        {/*            ))}*/}
        {/*        </Grid>*/}
        {/*    </Box>*/}

        {/*    }*/}
        {/*</ul>*/}


            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>

        </div>
<Footer />
    </div>
)
}
export default SearchResult;