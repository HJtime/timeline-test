import React from 'react';
import { useNavigate } from 'react-router-dom';
import Result from './result';

const Main=()=>{
    const navigate=useNavigate();

    return (
        <div className='main-content'>
            <span className="main-sub-ttl">탐라에서 나는 어떤 캐릭터일까?</span>
            <h2 className='main-ttl'>탐캐 테스트</h2>
            <div className="main-img">
                <img src="./images/influencer.png" alt="main img" />
            </div>
            <button className='btn-start' onClick={()=>{
                navigate('/qna');
            }}>테스트하기<i className="fas fa-long-arrow-alt-right"></i></button>
        </div>
    );
}

export default Main;