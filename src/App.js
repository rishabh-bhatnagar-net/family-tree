import './App.css';
import Graph from "react-graph-vis";
import 'vis-network/styles/vis-network.css';
import {useEffect} from "react";
import {getMembersGraph} from "./members";


function App() {
  useEffect(() => {
    document.title = "Rishabh Bhatnagar's Family Tree";
  }, []);
  let graph = getMembersGraph();

  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "100%",
    nodes: {
      shape: "circle",
      borderWidth: 2
    },
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -80000,
        centralGravity: 0.3,
        springLength: 100,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0
      },
    },
  };

  const events = {
    select: function (event) {
    }
  };

  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
        network.fit();
      }}
    />
  );
}

export default App;
