// 绘制三维散点图

var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();

$.get('/static/data/life-expectancy-table.json', function(json_data) {

    myChart.hideLoading();

    var data = JSON.parse(json_data);

    myChart.setOption({
        grid3D: {
            viewControl: {
                projection: 'orthographic' // 声明则使用正交投影，否则使用透视投影
            }
        },
        xAxis3D: {
            type: 'category'  // x轴是类别维度
        },
        yAxis3D: {
            type: 'log' // y轴是值维度，使用log轴标识指数级差距的数据
        },
        zAxis3D: {}, // z轴是值维度，所以不需要加type

        visualMap: {
            calculable: true,
            max: 100,
            // 维度名默认为表头属性名（也就是json data中第一个元素内的item）
            dimension: 'Life Expectancy', // 使用不同颜色标识第四个维度数据
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },

        dataset: {
            source: data
        },
        series: [
            {
                type: 'scatter3D',  // 绘制3d散点图
                // type: 'bar3D', // 绘制3d柱状图，不建议使用，对数据表达不准确

                symbolSize: 2.5,
                encode: {
                    x: 'Country',
                    y: 'Year',
                    z: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
    })
});