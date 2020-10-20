import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
// import F2 from '../../f2-canvas/lib/f2'
import './style.scss'

interface IItem {
  day: string
  value: number
}

const Chart: React.FC = () => {
  // 图表数据
  const [data, setData] = useState<IItem[]>([])
  // 图表
  const [chart, setChart] = useState<any>(null)

  // 获取图表数据
  useEffect(() => {
    setData([
      {
        day: '周一',
        value: 300
      },
      {
        day: '周二',
        value: 400
      },
      {
        day: '周三',
        value: 350
      },
      {
        day: '周四',
        value: 500
      },
      {
        day: '周五',
        value: 490
      },
      {
        day: '周六',
        value: 600
      },
      {
        day: '周日',
        value: 900
      }
    ])
  }, [])

  // 数据改变之后刷新图表
  useEffect(() => {
    // 如果图表初始创建之前就拿到了数据，那么图表创建时就会使用最终的数据。
    // 如果图表创建的时候还没拿到数据，那么拿到数据之后再调用该方法。
    if (!chart) return
    chart.changeData(data)
  }, [data])

  const chartOpts = {
    onInit(canvas, width, height) {
      // const chart = new F2.Chart({
      //   el: canvas,
      //   width,
      //   height,
      //   padding: [50, 10, 30, 30]
      // })
      // chart.source(data, {
      //   value: {
      //     alias: '访问量'
      //   }
      // })
      // chart.tooltip({
      //   showTitle: true,
      //   showCrosshairs: true,
      //   showItemMarker: true
      // })
      // chart.line().position('day*value').color('#009688').shape('smooth')
      // chart.render()
      // setChart(chart)
      // return chart
    }
  }

  return (
    <View className="page-chart">
      <View className="chart">
        {/* @ts-ignore */}
        {/* <ff-canvas canvas-id="f2-canvas" opts={chartOpts}></ff-canvas> */}
      </View>
    </View>
  )
}

export default Chart
