"use client";

import classes from "@/components/meals/image-picker.module.css";
<<<<<<< HEAD
import { useRef } from "react";

export default function ImagePicker({ label, name }) {
=======
<<<<<<< HEAD
import { useRef } from "react";

export default function ImagePicker({ label, name }) {
=======
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
>>>>>>> 22f423f (Save meal function implemented)
>>>>>>> 074fc10 (Implemented Save function)
  const imageInput = useRef();

  function pickImageHandler() {
    imageInput.current.click();
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

>>>>>>> 22f423f (Save meal function implemented)
>>>>>>> 074fc10 (Implemented Save function)
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Picked image by the user"
              fill
            />
          )}
        </div>
>>>>>>> 22f423f (Save meal function implemented)
>>>>>>> 074fc10 (Implemented Save function)
        <input
          className={classes.input}
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          onChange={handleImageChange}
          required
>>>>>>> 22f423f (Save meal function implemented)
>>>>>>> 074fc10 (Implemented Save function)
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
