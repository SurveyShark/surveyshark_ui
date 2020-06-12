import React, {useState} from "react";
import QuestionPage from "./QuestionPage";

const MainContent = (props) => {
    const [started, setStarted] = useState(false);

    if (!started) {
        return (
            <div>
                <button onClick={()=> setStarted(!started)}>Get Started</button>
            </div>
        );
    }
    else {
        return (
            <QuestionPage />
        );
    }
};

export default MainContent;