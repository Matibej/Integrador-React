import { createGlobalStyle } from "styled-components";
import img from "./cool-background.png"

export const GlobalStyles = createGlobalStyle`

:root{
    --background: #333533;
    --background-alt: #202020;
    --primary: #d6d6d6;
    --secondary: #ffee32;
    --tertiary: #ffd100;
    --gradient-background: linear-gradient(180deg, rgba(51,53,51,1) 0%, rgba(32,32,32,1) 50%);
}

html{
    scroll-behavior: smooth;
    
}

*{
  box-sizing: border-box;  
  margin: 0;
  padding: 0;
}

body{
    font-family: 'Poppins', sans-serif;
    background: url(${img});
    background-size: cover;
    background-position: center;
    color: var(--primary);
    
}

a{
    text-decoration: none;
    color: var(--primary);
    font-weight: 600;
}

li{
    list-style: none;
}

`