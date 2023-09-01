import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import '../src/footer.css';

function Footer() {
  return (
      <div className='footer'>
        <div className='socialMediaIcons'>
          <a href='https://www.instagram.com/'>
            <CiInstagram />
          </a>
          <a href='https://www.facebook.com/'>
            <CiFacebook />
          </a>
          <a href='https://tiktok.com/'>
            <RiTiktokLine />
          </a>
          </div>
          <p><GrLocation /> Bulevar Mihajla Pupina 10z, NP, lokal 6 </p>
    </div>
  )
}

export default Footer