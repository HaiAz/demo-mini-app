import Home from "pages/home";
import MainLayout from "pages/layout";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { routes } from "routes/routes";

export default function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
