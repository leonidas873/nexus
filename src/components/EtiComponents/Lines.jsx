import React from 'react';
import PropTypes from 'prop-types';

const Lines = ({ direction, benefits }) => {
  const checkHighlited = (lineInd) => {
    let res = ' border-purple-300';
    if (direction === 'left') {
      if (benefits[lineInd].checked) {
        res = ' border-violet-soft z-20';
      }
    } else if (direction === 'right') {
      if (benefits[3 + lineInd].checked) {
        res = ' border-violet-soft z-20';
      }
    }
    return res;
  };

  return (
    <div
      className={`${
        direction == 'right' ? '-scale-x-100 scale-y-100' : ''
      } hidden min-w-[40px] md:block md:max-w-[120px] md:flex-1`}
    >
      <div className="relative">
        <div className="flex h-[101px] flex-col">
          <div className="flex flex-1 text-white">
            <div
              className={
                'flex-1 rounded-tr-xl border-0 border-t-2 border-r-2  ' +
                checkHighlited(0)
              }
            ></div>
            <div className="flex-1">2</div>
          </div>
          <div className="flex flex-1 text-white">
            <div className="flex-1"></div>
            <div
              className={
                'flex-1 rounded-bl-xl border-0 border-b-2 border-l-2  ' +
                checkHighlited(0)
              }
            ></div>
          </div>
        </div>
        <div
          className={
            'border-1 absolute bottom-0 box-border h-0.5 w-full border ' +
            checkHighlited(1)
          }
        ></div>
      </div>
      <div className="relative">
        <div className="mt-[-2px] flex h-[101px] flex-col">
          <div className="flex flex-1 text-white">
            <div className="flex-1"></div>
            <div
              className={
                'flex-1 rounded-tl-xl border-0 border-t-2 border-l-2' + checkHighlited(2)
              }
            >
              1
            </div>
          </div>

          <div className="flex flex-1 text-white">
            <div
              className={
                'flex-1 rounded-br-xl border-0 border-b-2  border-r-2 ' +
                checkHighlited(2)
              }
            ></div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lines;

Lines.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      department: PropTypes.string,
      checked: PropTypes.bool,
      img: PropTypes.string,
    })
  ),
};
