import React from 'react';
import notfound from './../../assets/images/404.png';

const Notfound = () => {
    return (
        <div>
            <img className='w-100 py-5 my-5' src={notfound} alt="" />
        </div>
    );
};

export default Notfound;