
import { RouterProvider } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 w-full font-calibri text-gray-900 dark:text-gray-100 transition-colors">
      <RouterProvider router={AppRoutes} />
    </div>
  )
}

export default App
