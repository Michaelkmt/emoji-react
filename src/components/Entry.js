import React  from "react";

export class Entry extends React.Component {

    render(){
        return(
            <div className="term">

                <div className="dt">
                    <span className="emoji">{this.props.emojiImg}</span>
                    <span className="emoji">{this.props.emojiName}</span>
                </div>
                <div className="dd"></div>
                <span className="emoji">{this.props.emojiMeaning}</span>
            </div>
        )
    }

} 

