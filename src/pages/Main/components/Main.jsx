import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import '../Main.css';
import defaultImg from '../../../assets/logo2.png';
import Footer from '../../../shared/Footer/Footer';
import arrow from '../../../assets/arrow.svg';
import renew from '../../../assets/refresh.svg';

export default function Main() {
    const navigate = useNavigate();
    const [isRotating, setIsRotating] = useState(false);

    // 현재 시간 (최근 갱신용)
    const [lastUpdated, setLastUpdated] = useState(() => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });

    // 현재 날짜 (금일 기준)
    const today = new Date();
    const formattedDate = `${today.getFullYear().toString().slice(2)}.${String(today.getMonth() + 1).padStart(
        2,
        '0'
    )}.${String(today.getDate()).padStart(2, '0')}`; // 예: 25.05.13

    const handleRotate = () => {
        setIsRotating(true);
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setLastUpdated(timeString);
        setTimeout(() => setIsRotating(false), 500);
    };

    return (
        <div className="vet-main-container">
            <header className="vet-header">
                <div className="vet-logo">
                    <img src={defaultImg} alt="logo" />
                    <span>CatchVet</span>
                </div>
                <button className="vet-bell-btn"></button>
            </header>

            <main className="vet-main-content">
                <section className="vet-card">
                    <div className="vet-remote-title-container">
                        <div className="vet-remote-left">
                            <div className="vet-remote-title">비대면 진료실</div>
                            <div className="vet-remote-time">16:00 진료예정</div>
                        </div>
                        <div className="vet-remote-right">
                            <div className="vet-remote-hospital">금오공대 동물병원</div>
                            <div className="vet-remote-doctor">조진혁 수의사님</div>
                            <button className="vet-arrow">
                                <img src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="vet-card">
                    <div className="vet-card-title">
                        <div>
                            <div className="vet-title2-bold">환자 접수</div>
                            <div className="vet-title2-desc">
                                진료시작 3분전 <br />
                                내원하지 않았습니다.
                            </div>
                        </div>
                        <button className="vet-arrow2" onClick={() => navigate('/main/reception')}>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </section>

                <section className="vet-card">
                    <div className="vet-title-row">
                        <span>환자 예약 및 진료</span>
                        <span
                            className="vet-small-text"
                            onClick={() => navigate('/main/patientvisit')}
                            style={{ cursor: 'pointer' }}
                        >
                            상세보기
                        </span>
                    </div>
                    <div className="vet-subtext">금일 {formattedDate} 기준</div>
                    <div className="vet-table">
                        <div className="vet-table-row header">
                            <div>환자명</div>
                            <div>방문목적</div>
                            <div>진료일시</div>
                            <div>진료방식</div>
                        </div>
                        <div className="vet-table-row">
                            <div>초코</div>
                            <div>구토/설사</div>
                            <div>09:30</div>
                            <div>대면</div>
                        </div>
                        <div className="vet-table-row">
                            <div>초코</div>
                            <div>구토/설사</div>
                            <div>09:30</div>
                            <div>대면</div>
                        </div>
                        <div className="vet-table-row">
                            <div>초코</div>
                            <div>구토/설사</div>
                            <div>09:30</div>
                            <div>대면</div>
                        </div>
                        <div className="vet-table-row">
                            <div>초코</div>
                            <div>구토/설사</div>
                            <div>09:30</div>
                            <div>대면</div>
                        </div>
                    </div>
                </section>

                <section className="vet-card">
                    <div className="vet-title-row">
                        <span>진료현황</span>
                        <span className="vet-refresh-text-2">최근 {lastUpdated}</span>
                        <button className={`vet-refresh-btn ${isRotating ? 'rotate' : ''}`} onClick={handleRotate}>
                            <img src={renew} alt="새로고침" />
                        </button>
                    </div>
                    <div className="vet-subtext">금일 {formattedDate} 기준</div>
                    <div className="vet-status-row">
                        <div className="vet-status-box">
                            <div className="vet-status-number">8</div>
                            <div className="vet-status-label-1">총 진료</div>
                        </div>
                        <div className="vet-status-divider"></div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">3</div>
                            <div className="vet-status-label-1">비대면 진료</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">5</div>
                            <div className="vet-status-label-1">대면 진료</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">1</div>
                            <div className="vet-status-label-1">진료예정</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">5</div>
                            <div className="vet-status-label-1">진료완료</div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
