// src/pages/Patients/components/PatientsDetail.jsx
import React from 'react';
import '../PatientsDetail.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import clip from '../../../assets/clip.svg';

export default function PatientsDetail() {
    const navigate = useNavigate();

    return (
        <div className="patients-detail-container2">
            <header className="patients-detail-header2">
                <button className="back-button4" onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={24} />
                </button>
                <h2 className="detail-title2">환자 상세 정보</h2>
            </header>

            <section className="profile-section2">
                <h3>프로필 정보</h3>
                <p className="patient-name">김초코</p>
                <div className="info-row3">
                    <div className="label2">강아지 품종</div>
                    <div className="name">비숑</div>
                </div>
                <div className="info-row3">
                    <div className="label2">성별</div>
                    <div className="name">남아</div>
                </div>
                <div className="info-row3">
                    <div className="label2">중성화 여부</div>
                    <div className="name">O</div>
                </div>
                <div className="info-row3">
                    <div className="label2">생년월일</div>
                    <div className="name">2025-01-24</div>
                </div>
                <div className="info-row3">
                    <div className="label2">몸무게</div>
                    <div className="name">4.29kg</div>
                </div>
                <div className="info-row3">
                    <div className="label2">동물인증번호</div>
                    <div className="name">KR-000-000-00000</div>
                </div>
                <div className="info-row3">
                    <div className="label2">보호자명</div>
                    <div className="name">한민규</div>
                </div>
                <div className="info-row3">
                    <div className="label2">대면진료</div>
                    <div className="name">1회</div>
                </div>
                <div className="info-row3">
                    <div className="label2">비대면진료</div>
                    <div className="name">3회</div>
                </div>
            </section>

            <section className="chart-section2">
                <h3>차트 정보</h3>
                <label className="file-upload2">
                    <input type="file" />
                    <span>파일 선택</span>
                    <img src={clip} alt="clip" className="upload-icon" />
                </label>
            </section>
        </div>
    );
}
