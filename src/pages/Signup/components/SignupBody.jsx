// SignupBody.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCamera } from 'react-icons/ai';
import axios from 'axios';

export default function SignupBody() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwConfirm, setUserPwConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [previewUrl, setPreviewUrl] = useState(null);

    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pwConfirmMessage, setPwConfirmMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');

    const navigate = useNavigate();

    let isImageUploadPopupOpen = false;

    // ===== 사진 업로드 =====
    const handleImageUpload = () => {
        if (isImageUploadPopupOpen) {
            console.log('[이미지 업로드] 팝업이 이미 열려있습니다.');
            return;
        }

        console.log('[이미지 업로드] 팝업 열기');
        isImageUploadPopupOpen = true;

        M.pop.alert({
            title: '사진 업로드',
            message: '원하는 방법을 선택하세요.',
            buttons: ['촬영하기', '취소', '앨범에서 선택'],
            callback: function (index) {
                console.log(`[이미지 업로드] 선택된 옵션 index: ${index}`);
                isImageUploadPopupOpen = false;

                switch (parseInt(index, 10)) {
                    case 0:
                        openCamera();
                        break;
                    case 1:
                        console.log('[이미지 업로드] 취소 선택');
                        break;
                    case 2:
                        openGallery();
                        break;
                    default:
                        console.log('[이미지 업로드] 알 수 없는 선택지');
                }
            },
        });
    };

    const openCamera = () => {
        console.log('[이미지 업로드] 카메라 열기');
        M.media.camera({ path: '/media', mediaType: 'PHOTO', saveAlbum: true, callback: handleResult });
    };

    const openGallery = () => {
        console.log('[이미지 업로드] 앨범 열기');
        M.media.picker({ mode: 'SINGLE', mediaType: 'ALL', path: '/media', column: 3, callback: handleResult });
    };

    const handleResult = (status, result) => {
        console.log(`[이미지 업로드] 선택 결과 status: ${status}, result:`, result);
        if (status !== 'SUCCESS' || !result.path) {
            alert('사진 선택 실패');
            return;
        }
        uploadImage(result.fullpath || result.path);
    };

    const uploadImage = (localPath) => {
        console.log(`[이미지 업로드] 업로드 시작: ${localPath}`);

        M.net.http.upload({
            url: `http://${window.location.hostname}:8080/api/vet/image-upload`,
            method: 'POST',
            body: [{ name: 'file', content: localPath, type: 'FILE' }],
            indicator: false,
            finish: (status, header, body) => {
                console.log(`[이미지 업로드] 업로드 완료, status: ${status}, body: ${body}`);
                const result = JSON.parse(body);
                setPreviewUrl(`http://${window.location.hostname}:8080${result.photoPath}`);
            },
        });
    };

    // 간단화된 활성화 조건
    const phoneValid = /^010\d{8}$/.test(phone);

    const isFormValid =
        idMessage === '사용 가능한 아이디입니다.' &&
        pwMessage === '' &&
        pwConfirmMessage === '비밀번호가 일치합니다.' &&
        phoneMessage === '올바른 형식입니다.';

    const handleNext = () => {
        if (!isFormValid) return;

        const vetData = {
            loginId: userId,
            password: userPw,
            licenseNumber: licenseNumber,
            licenseImageUrl: previewUrl,
            phone: phone,
        };

        console.log('[회원가입] 다음 페이지로 데이터 전달:', vetData);
        navigate('/signup2', { state: vetData });
    };

    // 아이디 중복 검사 (모의)
    useEffect(() => {
        if (!userId.trim()) {
            setIdMessage('');
            return;
        }

        const timer = setTimeout(async () => {
            try {
                const res = await axios.get('/api/vet/check-id', { params: { loginId: userId } });
                setIdMessage(res.data.exists ? '중복된 아이디입니다.' : '사용 가능한 아이디입니다.');
            } catch (e) {
                console.error('아이디 중복 확인 실패:', e);
                setIdMessage('중복 확인 실패');
            }
        }, 100);

        return () => clearTimeout(timer);
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
                <input
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    placeholder="면허번호 입력"
                />
            </div>

            <div className="input-group">
                <label>면허증 사진 업로드</label>
                <div className="photo-upload">
                    <button type="button" onClick={handleImageUpload}>
                        <label htmlFor="license-upload">
                            {previewUrl ? (
                                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                                    <img src={previewUrl} alt="미리보기" className="photo-preview" />
                                    <button
                                        type="button"
                                        className="photo-remove-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            setPreviewUrl(null);
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: '4px',
                                            right: '4px',
                                            background: 'rgba(0,0,0,0.5)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ) : (
                                <AiOutlineCamera className="camera-icon" />
                            )}
                        </label>
                    </button>
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
