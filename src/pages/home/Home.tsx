import BlockChartBox from "../../components/blockChartBox/blockChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChart/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">
        <BlockChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BlockChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
