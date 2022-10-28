import './App.css';
import {useState} from "react";

function App() {
    const [value, setValue] = useState('hello someone');
    const [isEdit, setIsEdit] = useState(false);

    let elem = !isEdit ? <p>{value}</p> : <input type="text" value={value} onChange={event => setValue(event.target.value)} />;

    function change(event){
        if (event.target.innerText === 'edit'){
            setIsEdit(true);
        } else {
            setIsEdit(false);
        }
    }

    return (
        <>
            {elem}
            <button onClick={event => change(event)}>edit</button>
            <button onClick={event => change(event)}>show</button>
        </>
    );
}

export default App;
