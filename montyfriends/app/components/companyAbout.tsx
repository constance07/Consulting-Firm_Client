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
import companyAbout from '@/public/images/companyAbout.jpg'

export default function CompanyAbout(){
    return(
        <>
            <div id = "companyAboutSection">
                <div className='companyAboutSection'>
                    <div className='companyAboutTitle'>
                        {/*Title*/}
                        <h2 id = "secondHeader" className = {ralewayBold.className}>MEASURABLE GROWTH</h2>
                        <h1 id = "firstHeader" className = {ralewayBold.className}>We Make Smart Decisions.</h1>
                        {/*Disc*/}
                        <p id = "paragraphText" className = {merriweather.className}>Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                            In id cursus mi pretium tellus duis convallis.</p>
                    </div>

                    {/*Statistics*/}
                    <div className='companyAbtStats'>
                        <div id = "stat1" className = {ralewayBold.className}>
                            <p className='statNumbers'>125</p><p className = "statMoney">k</p><br></br>
                            <span className='statDisc'>Capital Improvements Delivered</span>
                        </div>
                        <div id = "stat2" className = {ralewayBold.className}>
                            <p className='statNumbers'>20</p><p className = "statPercent">%</p><br></br>
                            <span className='statDisc'>Off-Season Occupancy Increase</span>
                        </div>
                        <div id = "stat3" className = {ralewayBold.className}>
                            <p className='statNumbers'>25</p><p className = "statPercent">%</p><br></br>
                            <span className='paragraphText'>Monthly Profit Growth</span>
                        </div>
                    </div>
                    
                    {/*Qoute*/}
                    <div className ='companyAbtQoute'>
                        <div id = "qoutations1"  className={ralewayBold.className}>"</div>
                        <h2 id = "qouteContent" className={ralewayBold.className}> 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                            aculis massa nisl malesuada lacinia integer nunc posuere.
                        </h2>
                        <div id = "qoutations2" className={ralewayBold.className}>"</div>
                    </div>
                    
                    {/*About*/}

                    <div className='companyAboutDisc'>
                        {/*Company About Image*/}
                        <div className='compAbtImgContainer'>
                            <Image
                                src = {companyAbout}
                                width={1000}
                                height={500}
                                alt = 'Company Stock Photo'
                                className='compAbtImg'>
                            </Image>
                        </div>
                        
                        {/*Company About Disc*/}
                        <div className='companyAboutDiscContent'>
                            <h2 id = "secondHeader" className = {ralewayBold.className}>WHAT DRIVES US</h2>
                            <h1 id = "firstHeader" className = {ralewayBold.className}>About The Company</h1>
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
                                Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}