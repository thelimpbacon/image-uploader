import s from "./Progressbar.module.css";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
