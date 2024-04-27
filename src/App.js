import './App.css';
import Graph from "react-graph-vis";
import 'vis-network/styles/vis-network.css';
import {useEffect} from "react";

function generateColoredGraph(graph) {
  const coloredNodes = {};
  const pastelColors = [
    '#87CEFA', // LightSkyBlue
    '#FFD700', // Gold
    '#FFB6C1', // LightPink
    '#98FB98', // PaleGreen
    '#FFA07A', // LightSalmon
    '#BA55D3', // MediumOrchid
    // Add more pastel colors as needed
  ];
  let colorIndex = 0;

  const relationshipColors = {
    'married': pastelColors[colorIndex++ % pastelColors.length],
    'son': pastelColors[colorIndex++ % pastelColors.length],
    'daughter': pastelColors[colorIndex++ % pastelColors.length],
    // Add more relationship types and colors as needed
  };

  // Iterate through the edges to identify relationships
  graph.edges.forEach(({from, to, label}) => {
    const relationship = label.toLowerCase();
    if (relationshipColors.hasOwnProperty(relationship)) {
      // Assign a color based on the relationship to the "to" node
      if (!coloredNodes[to]) {
        coloredNodes[to] = relationshipColors[relationship];
      }
    }
  });

  // Create a new graph with colored nodes
  const coloredGraph = {
    nodes: graph.nodes.map(node => ({
      ...node,
      color: coloredNodes[node.id] || pastelColors[0] // Set default pastel color if not colored
    })),
    edges: graph.edges
  };

  return coloredGraph;
}


function App() {
  useEffect(() => {
    document.title = "Rishabh Bhatnagar's Family Tree";
  }, []);
  let graph = {
    nodes: [
      {id: 1, label: "Sushil Kumar \nBhatnagar"},
      {id: 2, label: "Ritu \nBhatnagar"},
      {id: 3, label: "Ankita \nBhatnagar"},
      {id: 4, label: "Rishabh \nBhatnagar"},
      {id: 5, label: "Aditya \nBhatnagar"},
      {id: 6, label: "Utkarsh \nPandharkar"},
    ],
    edges: [
      {from: 1, to: 2, label: 'Married'},
      {from: 2, to: 1, label: 'Married'},
      {from: 1, to: 3, label: "Daughter"},
      {from: 2, to: 3, label: "Daughter"},
      {from: 1, to: 4, label: "Son"},
      {from: 2, to: 4, label: "Son"},
      {from: 1, to: 5, label: "Son"},
      {from: 2, to: 5, label: "Son"},
      {from: 3, to: 6, label: 'Married'},
      {from: 6, to: 3, label: 'Married'},
    ]
  };

  graph = generateColoredGraph(graph);

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
    }
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
