import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import studentA from './data/studentA';
import studentB from './data/studentB';
import studentC from './data/studentC';
import studentD from './data/studentD';

const BarChart = () => {

    const [barChart, showBarChart] = useState([]);
    
    useEffect(() =>{
      showStudentA();
    },[]);

    const showStudentA = () =>{ 
      return showBarChart(studentA);
    }

    const showStudentB = () =>{
      return showBarChart(studentB);
    }

    const showStudentC = () =>{
      return showBarChart(studentC);
    }

    const showStudentD = () =>{
      return showBarChart(studentD);
    }
    return (
      <>
        <div>
            <Bar 
                data={barChart}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }}
            />
            
        </div>
        <div  className="App">
          <button onClick={showStudentA} className="btn-1">Student A</button>
          <button onClick={showStudentB} className="btn-2">Student B</button>
          <button onClick={showStudentC} className="btn-3">Student C</button>
          <button onClick={showStudentD} className="btn-4">Student D</button>
        </div>
        </>
    )
}

export default BarChart;
