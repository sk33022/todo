import React, {createContext, useContext} from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme : {
            text: '#ffffff',
            background: '#5c5c5c'
        }

    };


    changeTheme = () =>{
        this.setState( {isDarkTheme: !this.state.isDarkTheme});
    };
    render() {
    return <div>
        <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
            {this.props.children}
        </ThemeContext.Provider>
    </div>;
  }
}



