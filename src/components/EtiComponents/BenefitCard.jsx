import React from 'react';
import PropTypes from 'prop-types';

const BenefitCard = ({ index, img, title, department, checked, handleCheck }) => {
  return (
    <div
      className={
        'box-border flex h-20 w-full items-center gap-2 rounded-xl p-4 outline   ' +
        (checked ? 'outline-2 outline-violet-soft' : ' outline-1 outline-light-200 ')
      }
    >
      <img
        className="h-12 w-12 rounded-xl 
      object-cover"
        src={img}
        alt=""
      />
      <div>
        <h6 className="font-medium text-violet-dark">{title}</h6>
        <p className="text-xs font-normal text-light-700">{department}</p>
      </div>
      <label className="ml-auto cursor-pointer pl-1">
        <div className="relative">
          <input
            type="checkbox"
            className="peer hidden"
            checked={checked}
            onChange={(e) => handleCheck(index, e.target.checked)}
          />
          <div className="h-[14px] w-[22px] rounded-full  border-2  border-light-400 bg-white transition duration-300 ease-in-out peer-checked:border-violet-soft peer-checked:bg-violet-soft  "></div>
          <div className="absolute inset-y-0 top-1 left-[3.5px] h-1.5 w-1.5 rounded-full bg-light-400 shadow transition duration-300 ease-in-out peer-checked:translate-x-2 peer-checked:bg-white"></div>
        </div>
      </label>
    </div>
  );
};

export default BenefitCard;

BenefitCard.propTypes = {
  index: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  department: PropTypes.string,
  checked: PropTypes.bool,
  handleCheck: PropTypes.func,
};
