import React from "react";

export default class Header extends React.Component{
    state = {
        showTitle: true,
        title: "SurveyShark"
    };


    renderTitle(){
        if(this.state.showTitle){
            return <h1 className="header-title">{this.state.title}</h1>
        }
    };

    render(){
        return (
            <div className="header">
                {this.renderTitle()}
                <div className="header-menu fa fa-bars fa-2x"></div>
            </div>
        );
    };



};