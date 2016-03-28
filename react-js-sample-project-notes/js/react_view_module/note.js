
import React from 'react';
import Slyder from './slyder';

export default  class Note extends React.Component {

    render () {

        const title = this.props.note.title,
            shortDescription = this.props.note.shortDescription,
            text = this.props.note.text;

        return (
            <div className = "note">
                <p className = "title">{title}</p>
                <p className = "shortDescription">{shortDescription}</p>
                <Slyder data = {text}/>
            </div>
        );   
    }
    
}

   Note.propTypes =  {
        note: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            shortDescription: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired       
        })       
    };