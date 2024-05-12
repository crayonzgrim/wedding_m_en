import Snowfall from "react-snowfall";

export const FallingEffect = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <Snowfall
        color="#fff"
        style={{
          background: "transparent",
          position: "fixed",
          width: "100dvw",
          height: "100dvh",
        }}
        snowflakeCount={28}
      />
    </div>
  );
};
