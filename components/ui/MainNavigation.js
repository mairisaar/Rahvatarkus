'use client'

import Link from "next/link";
import styles from "./ui.module.css";
import { MyMany, MyOne } from "./Icons";
import { IconButton, MenuList } from "@mui/material";

export default function MainNavigation() {
    
    return (
 
        <MenuList className={styles.nav}>
            <Link href={"/"}><IconButton><MyMany /></IconButton></Link>
            <Link href='/vanasonad/ega-too-konn-ole-et-eest-ara-huppab'><IconButton><MyOne /></IconButton></Link>
        </MenuList>

    )
    
    
}
