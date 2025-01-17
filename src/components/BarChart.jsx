import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "bar",
  height: "100%",  // Cambiar de 240 a "100%"
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#40251B"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#40251B",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#40251B",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#6B3F09AA",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function BarChart() {
  return (
    <Card className="w-full h-full shadow-xl rounded-2xl pt-2">
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
            Ventas por mes
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w font-normal"
          >
            Esta gráfica de ventas muestra el comportamiento de las ventas mensuales a lo largo de un año. Utilizando una línea suave, los datos se presentan de manera clara y fácil de interpretar. Los valores de las ventas comienzan en 50 unidades en abril, alcanzan un pico significativo en agosto con 500 unidades, y experimentan fluctuaciones en los meses siguientes, con un ligero aumento hacia diciembre.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0 h-[250px]">  {/* Agregar altura fija */}
        <div className="w-full h-full">
          <Chart {...chartConfig} />
        </div>
      </CardBody>
    </Card>
  );
}