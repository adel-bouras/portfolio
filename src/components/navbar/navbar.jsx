import './navbar.css';
import logo from './../../../public/icon.jpeg';
import { useState } from 'react';


export default function NavBar(){
    const [dark , setDark] = useState(true);


    const handlMode = ()=>{
        setDark(!dark);
        (dark) ? (document.body.className='darkMode') : (document.body.className='');
    }
    return(
    <div id="header">
    <img src={logo} style={{width : '70px', borderRadius : '50%' , cursor : 'pointer'}} alt="adel's logo" />

              <input className="label-check" id="label-check" type="checkbox" />
                <label id='overlay' htmlFor="label-check"></label>
                <input className="modes" id="modes" type="checkbox" />
                <label onClick={handlMode} id='modesIcon' htmlFor="modes">
                    {
                        (dark) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
                        )
                    }

                </label>
            <div className="container">  
                <label htmlFor="label-check" className="hamburger-label">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                <label></label></label>
            </div>
        <ul className='unordredist'>
            <li className='list active'> <a href="">Home</a> </li>
            <li className='list'> <a href="">About</a> </li>
            <li className='list'> <a href="">Projects</a> </li>
            <li className='list'> <a href="">Skills</a> </li>
            <li className='list'> <a href="">Contact me</a> </li>
        </ul>
    </div>
    )
}