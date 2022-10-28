import './App.css';
import {useState} from "react";
import uuid from "react-uuid";

function id() {
    return uuid();
}

const initProds = [
    {
        id: id(),
        name: 'prod1',
        cost: 'cost1',
        desc: 'long description 1',
        showDesc: false,
        comm: 'my super comment 1',
        showComm: false,
    },
    {
        id: id(),
        name: 'prod2',
        cost: 'cost2',
        desc: 'long description 2',
        showDesc: false,
        comm: 'my super comment 2',
        showComm: false,
    },
    {
        id: id(),
        name: 'prod3',
        cost: 'cost3',
        desc: 'long description 3',
        showDesc: false,
        comm: 'my super comment 3',
        showComm: false,
    },
];

function App() {
    const [prods, setProds] = useState(initProds);

    function show(event, id) {
        console.log(event.target.className);

        setProds(prods.map(prod => {
            if (prod.id !== id){
                return prod;
            } else if (event.target.className === 'desc') {
                return {...prod, showDesc: !prod.showDesc};
            } else {
                return {...prod, showComm: !prod.showComm};
            }
        }))
    }

    const result = prods.map(prod => {
        return (
            <>
                <ul key={prod.id}>
                    <li>name: {prod.name}</li>
                    <li>cost: {prod.cost}</li>
                    {prod.showDesc && <li>{prod.desc}</li>}
                    {prod.showComm && <li>{prod.comm}</li>}
                </ul>
                <div>
                    <button onClick={event => show(event, prod.id)} className={"desc"}>
                        {prod.showDesc ? "hide desc" : "show desc"}
                    </button>
                    <button onClick={event => show(event, prod.id)} className={"comm"}>
                        {prod.showComm ? "hide comm" : "show comm"}
                    </button>
                </div>
            </>
        );
        });

    return (
        <>
            {result}
        </>
    );
}

export default App;
