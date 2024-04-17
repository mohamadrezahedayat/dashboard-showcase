import { RefObject, useEffect } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (event: globalThis.MouseEvent) => {
      if (ref.current) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);

  return ref;
};
export default useOutsideClick;
