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

    const qList=data.question.filter(question=>(
        question.page===page
    ))

    const answerList=data.answer.filter(answer=>(
        answer.page===page
    ))

    const progress=()=>{
        const progressbar=document.querySelector('.progressbar .bar');
        const width=progressbar.dataset.progress;

        progressbar.style.width=width+'0%';
    }

    const handleAnswerChange=(selected)=>{
        progress();
        setPage(page + 1);

        setResult(result=>{
            const updated={...result};
            updated[page]=answerList[selected-1].result;
            return updated;
        })

        page === 10 && changePage();
    }

    let spaceArr={};
    let max=Number.MIN_SAFE_INTEGER;
    let resultType='';

    const changePage=()=>{
        const resultAll=Object.values(result).join();
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