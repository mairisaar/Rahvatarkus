'use client'

import { CardActions, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import { MyHeartFull, MyHeartEmpty, MyCopy, MyRefresh } from "./Icons";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Link from 'next/link';


export default function CardNavigation(props) {
//    const [newSlug, setNewSlug] = useState(props.slug)
    const [isLiked, setIsLiked] = useState(false);
    const [open, setOpen] = useState(false);
    const vanasona = props.text;

//    function handleReload() {
//        const data = props.array;
//        const randomId = Math.floor((Math.random() * data.length) + 1);
//        const randomQuote = data.find(({id}) => id === randomId);

//        console.log(randomQuote);

//        setNewSlug(randomQuote.slug)
//    }

    function handleLiked() {
        isLiked ? setIsLiked(false) : setIsLiked(true)
    }

    function displayAlert() {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    

    return (
        <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                    
            <IconButton sx={{ "&:hover": { color: "#CBA6E2" }, m: 1 }} onClick={handleLiked}>{isLiked ? <MyHeartFull sx={{color: "#CBA6E2"}}/> : <MyHeartEmpty />}</IconButton>
            <CopyToClipboard text={vanasona}><IconButton sx={{ "&:hover": { color: "#CBA6E2" }, m: 1 }} onClick={displayAlert}><MyCopy /></IconButton></CopyToClipboard>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{horizontal: "center", vertical: "bottom"}} onClose={handleClose} message="Vanasõna kopeeriti lõikelauale."/>
        </CardActions>
    )
}


//<Link href='/vanasonad/[newSlug]' as={`/vanasonad/${newSlug}`}><IconButton sx={{ "&:hover": { color: "#CBA6E2" }, m: 1 }} onClick={handleReload}><MyRefresh /></IconButton></Link>