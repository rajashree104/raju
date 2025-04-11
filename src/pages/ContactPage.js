import React from 'react'
import { MainLayout, InnerLayout } from '../style/Layouts'
import styled from 'styled-components'
import Title from '../components/Title'
import PrimaryButton from "../components/PrimaryButton"
import Contactitem from "../components/ContactItem"

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function ContactPage() {

  const phone = <FaPhoneAlt />
  const mail = <MdEmail />
  const location = <FaLocationDot />
  return (
    <MainLayout>
      <Title title={'Contact'} span={"contact"} />
      <ContactPagestyled>
        <InnerLayout className={"contact-section"}>
          <div className='left-content'>
            <div className='contact-title'>
              <h4>Get In Touch</h4>
            </div>
            <form className='form'>
              <div className='form-field'>
                <label htmlFor='name'>Enter Your name*</label>
                <input type='text' id='name' />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Enter Your email*</label>
                <input type='email' id='email' />
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Enter Your subject*</label>
                <input type='subject' id='subject' />
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Enter Your Message</label>
                <textarea name="textarea" id="textarea" cols="20" rows="5"></textarea>
              </div>
              <div className='form-field f-button'>
                <PrimaryButton title={"SEND EMIL"} />
              </div>
            </form>
          </div>


          <div className='right-content'>
            <Contactitem title={'Phone'} icon={phone} contact1={'+99-98765432'} contact2={'0987655432'} />
            <Contactitem title={'Email'} icon={mail} contact1={'rajashreesahoo@gmail.com'} contact2={'mamunidona@gmail.com'} />
            <Contactitem title={'Address'} icon={location} contact1={'27 cuttack'} contact2={'50 bbsr'} />

          </div>

        </InnerLayout>
      </ContactPagestyled>
    </MainLayout>
  )
}

const ContactPagestyled = styled.section`

.contact-section{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 2rem;
  @media screen and (max-width:900px) {
    grid-template-columns: repeat(1,1fr);
    .f-button{
      margin-bottom: 2rem;
    }

}
  .right-content{
    display: grid;
    grid-template-columns:repeat(1, 1fr) ;
    @media screen and (max-width:600px) {
width: 70%     
  }
  }
  .contact-title{
    h4{
      color:var(--white-color) ;
      padding: 1rem 0;
      font-size: 1.8rem;
    }
  }
  .form{
    width: 100%;
    @media screen and (max-width:800px) {
width: 100%     
  }
    .form-field{
      margin-top:2rem ;
      position: relative;
      width: 100%;
      label{
         position: absolute;
         left: 20px;
         top: -19px;
         display: inline-block;
         background-color: var(--background-dark-color);
         padding: 0 .5rem ;
         color: inherit;
      }
      input{
        border: 1px solid var(--border-color);
        outline: none;
        background: transparent;
        height:50px;
        padding: 0 15px;
        width: 100%;
      }
      textarea{
        background-color: transparent;
        border: 1px solid var(--border-color);
        outline: none;
        color: inherit;
        width: 100%;
        padding: .8rem 1rem;
      }
    }
   
  }
}

`;
export default ContactPage

