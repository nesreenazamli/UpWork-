import "./style.css";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Filter() {
  return (
    <div className="filter-container">
        <p className='filter-title'>Filter</p>
        <div className="filter-content d-flex">
            <div className=" filter-item d-flex align-items-center active">Date <AiOutlineArrowDown/></div>
            <div className="filter-item d-flex align-items-center">Price <AiOutlineArrowDown/></div>
            <div className="filter-item d-flex align-items-center">Change <AiOutlineArrowDown/></div>
        </div>
    </div>
  )
}
