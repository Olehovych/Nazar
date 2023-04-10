import React from 'react'
import  '../header/Header.css'
import logo from '../img/1.png'
import arrow from '../img/ArrowUp.svg'
export default function Header() {
  let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
  const toTop = document.querySelector('#toTop');
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    toTop.style.opacity = "0";
    toTop.style.cursor = "default";
  } else {
    toTop.style.opacity = "1";
    toTop.style.cursor = "pointer";
    toTop.style.transition = "opacity 0.3s ease-in-out";
  }
  prevScrollpos = currentScrollPos;
});

  return (
    
    <div id="App">
      <div id="backgroundImg">
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <p id="buttonDescription" onClick={() => {const el = document.querySelector("#serviceBlock");
                el.scrollIntoView({block: 'nearest',
                behavior: 'smooth'});}}>Послуги</p>
                <p id="buttonWork" onClick={() => {const el = document.querySelector("#workBlock");
                el.scrollIntoView({block: 'nearest',
                behavior: 'smooth'});}} >Роботи</p>
                <p id="buttonGetSettled" onClick={() => {const el = document.querySelector("#optInSection");
                el.scrollIntoView({block: 'nearest',
                behavior: 'smooth'});}}>Влаштуватись</p>
                <p id="buttonContacts" onClick={() => {const el = document.querySelector("footer");
                el.scrollIntoView({block: 'nearest',
                behavior: 'smooth'});}}>Контакти</p>
            </nav>
        </header>
        <div id="mainblock">
            <h1 id="track">Буріння свердловин</h1>
        </div>
    </div>
    <button id="toTop" onClick={() => {const el = document.querySelector("#App");
                el.scrollIntoView({block: 'nearest',
                behavior: 'smooth'});
                const toTop = document.querySelector('#toTop');
                toTop.style.opacity='0'
                }}>
                <img src={arrow} alt=""/>
                    </button>
    </div>
    
  )

}