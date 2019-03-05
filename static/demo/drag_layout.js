var myChart = echarts.init(document.getElementById('main'), 'vintage');

myChart.showLoading();

// 引入draggable.js，实现拖动布局。以下代码从Start到End复制即可使用。不需要管index.html中没有div[_echarts_instance_]
// Start
$.when(
    $.getScript('/static/draggable.js')  
).done(function() {
    draggable.init(
        $('div[_echarts_instance_]')[0],
        myChart,
        {
            width: 700,
            height: 400,
            throttle: 70
        }
    );
// End

    myChart.hideLoading();

    option = {
        baseOption: {
            title: {
                text: '南丁格尔玫瑰图',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: { show: true },
                    saveAsImage: { show: true, pixelRatio: 3 }
                }
            },
            calculable: true,
            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { value: 10, name: 'rose1' },
                        { value: 5, name: 'rose2' },
                        { value: 15, name: 'rose3' },
                        { value: 25, name: 'rose4' },
                        { value: 20, name: 'rose5' },
                        { value: 35, name: 'rose6' },
                        { value: 30, name: 'rose7' },
                        { value: 40, name: 'rose8' }
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    roseType: 'area',
                    data: [
                        { value: 10, name: 'rose1' },
                        { value: 5, name: 'rose2' },
                        { value: 15, name: 'rose3' },
                        { value: 25, name: 'rose4' },
                        { value: 20, name: 'rose5' },
                        { value: 35, name: 'rose6' },
                        { value: 30, name: 'rose7' },
                        { value: 40, name: 'rose8' }
                    ]
                }
            ]
        },

        // media中是自适应规则，用于在移动端等竖屏设备上图表的自适应变化，详细见https://www.echartsjs.com/tutorial.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94
        media: [
            {
                option: {
                    legend: {
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['25%', '50%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['75%', '50%']
                        }
                    ]
                }
            },
            {
                query: {
                    minAspectRatio: 1
                },
                option: {
                    legend: {
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['25%', '50%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['75%', '50%']
                        }
                    ]
                }
            },
            {
                query: {
                    maxAspectRatio: 1
                },
                option: {
                    legend: {
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['50%', '30%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['50%', '70%']
                        }
                    ]
                }
            },
            {
                query: {
                    maxWidth: 500
                },
                option: {
                    legend: {
                        right: 10,
                        top: '15%',
                        orient: 'vertical'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['50%', '30%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['50%', '75%']
                        }
                    ]
                }
            }
        ]
    };

    myChart.setOption(option);
});