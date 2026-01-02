/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const merriweather = Merriweather({
    subsets: ["latin"], weight: "300"
})
/*Images*/
import Image from 'next/image';

export default function Blog(){
    return(
        <>
        <div className='blogSection'>
            <div className='blogContainer'>
                <div className='blogTitle'>
                <h2 id = "secondHeader" className = {ralewayBold.className}>GET THE BEHIND THE SCENES</h2>
                <h1 id = "firstHeader" className = {ralewayBold.className}>LATEST NEWS</h1>
                    <p id = "paragraphText" className = {merriweather.className}>
                        Ut hendrerit semper vel class aptent taciti sociosqu. 
                        Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                </div>

            <div className='blogPostContainer'>
                <h2 id = "blogComingSoon" className={ralewayBold.className}>(Content coming soon...)</h2>
            </div>
            
            </div>
        </div>
        </>
    )
}