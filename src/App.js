import DataGrid from "./components/DataGrid/DataGrid";

function App() {
  const titles = [
    "ID",
    "Title",
    "Description"
  ];

  const data = [
    {
      id: 1,
      title: "Title 1",
      description: "description 1"
    },
    {
      id: 2,
      title: "Title 2",
      description: "description 2"
    },
    {
      id: 3,
      title: "Title 3",
      description: "description 3"
    },
  ]

  return (
    <div className="App">
      <DataGrid titles={titles} data={data}/>
    </div>
  );
}

export default App;
