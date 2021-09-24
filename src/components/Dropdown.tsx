import React, { useState, useEffect } from 'react';

export default function Dropdown(props: any) {

    const [open, setOpen] = useState<string>('');

    console.log(props);
    console.log(typeof (props));

    return (
        <div>
            <button className="toggle-button">Toggle</button>
            <div className={open}>
            </div>
        </div>
    );
}
