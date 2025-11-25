import React from 'react';
import PropTypes from 'prop-types';

const Times = ({time}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#6047EC] border border-[#6047EC] rounded-lg py-5 px-12 bg-[#6047EC1A]">
        Total Time: {time}
      </h1>
    </div>
  );
};

Times.propTypes = {
  
};

export default Times;