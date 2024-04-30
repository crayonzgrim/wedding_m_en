import Snowfall from "react-snowfall";

export const FallingEffect = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <Snowfall
        // Changes the snowflake color
        color="#fff"
        // Applied to the canvas element
        // style={{ background: "#fff" }}
        style={{
          background: "transparent",
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={28}
        // Pass in the images to be used
        // images={images}
      />
    </div>
  );
};
