'use client'
import Container from '@mui/material/Container';
import { TextField, Button, Tooltip } from '@mui/material';
import { MySearch } from './Icons';
import styles from "./ui.module.css";
import { Monda } from "next/font/google";


const monda = Monda({ subsets: ['latin'], weight: ['400']});

export default function Search() {
    return (
        <Container 
            maxWidth='sm'
            component="form"
            noValidate
            autoComplete="off"
            className={styles.searchbox}
            >
                <TextField id="otsi" label="Otsi vanasõna" variant="standard" className={styles.searchfield} />
                <Tooltip title="Otsi"><Button aria-label="search" className={styles.searchbutton}><MySearch /></Button></Tooltip> 
        </Container>
    )
}