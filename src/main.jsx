import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Services from "./components/Services.jsx";
import Trans from "./routes/Trans.jsx";
import Eservs from "./routes/Eservs.jsx";
import Ads from "./routes/Ads.jsx";
import It from "./routes/It.jsx";
import Emarkting from "./routes/Emarkting.jsx";
import StuS from "./routes/StuS.jsx";
import Vip from "./routes/Vip.jsx";
import Print from "./routes/Print.jsx";
import AdsG from "./routes/AdsG.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Services />,
      },
      {
        path: "/translate",
        element: <Trans />,
      },
      {
        path: "/ads",
        element: <Ads />,
      },
      {
        path: "/it",
        element: <It />,
      },
      {
        path: "/emarkting",
        element: <Emarkting />,
      },
      {
        path: "/studentservices",
        element: <StuS />,
      },
      {
        path: "/eservices",
        element: <Eservs />,
      },
      {
        path: "/vip",
        element: <Vip />,
      },
      {
        path: "/print",
        element: <Print />,
      },
      {
        path: "/adsg",
        element: <AdsG />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
