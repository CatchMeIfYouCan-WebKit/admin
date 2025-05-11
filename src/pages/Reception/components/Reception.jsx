import React from 'react';
import '../Reception.css';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Reception() {
    return (
        <div className="reception-container">
            <header className="reception-header">
                <h1>환자 접수</h1>
                <div className="reception-icons">
                    <FontAwesomeIcon icon={faBell} className="bell-icon" />
                </div>
            </header>

            <div className="reception-date">2025.04.12 (금)</div>

            {/* 접수 카드 1 */}
            <div className="reception-card">
                <div className="reception-card-header">
                    <span className="reception-time">첫 번째 진료 09:00</span>
                    <div className="reception-status-group">
                        <span className="status-badge scheduled">진료예정</span>
                        <span className="status-badge no-show">노쇼처리</span>
                    </div>
                    <span className="reception-method">비대면진료</span>
                </div>

                <div className="reception-info">
                    <div>보호자명: 김하루</div>
                    <div>반려동물: 댕댕구</div>
                    <div>방문목적: 백신접종</div>
                </div>

                <button className="btn-done active">접수 완료</button>
            </div>

            {/* 접수 카드 2 */}
            <div className="reception-card">
                <div className="reception-card-header">
                    <span className="reception-time">첫 번째 진료 09:00</span>
                    <div className="reception-status-group">
                        <span className="status-badge scheduled">진료대기</span>
                    </div>
                    <span className="reception-method">비대면진료</span>
                </div>

                <div className="reception-info">
                    <div>보호자명: 김하루</div>
                    <div>반려동물: 댕댕구</div>
                    <div>방문목적: 백신접종</div>
                </div>

                <button className="btn-done inactive">접수 완료</button>
            </div>
        </div>
    );
}
