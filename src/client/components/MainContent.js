import React, {useState} from "react";
import QuestionPage from "./QuestionPage";

const MainContent = (props) => {
    const [started, setStarted] = useState(false);

    if (!started) {
        return (
            <div>
                <h1 className="logo">Survey Sharks</h1>
                <h4 className="motto">A motto or something of the sort.</h4>
                <button className="start" onClick={()=> setStarted(!started)}>Get Started</button>
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