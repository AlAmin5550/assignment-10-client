import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Pages/Root";
import {
  createBrowserRouter,
} from "react-router-dom";
import TouristSpotsDetails from "../Pages/TouristSpotsDetails";
import AllTouristSpots from "../Pages/AllTouristSpots";
import CountriesSpots from "../Pages/CountriesSpots";
import AddSpots from "../Pages/AddSpots";
import MyList from "../Pages/MyList";
import UpdateSpot from "../Pages/UpdateSpot";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch('https://voyage-vista-server-nu.vercel.app/touristSpots'),
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/allSpots",
        loader: () => fetch('https://voyage-vista-server-nu.vercel.app/touristSpots'),
        element: <AllTouristSpots></AllTouristSpots>,
      },
      {
        path: "/allSpots/spotsDetails/:id",
        element: <TouristSpotsDetails></TouristSpotsDetails>,
        loader: ({ params }) => fetch(`https://voyage-vista-server-nu.vercel.app/touristSpots/${params.id}`)
      },
      {
        path: "/spotsDetails/:id",
        element: <TouristSpotsDetails></TouristSpotsDetails>,
        loader: ({ params }) => fetch(`https://voyage-vista-server-nu.vercel.app/touristSpots/${params.id}`)
      },
      {
        path:"/countrySpots/:name",
        loader: () => fetch(`https://voyage-vista-server-nu.vercel.app/touristSpots`),
        element:<CountriesSpots></CountriesSpots>
      },
      {
        path: "/countrySpots/:name/spotsDetails/:id",
        element: <TouristSpotsDetails></TouristSpotsDetails>,
        loader: ({ params }) => fetch(`https://voyage-vista-server-nu.vercel.app/touristSpots/${params.id}`)
      },
      {
        path:"/addSpots",
        element:<PrivateRoute><AddSpots></AddSpots></PrivateRoute>
      },
      {
        path:"/myList",
        element:<PrivateRoute><MyList></MyList></PrivateRoute> ,
        loader: () => fetch('https://voyage-vista-server-nu.vercel.app/touristSpots'),
      },
      {
        path:"/updateSpot/:id",
        element:<PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({ params }) => fetch(`https://voyage-vista-server-nu.vercel.app/touristSpots/${params.id}`)
      }

    ],
  },
  
]);

export default router;