import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ started, onStarted }: any) => {
  const { progress } = useProgress();
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
            disabled={progress < 100}
            onClick={onStarted}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};
