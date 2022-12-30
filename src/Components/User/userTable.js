import React, {useState} from "react";
import User from "./User";
import Id from "../ID/id";

const users = [
    {id: Id(), name: 'user1', surname: 'surn1', age: 30, ban: false, edit: false},
    {id: Id(), name: 'user2', surname: 'surn2', age: 31, ban: false, edit: false},
    {id: Id(), name: 'user3', surname: 'surn3', age: 32, ban: false, edit: false},
];

function UserTable() {
    const [prods, setProds] = useState(users);

    return <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surn</th>
                    <th>Age</th>
                    <th>Ban</th>
                </tr>
            </thead>
            <tbody>
                <User prods={prods} setProds={setProds}/>
            </tbody>
            <tfoot/>
        </table>
    </>;
}

export default UserTable;