import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";

import data from "./data/DataFolder";
import useTranverse from "./hook/use-transverse-tree";

function App() {
  const [exploreData, setExploreData] = useState(data);
  console.log(data);

  const { insertNode } = useTranverse();

  const handleTransverseNode = (folderId, item, isFolder) => {
    const finalRes = insertNode(exploreData, folderId, item, isFolder);
    setExploreData(finalRes);
  };

  return (
    <div className="App">
      <Folder
        handleTransverseNode={handleTransverseNode}
        explored={exploreData}
      />
    </div>
  );
}

export default App;
