import { Outlet, Link } from "react-router-dom";

function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="carduser">Card User</Link></li>
                    <li><Link to="calendar">Calendar</Link></li>
                    <li><Link to="todolist">To-Do List</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Portfolio;
