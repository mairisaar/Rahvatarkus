'use client'
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import CardNavigation from "../ui/CardNavigation";
import styles from './quotes.module.css'


export default function QuotePreview(props) {
    return (
        <Card className={[styles.item, styles.oneline]}>
            <Link href='/vanasonad/[props.slug]' as={`/vanasonad/${props.slug}`}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: '24px'}} >{props.text}</Typography>
                </CardContent>
            </Link>
            <CardNavigation text={props.text}/>
        </Card>
            
    )
}