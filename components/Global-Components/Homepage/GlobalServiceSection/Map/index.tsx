"use client";
import { FlagTriangleRight, MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import map from "./map.json";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import { markers } from "../countries";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Map = () => {
  const [content, setContent] = useState<any>({
    country: "",
    content: {
      projects: "",
      services: "",
      clients: "",
    },
  });
  const [tip, setTip] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex flex-col items-center w-full h-full -mt-12">
      <Tooltip id="my-tooltip">
        {tip === true ? (
          <div>
            <p>Country : {content.country}</p>
            <p>Clients : {content.content?.clients}</p>
            <p>Projects : {content.content?.projects}</p>
            <p>Services : {content.content?.services}</p>
          </div>
        ) : null}
      </Tooltip>

      <ComposableMap
        className="xl:w-[80rem] h-full  md:w-[50rem] sm:w-[30rem] w-[22rem] md:h-[40rem]"
        projectionConfig={{ scale: 220 }}
      >
        <Geographies geography={map}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setContent({
                    country: geo.properties.name,
                    content: geo.properties.content,
                  });
                  setTip(geo.properties.serviced);
                }}
                onMouseLeave={() => {
                  setContent({});
                  setTip(false);
                }}
                data-tooltip-id="my-tooltip"
                style={{
                  default: {
                    fill: !geo.properties.fill
                      ? "#dbdbdb"
                      : geo.properties.fill,
                    outline: "none",
                  },
                  hover: {
                    fill: !geo.properties.hover
                      ? geo.properties.fill
                      : geo.properties.hover,
                    outline: "none",
                  },
                  pressed: {
                    fill: !geo.properties.hover
                      ? geo.properties.fill
                      : geo.properties.hover,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker: any, index: number) => (
          <Marker key={index} coordinates={marker.coordinates}>
            <VisibilitySensor
              delayedCall
              onChange={(isVisible: any) => {
                setVisible(isVisible);
              }}
            >
              {/* <FlagTriangleRight
                className={`fill-red-400  ${
                  visible &&
                  "animate-fade-down animate-once animate-duration-1000 animate-ease-linear"
                }`}
              /> */}

              <FontAwesomeIcon
                icon={faMapPin}
                className={`text-red-500 `}
                height={20}
                width={15}
              />
            </VisibilitySensor>
            {/* <circle r={4} fill="#F00" stroke="#fff" strokeWidth={1} /> */}
            {/* <text
                textAnchor="middle"
                y={marker.markerOffset}
                className="text-[10px]"
              >
                {marker.name}
              </text> */}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
