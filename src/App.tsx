
import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="w-full">
      <RouterProvider router={AppRoutes} />
    </div>
  )
}

export default App
