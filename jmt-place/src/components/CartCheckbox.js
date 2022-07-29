import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const CartCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {checked ? (
        <FontAwesomeIcon onClick={onClick} icon={faSquareCheck} size="lg" />
      ) : (
        <FontAwesomeIcon onClick={onClick} icon={faSquare} size="lg" />
      )}
    </>
  );
};

export default CartCheckbox;
