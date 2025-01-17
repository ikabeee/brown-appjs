import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

export default function Dashboard() {
    return (
        <div className="flex flex-col space-y-6 p-6">
            <div className="flex justify-center">
                <div className="w-full lg:w-[80%]">
                    <LineChart />
                </div>
            </div>

            <div className="flex justify-center gap-6">
                <div className="w-full lg:w-[40%]">
                    <BarChart />
                </div>
                <div className="w-full lg:w-[40%]">
                    <PieChart />
                </div>
            </div>
        </div>
    );
}
