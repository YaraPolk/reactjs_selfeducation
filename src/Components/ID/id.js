import React from "react";
import { nanoid } from 'nanoid';

export function Id() {
    return nanoid(10);
}

export default Id;