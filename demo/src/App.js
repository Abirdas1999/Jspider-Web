import Child from "./Components/Child";

function App() {
  let sname = "Abir";
	return (
		<div>
			<h1>Hello</h1>
			<Child sname={sname}/>
		</div>
	);
}

export default App;
