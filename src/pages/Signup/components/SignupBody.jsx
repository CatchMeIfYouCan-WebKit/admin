// SignupBody.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCamera } from 'react-icons/ai';

export default function SignupBody() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwConfirm, setUserPwConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [previewUrl, setPreviewUrl] = useState(null);

    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pwConfirmMessage, setPwConfirmMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');

    const navigate = useNavigate();

    // 사진 업로드 (미리보기)
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setPreviewUrl(URL.createObjectURL(file));
    };

    // 아이디 중복 검사 (모의)
    useEffect(() => {
        if (!userId.trim()) {
            setIdMessage('');
            return;
        }
        const t = setTimeout(() => {
            setIdMessage(userId === 'test' ? '중복된 아이디입니다.' : '사용 가능한 아이디입니다.');
        }, 300);
        return () => clearTimeout(t);
    }, [userId]);

    // 비밀번호 유효성 검사
    useEffect(() => {
        if (!userPw.trim()) {
            setPwMessage('');
            return;
        }
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
        setPwMessage(pwRegex.test(userPw) ? '' : '영문·숫자·특수문자 포함 8자 이상 입력하세요.');
    }, [userPw]);

    // 비밀번호 확인
    useEffect(() => {
        if (!userPwConfirm.trim()) {
            setPwConfirmMessage('');
            return;
        }
        setPwConfirmMessage(userPw === userPwConfirm ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
    }, [userPw, userPwConfirm]);

    // 휴대전화 유효성 검사
    useEffect(() => {
        if (!phone.trim()) {
            setPhoneMessage('');
            return;
        }
        const ok = /^010\d{8}$/.test(phone);
        setPhoneMessage(ok ? '올바른 형식입니다.' : '010으로 시작하는 11자리 숫자를 입력하세요.');
    }, [phone]);

    // 간단화된 활성화 조건
    const phoneValid = /^010\d{8}$/.test(phone);
    const isFormValid =
        idMessage === '사용 가능한 아이디입니다.' &&
        pwMessage === '' &&
        pwConfirmMessage === '비밀번호가 일치합니다.' &&
        phoneMessage === '올바른 형식입니다.';

    const handleNext = () => {
        if (isFormValid) navigate('/signup2');
    };

    return (
        <div className="signup-body">
            <div className="input-group">
                <label>아이디</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="아이디 입력"
                />
                {idMessage && <p className={idMessage.includes('사용 가능한') ? 'success' : 'error'}>{idMessage}</p>}
            </div>

            <div className="input-group">
                <label>비밀번호</label>
                <input
                    type="password"
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                    placeholder="비밀번호 입력"
                />
                {pwMessage && <p className="error">{pwMessage}</p>}
            </div>

            <div className="input-group">
                <label>비밀번호 확인</label>
                <input
                    type="password"
                    value={userPwConfirm}
                    onChange={(e) => setUserPwConfirm(e.target.value)}
                    placeholder="비밀번호 확인"
                />
                <p className={pwConfirmMessage === '비밀번호가 일치합니다.' ? 'success' : 'error'}>
                    {pwConfirmMessage}
                </p>
            </div>

            <div className="input-group">
                <label>수의사 면허번호 등록</label>
                <input type="text" placeholder="면허번호 입력" />
            </div>

            <div className="input-group">
                <label>면허증 사진 업로드</label>
                <div className="photo-upload">
                    <label htmlFor="license-upload">
                        {previewUrl ? (
                            <img src={previewUrl} alt="미리보기" className="photo-preview" />
                        ) : (
                            <AiOutlineCamera className="camera-icon" />
                        )}
                    </label>
                    <input
                        id="license-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>

            <div className="input-group">
                <label>휴대전화</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="휴대전화 입력"
                />
                {phoneMessage && (
                    <p className={phoneMessage.includes('올바른') ? 'success' : 'error'}>{phoneMessage}</p>
                )}
            </div>

            <button className="next-button" onClick={handleNext} disabled={!isFormValid}>
                다음
            </button>
        </div>
    );
}
