import React from "react";

function UserField({edit, value, name, editMode, id}) {
    return edit
    ? <input value={value} name={name} onChange={event => editMode(id, event)}/>
    : <span>{value}</span>;
}

export default UserField;