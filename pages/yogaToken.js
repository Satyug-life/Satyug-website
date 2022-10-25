import React from 'react'
// import "./YogaToken.css";
import yogaImg from "../assets/images/DhyanaTokenBg.png";
import Modal from '../components/Modal';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import { useLocation } from 'react-router-dom';
const YogaToken = () => {
  const location = useRouter();
  

  return (
    <div >
        <Modal pathName={location.route} />
        <Image src={yogaImg} height="3000" className="yogaTokenImg" alt="yog" />
    </div>
  )
}

export default YogaToken;