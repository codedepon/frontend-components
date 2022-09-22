import React from "react";
import { useRef, useState } from "react";

import { CheckmarkIcon } from "../Icons/Icons";
import styles from "./CheckBox.module.scss";
import ContentBox from "../ContentBox/ContentBox";
interface CheckBoxProps {
  checked?: boolean;
  size?: string;
}
function CheckBox({ checked, size }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(Boolean(checked));
  const toggleChecked = () => setIsChecked(!isChecked);
  const checkmarkRef = useRef(null);
  return (
    <ContentBox
      onClick={toggleChecked}
      // @ts-ignore
      size={size || "2em"}
      className={styles.checkbox}
    >
      <button className={styles.innerBox}>
        {isChecked && (
          <CheckmarkIcon ref={checkmarkRef} className={styles.checkmark} />
        )}
      </button>
    </ContentBox>
  );
}
export default CheckBox;
