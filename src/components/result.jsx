import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon} from "react-share";

const Result = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const result=location.state;

    const currentUrl = "https://hjtime.github.io/timeline-test-site";

    return (
        <div className='result'>
            <h3>탐라에서의 나는?</h3>
            <div className='content'>
                <img src={'./images/'+result.type+'.png'} className='result-img' alt="결과 이미지"/>
                <span className='result-tit'>{result.title}</span>
                <p className="result-desc">{result.desc}</p>
                <div className="result-friend">
                    <span className="tit">나와 반대인 캐릭터</span>
                    <img src={'./images/'+result.reverseImg+'.png'} className='img' alt="결과 반대 캐릭터 이미지"/>
                    <span className="name">{result.reverse}</span>
                    <span className="tit alike">나와 잘 맞는 캐릭터</span>
                    <img src={'./images/'+result.alikeImg+'.png'} className='img' alt="결과 비슷한 캐릭터 이미지"/>
                    <span className="name">{result.alike}</span>
                </div>

                <div className='result-share'>
                    <TwitterShareButton url={currentUrl} title={"탐캐 테스트 - 탐라에서의 나는 '"+result.title+"'"}>
                        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                    </TwitterShareButton>
                    <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                    </FacebookShareButton>
                </div>
            </div>

            <button className='btn-start restart' onClick={()=>{
                navigate('/qna');
            }}>다시하기<i className="fas fa-redo-alt"></i></button>

            <div className='hjtime-info'>
                <a href="https://blog.naver.com/hj_time/222614981685" target="_blank">
                    <i className="fas fa-book"></i>
                    개발일기 보기
                </a>
                <a href="https://github.com/HJtime/timeline-test" target="_blank">
                    <i className="fab fa-github"></i>
                    개발자 깃허브 바로가기
                </a>
            </div>

            <span className="twitter">twitter - @hjtime86</span>
        </div>
    );
};

export default Result;