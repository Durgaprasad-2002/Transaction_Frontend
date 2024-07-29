import Dashboard from "./components/Dashboard";
import ContextProvider from "./Context/Context";

function App() {
  return (
    <ContextProvider>
      <Dashboard />
    </ContextProvider>
  );
}

export default App;
