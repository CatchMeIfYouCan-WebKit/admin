import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Main.css';

export default function Main() {
    const navigate = useNavigate();

    return (
        <div
            className="main-page"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
            <button onClick={() => navigate('/somewhere')} className="main-button">
                메인 버튼
            </button>
        </div>
    );
}
