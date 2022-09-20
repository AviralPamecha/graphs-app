import React from "react";
import { GraphContainer } from "./GraphContainer";
import { SideNavigation } from "./SideNavigation";

export function GraphComponent() {

const [typeOfGraph, setTypeOfGraph] = React.useState("line");

const styles = {
  firstCard : {
    width: "35%",
    height: "220px",
    backgroundColor: "#f2ece9"
  },
  secondCard : {
    width: "35%",
    height: "220px",
    backgroundColor: "#f2ece9"
  },
  thirdCard : {
    marginTop: "90px",
    height: "300px",
    width: "85%",
    backgroundColor: "#f2ece9"

  }
};

const data = [
  {
    date: '06/22',
    pv: 73,
    uv: 35

  },
  {
    date: '07/22',
    pv: 120,
    uv: 50

  },
  {
    date: '08/22',
    pv: 90,
    uv: 45

  },
  {
    date: '09/22',
    pv: 50,
    uv: 30
  },
  {
    date: '10/22',
    pv: 115,
    uv: 50

  },
  {
    date: '11/22',
    pv: 55,
    uv: 23

  }
];
const toggleGraph = (e) => {
  let currentType = document.getElementsByClassName("activeGraph")[0];
  let targetType = e.target;
  currentType.classList.remove("activeGraph");
  targetType.classList.add("activeGraph");
  targetType.classList.contains("line") ? setTypeOfGraph(true) : setTypeOfGraph(false);

}

    return(
        <>
          <div className="main-container">
      <SideNavigation />
  
        <div className='graph-container'>
          <GraphContainer Xaxis={false} data={data} type={typeOfGraph} graphStyles={{height: 222, width: 386}} dot={true} style={styles.firstCard} />
          <GraphContainer Xaxis={true} data={data} type={typeOfGraph} graphStyles={{height: 222, width: 386}} secondLine={true} dot={true} style={styles.secondCard} />
          <GraphContainer Xaxis={true} data={data} type={typeOfGraph} graphStyles={{height: 302, width: 1031}} dot={false} style={styles.thirdCard} />
        </div>
        <div className='toggle-button-container'>
                <button onClick={toggleGraph} className="toggle-button activeGraph line" >{"Line"}</button>
                <button onClick={toggleGraph} className="toggle-button bar">{"Bar"}</button>
            </div>
      </div>
      
        </>
    );
};