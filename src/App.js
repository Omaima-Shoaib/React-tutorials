import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
function App() {
  return (
    <Provider store={store}>
    <div className="flex justify-center bg-slate-50 min-h-screen py-5">
      <div className="App flex flex-col  bg-gradient-to-b from-slate-200 to-slate-400 w-1/2 justify-center items-center rounded-lg shadow-lg border border-slate-300">
        {/* <CakeContainer></CakeContainer> */}
        <HooksCakeContainer></HooksCakeContainer>

      </div>
    </div>
    </Provider>
  );
}

export default App;
