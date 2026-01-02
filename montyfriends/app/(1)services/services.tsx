/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const raleway = Raleway({
    subsets: ["latin"], weight: "400"
})
const ralewaySemiBold = Raleway({
    subsets: ["latin"], weight: "700"
})
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const merriweather = Merriweather({
    subsets: ["latin"], weight: "300"
})

/*Images*/
import Image from 'next/image';
import serviceImage from '@/public/images/serviceImage.jpg';

export default function Hero(){
    return(
        <div>
            <div id = "serviceSection">
            <div className='serviceContainer'>
                {/* Introduction*/}
                <div className='serviceTitleContainer'>
                <div className = 'serviceTitle'>
                    <h3 id ='firstPartTitleB' className={ralewayBold.className}>WORK THAT WORKS</h3>
                    <h3 id ='secondPartTitleB' className={ralewayBold.className}>Our Services</h3>
                {/* Disc*/}
                <p id = "serviceDisc" className={merriweather.className}>Ut hendrerit semper vel class aptent taciti sociosqu. 
                    Ad litora torquent per conubia nostra inceptos himenaeos. </p>
                {/*Service Image*/}
                <div className='serviceImageContainer'>
                    <Image
                        src = {serviceImage}
                        width={1000}
                        height={100}
                        alt = 'Stock Photo of Service'
                        id='serviceImage'>
                    </Image>
                </div>
                </div>
                </div>
                {/*Service Cards*/}
                <div className='cardServiceSet'>
                    <div id = "card1" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Operations Optimization</p>
                        <p id ="serviceCardDisc" className={raleway.className}>Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card2" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Guest Experience Design</p>
                        <p id ="serviceCardDisc" className={raleway.className}>Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card3" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Staff Training & Support</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card4" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Financial Analysis</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card5" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>PIPs & Capital Planning</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a> */}
                    </div>
                    <div id = "card6" className='cardServices'>
                        <p id ="serviceCardTitle" className={ralewayBold.className}>Marketing Growth</p>
                        <p id ="serviceCardDisc" className={raleway.className}>
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas
                        </p>
                        {/* <a id = "projectLink" className={ralewaySemiBold.className}>View Project</a>  */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}