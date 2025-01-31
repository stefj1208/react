import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CardUser from "./pages/CardUser";
import Calendar from "./pages/Calendar";
import ToDoList from "./pages/ToDoList";
import PageError from "./pages/PageError";

// Composant Root avec la navigation
function Root() {
    return (
        <>
            <header>
                <h1>Mon Portfolio</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2025 - Mon Portfolio</p>
            </footer>
        </>
    );
}

// Définition des routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            { path: "", element: <Accueil /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "contact", element: <Contact /> },
        ],
    },
    {
        path: "/portfolio",
        element: <Portfolio />,
        children: [
            { path: "carduser", element: <CardUser /> },
            { path: "calendar", element: <Calendar /> },
            { path: "todolist", element: <ToDoList /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
