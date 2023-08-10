import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const CustomTooltip = (data) => {
  // if (!data) {
  //   return null;
  // }
  return (
    <div
      style={{
        background: "white",
        padding: "10px",
        border: `3px solid${data.color}`,
        width: "4vw",
        borderRadius: "10px",
        backgroundColor: "white",
        opacity: "0.8",
      }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {data.data.id}
        <div
          style={{
            width: "10px",
            height: "10px",
            background: `${data.color}`,
            marginLeft: "10px",
          }}></div>
      </div>
      <div>{data.value}</div>

      {console.log(data)}
    </div>
  );
};

function CustomBarChart() {
  const barData = [
    {
      id: "june",
      Total: 67,
      Recover: 52,
      Death: 4,
    },
    {
      id: "july",
      Total: 142,
      Recover: 104,
      Death: 112,
    },
    {
      id: "aug",
      Total: 113,
      Recover: 149,
      Death: 88,
    },
    {
      id: "sept",
      Total: 136,
      Recover: 149,
      Death: 37,
    },
    {
      id: "oct",
      Total: 60,
      Recover: 149,
      Death: 55,
    },
  ];

  const tickTheme = {
    textColor: "#eee",
  };

  return (
    <div className="bar-container">
      <div className="chart-bar">
        <ResponsiveBar
          theme={tickTheme}
          data={barData}
          keys={["Total", "Recover", "Death"]}
          indexBy="id"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.1}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#FF0000", "#FFB100", "#0092CC"]}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor="#000000"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 10,
            tickPadding: 15,
            tickRotation: 30,
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 2,
            tickPadding: 5,
            tickRotation: 40,
            legend: "Rate",
            legendPosition: "middle",
            legendOffset: -50,
            legendTextStyle: {
              fontSize: 20,
            },
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "white",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 80,
              itemDirection: "left-to-right",
              itemOpacity: 0.5,
              symbolSize: 50,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          tooltip={CustomTooltip} // Use the custom tooltip component here
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </div>
    </div>
  );
}

export default CustomBarChart;
