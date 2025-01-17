import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col space-y-6 z-0">

      <div className="w-full h-[300px]">
        <div className="w-full h-full">
          <BarChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full h-[400px]">
          <LineChart />
        </div>
        <div className="w-full h-[400px]">
          <PieChart />
        </div>
      </div>
    </div>
    
  );
}
