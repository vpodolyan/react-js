import React from 'react';
import ReactDOM from 'react-dom';

export default class NoteCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTitleEmpty: true,
            isShortDescriptionEmpty: true,
            isTextEmpty: true
        };

        this.addNote = this.addNote.bind(this); 
    }

    getCreatingNode () {
        return {
            title: ReactDOM.findDOMNode(this.refs.creatingTitle),
            shortDescription: ReactDOM.findDOMNode(this.refs.creatingDescription),
            text: ReactDOM.findDOMNode(this.refs.creatingText)
        };

    }

    getNewNoteFromCreatorNode (noteNode) {  
        let newNote = {};

        for (let key in noteNode) {
            newNote[key] = noteNode[key].value;
        }

        return newNote;
    }

    clearNewNoteForm (creatingNode) {
        for (let key in creatingNode) {
            creatingNode[key].value = '';
        }
    }

    resetCreatorSettings () {
        let defaultSettings = {};

        for(let key in this.state) {
            defaultSettings[key] = true;
        }

        this.setState(defaultSettings);
    }


    addNote (event) {
        event.preventDefault();

        const creatingNode = this.getCreatingNode();
        const newNote = this.getNewNoteFromCreatorNode(creatingNode);

        window.ee.emit('noteDidAdd',newNote);

        let newState = {};

        this.clearNewNoteForm(creatingNode);
        this.resetCreatorSettings();
    }

    fieldWillChanged (fieldName, event) {
        let isEmpty = !(event.target.value.trim().length > 0);
        this.setState({
            ['' + fieldName]: isEmpty
        });
    }

    render () {
        const isTitleEmpty = this.state.isTitleEmpty,
              isTextEmpty = this.state.isTextEmpty,
              isShortDescriptionEmpty = this.state.isShortDescriptionEmpty;

         return (
            <form className = "note-creater">
                <div className = "note-creater-title">
                    <input className = "input"
                           placeholder = "Enter text"
                           onChange = {this.fieldWillChanged.bind(this,'isTitleEmpty')}
                           ref = "creatingTitle"
                    />
                </div>

                <div className = "note-creater-short-description">
                    <input className = "input"
                           onChange = {this.fieldWillChanged.bind(this,'isShortDescriptionEmpty')} 
                           placeholder = "Enter text"
                           ref = "creatingDescription"
                    />
                </div>
                
                <div className = "note-creater-text">
                    <textarea className = "input"
                              onChange = {this.fieldWillChanged.bind(this,'isTextEmpty')}  
                              placeholder = "Enter text"
                              ref = "creatingText"
                    ></textarea>
                </div>
                
                <button className = "button" 
                        onClick = {this.addNote}
                        disabled = {isTitleEmpty || isShortDescriptionEmpty || isTextEmpty }
                        >add note
                </button>

            </form>       
        );
    }
}
