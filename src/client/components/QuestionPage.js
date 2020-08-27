import React from 'react';

const QuestionPage = () => {
    return (
        <div>
            <h1>Question 1</h1>
            <form>
                <input type="radio" id="A" name="choice" defaultChecked/>
                <label htmlFor="A">Choice A</label>
                <input type="radio" id="B" name="choice"/>
                <label htmlFor="B">Choice B</label>
                <input type="radio" id="C" name="choice"/>
                <label htmlFor="C">Choice C</label>
            </form>
        </div>
    );
};

export default QuestionPage;