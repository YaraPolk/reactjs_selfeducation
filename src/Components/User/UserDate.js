import React from "react";

export function ChangeUserDataBan(prods, prod, setProds) {
    const copy = Object.assign([], prods);
    copy[prod.ban] = !prod.ban;
    setProds(copy);
}

export default ChangeUserDataBan;