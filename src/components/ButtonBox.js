import react from 'react';
import Button from './Button';
import './ButtonBox.css';


function ButtonBox({children}) {
    return (
        <div className="buttonBox">
            {children}
        </div>

    )
}

export default ButtonBox;