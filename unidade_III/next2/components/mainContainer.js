import Footer from './footer'
import Navbar from './navBar'

export default function MainContainer({children}){
    return (
        <>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}