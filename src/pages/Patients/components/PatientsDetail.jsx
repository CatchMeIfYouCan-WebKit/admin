// src/pages/Patients/components/PatientsDetail.jsx
import React from 'react';
import '../PatientsDetail.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { IoIosArrowBack } from 'react-icons/io';

export default function PatientsDetail() {
    const navigate = useNavigate();

    return (
        <div className="patients-detail-container">
            <header className="patients-detail-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={24} />
                </button>
                <h2>환자 상세 정보</h2>
                <FontAwesomeIcon icon={faUser} size="lg" />
            </header>

            <section className="profile-section">
                <h3>프로필 정보</h3>
                <p className="patient-name">이수완</p>
                <div className="info-row">
                    <span className="label">강아지 품종</span>
                    <span>비숑</span>
                </div>
                <div className="info-row">
                    <span className="label">성별</span>
                    <span>남아</span>
                </div>
                <div className="info-row">
                    <span className="label">중성화 여부</span>
                    <span>O</span>
                </div>
                <div className="info-row">
                    <span className="label">생년월일</span>
                    <span>2025-01-24</span>
                </div>
                <div className="info-row">
                    <span className="label">몸무게</span>
                    <span>4.29kg</span>
                </div>
                <div className="info-row">
                    <span className="label">동물인증번호</span>
                    <span>KR-000-000-00000</span>
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
