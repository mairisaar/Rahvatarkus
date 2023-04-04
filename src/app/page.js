
import QuotePreview from "../../components/quotes/QuotePreview"
import SingleQuote from "../../components/quotes/SingleQuote"
import GenerateButton from "../../components/ui/GenerateButton"
import QuotesImage from "../../components/ui/QuotesImage"
import Search from "../../components/ui/Search"
import { myData } from "./api/hello/data"

async function Page() {
  const vanasonad = myData.getAll();

    return (
    <div> 
      <GenerateButton array={vanasonad}/>
      <Search />
      <QuotesImage />
      <div style={{maxWidth: "70%", margin: "auto", my: 8}}>
        <ul>
          {vanasonad.map((item) => (
            <QuotePreview 
            key={item.id}
            id={item.id}
            text={item.text}
            author={item.author}
            slug={item.slug}
            />
          ))}
        </ul>
      </div>
    </div>
  )

  
}



export default Page

//      <GenerateButton slug={randomQuote.slug} array={vanasonad}/>