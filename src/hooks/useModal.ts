import { useEffect, RefObject } from "react";

import useOutsideClick from "./useOutsideClick";

const useModal = (onClose: () => void, ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  useOutsideClick(ref, () => {
    onClose();
  });
};
export default useModal;
