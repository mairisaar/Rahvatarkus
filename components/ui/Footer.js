'use client'
import Link from "next/link";
import { Container, Box, IconButton, Typography } from "@mui/material";
import { MyLinkedIn } from "./Icons";
import { Monda } from "next/font/google";

const monda = Monda({ subsets: ['latin'], weight: ['400']});

export default function Footer() {
const year = new Date().getFullYear();

    return (
        <Container maxWidth='md' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', my: 4}}>
            <Box>
                <Typography variant="body2" sx={{fontSize: 14, align: 'right'}} className={monda.className}>Copyright {year}</Typography>
                <Typography variant="body2" sx={{fontSize: 14, align: 'right'}} className={monda.className}>Mairi Saar</Typography>
            </Box>
            <Box>
                <Link href="https://www.linkedin.com/in/mairi-saar/" target={'_blank'}><IconButton sx={{mx: 1}}><MyLinkedIn /></IconButton></Link>
            </Box>            
        </Container>
        

    )
}