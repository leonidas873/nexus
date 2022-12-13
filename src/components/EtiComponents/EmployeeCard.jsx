import React from 'react';
import { hrAvatar } from 'Assets/images';

const EmployeeCard = () => {
  return (
    <div className="relative box-border w-full min-w-[300px] max-w-sm rounded-3xl border-2 border-violet-soft bg-purple-100 px-3.5 pb-5 pt-10 md:p-10">
      <img
        className="absolute left-1/2 top-0 h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] object-cover"
        src={hrAvatar}
        alt=""
      />
      <h5 className="mt-3.5 mb-1.5 text-center text-lg font-bold text-violet-dark">
        Lauren Robson
      </h5>
      <p className="mb-[20px] text-center text-sm font-normal text-light-700">
        HR Director
      </p>
      <p className="max-w-[300px] text-center font-normal text-violet-dark before:content-['”'] after:content-['”']">
        I want to lower PTO liability and keep my employess happy. I want to lower PTO
        liability.
      </p>
    </div>
  );
};

export default EmployeeCard;
