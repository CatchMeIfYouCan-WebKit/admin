// src/pages/VetMain/VetMain.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import '../Main.css';
import defaultImg from '../../../assets/logo2.png';
import Footer from '../../../shared/Footer/Footer';
import arrow from '../../../assets/arrow.svg';
import renew from '../../../assets/new.svg';

export default function VetMain() {
    return (
        <div className="vet-main-container">
            <header className="vet-header">
                <div className="vet-logo">
                    <img src={defaultImg} alt="logo" />
                    <span>CatchVet</span>
                </div>
                <button className="vet-bell-btn">
                    <FontAwesomeIcon icon={faBell} />
                </button>
            </header>

            <main className="vet-main-content">
                <section className="vet-card">
                    <div className="vet-card-title">
                        <div>
                            <div className="vet-title-bold">비대면 진료실</div>
                            <div className="vet-title-desc">늦지않게 입장해주세요!</div>

                            <div className="vet-title-sub">16:00 진료예정</div>
                        </div>
                        <button className="vet-arrow">
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </section>

                <section className="vet-card">
                    <div className="vet-title-row">
                        <span>환자 예약 및 진료</span>
                        <span className="vet-small-text">상세보기</span>
                    </div>
                    <div className="vet-subtext">금일 25.05.08 기준</div>
                    <div className="vet-table">
                        <div className="vet-table-row header">
                            <div>보호자</div>
                            <div>환자</div>
                            <div>종류</div>
                            <div>진료기록</div>
                            <div>진료시간</div>
                        </div>
                        <div className="vet-table-row">
                            <div>김철수</div>
                            <div>초코</div>
                            <div>강아지</div>
                            <div>O</div>
                            <div>09:30</div>
                        </div>
                        <div className="vet-table-row">
                            <div>이지은</div>
                            <div>나비</div>
                            <div>고양이</div>
                            <div>-</div>
                            <div>10:00</div>
                        </div>
                        <div className="vet-table-row">
                            <div>이지은</div>
                            <div>나비</div>
                            <div>고양이</div>
                            <div>-</div>
                            <div>10:00</div>
                        </div>
                    </div>
                </section>

                <section className="vet-card">
                    <div className="vet-title-row">
                        <span>비대면 진료현황</span>
                        <span className="vet-refresh-text-1">최근 15:32</span>
                        <button className="vet-refresh-btn">
                            <img src={renew} alt="새로고침" />
                        </button>
                    </div>
                    <div className="vet-subtext">금일 25.05.08 기준</div>
                    <div className="vet-status-row">
                        <div className="vet-status-box">
                            <div className="vet-status-number">8</div>
                            <div className="vet-status-label-1">총 진료</div>
                        </div>
                        <div className="vet-status-divider"></div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">3</div>
                            <div className="vet-status-label-1">진료예정</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">5</div>
                            <div className="vet-status-label-1">진료완료</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">1</div>
                            <div className="vet-status-label-1">예약변경</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">5</div>
                            <div className="vet-status-label-2">
                                진료 기록
                                <br />
                                작성 대기
                            </div>
                        </div>
                    </div>
                </section>

                <section className="vet-card">
                    <div className="vet-title-row">
                        <span>대면 진료현황</span>
                        <span className="vet-refresh-text-2">최근 15:32</span>
                        <button className="vet-refresh-btn">
                            <img src={renew} alt="새로고침" />
                        </button>
                    </div>
                    <div className="vet-subtext">금일 25.05.08 기준</div>
                    <div className="vet-status-row">
                        <div className="vet-status-box">
                            <div className="vet-status-number">8</div>
                            <div className="vet-status-label-1">총 진료</div>
                        </div>
                        <div className="vet-status-divider"></div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">3</div>
                            <div className="vet-status-label-1">진료예정</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">5</div>
                            <div className="vet-status-label-1">진료완료</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">1</div>
                            <div className="vet-status-label-1">예약변경</div>
                        </div>
                        <div className="vet-status-box">
                            <div className="vet-status-number">5</div>
                            <div className="vet-status-label-2">
                                진료 기록
                                <br />
                                작성 대기
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
