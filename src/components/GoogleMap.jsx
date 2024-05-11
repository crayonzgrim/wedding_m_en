import { useEffect, useState } from "react";
import { fromAddress, setDefaults } from "react-geocode";

export const GoogleMap = () => {
  const GOOGLE_API = import.meta.env.VITE_GOOGLE_MAP_API;

  const [googleMap, setGoogleMap] = useState();

  setDefaults({
    key: GOOGLE_API,
    language: "en",
    region: "kr",
  });

  console.log(document.querySelector("#googleMap"));

  useEffect(() => {
    const exist = document.querySelector("#googleMap");

    if (exist) {
      const container = document.createElement("div");

      container.id = "map";
      container.style.minHeight = "400px";
      container.style.maxWidth = "382px";
      container.style.width = "100%";

      container.style.position = "absolute";
      container.style.top = "244.5rem";
      container.style.left = "50%";
      container.style.transform = "translate(-50%, -50%)";

      container.style.zIndex = 10;

      document.body.appendChild(container);

      fromAddress("Hotel Inter-Burgo Exco")
        .then((res) => {
          const { lat, lng } = res.results[0].geometry.location;

          const instance = new window.google.maps.Map(container, {
            center: {
              lat,
              lng,
            },
            zoom: 18,
            mapId: "7cce787e21231f26",
          });

          setGoogleMap(instance);
        })
        .catch(console.error);
      return () => {
        document.body.removeChild(container);
      };
    }
  }, []);

  return <></>;
};
