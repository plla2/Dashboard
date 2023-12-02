import { Link } from "react-router-dom";
import "./chartbox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  color: string;
  icon: string;
  title: string;
  number: string | number;
  dataKey: string;
  percentage: number;
  chartData: object[];
}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="leftInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <div className="amount">
          <span>{props.number}</span>
        </div>
        <Link to="/" className="viewAll" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="rightInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="percent">
          <span
            className="number"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="period">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
