import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *::after, *::before {
  box-sizing: inherit;
}

body {
  background:${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

a, button {
  font-family: 'Montserrat', sans-serif;
}



`
export default GlobalStyles
