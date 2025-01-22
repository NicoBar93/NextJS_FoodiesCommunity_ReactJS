"use client";

import classes from "@/components/meals/image-picker.module.css";
import { useRef } from "react";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function pickImageHandler() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
        ></input>
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
