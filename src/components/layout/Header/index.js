import { Link } from 'react-router-dom'

import './index.sass'

const Header = () => {
    return (
        <header>
            <h1>React Todo list</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    |
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

