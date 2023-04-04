'use client'
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import CardNavigation from "../ui/CardNavigation"
import QuotesImage from "../ui/QuotesImage";
import styles from './quotes.module.css'



export default function SingleQuote(props) {
 

    return (
        <Container maxWidth="sm">
            <Card sx={{my: 8}} className={[styles.item]}>
                <QuotesImage />
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <CardContent sx={{margin: "auto", mx: 2}}>
                        <Typography variant="h2" sx={{fontSize: '36px'}}>{props.text}</Typography>  
                        <Typography paragraph align="right" sx={{mt: 2}}>{props.author}</Typography>                  
                    </CardContent>
                    <CardNavigation text={props.text}/>
                </Box>          
            </Card>
        </Container>

    )
}