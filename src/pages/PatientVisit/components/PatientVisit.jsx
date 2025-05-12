// src/pages/PatientVist/components/PatientVisit.jsx
import React, { useState } from 'react';
import '../PatientVisit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export default function PatientVisit() {
    const [tab, setTab] = useState('reservation');

    return (
        <div className="visit-container">
            <header className="visit-header">
                <h2>환자 예약 및 진료</h2>
                <FontAwesomeIcon icon={faBell} className="header-bell" />
            </header>

            <div className="visit-tabs">
                <button className={tab === 'reservation' ? 'active' : ''} onClick={() => setTab('reservation')}>
                    예약관리
                </button>
                <button className={tab === 'records' ? 'active' : ''} onClick={() => setTab('records')}>
                    진료목록
                </button>
            </div>

            <div className="visit-content">
                {tab === 'reservation' ? (
                    <div className="reservation-tab">
                        <div className="reservation-header">
                            <label>
                                <input type="checkbox" /> 전체선택
                            </label>
                        </div>

                        <div className="reservation-date">2025.05.09</div>
                        <div className="reservation-card">
                            <label>
                                <input type="checkbox" />
                            </label>
                            <div className="reservation-info">
                                <div>환자명: 이명재</div>
                                <div>방문 목적: 예방접종</div>
                                <div>진료 일시: 10:00</div>
                                <div>진료 방식: 대면</div>
                            </div>
                            <div className="reservation-status green">수락대기</div>
                            <div className="reservation-action">예약취소</div>
                        </div>

                        <div className="reservation-card">
                            <label>
                                <input type="checkbox" />
                            </label>
                            <div className="reservation-info">
                                <div>환자명: 이명재</div>
                                <div>방문 목적: 예방접종</div>
                                <div>진료 일시: 11:30</div>
                                <div>진료 방식: 대면</div>
                            </div>
                            <div className="reservation-status dark">예약완료</div>
                            <div className="reservation-action">예약취소</div>
                        </div>

                        <div className="reservation-date">2025.05.10</div>
                        <div className="reservation-card cancelled">
                            <label>
                                <input type="checkbox" />
                            </label>
                            <div className="reservation-info">
                                <div>환자명: 이명재</div>
                                <div>방문 목적: 예방접종</div>
                                <div>진료 일시: 25.06.25 10:00</div>
                                <div>진료 방식: 대면</div>
                            </div>
                            <div className="reservation-status red">예약취소</div>
                            <div className="reservation-action">취소사유</div>
                        </div>

                        <button className="submit-btn">예약수락</button>
                    </div>
                ) : (
                    <div className="records-tab">
                        <div className="records-date">2025.06.12 (금)</div>

                        <div className="record-box">
                            <div className="record-time">
                                첫 번째 진료 09:00 <span className="tag green">진료중</span>
                            </div>
                            <div className="record-type">비대면진료</div>
                            <div>환자명 김형규</div>
                            <div>보호자명 김형규</div>
                            <div>방문목적 예방접종</div>
                            <div className="record-detail">상세보기</div>
                            <button className="chart-btn">차트 작성하기</button>
                        </div>

                        <div className="record-box">
                            <div className="record-time">
                                두 번째 진료 10:00 <span className="tag dark">진료완료</span>
                            </div>
                            <div className="record-type">대면진료</div>
                            <div>환자명 김형규</div>
                            <div>보호자명 김형규</div>
                            <div>방문목적 예방접종</div>
                            <div className="record-detail">상세보기</div>
                            <button className="chart-btn disabled">차트 작성하기</button>
                        </div>

                        <div className="record-box">
                            <div className="record-time">
                                세 번째 진료 11:30 <span className="tag red">진료취소</span>
                            </div>
                            <div className="record-type">대면진료</div>
                            <div>환자명 김형규</div>
                            <div>보호자명 김형규</div>
                            <div>방문목적 예방접종</div>
                            <div className="record-detail">상세보기</div>
                            <button className="chart-btn disabled">차트 작성하기</button>
                        </div>

                        <div className="record-box">
                            <div className="record-time">
                                네 번째 진료 16:00 <span className="tag green">진료대기</span>{' '}
                                <span className="tag">진료시작</span>
                            </div>
                            <div className="record-type">비대면진료</div>
                            <div>환자명 김형규</div>
                            <div>보호자명 김형규</div>
                            <div>방문목적 예방접종</div>
                            <div className="record-detail">상세보기</div>
                            <button className="chart-btn disabled">차트 작성하기</button>
                        </div>

                        <div className="record-box">
                            <div className="record-time">
                                네 번째 진료 16:00 <span className="tag gray">진료예정</span>
                            </div>
                            <div className="record-type">비대면진료</div>
                            <div>환자명 김형규</div>
                            <div>보호자명 김형규</div>
                            <div>방문목적 예방접종</div>
                            <div className="record-detail">상세보기</div>
                            <button className="chart-btn disabled">차트 작성하기</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
