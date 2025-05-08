// SignupBody.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCamera } from 'react-icons/ai';

export default function SignupBody() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwConfirm, setUserPwConfirm] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [licenseImage, setLicenseImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pwConfirmMessage, setPwConfirmMessage] = useState('');
    const [nickMessage, setNickMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');

    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!isFormValid) return;

        try {
            const response = await fetch('/api/member/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    loginId: userId,
                    password: userPw,
                    nickname,
                    phone,
                }),
            });

            const result = await response.json();
            if (response.ok && result.body.rsltCode === '0000') {
                navigate('/successsignup');
            } else {
                alert(result.body.rsltMsg || '회원가입 실패');
            }
        } catch (error) {
            console.error('회원가입 에러:', error);
            alert('오류 발생');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLicenseImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        if (userId.trim() === '') {
            setIdMessage('');
            return;
        }
        const timer = setTimeout(async () => {
            try {
                const res = await fetch('/api/member/duplicate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ loginId: userId }),
                });

                const result = await res.json();
                const { rsltCode, rsltMsg, dupYn } = result.body;
                if (rsltCode === '0000' && dupYn === 'N') {
                    setIdMessage('사용 가능한 아이디입니다.');
                } else if (rsltCode === '2002' && dupYn === 'Y') {
                    setIdMessage('중복된 아이디입니다.');
                } else {
                    setIdMessage(rsltMsg || '아이디 확인 실패');
                }
            } catch {
                setIdMessage('서버 오류');
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [userId]);

    useEffect(() => {
        if (userPw.trim() === '') {
            setPwMessage('');
            return;
        }
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        setPwMessage(pwRegex.test(userPw) ? '' : '영문, 숫자, 특수문자 포함 8자 이상 입력하세요.');
    }, [userPw]);

    useEffect(() => {
        if (userPwConfirm.trim() === '') {
            setPwConfirmMessage('');
            return;
        }
        setPwConfirmMessage(userPw === userPwConfirm ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
    }, [userPw, userPwConfirm]);

    useEffect(() => {
        if (nickname.trim() === '') {
            setNickMessage('');
            return;
        }
        const timer = setTimeout(async () => {
            try {
                const res = await fetch('/api/member/duplicate/nickname', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nickname }),
                });

                const result = await res.json();
                const { rsltCode, rsltMsg, dupYn } = result.body;
                if (rsltCode === '0000' && dupYn === 'N') {
                    setNickMessage('사용 가능한 닉네임입니다.');
                } else if (rsltCode === '2002' && dupYn === 'Y') {
                    setNickMessage('중복된 닉네임입니다.');
                } else {
                    setNickMessage(rsltMsg || '닉네임 확인 실패');
                }
            } catch {
                setNickMessage('서버 오류');
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [nickname]);

    useEffect(() => {
        const phoneRegex = /^010\d{8}$/;
        setPhoneMessage(
            phone.trim() === ''
                ? ''
                : phoneRegex.test(phone)
                ? '올바른 형식입니다.'
                : '010으로 시작하는 11자리 숫자를 입력하세요.'
        );
    }, [phone]);

    const isFormValid =
        idMessage === '사용 가능한 아이디입니다.' &&
        pwMessage === '' &&
        pwConfirmMessage === '비밀번호가 일치합니다.' &&
        nickMessage === '사용 가능한 닉네임입니다.';

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
                {idMessage && <p className={idMessage.includes('사용 가능') ? 'success' : 'error'}>{idMessage}</p>}
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
                {pwConfirmMessage && (
                    <p className={pwConfirmMessage.includes('일치') ? 'success' : 'error'}>{pwConfirmMessage}</p>
                )}
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
                <label>동물병원 등록</label>
                <input type="text" placeholder="동물병원 입력" />
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

            <button className="next-button" onClick={handleSignup} disabled={!isFormValid}>
                다음
            </button>
        </div>
    );
}
