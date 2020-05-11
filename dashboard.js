function barGraph(containerId) {
    var data = [
        ["John", 10000],
        ["Jake", 12000],
        ["Peter", 13000],
        ["James", 10000],
        ["Mary", 9000]
    ];

    chart = anychart.column();
    var series = chart.column(data);
    chart.container(containerId);
    chart.draw();
}

function avgUnitsPerOutlet() {
    var data = [
        ["January", 10000],
        ["February", 12000],
        ["March", 18000],
        ["April", 11000],
        ["May", 9000]
    ];

    chart = anychart.line();
    var series = chart.line(data);
    chart.container("avg-units-per-outlet");
    chart.draw();
}

function stepLineChart(containerId) {
    var data = [
        { x: "1995", value: 0.10 },
        { x: "1996", value: 0.10 },
        { x: "1997", value: 0.12 },
        { x: "1998", value: 0.13 },
        { x: "1999", value: 0.15 },
        { x: "2000", value: 0.15 },
        { x: "2001", value: 0.15 },
        { x: "2002", value: 0.19 },
        { x: "2003", value: 0.20 }
    ];

    chart = anychart.stepLine();
    var series = chart.stepLine(data);
    series.stepDirection("forward");
    chart.container(containerId);
    chart.draw();
}

function areaChart(containerId) {
    var data = [
        ["January", 10000],
        ["February", 12000],
        ["March", 18000],
        ["April", 11000],
        ["May", 9000]
    ];

    chart = anychart.area();
    var series = chart.area(data);
    chart.container(containerId);
    chart.draw();
}

barGraph("avg-daily-sales");
barGraph("avg-sales-per-outlet");
barGraph("total-inventory");
barGraph("total-sales");
areaChart("avg-units-per-outlet");
areaChart("total-leads");
stepLineChart("avg-order-time");
stepLineChart("profit-margin");