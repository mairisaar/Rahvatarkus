import SingleQuote from "../../../../components/quotes/SingleQuote";
import data from '../../../../data.json';

export default async function SelectedQuote({params}) {

    const quote = await data.find(item => item.slug === params.slug);

    return (
        <SingleQuote 
            id={quote.id}
            text={quote.text}
            author={quote.author}
            slug={quote.slug}
            likes={quote.likes}
        />
    )
}