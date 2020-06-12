import React from 'react';

const QuestionPage = () => {
    return (
        <div>
            <h1>Question 1</h1>
            <form>
                <input type="radio" id="A" />
                <label htmlFor="A">Choice A</label>
                <input type="radio" id="B" />
                <label htmlFor="B">Choice B</label>
                <input type="radio" id="C" />
                <label htmlFor="C">Choice C</label>
            </form>
        </div>
    );
};

export default QuestionPage;