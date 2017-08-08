import React from 'react';

function Content({children, statusMenu}) {
    return (
        <div className={`container${statusMenu ? ' site__nav--hide' : ''}`}>
            {children}
        </div>
    );
}

export default Content;