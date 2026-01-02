/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const raleway = Raleway({
subsets: ["latin"], weight: "600"
})
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const merriweather = Merriweather({
    subsets: ["latin"], weight: "300"
})
/*Images*/
import Image from 'next/image';
import heroImage from '@/public/images/heroImage.jpg'

export default function Hero(){
    return(
        <div>
            <div id = "heroSection">
            <div className='heroContainer'>
                {/*Hero Image*/}
                <div className='heroImageContainer'>
                    <Image
                        src = {heroImage}
                        width={1000}
                        height={100}
                        alt = 'Headshot of Serenity'
                        className='heroImage'>
                    </Image>
                </div>
                {/* Introduction*/}
                <div className='titleContainer'>
                <div className = 'title'>
                    <h3 id ='firstPartTitle' className={ralewayBold.className}>THE IDEA? IT'S SIMPLE: </h3>
                    <h3 id ='secondPartTitle' className={ralewayBold.className}>HAPPY PEOPLE, BETTER BUSINESS.</h3>
                {/* Disc*/}
                <p id = "heroDisc" className={merriweather.className}> Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                    Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                    In id cursus mi pretium tellus duis convallis. </p>
                {/*Button*/}
                 <button /* onMouseEnter = {enableUnderline()} */ id = "helpButton" className={ralewayBold.className}><span id = "helpContent"><a id = "helpLink">Let Us Help</a></span></button>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}