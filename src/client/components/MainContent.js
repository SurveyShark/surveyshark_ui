import React, {useState} from "react";

const MainContent = () => {
    const buttonText = useState("Get Started");
    
    return (
        <div className="main">
            <button>{buttonText}</button>
        </div>
    );

};

export default MainContent;