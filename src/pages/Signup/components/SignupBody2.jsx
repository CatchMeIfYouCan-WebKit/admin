import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupBody() {
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [certificate, setCertificate] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [specialty, setSpecialty] = useState('');

    const navigate = useNavigate();

    // 유효성 검사
    const isNameValid = name.trim().length >= 2;
    const isExperienceValid = /^\d+$/.test(experience);
    const isCertificateValid = certificate.trim().length >= 2;
    const isIntroductionValid = introduction.trim().length >= 10;
    const isSpecialtyValid = specialty.trim().length >= 2;

    const isFormValid =
        isNameValid && isExperienceValid && isCertificateValid && isIntroductionValid && isSpecialtyValid;

    const handleNext = () => {
        if (isFormValid) {
            navigate('/successsignup');
        }
    };

    return (
        <div className="signup-body">
            <div className="input-group">
                <label>수의사 이름</label>
                <input
                    type="text"
                    placeholder="수의사 이름 입력"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {!isNameValid && name && <p className="error">이름은 2자 이상 입력해주세요.</p>}
            </div>

            <div className="input-group">
                <label>수의사 경력 (년)</label>
                <input
                    type="text"
                    placeholder="수의사 경력 입력"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                {!isExperienceValid && experience && <p className="error">숫자만 입력해주세요.</p>}
            </div>

            <div className="input-group">
                <label>수의사 자격증 보유 여부</label>
                <input
                    type="text"
                    placeholder="예: 수의내과전문의, 영상진단전문의"
                    value={certificate}
                    onChange={(e) => setCertificate(e.target.value)}
                />
                {!isCertificateValid && certificate && <p className="error">2자 이상 입력해주세요.</p>}
            </div>

            <div className="input-group">
                <label>수의사 소개</label>
                <textarea
                    placeholder="수의사 소개 입력"
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    rows={4}
                    style={{ resize: 'none' }}
                />
                {!isIntroductionValid && introduction && <p className="error">10자 이상 입력해주세요.</p>}
            </div>

            <div className="input-group">
                <label>수의사 진료분야</label>
                <input
                    type="text"
                    placeholder="예: 고양이내과, 외과, 영상의학과"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                />
                {!isSpecialtyValid && specialty && <p className="error">2자 이상 입력해주세요.</p>}
            </div>

            <button className="next-button" onClick={handleNext} disabled={!isFormValid}>
                다음
            </button>
        </div>
    );
}
