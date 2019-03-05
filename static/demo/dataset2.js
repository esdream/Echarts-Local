var myChart = echarts.init(document.getElementById('main'), 'vintage');
// 加载数据时使用Loading动画
myChart.showLoading();

// 异步加载数据，加载的json数据是文本形式，需要解析
$.get('/static/data/dataset_encode.json', function (json_data) {

    // 加载数据完成后隐藏Loading动画
    myChart.hideLoading();

    // 调用JSON.parse方法解析json数据
    var data = JSON.parse(json_data);

    var sizeValue = '57%';
    var symbolSize = 2.5;
    
    var option = {
        legend: {},
        tooltip: {},

        grid: [
            { right: sizeValue, bottom: sizeValue },
            { left: sizeValue, bottom: sizeValue },
            { right: sizeValue, top: sizeValue },
            { left: sizeValue, top: sizeValue }
        ],
        xAxis: [
            { type: 'value', gridIndex: 0, name: 'Income', axisLabel: { rotate: 50, interval: 0 } },
            { type: 'category', gridIndex: 1, name: 'Country', boundaryGap: false, axisLabel: { rotate: 50, interval: 0 } },
            { type: 'value', gridIndex: 2, name: 'Income', axisLabel: { rotate: 50, interval: 0 } },
            { type: 'value', gridIndex: 3, name: 'Life Expectancy', axisLabel: { rotate: 50, interval: 0 } }
        ],
        yAxis: [
            { type: 'value', gridIndex: 0, name: 'Life Expectancy' },
            { type: 'value', gridIndex: 1, name: 'Income' },
            { type: 'value', gridIndex: 2, name: 'Population' },
            { type: 'value', gridIndex: 3, name: 'Population' }
        ],
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                { name: 'Year', type: 'ordinal' }
            ],
            source: data
        },
        series: [
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 0,
                yAxisIndex: 0,
                encode: {
                    x: 'Income',
                    y: 'Life Expectancy',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 1,
                yAxisIndex: 1,
                encode: {
                    x: 'Country',
                    y: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 2,
                yAxisIndex: 2,
                encode: {
                    x: 'Income',
                    y: 'Population',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 3,
                yAxisIndex: 3,
                encode: {
                    x: 'Life Expectancy',
                    y: 'Population',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ],
        // toolbox中包括了一个下载图片的设置要素
        toolbox: {
            show: true,
            left: 'center',
            feature: {
                // 添加一个保存图表的要素
                saveAsImage: {
                    pixelRatio: 3, // 分辨率，默认为1，与容器一致
                    title: '保存为图片',
                    type: 'png', // 图表保存的类型
                    lang: ['点击保存']
                },
                // 添加一个区域缩放要素
                dataZoom: {},
            }
        }
    };

    myChart.setOption(option);
});



