import React from "react";
import ChangeUserDataBan from "./UserDate";
import UserField from "./UserField";
function User({prods, setProds}) {
    function addBan(id) {
        setProds(prods.map(prod => {
            if (prod.id === id) {
                prod.ban = !prod.ban;
                ChangeUserDataBan(prods, prod, setProds);
            }

            return prod;
        }));
    }

    function editMode(id, event) {

        setProds(prods.map(prod => {
            if (prod.id === id) {
                switch (event.target.name) {
                    case 'edit':
                        prod.edit = !prod.edit;
                        break;
                    case 'name':
                    case 'surname':
                    case 'age':
                        prod[event.target.name] = event.target.value;
                        break;
                    default:
                        break;
                }
            }

            return prod;
        }));
    }

    return prods.map(prod => {
        return (
            <tr key={prod.id} >
                <td>{prod.id}</td>
                <td>
                    <UserField
                        edit={prod.edit}
                        value={prod.name}
                        name={'name'}
                        editMode={editMode}
                        id={prod.id}
                    />
                </td>
                <td>
                    <UserField
                        edit={prod.edit}
                        value={prod.surname}
                        name={'surname'}
                        editMode={editMode}
                        id={prod.id}
                    />
                </td>
                <td>
                    <UserField
                        edit={prod.edit}
                        value={prod.age}
                        name={'age'}
                        editMode={editMode}
                        id={prod.id}
                    />
                </td>
                <td>{prod.ban && 'has ban'}</td>
                <td>
                    <button onClick={() => addBan(prod.id)}>ban</button>
                </td>
                <td>
                    <button name={'edit'} onClick={event => editMode(prod.id, event)}>
                        { prod.edit ? 'save' : 'edit'}
                    </button>
                </td>
            </tr>
        );
    });
}

export default User;