import React from "react";
import { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-apexcharts";

import { UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    //This controls th pop up effect when the dashboard cards are selected
    <AnimateSharedLayout>
      {expanded ? ( //if its not expanded keep it closed
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        //else expand/open it.
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>R{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}
//This function controls what happens when the card is clicked
function ExpandedCard({ param, setExpanded }) {
  //This const is for data that will work on the charts when the card is expandend, lookup apex charts for documentation
  const data = {
    options: {
      Chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "000",
        opacity: 0.35,
      },

      fill: {
        colors: ["fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2021-09-19T00:00:00.000Z",
          "2021-10-19T00:25:00.000Z",
          "2021-11-19T00:00:00.000Z",
          "2022-03-19T00:00:00.000Z",
          "2022-05-19T00:00:00.000Z",
          "2022-06-19T00:00:00.000Z",
          "2022-07-19T00:00:00.000Z",
        ],
      },
    },
  };
  return (
    <div
      className="ExpandedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
    </div>
  );
}
export default Card;
