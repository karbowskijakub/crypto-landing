
import Navbar from'../organisms/Navbar/Navbar'
import Footer from '../organisms/Footer/Footer'
const MainTemplate = ({children}) => {
  return (
    <>
    <Navbar/>
   {children}
   <Footer/>
    </>
  )
}

export default MainTemplate