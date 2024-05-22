import { Home, NewIdeas } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { theme } = useTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <NewIdeas />,
    },
  ]);

  return (
    <div
      className="flex flex-col items-center p-4 md:p-10 min-h-screen"
      data-theme={theme}
    >
      <div className="max-w-2xl w-full items-center flex flex-col">
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
