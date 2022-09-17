import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


/* Google Font Import - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  /* ===== Colors ===== */
  --body-color: #e4e9f7;
  --sidebar-color: #fff;
  --primary-color: #695cfe;
  --primary-color-light: #f6f5ff;
  --toggle-color: #ddd;
  --text-color: #707070;

  /* ====== Transition ====== */
  --tran-03: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.3s ease;
  --tran-05: all 0.3s ease;
}

body {
  min-height: 100vh;
  background-color: var(--body-color);
  transition: var(--tran-05);
}
.logo-cont{
  display: flex;
  align-items: center;
  gap: 10px;
  
}
/* .logo-text {
  display: flex;
  flex-direction: column;
}
 .name {
  margin-top: 2px;
  font-size: 18px;
  font-weight: 600;
} */

header{
  position: relative;
}

/* ====== Toggle CSS ====== */
.toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%) rotate(180deg);
  height: 25px;
  width: 25px;
  color: var(--sidebar-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: var(--tran-05);
}


body.dark  header .toggle {
  color: var(--text-color);
}



 .menu {
  margin-top: 40px;
}
.sidebar.close {
  width: 88px;
}
.sidebar .sidebar-text{
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 1;
}
.sidebar.close .sidebar-text {
  opacity: 0;
}
.sidebar.close .toggle {
  transform: translateY(-50%) rotate(0deg);
}

/* ====== SideBar CSS ====== */
.sidebar li a {
  font-size: 16px;
  font-weight: 500;
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);
}
.sidebar li a:hover {
  background-color: var(--primary-color);
}


/* ====== Main CSS ====== */

.main {
  position: absolute;
  top: 0;
  top: 0;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  background-color: var(--body-color);
  transition: var(--tran-05);
}
.sidebar.close ~ .main {
  left: 78px;
  height: 100vh;
  width: calc(100% - 78px);
}
.sidebar .menu-bar {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}
.menu-bar::-webkit-scrollbar {
  display: none;
}

.main-container{
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding-top:  20px;
}



/* ====== searchbar css ====== */
.searchbar {
  position: relative;
  width: 80%;
  height: 50px;
  margin: 0 auto;
  margin: 10% auto;
}
.searchbar input {
  width: 100%;
  height: 100%;
  border: 1px solid var(--toggle-color);
  border-radius: 6px;
  padding: 0 20px;
  font-size: 18px;
  color: var(--text-color);
  transition: var(--tran-03);
}
.searchbar input:focus {
  outline: none;
  border: 1px solid var(--primary-color);
}
.searchbar input::placeholder {
  color: var(--text-color);
}
 .search-icon {
  position: absolute;
  top: 20%;
  right: 20px;
  font-size: 20px;
  color: var(--text-color);
  transition: var(--tran-03);
}
.searchbar input:focus ~ .search-icon {
  color: var(--primary-color);
}

/* ====== Collation item  CSS ====== */
.item {
  border-radius: 6px;
  background-color: var(--sidebar-color);
  margin-bottom: 20px;
  transition: var(--tran-03);
}

.animate-logo img{
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  margin: 0 auto;
  outline: none;
  transform: scale(1.2);
}

/* ====== Model style ====== */

.model-overlay{
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
 
}
.model-container{
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: var(--sidebar-color);
  z-index: 100;
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0  8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); */
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
.model-close{
  position: absolute;
  top: 8px;
  right: 8px;

  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: var(--tran-03);
  border: none;
  z-index: 100;
}
`;

export default GlobalStyles;
