import Footer from '../../components/ui/Footer'
import Header from '../../components/ui/Header'
import './globals.css'

export const metadata = {
  title: 'Rahvatarkus',
  description: 'Vanasõnastik',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
