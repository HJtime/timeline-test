import React from 'react';
import { useNavigate } from 'react-router-dom';
import Result from './result';

const Main=()=>{
    const navigate=useNavigate();

    return (
        <>
            <div className='count'>
                <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhjtime.github.io%2Ftimeline-test%2F&count_bg=%23BF2A29&title_bg=%233B3B3B&icon=github.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false"/></a>
            </div>
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
        </>
    );
}

export default Main;