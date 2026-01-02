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
import sumisHeadshot from '@/public/images/sumisHeadshot.jpg'

export default function Founder(){
    return(
        <>
        <div className='founderAboutSection'>
            <div className='founderAboutContainer'>
                {/*Company About Image*/}
                <div className='founderImageContainer'>
                    <Image
                        src = {sumisHeadshot}
                        width={2000}
                        height={500}
                        alt = 'sumis Headshot'
                        className='sumiHeadshot'>
                    </Image>
                    <button id = "downloadResume" className={ralewayBold.className}><span id = "downloadContent"><a id = "downloadLink" href = "/SumiResume.docx"download = "SumiResume" target ="_blank">Resume</a></span></button>

                </div>
                {/*Founder About Disc*/}
                <div className='founderAboutDisc'>
                    <h2 id = "secondHeader" className = {ralewayBold.className}>Meet The Creator</h2>
                        <h1 id = "firstHeader" className = {ralewayBold.className}>SUMI VIJAY</h1>
                        <p id = "paragraphText" className = {merriweather.className}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
                        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                        Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                        Ut hendrerit semper vel class aptent taciti sociosqu. 
                        Ad litora torquent per conubia nostra inceptos himenaeos.
                        <br></br><br></br>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                        Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                        In id cursus mi pretium tellus duis convallis. 
                        Tempus leo eu aenean sed diam urna tempor. 
                        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                        Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                        Ut hendrerit semper vel class aptent taciti sociosqu. 
                        Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                    </div>
                </div>
        </div>
        
        </>
    )
}