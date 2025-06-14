import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar style={{ fontSize: "2rem", color: "orange" }} />
        ) : stars >= number ? (
          <FaStarHalfAlt style={{ fontSize: "2rem", color: "orange" }} />
        ) : (
          <AiOutlineStar style={{ fontSize: "2rem", color: "orange" }} />
        )}
      </span>
    );
  });

  return <div className="icon-style">{ratingStar}</div>;
};

export default Star;
