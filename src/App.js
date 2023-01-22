import { Provider } from "react-redux";
import "./App.css";
import UserForm from "./components/userForm/userForm";
import store from './redux/store'


function App() {
  console.log(store.getState(),'nooo')
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
