import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { colors } from "./constants";

export declare interface ChartProps {
  values: Array<number>;
}

export declare interface ChartData {
  title: string;
  value: number;
  color: string;
}

function Chart(props: ChartProps) {
  const { values } = props;
  const dataArray: Array<ChartData> = [];
  values.forEach((value, index) => {
    dataArray.push({
      title: value.toString(),
      value: value,
      color: colors[index],
    });
  });

  return <PieChart data={dataArray} />;
}

export default Chart;
