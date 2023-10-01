import { useReducer } from "react";
import "./App.css";

const logInReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "logIn": {
      return {
        ...state,
        myerror: "",
      };
    }
    case "success": {
      return {
        ...state,
        loggedIn: true,
        password: "",
      };
    }
    case "error": {
      return {
        ...state,
        myerror: "Incorrect name or password",
        loggedIn: false,
        userName: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};
function App() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [myerror, setError] = useState("");
  const [state, dispatch] = useReducer(logInReducer, {
    userName: "",
    password: "",
    loggedIn: false,
    myerror: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // setError("");
    dispatch({ type: "logIn" });
    try {
      if (state.userName === "omaima" && state.password === "omaima") {
        // setLoggedIn(true);
        dispatch({ type: "success" });
      } else {
        throw Error;
      }
    } catch (e) {
      // setError("Incorrect username or password");
      // setUserName("");
      // setPassword("");
      dispatch({ type: "error" });
    }
  };
  return (
    <div className="m-auto bg-slate-300 flex flex-col items-center justify-center p-4 w-2/3 mt-4 rounded-lg shadow-sm">
      <h1 className=" font-bold text-2xl text-cyan-950"> LOG IN </h1>
      <div>
        {state.loggedIn ? (
          <>
            <p>Welcome {state.userName}!</p>
            <button
              className="bg-cyan-900 text-white px-3 py-1 font-semibold hover:bg-pink-900 hover:shadow-md transition duration-300  w-32  text-lg rounded-full"
              onClick={() => {
                dispatch({ type: "logOut" });
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mt-2 flex flex-col items-center justify-center gap-2">
                <input
                  type="text"
                  autoComplete="username"
                  placeholder="User Name"
                  value={state.userName}
                  onChange={(e) => {
                    // setUserName(e.target.value);
                    dispatch({
                      type: "field",
                      fieldName: "userName",
                      payload: e.target.value,
                    });
                  }}
                  className="px-2 rounded-md bg-white border border-gray-400"
                />
                <input
                  type="text"
                  autoComplete="current-password"
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) => {
                    // setPassword(e.target.value);
                    dispatch({
                      type: "field",
                      fieldName: "password",
                      payload: e.target.value,
                    });
                  }}
                  className="px-2 rounded-md  border border-gray-400 "
                />
                <button
                  type="sumbit"
                  className="bg-cyan-900 text-white px-3 py-1 font-semibold hover:bg-pink-900 hover:shadow-md transition duration-300  w-32  text-lg rounded-full"
                >
                  Log In
                </button>
              </div>
              <div className="h-4">
                <p className="text-red-700">{state.myerror}</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
