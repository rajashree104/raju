import { createGlobalStyle } from 'styled-components';
// import Sidebar from '../components/Sidebar';

const GlobalStyle = createGlobalStyle`
   :root{
    --primary-color: #007bff;
--secondary-color:#6c757d;
--background-dark-color:#10121A;
--background-dark-grey:#2f2f2f;
--border-color:#2e344e;
--background-light-color:#F1F1F1;
--white-color:#FFF;
--font-light-color:#a4acc4;
--font-dark-color:#313131;
--font-dark-color-2:#151515;
--sidebar-dark-color:#191d3B;
    /* --background-color:#000; */
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;
    font-size:1.2rem;


}
body{
 background-color: var(--background-dark-color);
color: var(--font-light-color);
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    width: 9px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    width: 9px;
    background-color: #383838;
}
a{
    /* font-family:inherity; */
    color: var(--white-color);
    font-size: 1rem;

}
h1{
    font-size:3rem;
    color: var(--white-color);
    span{
        font-size: 2rem;
    }
}
span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom:.6rem;
}
/* .u-margin-bottom{
    margin-bottom: 4rem;
} */
    .ham-burger-menu{
    position: absolute;
    right: 10%;
    top:2% ;
    z-index: 15;
    display: none;
    svg{
        font-size: 3rem;
    }
}
.nav-toggle{
    transform: translateX(0);
    z-index: 20;

}
    @media screen and (max-width:1200px) {
        .ham-burger-menu{
            display: block;
        }
}



`;

export default GlobalStyle;


// --primary-color: #007bff;
// --secondary-color:#6c757d;
// --background-dark-color:#10121A;


// --border-color:#2e344e;
// --background-light-color:F1F1F1;
// --white-color:#FFF;
// --font-light-color:#a4acc4;
// --font-dark-color:#313131;
// --font-dark-color-2:#151515;
// --sidebar-dark-color:#191d3B;


