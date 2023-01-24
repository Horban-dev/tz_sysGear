import React from 'react';

const Button = ({convert}) => {
    return (
        <div>
            <button onClick={convert} type="button" class="btn btn-outline-secondary">Result</button>
        </div>
    );
};

export default Button;