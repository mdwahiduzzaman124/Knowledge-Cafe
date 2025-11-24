import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div className='flex items-center justify-around'>
      <h2 className='text-[40px] font-bold my-12'>Knowledge Cafe</h2>
      <div>
        <img src="../../../images/profile.png" alt="" />
      </div>
    </div>
  );
};

Header.propTypes = {
  
};

export default Header;