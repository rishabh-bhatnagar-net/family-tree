import './App.css';
import Graph from "react-graph-vis";
import 'vis-network/styles/vis-network.css';
import {useEffect} from "react";


function l(n) {
  // Define colors
  const colors = [
    '#87CEFA', // LightSkyBlue
    '#FFD700', // Gold
    '#FFA07A', // LightSalmon
    '#FFB6C1', // LightPink
    '#98FB98', // PaleGreen
    '#BA55D3', // MediumOrchid
    // Add more pastel colors as needed
  ];
  return colors[n % colors.length];
}

function generateTitleFromObject(data) {
  const element = document.createElement("div");

  // Iterate over the key-value pairs and create HTML elements
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const pairElement = document.createElement("div");
      const strongElement = document.createElement("strong");
      strongElement.textContent = `${key}:`;
      const valueElement = document.createElement("span");
      valueElement.textContent = ` ${data[key]}`;
      pairElement.appendChild(strongElement);
      pairElement.appendChild(valueElement);
      element.appendChild(pairElement);
    }
  }
  return element;
}

function App() {
  useEffect(() => {
    document.title = "Rishabh Bhatnagar's Family Tree";
  }, []);
  // let add_child = function (id, level, parent_ids, child_name, son, graph) {
  //   parent_ids.forEach((parent_id) => {
  //     graph.edges.push({from: 17, to: 9, label: son ? 'Son' : 'Daughter'},)
  //   })
  //   graph.nodes.push({id: id, label: child_name, color: l(level)});
  //   return graph
  // };
  let graph = {
    nodes: [
      {id: 16, label: "Kharaksingh \nBhatnagar", color: l(0), title: generateTitleFromObject()},
      {id: 17, label: "Shantidevi \nBhatnagar", color: l(0)},

      {
        id: 1,
        label: "Sushil Kumar \nBhatnagar",
        color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "9th October 1965"}),
      },
      {
        id: 2,
        label: "Ritu \nBhatnagar",
        color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "23rd June 1973"})
      },
      {
        id: 7, label: "Anil Kumar \nBhatnagar", color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "02th February"})
      },
      {
        id: 18, label: "Abha \nBhatnagar", color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "27th September"})
      },
      {
        id: 8, label: "Somprakash \nBhatnagar", color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "18th June"})
      },
      {id: 19, label: "Neelam \nBhatnagar", color: l(1)},
      {
        id: 9, label: "Vipin \nBhatnagar", color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "25th August"})
      },
      {id: 20, label: "Shobha \nBhatnagar", color: l(1)},
      {
        id: 3,
        label: "Ankita \nBhatnagar",
        color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "15th October 1996"})
      },
      {
        id: 4,
        label: "Rishabh \nBhatnagar",
        color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "11th January 1999"})
      },
      {
        id: 5, label: "Aditya \nBhatnagar", color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "19th January 2004"})
      },
      {id: 6, label: "Utkarsh \nPandharkar", color: l(2)},
      {
        id: 10, label: "Ansh \nBhatnagar", color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "11th January"})
      },
      {id: 11, label: "Daksh \nBhatnagar", color: l(2)},
      {
        id: 12, label: "Neha \nBhatnagar", color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "14th October"})
      },
      {id: 13, label: "Surbhi \nBhatnagar", color: l(2)},
      {id: 14, label: "Anurag \nBhatnagar", color: l(2)},
      {id: 15, label: "Anshika \nBhatnagar", color: l(2)},

      {id: 21, label: "Vijay Pal \nBhatnagar", color: l(0)},
      {id: 22, label: "Kanti \nBhatnagar", color: l(0)},
      {id: 23, label: "Ritesh \nBhatnagar", color: l(1)},
      {id: 25, label: "Mahima \nBhatnagar", color: l(1)},
      {id: 24, label: "Pankaj \nBhatnagar", color: l(1)},
      {id: 26, label: "Shweta \nBhatnagar", color: l(1)},
      {id: 27, label: "Khyati \nBhatnagar", color: l(2)},
      {id: 28, label: "Mantram \nBhatnagar", color: l(2)},
      {id: 29, label: "Dhruv \nBhatnagar", color: l(2)},
      {id: 30, label: "Divyansh \nBhatnagar", color: l(2)},

      {id: 31, label: "Rekha \nBhatnagar", color: l(1)},
      {
        id: 32, label: "Arun Kumar \nBhatnagar", color: l(1),
        title: generateTitleFromObject({"Date Of Birth": "30th June"})
      },
      {
        id: 33, label: "Shubham \nBhatnagar", color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "4th December"})
      },
      {
        id: 34, label: "Himanshu \nBhatnagar", color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "6th December"})
      },
      {
        id: 35, label: "Divya \nBhatnagar", color: l(2),
        title: generateTitleFromObject({"Date Of Birth": "23rd December"})
      },
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

      // dadaji and dadiji
      {from: 17, to: 16, label: 'Married'},
      {from: 16, to: 17, label: 'Married'},

      // nanaji and naniji
      {from: 21, to: 22, label: 'Married'},
      {from: 22, to: 21, label: 'Married'},

      // sons of dadaji and dadiji
      {from: 16, to: 1, label: 'Son'},
      {from: 16, to: 7, label: 'Son'},
      {from: 16, to: 8, label: 'Son'},
      {from: 16, to: 9, label: 'Son'},
      {from: 16, to: 31, label: 'Daughter'},
      {from: 17, to: 1, label: 'Son'},
      {from: 17, to: 7, label: 'Son'},
      {from: 17, to: 8, label: 'Son'},
      {from: 17, to: 9, label: 'Son'},
      {from: 17, to: 31, label: 'Daughter'},

      // bade tauji
      {from: 7, to: 18, label: 'Married'},
      {from: 18, to: 7, label: 'Married'},
      {from: 7, to: 12, label: 'Daughter'},
      {from: 7, to: 13, label: 'Daughter'},
      {from: 18, to: 12, label: 'Daughter'},
      {from: 18, to: 13, label: 'Daughter'},

      // chote tauji
      {from: 8, to: 19, label: 'Married'},
      {from: 19, to: 8, label: 'Married'},
      {from: 8, to: 14, label: 'Son'},
      {from: 8, to: 15, label: 'Daughter'},
      {from: 19, to: 14, label: 'Son'},
      {from: 19, to: 15, label: 'Daughter'},

      // dabli chacha
      {from: 9, to: 20, label: 'Married'},
      {from: 20, to: 9, label: 'Married'},
      {from: 9, to: 11, label: 'Son'},
      {from: 9, to: 10, label: 'Son'},
      {from: 20, to: 11, label: 'Son'},
      {from: 20, to: 10, label: 'Son'},

      // Mummy and mamas
      {from: 21, to: 23, label: 'Son'},
      {from: 21, to: 24, label: 'Son'},
      {from: 21, to: 2, label: 'Daughter'},
      {from: 22, to: 23, label: 'Son'},
      {from: 22, to: 24, label: 'Son'},
      {from: 22, to: 2, label: 'Daughter'},

      // Bade mamaji
      {from: 25, to: 23, label: 'Married'},
      {from: 23, to: 25, label: 'Married'},
      {from: 23, to: 27, label: 'Daughter'},
      {from: 23, to: 28, label: 'Son'},
      {from: 25, to: 27, label: 'Daughter'},
      {from: 25, to: 28, label: 'Son'},

      // Chote mamaji
      {from: 24, to: 26, label: 'Married'},
      {from: 26, to: 24, label: 'Married'},
      {from: 24, to: 29, label: 'Son'},
      {from: 24, to: 30, label: 'Son'},
      {from: 26, to: 29, label: 'Son'},
      {from: 26, to: 30, label: 'Son'},

      // Fufaji
      {from: 31, to: 32, label: 'Married'},
      {from: 32, to: 31, label: 'Married'},
      {from: 32, to: 33, label: 'Son'},
      {from: 32, to: 34, label: 'Son'},
      {from: 32, to: 35, label: 'Daughter'},
      {from: 31, to: 33, label: 'Son'},
      {from: 31, to: 34, label: 'Son'},
      {from: 31, to: 35, label: 'Daughter'},
    ]
  };

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
