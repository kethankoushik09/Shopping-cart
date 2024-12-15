import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/pages/Nav";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

const rt = createBrowserRouter([
  {path:"/", element:<Nav/>,
    children:[
      {index: true,element:<Home/>},
      {path:"cart",element:<Cart/>}
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={rt}/>
    </Provider>
  );
}

export default App;
