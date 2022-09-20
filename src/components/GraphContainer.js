import React from 'react';
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function GraphContainer (props) {
    console.log('props', props)
const typeOfGraph = props.type;
const data = props.data;
console.log(props.style.width)
    return (
        <>
            {typeOfGraph ? <>
            <div style={props.style} className='graph-card'>
                <LineChart
                    width={props.graphStyles.width}
                    height={props.graphStyles.height}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
        >
                <CartesianGrid vertical={false} />
                {props.Xaxis ? <><XAxis dataKey="date"  /></> : <></>}
                <YAxis  />
                <Line type={'linear'} dataKey="pv"  dot={props.dot} />
                {props.secondLine ? <><Line type={'linear'} dataKey="uv"  dot={props.dot} /></> : <></>}
                
            </LineChart>
        </div>
            </> : 
            <>
                <BarChart
          width={props.graphStyles.width}
          height={props.graphStyles.height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
            </>}
                
        </>
    )
}