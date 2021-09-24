import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <header>
            <div>TechQuiz</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/login'>Sign In</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/register'>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;