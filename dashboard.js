function getValueForDailySales() {
    var cost = [ 200, 300, 400, 500, 600 ];
    var volume = [ 7, 8, 9, 10, 11];
    var DailySalesValue = [];
    for(index=0;index<cost.length;index++) {
        value[index] = cost[index] * volume[index];
    }
    return DailySalesValue;
}

function barGraph(containerId) {
    var values = getValueForDailySales();
    var data = [
        ["P1", values[0]],
        ["P2", values[1]],
        ["P3", values[2]],
        ["P4", values[3]],
        ["P5", values[4]]
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