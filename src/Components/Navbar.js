import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../Contexts/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContext';


export const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext)
  const { isLoggedIn, changeAuthStatus} = useContext(AuthContext)
  const theme = isDarkTheme ? darkTheme : lightTheme;

return <div>
<nav style={{ background: theme.background, color: theme.text, height: '120px'}}>
            <h2 style={{ textAlign: 'center'}}>Context API Demo</h2>
            <p 
            onClick={changeAuthStatus}
            style={{textAlign: 'center'}}
            >
              { isLoggedIn ? 'logged in' : 'logged out' }
              </p>
            <div className='ui three buttons'>
                <button className='ui button'>Overview</button>
                <button className='ui button'>Contact</button>
                <button className='ui button'>Support</button>

            </div>
        </nav>
</div>;
};
export default Navbar;