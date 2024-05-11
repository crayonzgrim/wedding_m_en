import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMap } from "../components/GoogleMap";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return "Loading...";
    case Status.FAILURE:
      return "Failed";
    case Status.SUCCESS:
      return <GoogleMap />;
  }
};

export const HowToCome = ({ GOOGLE_API }) => {
  return (
    <Wrapper
      className="inline-block focus-visible:outline-0"
      apiKey={GOOGLE_API}
      render={render}
      libraries={["marker"]}
    />
  );
};
