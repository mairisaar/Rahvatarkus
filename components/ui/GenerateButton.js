'use client'

import { IconButton, Container } from "@mui/material";
import { useState } from "react";
import SingleQuote from "../quotes/SingleQuote";
import { MyRefresh } from "./Icons";



export default function GenerateButton(props) {

    const [quote, setQuote] = useState({
        "id": 61,
        "text": "Ega teist maksa enam uskuda kui silmaga näed.",
        "author": "Eesti vanasõna",
        "slug": "ega-teist-maksa-enam-uskuda-kui-silmaga-naed",
        "likes": 0
      });

    function generateNew(){
        const data = props.array;
        const randomId = Math.floor((Math.random() * data.length) + 1);
        const randomQuote = data.find(({id}) => id === randomId);

        setQuote(randomQuote);

    }

    return (
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column"}}>       
            <IconButton sx={{ "&:hover": { color: "#CBA6E2" }, my: 4 }} onClick={generateNew}><MyRefresh/></IconButton>     
            <SingleQuote text={quote.text} author={quote.author} likes={quote.likes} />   
        </Container>


    )
}

