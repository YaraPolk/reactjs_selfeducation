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
        desc: 'long description 1',
        show: false,
    },
    {
        id: id(),
        name: 'name2',
        desc: 'long description 2',
        show: false,
    },
    {
        id: id(),
        name: 'name3',
        desc: 'long description 3',
        show: false,
    },
];

function App() {
    const [notes, setNotes] = useState(initNotes);

    function showDesc(id) {
        setNotes(notes.map(note => {
            if (note.id !== id) {
                return note;
            } else {
                return {...note, show: !note.show};
            }
        }))
    }

    const result = notes.map(note => {
        return <p key={note.id}>
            {note.name}, {note.show && note.desc}
            <button onClick={() => showDesc(note.id)}>{note.show ? "hide" : "show"}</button>
        </p>;
    })

    return (
        <>
            {result}
        </>
    );
}

export default App;
