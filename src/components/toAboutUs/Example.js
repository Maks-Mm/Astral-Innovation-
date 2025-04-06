import React, { useState } from 'react';
import './Example.css';

function Example() {
    const [active, setActive] = useState(false);

    return (
        <div className="">
            <div 
                className={`twoPhoto ${active ? 'active' : ''}`} 
                onMouseEnter={() => setActive(true)} 
                onMouseLeave={() => setActive(false)}
            >
                <div className="holoLayer firstPhoto"></div>
                <div className="holoLayer threePhoto"></div>
                <div className="holoLayer fourPhoto"></div>
                <div className="holoLayer fivePhoto"></div>
            </div>
        </div>
    );
}

export default Example;
