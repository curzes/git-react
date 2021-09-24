import React, { useState } from 'react';

export default function Dropdown() {

    const [open, setOpen] = useState('open');


    return (
        <div>
            <button className="toggle-button">Toggle</button>
            <div className={open}>
            </div>
        </div>
    );
}
