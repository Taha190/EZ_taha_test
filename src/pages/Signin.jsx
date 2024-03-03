import React from "react";
import Navbar from "../components/Navbar";
import SigninForm from "../components/SigninForm";
import CommentSection from "../components/CommentSection";
import AttachmentSection from '../components/Attachments';
const attachments = [
    { id: 1, title: 'Frame6.jpg', date: 'Sep 7 at 2:42 PM' },
    // ... other attachments
  ];


function Signin() {
    return (
        <div>
             <Navbar/>
            <SigninForm/> 
            {/* <CommentSection/> */}
            {/* <AttachmentSection /> */}
        </div>
    );
}
export default Signin;