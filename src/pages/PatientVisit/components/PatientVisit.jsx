// src/pages/PatientVist/components/PatientVisit.jsx
import React, { useState, useEffect } from 'react';
import '../PatientVisit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../assets/downarrow.svg';
export default function PatientVisit() {
    const [tab, setTab] = useState('reservation');
    const [showDateList, setShowDateList] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [dateOptions, setDateOptions] = useState([]);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // 뒤로 가기
    };

    useEffect(() => {
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const today = new Date();
        const options = [];

        for (let i = 0; i <= 5; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);

            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const dd = String(date.getDate()).padStart(2, '0');
            const day = days[date.getDay()];

            options.push(`${yyyy}.${mm}.${dd} (${day})`);
        }

        setDateOptions(options);
        setSelectedDate(options[0]); // 오늘 날짜로 설정
    }, []);

    const toggleDateList = () => {
        setShowDateList((prev) => !prev);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setShowDateList(false);
    };
    return (
        <div className="visit-container">
            <header className="visit-header">
                <button className="back-button3" onClick={goBack}>
                    <IoIosArrowBack />
                </button>
                <h1 className="visit-title2">환자 예약 및 진료</h1>

                <FontAwesomeIcon icon={faBell} className="header-bell2" />
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
                        {/* 예약관리 기존 내용 유지 */}
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
                        <div className="date-selector-wrapper">
                            <div className="reception-date2" onClick={toggleDateList}>
                                {selectedDate}
                                <img src={arrow} alt="화살표" className="down-arrow-icon" />
                            </div>

                            {showDateList && (
                                <ul className="date-dropdown">
                                    {dateOptions.map((date, index) => (
                                        <li key={index} onClick={() => handleDateSelect(date)}>
                                            {date}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* 진료 카드 1 */}
                        <div className="reception-card">
                            <div className="reception-card-header">
                                <span className="reception-time">첫 번째 진료 09:00</span>
                                <div className="reception-status-group">
                                    <span className="status in-progress">진료중</span>
                                </div>
                                <span className="reception-method">비대면진료</span>
                            </div>
                            <div className="reception-info">
                                <div className="reception-info-item">
                                    <span className="reception-info-label">환자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">보호자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">방문목적</span>
                                    <span className="reception-info-value">예방접종</span>
                                    <span className="detail-link">상세보기</span> {/* ✅ 추가 */}
                                </div>
                            </div>
                            <button className="btn-done active">차트 작성하기</button>
                        </div>

                        {/* 진료 카드 2 */}
                        <div className="reception-card">
                            <div className="reception-card-header">
                                <span className="reception-time">두 번째 진료 10:00</span>
                                <div className="reception-status-group">
                                    <span className="status completed">진료완료</span>
                                    <span className="status cancelled">진료취소</span>
                                </div>
                                <span className="reception-method">대면진료</span>
                            </div>
                            <div className="reception-info">
                                <div className="reception-info-item">
                                    <span className="reception-info-label">환자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">보호자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">방문목적</span>
                                    <span className="reception-info-value">예방접종</span>
                                    <span className="detail-link">상세보기</span> {/* ✅ 추가 */}
                                </div>
                            </div>
                            <button className="btn-done inactive">차트 작성완료</button>
                        </div>

                        {/* 진료 카드 3 */}
                        <div className="reception-card">
                            <div className="reception-card-header">
                                <span className="reception-time">세 번째 진료 11:30</span>
                                <div className="reception-status-group">
                                    <span className="status waiting">진료대기</span>
                                    <span className="status started">진료시작</span>
                                </div>
                                <span className="reception-method">대면진료</span>
                            </div>
                            <div className="reception-info">
                                <div className="reception-info-item">
                                    <span className="reception-info-label">환자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">보호자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">방문목적</span>
                                    <span className="reception-info-value">예방접종</span>
                                    <span className="detail-link">상세보기</span> {/* ✅ 추가 */}
                                </div>
                            </div>
                            <button className="btn-done inactive">차트 작성완료</button>
                        </div>

                        {/* 진료 카드 4 */}
                        <div className="reception-card">
                            <div className="reception-card-header">
                                <span className="reception-time">네 번째 진료 11:30</span>
                                <div className="reception-status-group">
                                    <span className="status scheduled">진료예정</span>
                                    <span className="status started">진료시작</span>
                                </div>
                                <span className="reception-method">대면진료</span>
                            </div>
                            <div className="reception-info">
                                <div className="reception-info-item">
                                    <span className="reception-info-label">환자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">보호자명</span>
                                    <span className="reception-info-value">김형규</span>
                                </div>
                                <div className="reception-info-item">
                                    <span className="reception-info-label">방문목적</span>
                                    <span className="reception-info-value">예방접종</span>
                                    <span className="detail-link">상세보기</span> {/* ✅ 추가 */}
                                </div>
                            </div>
                            <button className="btn-done inactive">차트 작성완료</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
