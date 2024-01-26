import React, { useState } from "react";
import Context from "./Context";
export default function NoteContext({ children }) {
    const [sun,setsun]=useState(0);
    const value={sun,setsun};
    return <Context.Provider value={value}>{children}</Context.Provider>;
}