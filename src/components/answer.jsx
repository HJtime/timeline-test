import React, { Component } from 'react';

class Answer extends Component {
    handleAnswerChange=()=>{
        this.props.onAnswerChange(this.props.numbar);
    }

    render() {
        return (
            <li onClick={this.handleAnswerChange}>
                <span className='answer-num'>{this.props.numbar}</span>
                <span className="answer">{this.props.answer}</span>
            </li>
        );
    }
}

export default Answer;