
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "pie",
  width: 245,
  height: 245,
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#D2B48C", "#8B4513", "#A0522D", "#6F4E37", "#4B2E2B"],
    legend: {
      show: false,
    },
  },
};

export default function PieChart() {
  return (
    <Card className="w-full shadow-xl rounded-2xl">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center p-2"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="font-bold">
          Distribución de Ventas por Categoría
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w font-normal"
          >
            Este gráfico muestra la distribución de las ventas de la tienda por diferentes categorías de productos, lo que permite identificar las más demandadas.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <div className="h-auto w-auto lg:h-full lg:w-auto">
          <Chart {...chartConfig} />
        </div>
      </CardBody>
    </Card>
  );
}

