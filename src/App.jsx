import React from "react";
import Tree from "./components/Tree";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import getTreeList from "./utils/trees";
import Footer from "./components/Footer";

export default function App() {
  const trees = getTreeList();
  let treeCount = 0;

  return (
    <main>
      <NavigationBar />
      <div className="flex flex-col gap-4 ">
        <button className="border-4 border-red-500">Button 1</button>
        <button className="border-2 border-red-500">Button 2</button>
        <button className="border-2 border-red-500">Button 2</button>
        <button className="border-2 border-red-500">Button 2</button>
        <button className="border-2 border-red-500">Button 2</button>
        <button className="border-2 border-red-500">Button 2</button>
      </div>

      <div className="content">
        <p>Changing our city, one tree at a time.</p>

        <p>
          Since 1994, Our City Forest has been the leading nonprofit in Silicon
          Valley for urban forestry and environmental education. We believe in
          the POWER OF TREES to transform homes, communities and cities and the
          POWER OF PEOPLE to help us achieve this needed transformation. Help us
          continue to grow by donating or by becoming a sustaining member.
        </p>

        <div>
          <button>Filter Planted Trees ({treeCount})</button>
        </div>

        <div className="tree-list">
          <Tree
            name={"Forest Green Oak"}
            description={
              "This is an upright growing, vigorous oak with a strong central leader."
            }
            dateAdded={"2024-06-23T10:48:07"}
            imageLink={
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
          />

          <Tree
            name={"Frontier Elm"}
            description={
              "This hardy, tolerant tree is a good choice for residential landscapes and along city streets."
            }
            dateAdded={"2024-06-23T10:48:07"}
            imageLink={
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
          />

          {trees.map((tree) => {
            return (
              <Tree
                key={tree.name}
                name={tree.name}
                description={tree.description}
                dateAdded={tree.dateAdded}
                imageLink={tree.imageLink}
              />
            );
          })}
        </div>

        <h3 className="tree-header">Tree Inventory</h3>
      </div>
      <Footer />
    </main>
  );
}
