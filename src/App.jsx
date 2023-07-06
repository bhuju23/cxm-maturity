import "./App.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Home } from './pages/Home'
import { AssessmentOne } from "./pages/AssessmentOne";
import { AssessmentTwo } from "./pages/AssessmentTwo";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/assessmentone" element={<AssessmentOne />}></Route>
        <Route path="/assessmenttwo" element={<AssessmentTwo />}></Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
