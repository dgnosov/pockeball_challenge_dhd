import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ started, onStarted }: any) => {
  const { progress } = useProgress();

  const [lock, setLock] = useState(true);

  useEffect(() => {
    let timer: any;
    if (progress === 100) {
      timer = setTimeout(() => {
        setLock(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__pokeball">
        <div className="loadingScreen__progress">
          <div
            className="loadingScreen__progress__value"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
        <div className="loadingScreen__pokeball_top"></div>
        <div className="loadingScreen__pokeball_bottom"></div>
        <div className="loadingScreen__button_block">
          <button
            className="loadingScreen__button"
            disabled={lock}
            onClick={onStarted}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};
