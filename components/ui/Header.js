'use client'
import MainNavigation from "./MainNavigation";
import { Container, Typography } from "@mui/material";
import { Ruda } from "next/font/google";

const ruda = Ruda({ subsets: ['latin'], weight: ['900']});


export default function Header() {
    return(
        <Container maxWidth='md' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', my: 8}}>
            <Typography variant='h1' sx={{fontSize: "4rem", my: 'auto'}} className={ruda.className}>Vanarahvas ütles...</Typography>
            <MainNavigation />
        </Container>            
    
    )
}