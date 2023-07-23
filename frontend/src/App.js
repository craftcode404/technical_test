import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "./LineChart";
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const be_url = "https://4ntbnqqwtrpb4hvim5gxh2cmpa0btqzg.lambda-url.eu-central-1.on.aws/"
// const be_url = "https://byyp3wv7otj6cmoxmksgwz5bze0pocum.lambda-url.eu-central-1.on.aws/"

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch( be_url )
      ).json();

      // set state when the data received
      setData(data);
      setLoading(true);
    };

    dataFetch();
  }, []);

  return (
    <div className="App">
        {!loading &&
            <header className="App-header">
              <h1> loading data... </h1>
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </header>
           }
        {
          loading && data['COL'] && data['COL']['metric_b'] &&
            <>
                <LineChart rawData={data['COL']['metric_b']} title={'Colombia'} />
                <LineChart rawData={data['BFA']['metric_b']} title={'Burkina Faso'} />
            </>
        }

    </div>
  );
}



export default App;
