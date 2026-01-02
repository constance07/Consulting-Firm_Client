/*Functionality Imports */
import {useState} from 'react'
import { Resend } from 'resend';
/*Styled Imports*/
import '../globals.css';
import { Raleway, Merriweather } from 'next/font/google';
const ralewayBold = Raleway({
    subsets: ["latin"], weight: "800"
})
const raleway = Raleway({
    subsets: ["latin"], weight: "400"
})
const ralewaySemiBold = Raleway({
    subsets: ["latin"], weight: "700"
})
/*Images*/
import Image from 'next/image';

{/*General Imports*/}
import { ToastContainer, toast } from 'react-toastify';

export default function Contact(){
    
   {/*Empty Form*/}
    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    {/*Update Input Value*/}
    const handleChange = (event: any) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    {/*Send to personal Email*/}
    const handleSubmit = async(event:any) => {
        {/*Dont let field be empty*/}
        event.preventDefault();

        {/* Grab HTML Elements */}
        const nameError = document.getElementById("nameError") as HTMLElement;
        const emailError = document.getElementById("emailError") as HTMLElement;
        const messageError = document.getElementById("messageError") as HTMLElement;

        {/*Valid Email*/}
        const emailErrorB = document.getElementById("inputB") as HTMLInputElement; 
        const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

        if(!formData.name || !emailErrorB.value.match(validEmail) || !formData.message){
            {/*If field is not valid, add error */}
            if(!formData.name) {nameError.innerHTML = "* Please insert your name."};
            if(!emailErrorB.value.match(validEmail)){emailError.innerHTML = "* Please insert a valid email."}
            if(!formData.message){ messageError.innerHTML = "* Please type your message."};

            {/*If field is now valid, remove error */}
            if(formData.name) {nameError.innerHTML = ""};
            if(emailErrorB.value.match(validEmail)){emailError.innerHTML = ""};
            if(formData.message){messageError.innerHTML = ""};

            toast.error('Please check all input fields.');
            return false;
        }

        {/*Make sure all errors are removed*/}
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        messageError.innerHTML = "";

        {/*Var: Check if Emaili-in-Box* - Fill in with API Key*/}
        const resend = new Resend('re_xxxxxxxxx');
        try{
            const emailSent = await resend.emails.get(
            '37e4414c-5e25-4dbc-a071-43552a4bd53b',
            )
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({...formData}),
            });
            setFormData(initialFormData);
            toast.success("Email was sent sucessfully!");
         }catch(error:any){
        /*Email Error !*/
            toast.error('Oops, looks like something went wrong ', error);
        }};

    return(
        <div className='section' id = "contactSection">
                <div className='contactContainer'>
                {/*Title*/}
                <div id = "contactTitle" className= {ralewayBold.className}>
                    <div id = 'contactTextA1' className={raleway.className}>Say <span id = "contactTextA2" className={ralewayBold.className}>
                        Hello!</span> </div> 
                    <div id = 'contactTextB1' className={raleway.className}>Tell me about how I can help <span id = "contactTextB2" className={ralewayBold.className}>You.</span></div>
                </div>
                    
                {/*Form*/}
                <div className = "">
                    <form name = "conctactForm" onSubmit = {handleSubmit} className='form' >
                        <fieldset className='formField'>
                            <h2 id='formSubTitles' className = {ralewayBold.className} >NAME</h2>
                            <div className = {ralewayBold.className} id = "nameError"></div>
                                <input 
                                className= {raleway.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                placeholder='Full Name'
                                value = {formData.name}
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {ralewayBold.className}>EMAIL</h2>
                            <div className = {ralewayBold.className} id = "emailError"></div>
                                <input  
                                className= {raleway.className} 
                                id='inputB'
                                type = 'text' 
                                name = 'email'
                                placeholder='Email Address'
                                value = {formData.email} 
                                onChange={handleChange}/>


                            <h2 id='formSubTitles' className = {ralewayBold.className}>MESSAGE</h2>
                            <div className = {ralewayBold.className} id = "messageError"></div>
                            <textarea  
                                className= {raleway.className} 
                                id='textArea' 
                                name = 'message' 
                                placeholder='Message'
                                value = {formData.message} 
                                onChange={handleChange}>
                            </textarea>

                        </fieldset>
                            <button id = "submit" className={ralewaySemiBold.className}>
                               Send
                            </button>
                            <div className= {ralewayBold.className} >
                                <ToastContainer/>
                            </div >
                    </form>
                </div>
            </div>
        </div>
    )
}
