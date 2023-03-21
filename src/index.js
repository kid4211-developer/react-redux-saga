import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

// thunk 에서 router history 객체를 사용하려면, BrowserHistory instance 를 직접 만들어서 적용해야 한다.
const customHistory = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * redux-thunk 의 withExtraArgument 를 사용하면 thunk 함수에서 사전에 정해준 값들을 참조 할 수 있다.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      ReduxThunk.withExtraArgument({ history: customHistory })
    )
  )
);

root.render(
  <React.StrictMode>
    <BrowserRouter history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
