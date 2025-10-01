import MainLayout from "pages/layout";
import Packages from "pages/packages";
import { Suspense } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { routes } from "routes/routes";

export default function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Packages />} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </MemoryRouter>
  );
}
