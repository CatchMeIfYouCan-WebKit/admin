// src/app/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 임포트
import LandingPage from '../pages/Landing/components/LandingPage';
import LoginPage from '../pages/Login/components/LoginPage';
import Signup from '../pages/Signup/components/Signup';
import SuccessSignup from '../pages/Signup/components/SuccessSignup';

import FindId from '../pages/FindId/components/FindId';
import SuccessFindId from '../pages/FindId/components/SuccessFindId';
import FailFindId from '../pages/FindId/components/FailFindId';

import SuccessFindPassword from '../pages/FindPassword/components/SuccessFindPassword';
import FailFindPassword from '../pages/FindPassword/components/FailFindPassword';
import FindPassword from '../pages/FindPassword/components/FindPassword';

import Main from '../pages/Main/components/Main';

import Reception from '../pages/Reception/components/Reception';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 기본 페이지들 */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/successsignup" element={<SuccessSignup />} />
                <Route path="/main" element={<Main />} />

                {/* 아이디 찾기 */}
                <Route path="/findid" element={<FindId />} />
                <Route path="/successfindid" element={<SuccessFindId />} />
                <Route path="/failfindid" element={<FailFindId />} />

                {/* 비밀번호 찾기 */}
                <Route path="/findpw" element={<FindPassword />} />
                <Route path="/successfindpw" element={<SuccessFindPassword />} />
                <Route path="/failfindpw" element={<FailFindPassword />} />

                {/* 환자 접수 */}
                <Route path="/main/reception" element={<Reception />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
