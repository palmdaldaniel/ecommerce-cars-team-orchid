import { useEffect } from "react";

const OutsideClick = (click, callback) => {
  const handleClickOutside = (e) => {
    if (click && click.current && !click.current.contains(e.target)) {
      callback();
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  });
};

export default OutsideClick;