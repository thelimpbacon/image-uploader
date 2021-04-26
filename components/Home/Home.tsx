import { useRef, useState } from "react";
import ProgressBar from "../ProgressBar";
import s from "./Home.module.css";

const Home = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className={s.root}>
      <input
        ref={imageInputRef}
        type="file"
        onChange={handleFileChange}
        hidden
      />

      <button onClick={() => imageInputRef.current.click()}>
        Upload image
      </button>

      <div className={s.imageContainer}>
        {preview && <img className={s.imagePreview} src={preview} />}
        <div className={s.progressBarContainer}>
          <ProgressBar progress={69} />
        </div>
      </div>
    </div>
  );
};

export default Home;
