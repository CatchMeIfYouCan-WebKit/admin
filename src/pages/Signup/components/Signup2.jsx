import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Signup.css';
import SignupBody from './SignupBody2';

export default function Signup2() {
    const navigate = useNavigate();
    const location = useLocation();
    const vetData = location.state;
    const [fadeOut, setFadeOut] = useState(false);

    console.log('[Signup2] 전달받은 데이터:', vetData);

    const goBack = () => {
        setFadeOut(true);
        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    return (
        <div className={`signup-container ${fadeOut ? 'fade-out' : ''}`}>
            <header className="signup-header">
                <button className="back-button" onClick={goBack}>
                    <IoIosArrowBack />
                </button>
                <h1>회원가입</h1>
            </header>

            <SignupBody vetData={vetData} />
        </div>
    );
}
