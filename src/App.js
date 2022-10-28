import './App.css';
import {useState} from "react";
import uuid from "react-uuid";

function id() {
    return uuid();
}

const initNotes = [
    {
        id: id(),
        name: 'name1',
        desc: 'long description 1'
    },
    {
        id: id(),
        name: 'name2',
        desc: 'long description 2'
    },
    {
        id: id(),
        name: 'name3',
        desc: 'long description 3'
    },
];

function App() {
    const [notes, setNotes] = useState(initNotes);

    const result = notes.map(note => {
        return <p key={note.id}>{note.name}, {note.desc}</p>;
    })

    return (
        <>
            {result}
        </>
    );
}

export default App;
