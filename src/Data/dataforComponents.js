const BarChartOptions = {
  series: [
    {
      data: [],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      background: "#27282b",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "0 - 100",
        "101 - 200",
        "201 - 300",
        "301 - 400",
        "401 - 500",
        "501 - 600",
        "601 - 700",
        "701 - 800",
        "801 - 900",
        "901-above",
      ],
    },
    theme: {
      mode: "dark",
      monochrome: {
        enabled: true,
        shadeTo: "dark",
        shadeIntensity: 0.9,
      },
    },
    grid: {
      borderColor: "#444",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const PieChartOptions = {
  series: [1, 2, 3],
  options: {
    chart: {
      type: "polarArea",
      background: "#27282b",
    },
    labels: ["Item1", "Item2", "Item3"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      mode: "dark",
      monochrome: {
        enabled: true,
        shadeTo: "dark",
        shadeIntensity: 0.9,
      },
    },
  },
};

const months = [
  { name: "January", number: 1 },
  { name: "February", number: 2 },
  { name: "March", number: 3 },
  { name: "April", number: 4 },
  { name: "May", number: 5 },
  { name: "June", number: 6 },
  { name: "July", number: 7 },
  { name: "August", number: 8 },
  { name: "September", number: 9 },
  { name: "October", number: 10 },
  { name: "November", number: 11 },
  { name: "December", number: 12 },
];

const monthsonly = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
module.exports = { BarChartOptions, PieChartOptions, months, monthsonly };
