// src/pages/Patients/components/PatientsDetail.jsx
import React from 'react';
import '../PatientsDetail.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

export default function PatientsDetail() {
    const navigate = useNavigate();

    return (
        <div className="patients-detail-container">
            <header className="patients-detail-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={24} />
                </button>
                <h2 className="detail-title">환자 상세 정보</h2>
            </header>

            <section className="profile-section">
                <h3>프로필 정보</h3>
                <p className="patient-name">이수완</p>
                <div className="info-row">
                    <div className="label">강아지 품종</div>
                    <div>비숑</div>
                </div>
                <div className="info-row">
                    <div className="label">성별</div>
                    <div>남아</div>
                </div>
                <div className="info-row">
                    <div className="label">중성화 여부</div>
                    <div>O</div>
                </div>
                <div className="info-row">
                    <div className="label">생년월일</div>
                    <div>2025-01-24</div>
                </div>
                <div className="info-row">
                    <div className="label">몸무게</div>
                    <div>4.29kg</div>
                </div>
                <div className="info-row">
                    <div className="label">동물인증번호</div>
                    <div>KR-000-000-00000</div>
                </div>
                <div className="info-row">
                    <span className="label">대면진료</span>
                    <span>1회</span>
                </div>
                <div className="info-row">
                    <span className="label">비대면진료</span>
                    <span>3회</span>
                </div>
            </section>

            <section className="chart-section">
                <h3>차트 정보</h3>
                <label className="file-upload">
                    <input type="file" />
                    <span>파일 선택</span>
                    <span className="upload-icon">📎</span>
                </label>
            </section>
        </div>
    );
}
