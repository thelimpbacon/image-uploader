import ProgressBar from "../ProgressBar";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.root}>
      <div className={s.imageContainer}>
        <ProgressBar progress={69} />
      </div>
    </div>
  );
};

export default Home;
