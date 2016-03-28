
import React from 'react';
import NoteCreator from "./noteCreator";
import Notes from './notes';
import mokeData from './mock_data';


 export default class App extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: mokeData
        };
    }

    componentDidMount () {
        let self = this;

        window.ee.addListener('noteDidAdd', (item) => {
            self.state.notes.push(item);
            self.setState({
                notes: self.state.notes
            });
        });

    }

    componentWillUnmount () {
        window.ee.removeListener('noteDidAdd');
    }


    render () {
         return (
            <div className = "app">
                <h1>Notes</h1>
                <NoteCreator/>
                <Notes notes = {this.state.notes}/>
            </div>
        );
    }
}