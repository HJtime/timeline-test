import React, { useState } from 'react';
import Question from './question';
import Answer from './answer';
import data from "../db/qna.json"
import typedata from '../db/result.json'
import { useNavigate } from 'react-router-dom';

const Qna = () => {
    const [page, setPage]=useState(1);
    const [result, setResult]=useState({});
    const navigate=useNavigate();

    // json 파일에서 현재 page와 같은 요소들로 배열을 만듦
    const qList=data.question.filter(question=>(
        question.page===page
    ))

    const answerList=data.answer.filter(answer=>(
        answer.page===page
    ))

    // 진행바
    const progress=()=>{
        const progressbar=document.querySelector('.progressbar .bar');
        const width=progressbar.dataset.progress;

        progressbar.style.width=width+'0%';
    }

    // 답변이 클릭되면 결과(result)에 선택된 답변을 추가함
    const handleAnswerChange=(selected)=>{
        progress();
        setPage(page + 1);

        setResult(result=>{
            const updated={...result};
            updated[page]=answerList[selected-1].result;
            return updated;
        })

        // 현재 페이지 수가 문항 개수와 일치하면 result 페이지로 넘겨주는 함수를 호출
        page === 10 && changePage();
    }

    let spaceArr={};
    let max=Number.MIN_SAFE_INTEGER;
    let resultType='';

    const changePage=()=>{
        // 오브젝트로 된 결과를 전부 문자열로 바꿔준 다음
        const resultAll=Object.values(result).join();
        // 문자열로 바꿔준 값들을 배열로 만들어주는 과정
        const resultArr=resultAll.split(',');

        for(let i in resultArr){
            if(!(resultArr[i] in spaceArr)){
                spaceArr[resultArr[i]]=[];
            }
            spaceArr[resultArr[i]].push(resultArr[i]);
        }

        resultOutput();
    }

    const resultOutput=()=>{
        // 가장 많이 선택된 캐릭터를 골라내는 과정
        Object.values(spaceArr).map((item)=>{
            if(item.length>max){
                max=item.length;
                resultType=item;
            }else if(item.length===max){
                max=item.length;
                resultType=item;
            }
        })

        const typeSpace=typedata.result.filter(type=>(
            type.type===resultType[0]
        ))

        // 결과 화면에 출력돼야할 값을 전달
        navigate("/result", {state: {
            type: typeSpace[0].type,
            title: typeSpace[0].title,
            desc: typeSpace[0].desc,
            reverseImg: typeSpace[0].reverseImg,
            reverse: typeSpace[0].reverse,
            alike: typeSpace[0].alike,
            alikeImg: typeSpace[0].alikeImg
        }});
    }

    return (
        <div className='content'>
            <div className='progressbar'><div className='bar' data-progress={page}></div></div>
            {
                qList.map((question)=>(
                    <Question key={question.id} question={question.question}/>
                ))
            }
            <ul className='qna-list'>
                {
                    answerList.map((answer)=>(
                        <Answer
                            key={answer.id}
                            numbar={answer.num}
                            answer={answer.answer}
                            onAnswerChange={handleAnswerChange}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Qna;