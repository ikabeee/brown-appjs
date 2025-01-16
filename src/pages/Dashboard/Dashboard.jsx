import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

export default function Dashboard() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex justify-center">
                    <div className="w-[80%]">
                        <LineChart />
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <div className="w-[40%]">
                        <BarChart />
                    </div>
                    <div className="w-[40%]">
                        <PieChart />
                    </div>
                </div>
            </div>
        </>
    );
}
