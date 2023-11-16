const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const combineReducers = redux.combineReducers;
//create Actions
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Redux action for icecream",
  };
}

//create reducer

const initialCakeState = {
  numOfCakes: 10,
};
const initailIceCreameState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initailIceCreameState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ cake: cakeReducer,
iceCream:iceCreamReducer
});
//create store, store function accepts reducer as a parameter
const store = createStore(rootReducer);
console.log("Initial state ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
