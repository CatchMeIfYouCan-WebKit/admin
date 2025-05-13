import React, { useState } from 'react';
import '../Patients.css';
import Footer from '../../../shared/Footer/Footer';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Search from '../../../assets/search.svg';

export default function Patients() {
    const navigate = useNavigate();

    const allPatients = Array(6).fill({
        name: '이명재',
        guardian: '이명재',
        visits: 2,
        recentDate: '25.06.25 10:00',
    });

    const [search, setSearch] = useState('');

    const filteredPatients = allPatients.filter((p) => p.name.includes(search) || p.guardian.includes(search));

    return (
        <div className="patients-container">
            <header className="patients-header">
                <h1>환자 관리</h1>
                <div className="header-icons">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                </div>
            </header>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="환자명 및 보호자명으로 검색"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img src={Search} alt="search" className="search-icon" />
            </div>

            <div className="patient-list">
                {filteredPatients.length > 0 ? (
                    filteredPatients.map((p, idx) => (
                        <div className="patient-card" key={idx}>
                            <div className="info-row2">
                                <div className="label">환자명</div>
                                <div className="patient-namelist">{p.name}</div>
                            </div>
                            <div className="info-row2">
                                <div className="label">보호자명</div>
                                <div className="patient-namelist">{p.guardian}</div>
                            </div>
                            <div className="info-row2">
                                <div className="label">방문 횟수</div>
                                <div className="patient-namelist">{p.visits}회</div>
                            </div>
                            <div className="info-row2">
                                <div className="label">최근진료일</div>
                                <div className="patient-namelist">{p.recentDate}</div>
                            </div>
                            <button className="detail-button" onClick={() => navigate('/main/patients/detail')}>
                                상세보기
                            </button>
                        </div>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', color: '#999', padding: '20px 0' }}>검색 결과가 없습니다.</div>
                )}
            </div>

            <Footer />
        </div>
    );
}
