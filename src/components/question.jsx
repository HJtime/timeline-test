import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <span className='question'>
                {this.props.question}
            </span>
        );
    }
}

export default Question;