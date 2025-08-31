
import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="w-full font-calibri">
      <RouterProvider router={AppRoutes} />
    </div>
  )
}

export default App
