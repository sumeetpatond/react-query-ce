import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home.page";
import Heros from "./components/Heros.page";
import SuperHerosPage from "./components/SuperHeros.page";
import SuperHeroPage from "./components/SuperHero.page";
import MultipleQueriesPage from "./components/MultipleQueries.page";
import DependentQueries from "./components/DependentQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/heroes">Heroes</Link>
              </li>
              <li>
                <Link to="/superheroes">Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/multiplequeries"
              element={<MultipleQueriesPage heroIds={[1, 2]} />}
            />
            <Route
              path="/dependentqueries"
              element={<DependentQueries emailid={"a@a.com"} />}
            />
            <Route path="/superheroes/:heroId" element={<SuperHeroPage />} />
            <Route path="/superheroes" element={<SuperHerosPage />} />
            <Route path="/heroes" element={<Heros />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
