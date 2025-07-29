import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .NetflixInputBase-input": {
    width: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeIn,
    }),
    "&:focus": {
      width: "auto",
    },
  },
}));

export default function SearchBox() {
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>();
  const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmIyZjcxY2YzZDY3ZjIyMDZhNzZiZDA5MzUyNzI4NSIsIm5iZiI6MTc1Mzc0OTIwMi41NzUsInN1YiI6IjY4ODgxNmQyOGJlZWEwMmU2ZThhNzg0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gV6a37NfADj6MvGpikQLhmDjbPmjjoSsgMX134u4-BM"

  const SearchMovie = () => {
    fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+TOKEN
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('🎬 Resultados de la búsqueda:', data);
      })
      .catch(error => {
        console.error('❌ Error en la petición:', error);
      });

  }

  const handleClickSearchIcon = () => {
    if (!isFocused) {
      searchInputRef.current?.focus();
      SearchMovie()
    }
  };

  return (
    <Search
      sx={
        isFocused ? { border: "1px solid white", backgroundColor: "black" } : {}
      }
    >
      <SearchIconWrapper onClick={handleClickSearchIcon}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        inputRef={searchInputRef}
        placeholder="Titles, people, genres"
        inputProps={{
          "aria-label": "search",
          onFocus: () => {
            setIsFocused(true);
          },
          onBlur: () => {
            setIsFocused(false);
          },
        }}
      />
    </Search>
  );
}
