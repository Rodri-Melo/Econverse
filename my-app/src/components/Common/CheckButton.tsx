import React from "react";
import './CheckButton.scss';

interface CheckButtonProps {
  onClick: () => void;
}

export const CheckButton: React.FC<CheckButtonProps> = ({ onClick }) => {
  return (
    <button className="btn-check" onClick={onClick}>
      Confira
    </button>
  );
};

