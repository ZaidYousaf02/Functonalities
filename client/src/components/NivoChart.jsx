import React from "react";
import { ResponsivePie } from "@nivo/pie";

function NivoChart() {
  const data = [
    {
      id: "January",
      label: "January",
      value: 250,
      color: "hsl(16, 70%, 50%)",
    },
    {
      id: "February",
      label: "February",
      value: 159,
      color: "hsl(155, 70%, 50%)",
    },
    {
      id: "March",
      label: "March",
      value: 280,
      color: "hsl(161, 70%, 50%)",
    },

    {
      id: "April",
      label: "April",
      value: 181,
      color: "hsl(359, 70%, 50%)",
    },
  ];

  const CustomTooltip = ({ datum }) => {
    return (
      <div
        style={{
          background: "white",
          padding: "10px",
          border: "1px solid black",
          width: "4vw",
        }}
      >
        <div>{datum.id}</div>
        <div>{datum.value}</div>
      </div>
    );
  };
  return (
    <>
      <div className="pie-container" style={{ width: "50vw", height: "40vh" }}>
        <ResponsivePie
          data={data}
          keys={["value"]}
          indexBy="id"
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.7}
          padAngle={2}
          tooltip={CustomTooltip}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "January",
              },
              id: "dots",
            },
            {
              match: {
                id: "February",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}

export default NivoChart;
