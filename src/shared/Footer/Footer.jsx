import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Home from '../../assets/Home.svg';
import HomeActive from '../../assets/HomeSelect.svg';
import Chat from '../../assets/Chat.svg';
import PatientsActive from '../../assets/ChatSelect.svg';
import './Footer.css';
import profile from '../../assets/myprofile2.svg';
import profileActive from '../../assets/myprofile2Select.svg';
export default function Footer() {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { path: '/patients', label: '환자관리', icon: Chat, activeIcon: PatientsActive },
        { path: '/main', label: '홈', icon: Home, activeIcon: HomeActive },
        { path: '/mypage', label: '마이페이지', icon: profile, activeIcon: profileActive },
    ];

    return (
        <div className="Footer-container">
            <div className="Footer-wrapper">
                {navItems.map(({ path, label, icon, activeIcon }) => {
                    const isActive = currentPath === path;
                    return (
                        <Link to={path} key={label} className="Footer-item">
                            <img src={isActive ? activeIcon : icon} alt={label} className="icon" />
                            <p className={isActive ? 'active' : ''}>{label}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
