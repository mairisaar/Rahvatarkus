import Link from "next/link"
import QuotePreview from "./QuotePreview"


export default function QuotesList() {
    const vanasonad = myData.getAll()
  
    return (
        <div> 
        <ul>
            {vanasonad.map((item) => (
                <Link href='/vanasonad/[item.slug]' as={`/vanasonad/${item.slug}`}>
                    <QuotePreview 
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    author={item.author}
                    slug={item.slug}
                    />
                </Link>
            ))}
        </ul>
        </div>
    )
}