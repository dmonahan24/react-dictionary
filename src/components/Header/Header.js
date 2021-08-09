import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/categories'

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: LightMode ? "#000" : "#fff",
      },
      type: LightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  }

  return (
    <div className='header'>
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="header__inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField 
            className="header__search" 
            id="standard-basic" 
            label='Search a Word'
            value={word}
            onChange={(e) => setWord(e.target.value)}
             />

          <TextField
          select
          className="header__select"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
          label="Language"
        >
            {
              categories.map((option) => (
                <MenuItem key={ option.label } value={ option.label }>
                  { option.value }
                </MenuItem>
              ))}
        </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
