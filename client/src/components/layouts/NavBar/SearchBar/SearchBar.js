import React from 'react'
import { InputBase } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import useStyles from './styles'

const SearchBar = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.search}>
      <div className={`${classes.searchIcon} icon200`}>
        <Search />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default SearchBar
