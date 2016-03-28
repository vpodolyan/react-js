import React from 'react';
import Note from './note';

export default  class Notes extends React.Component {

    render () {
        const notes = this.props.notes.map((item, index) => 
            <Note key = {index} note = {item} />
        );

        const templateNote = notes.length ? notes : <p> Нету ничего </p>

        return (
            <div className = "notes">
                {templateNote}
            </div>
        );
    }
}

    Notes.propTypes =  {
        notes: React.PropTypes.array.isRequired
    };

