import { Bar, BarChart, ResponsiveContainer } from "recharts";
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
      <h4>{props.title}</h4>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlockChartBox;
