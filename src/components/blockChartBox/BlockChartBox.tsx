import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./blockchartbox.scss";

interface Props {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
}

const BlockChartBox = (props: Props) => {
  return (
    <div className="blockChart">
      <h4 className="title">{props.title}</h4>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlockChartBox;
