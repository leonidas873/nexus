import React from 'react';
import {
  benefit1photo,
  benefit2photo,
  benefit3photo,
  benefit4photo,
  benefit5photo,
  benefit6photo,
} from '../../Assets/images';
import { useState } from 'react';
import { BenefitCard, Lines, EmployeeCard } from 'components/EtiComponents';
import './Figma.css';

const Eti = () => {
  const [data, setDataa] = useState(costumData);
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

  const handleCheck = (benefitIndex, checked) => {
    const updatedData = [...data];
    updatedData[activeTypeIndex].benefits[benefitIndex].checked = checked;
    setDataa(updatedData);
  };

  const generateBenefits = (side) => {
    const startIndex = side == 'left' ? 0 : 3;
    const slicedData = data[activeTypeIndex].benefits.slice(startIndex, startIndex + 3);

    return slicedData.map((el, index) => (
      <BenefitCard
        key={el.id}
        {...el}
        index={index + startIndex}
        handleCheck={handleCheck}
      />
    ));
  };

  return (
    <div>
      <div className="mb-20 flex items-center justify-center gap-2">
        {data.map((el, index) => (
          <div
            key={el.id}
            className={
              'cursor-pointer rounded-xl border-2 border-light-200 px-[15px] py-[9.5px] text-xs font-bold leading-relaxed' +
              (activeTypeIndex === index
                ? ' border-transparent bg-violet-soft text-white'
                : '')
            }
            onClick={() => setActiveTypeIndex(index)}
          >
            {el.title}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-5 px-6 md:flex-row md:gap-0">
        <div className="hidden w-full min-w-[230px]  max-w-[280px] flex-col gap-5 md:flex">
          {generateBenefits('left')}
        </div>
        <Lines direction={'left'} benefits={data[activeTypeIndex].benefits} />
        <EmployeeCard />
        <Lines direction={'right'} benefits={data[activeTypeIndex].benefits} />
        <div className="hidden w-full min-w-[230px]  max-w-[280px] flex-col gap-5 md:flex">
          {generateBenefits('right')}
        </div>

        <div className="flex w-full max-w-sm flex-col gap-2.5 md:hidden">
          {generateBenefits('left')}
          {generateBenefits('right')}
        </div>
      </div>
    </div>
  );
};

export default Eti;

const costumData = [
  {
    id: 1,
    title: 'Small Business',
    benefits: [
      {
        id: 1,
        title: 'Sapling',
        department: 'Hr Management',
        checked: false,
        img: benefit1photo,
      },
      {
        id: 2,
        title: 'Workday',
        department: 'HR Management',
        checked: false,
        img: benefit2photo,
      },
      {
        id: 3,
        title: 'Xero',
        department: 'Employers Base',
        checked: false,
        img: benefit3photo,
      },
      {
        id: 4,
        title: 'Rippling',
        department: 'Salary Management',
        checked: true,
        img: benefit4photo,
      },
      {
        id: 5,
        title: 'Expensify',
        department: 'HR Management',
        checked: false,
        img: benefit5photo,
      },
      {
        id: 6,
        title: 'Zenefits',
        department: 'HR Management',
        checked: false,
        img: benefit6photo,
      },
    ],
  },
  {
    id: 2,
    title: 'Medium Buisness',
    benefits: [
      {
        id: 1,
        title: 'Sapling',
        department: 'Hr Management',
        checked: false,
        img: benefit1photo,
      },
      {
        id: 2,
        title: 'Workday',
        department: 'HR Management',
        checked: false,
        img: benefit2photo,
      },
      {
        id: 3,
        title: 'Xero',
        department: 'Employers Base',
        checked: false,
        img: benefit3photo,
      },
      {
        id: 4,
        title: 'Rippling',
        department: 'Salary Management',
        checked: true,
        img: benefit4photo,
      },
      {
        id: 5,
        title: 'Expensify',
        department: 'HR Management',
        checked: false,
        img: benefit5photo,
      },
      {
        id: 6,
        title: 'Zenefits',
        department: 'HR Management',
        checked: false,
        img: benefit6photo,
      },
    ],
  },
  {
    id: 3,
    title: 'Enterprise',
    benefits: [
      {
        id: 1,
        title: 'Sapling',
        department: 'Hr Management',
        checked: false,
        img: benefit1photo,
      },
      {
        id: 2,
        title: 'Workday',
        department: 'HR Management',
        checked: false,
        img: benefit2photo,
      },
      {
        id: 3,
        title: 'Xero',
        department: 'Employers Base',
        checked: false,
        img: benefit3photo,
      },
      {
        id: 4,
        title: 'Rippling',
        department: 'Salary Management',
        checked: false,
        img: benefit4photo,
      },
      {
        id: 5,
        title: 'Expensify',
        department: 'HR Management',
        checked: false,
        img: benefit5photo,
      },
      {
        id: 6,
        title: 'Zenefits',
        department: 'HR Management',
        checked: true,
        img: benefit6photo,
      },
    ],
  },
];
