import {
  benefit1photo,
  benefit2photo,
  benefit3photo,
  benefit4photo,
  benefit5photo,
  benefit6photo,
  hrAvatar,
} from "../../Assets/images";
import "./Figma.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Figma = () => {
  const [data, setDataa] = useState(costumData);
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

  const handleCheck = (benefitIndex, checked) => {
    const updatedData = [...data];
    updatedData[activeTypeIndex].benefits[benefitIndex].checked = checked;
    setDataa(updatedData);
  };

  const generateBenefits = (side) => {
    const startIndex = side == "left" ? 0 : 3;
    const slicedData = data[activeTypeIndex].benefits.slice(
      startIndex,
      startIndex + 3
    );

    return slicedData.map((el, index) => (
      <Benefit
        key={el.id}
        {...el}
        index={index + startIndex}
        handleCheck={handleCheck}
      />
    ));
  };

  return (
    <div className="figma">
      <div className="figma__buisness-types">
        {data.map((el, index) => (
          <div
            key={el.id}
            className={
              "buisness-type " +
              (activeTypeIndex === index ? "buisness-type---hilighted" : "")
            }
            onClick={() => setActiveTypeIndex(index)}
          >
            {el.title}
          </div>
        ))}
      </div>
      <div className="graph">
        <div className="benefits">{generateBenefits("left")}</div>
        <LeftLines
          direction={"left"}
          benefits={data[activeTypeIndex].benefits}
        />
        <div className="graph__employee-card">
          <img className="emplpoyee-card__img" src={hrAvatar} alt="" />
          <h5 className="employee-card__name">Lauren Robson</h5>
          <p className="employee-card__occupation">HR Director</p>
          <p className="employee-card__paragraph">
            I want to lower PTO liability and keep my employess happy. I want to
            lower PTO liability.
          </p>
        </div>
        <LeftLines
          direction={"right"}
          benefits={data[activeTypeIndex].benefits}
        />
        <div className="benefits">{generateBenefits("right")}</div>

        <div className="benefits--mobile">
        {generateBenefits("left")}
        {generateBenefits("right")}
        </div>
      </div>
    </div>
  );
};

export default Figma;

const LeftLines = ({ direction, benefits }) => {
  const checkHighlited = (lineInd) => {
    let res = "";
    if (direction === "left") {
      if (benefits[lineInd].checked) {
        res = " line-highilited";
      }
    } else if (direction === "right") {
      if (benefits[3 + lineInd].checked) {
        res = " line-highilited";
      }
    }
    return res;
  };

  return (
    <div className={`lines ${direction}-lines`}>
      <div className="line-wrapper">
        <div className="line top">
          <div className="cont">
            <div className={"top-right " + checkHighlited(0)}>1</div>
            <div>2</div>
          </div>
          <div className="cont">
            <div></div>
            <div className={"lineRight " + checkHighlited(0)}>1</div>
          </div>
        </div>
        <div className={"mid-line " + checkHighlited(1)}></div>
      </div>
      <div className="line-wrapper">
        <div className="line bot">
          <div className="cont">
            <div>2</div>
            <div className={"top-left " + checkHighlited(2)}>1</div>
          </div>

          <div className="cont">
            <div className={"bottom-right " + checkHighlited(2)}>1</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefit = ({ index, img, title, department, checked, handleCheck }) => {
  return (
    <div className="benefit">
      <img className="benefit__img" src={img} alt="" />
      <div className="benefit__texts">
        <h6>{title}</h6>
        <p>{department}</p>
      </div>
      <p className="benefit__switch">
        <CostumSwitch
          checked={checked}
          onChange={(e) => handleCheck(index, e.target.checked)}
        />
      </p>
    </div>
  );
};

const CostumSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
      color: "white",
      backgroundColor:'transparent !important'
  },


  "& .MuiSwitch-switchBase": {
    padding: 2,
    color:'#A39CB5',
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "white",
      backgroundColor:'red',
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: '#9D71FD',
        color:'white',
        borderColor:'#9D71FD',
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 12,
    height: 12,
    borderRadius: 6,
    transform:'scale(0.5)',
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    border:'3px solid #A39CB5',
    opacity: 1,
    backgroundColor:'white',
    boxSizing: "border-box",
    '&.Mui-checked':{
      border:'3px solid #6ac233 !important',
    }
  },

}));

const costumData = [
  {
    id: 1,
    title: "Small Business",
    benefits: [
      {
        id: 1,
        title: "Sapling",
        department: "Hr Management",
        checked: false,
        img: benefit1photo,
      },
      {
        id: 2,
        title: "Workday",
        department: "HR Management",
        checked: false,
        img: benefit2photo,
      },
      {
        id: 3,
        title: "Xero",
        department: "Employers Base",
        checked: false,
        img: benefit3photo,
      },
      {
        id: 4,
        title: "Rippling",
        department: "Salary Management",
        checked: true,
        img: benefit4photo,
      },
      {
        id: 5,
        title: "Expensify",
        department: "HR Management",
        checked: false,
        img: benefit5photo,
      },
      {
        id: 6,
        title: "Zenefits",
        department: "HR Management",
        checked: false,
        img: benefit6photo,
      },
    ],
  },
  {
    id: 2,
    title: "Medium Buisness",
    benefits: [
      {
        id: 1,
        title: "Sapling",
        department: "Hr Management",
        checked: false,
        img: benefit1photo,
      },
      {
        id: 2,
        title: "Workday",
        department: "HR Management",
        checked: false,
        img: benefit2photo,
      },
      {
        id: 3,
        title: "Xero",
        department: "Employers Base",
        checked: false,
        img: benefit3photo,
      },
      {
        id: 4,
        title: "Rippling",
        department: "Salary Management",
        checked: true,
        img: benefit4photo,
      },
      {
        id: 5,
        title: "Expensify",
        department: "HR Management",
        checked: false,
        img: benefit5photo,
      },
      {
        id: 6,
        title: "Zenefits",
        department: "HR Management",
        checked: false,
        img: benefit6photo,
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    benefits: [
      {
        id: 1,
        title: "Sapling",
        department: "Hr Management",
        checked: false,
        img: benefit1photo,
      },
      {
        id: 2,
        title: "Workday",
        department: "HR Management",
        checked: false,
        img: benefit2photo,
      },
      {
        id: 3,
        title: "Xero",
        department: "Employers Base",
        checked: false,
        img: benefit3photo,
      },
      {
        id: 4,
        title: "Rippling",
        department: "Salary Management",
        checked: false,
        img: benefit4photo,
      },
      {
        id: 5,
        title: "Expensify",
        department: "HR Management",
        checked: false,
        img: benefit5photo,
      },
      {
        id: 6,
        title: "Zenefits",
        department: "HR Management",
        checked: true,
        img: benefit6photo,
      },
    ],
  },
];
