import React , {Component} from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import {ProgressBar} from 'react-mdl'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Skills extends Component
{
    
    render(){
        return(
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>


        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}>
            <img className="selenium" src="https://img.icons8.com/color/500/000000/selenium-test-automation.png"></img>
          <div className="nodejs-progress" style={{width: '80%',height:'4%', margin: 'auto'}}>
          <Progress percent={90} status="active" />
          </div>
          
          <img className="appium" src="https://vikramviknowledgesharing.files.wordpress.com/2017/01/appium.png"></img>
          <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={90} status="active" />
          </div>
          
          <img className="postman" src="https://user-images.githubusercontent.com/4667360/35480795-3e994fd6-043c-11e8-807b-c196ea4a12e7.png"></img>
        <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={95} status="active" />
          </div>

          <img className="gatling" src="https://gatling.io/wp-content/uploads/2018/02/Gatling-dark-logo.png"></img>
        <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={88} status="active" />
          </div>
 

          
           </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}>
             <svg viewBox="-130 30 900 68">
            <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"></path>
          </svg>
          <div className="nodejs-progress" style={{width: '80%',height:'4%', margin: 'auto'}}>
          <Progress percent={80} status="active" />
          </div>
          
          <svg viewBox="-130 40 900 50">
            <path d="M40.53,77.82V50.74H42V55a5.57,5.57,0,0,0,.48-.6,7.28,7.28,0,0,1,6.64-4.12c3.35-.1,6.07,1.14,7.67,4.12a13.24,13.24,0,0,1,.32,12.14c-1.49,3.34-5.17,5-9.11,4.39a7.37,7.37,0,0,1-5.88-3.88V77.82ZM42,60.32c.13,1.32.18,2.26.33,3.18.58,3.62,2.72,5.77,6.08,6.16A6.91,6.91,0,0,0,56,65.27a11.77,11.77,0,0,0-.26-9.68,6.77,6.77,0,0,0-7.13-3.94,6.59,6.59,0,0,0-5.89,4.87A33.4,33.4,0,0,0,42,60.32Z"></path><path d="M88.41,64A7.92,7.92,0,0,1,80.67,71c-6.16.31-9.05-3.78-9.51-8.5A13.62,13.62,0,0,1,72.36,55a8.37,8.37,0,0,1,8.71-4.67,8,8,0,0,1,7.1,6.09,41.09,41.09,0,0,1,.69,4.5H72.67c-.3,4.28,2,7.72,5.26,8.55,4.06,1,7.53-.76,8.79-4.62C87,63.86,87.51,63.72,88.41,64ZM72.67,59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76,51.57,72.86,54.75,72.67,59.55Z"></path><path d="M91.39,64.1h1.42A5.69,5.69,0,0,0,96.15,69a8.73,8.73,0,0,0,7.58-.2,3.41,3.41,0,0,0,2-3.35,3.09,3.09,0,0,0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25,35.25,0,0,1,94,59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21,10.21,0,0,1,9.76-.15,5.14,5.14,0,0,1,2.6,5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17,9.17,0,0,0-3,.91,3,3,0,0,0-1.74,3,3,3,0,0,0,2,2.82c1.54.56,3.15.92,4.73,1.36,1.27.35,2.59.58,3.82,1a4.51,4.51,0,0,1,3.1,4.07,4.81,4.81,0,0,1-2.59,5c-3.34,1.89-8.84,1.39-11.29-1A6.67,6.67,0,0,1,91.39,64.1Z"></path><path d="M125.21,56.61h-1.33c0-.18-.07-.34-.09-.49a4.35,4.35,0,0,0-3.54-4.18,8.73,8.73,0,0,0-5.61.27,3.41,3.41,0,0,0-2.47,3.25,3.14,3.14,0,0,0,2.4,3.16c2,.62,4.05,1,6.08,1.56a17,17,0,0,1,1.94.59,5,5,0,0,1,.27,9.31,11.13,11.13,0,0,1-9,.09,6.24,6.24,0,0,1-3.76-6.06l.56,0h.74a7.29,7.29,0,0,0,11.1,4.64,3.57,3.57,0,0,0,1.92-3.34,3.09,3.09,0,0,0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43,35.43,0,0,1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07,10.07,0,0,1,9.92-.11A5.23,5.23,0,0,1,125.21,56.61Z"></path><path d="M38.1,70.51a2.29,2.29,0,0,1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06,2.76-4.12,5.41-6,8.16a2.2,2.2,0,0,1-2.7,1.06l7.73-10.37-7.19-9.37a2.39,2.39,0,0,1,2.85,1c1.67,2.44,3.52,4.77,5.36,7.24,1.85-2.45,3.68-4.79,5.39-7.21a2.15,2.15,0,0,1,2.68-1l-2.79,3.7c-1.25,1.65-2.48,3.31-3.78,4.92a1,1,0,0,0,0,1.49C33.29,64.07,35.66,67.25,38.1,70.51Z"></path><path d="M70.92,50.66v1.4a7.25,7.25,0,0,0-7.72,7.49q0,4.94,0,9.88c0,.35,0,.7,0,1.12H61.77V50.74h1.4V54.8C64.9,51.84,67.57,50.74,70.92,50.66Z"></path><path d="M2.13,60c.21-1,.34-2.09.63-3.11,1.73-6.15,8.78-8.71,13.63-4.9,2.84,2.23,3.55,5.39,3.41,8.95h-16C3.54,67.3,8.13,71.14,14,69.18a6.09,6.09,0,0,0,3.87-4.31c.31-1,.81-1.17,1.76-.88a8.12,8.12,0,0,1-3.88,5.93,9.4,9.4,0,0,1-10.95-1.4,9.85,9.85,0,0,1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13,60.85,2.13,60Zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09,51.6,4,54.8,3.81,59.55Z"></path>
          </svg>
          <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={85} status="active" />
          </div>
          <svg viewBox="-130 0 900 150">
<path d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
</svg>
        <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={55} status="active" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          onClick={() => this.parallax.scrollTo(0)}>
         <svg viewBox="-110 -40 900 180">
<path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
</svg>
<div className="nodejs-progress" style={{width: '80%',height:'4%', margin: 'auto'}}>
          <Progress percent={90} status="active" />
          </div>
          
          <img className="python" src="https://www.python.org/static/img/python-logo@2x.png"></img>
        <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={88} status="active" />
          </div>
          <img className="javascript" src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png"></img>
        <div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={85} status="active" />
          </div>
          <svg viewBox="-250 10 1600 120">
<path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M20 96.9v-8.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.9 1.8 1.9v17c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2.7.1 5.1 1.1 7.1 2.9zm-15.1 8.5c0 3 1.5 5.2 4.1 6.7 1.1.6 2.2.9 3.4.9 2.9 0 5.1-1.4 6.6-3.9.7-1.2 1-2.4 1-3.8 0-2.6-1.2-4.6-3.3-6.1-1.3-.9-2.7-1.4-4.2-1.4-3.2 0-5.5 1.6-6.9 4.5-.5 1-.7 2.1-.7 3.1zm32.2-11.3h.5c4.4 0 7.8 2.1 9.9 6 .9 1.5 1.3 3.2 1.3 5v.8c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1.1 3.6-1.5 5.5-1.5zm-7.2 11.3c0 2.9 1.4 5 3.9 6.5 1.2.7 2.4 1 3.8 1 2.9 0 5-1.5 6.5-3.9.7-1.2 1-2.4 1-3.8 0-2.7-1.3-4.8-3.5-6.3-1.2-.8-2.6-1.2-4-1.2-3.2 0-5.5 1.6-6.9 4.5-.6 1.1-.8 2.2-.8 3.2zm34.8-7.2c-.6-.3-1.7-.4-2.3-.4-3.2-.1-5.5 1.7-6.9 4.5-.5 1-.7 2-.7 3.1 0 3.3 1.7 5.6 4.6 7 1.1.5 2.4.6 3.6.6 1 0 2.5-.6 3.4-1.1l.2-.1h.7999999999999999c.9.2 1.5.7 1.5 1.7v.4c0 2.3-4.3 2.9-5.9 3-5.7.4-10-2.7-11.6-8.2-.3-.9-.4-1.9-.4-2.9v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2 0 3.9.6 5.6 1.7l.1.1.1.1c.2.3.3.6.3 1v.4c0 1-.7 1.5-1.6 1.7h-.30000000000000004c-.5 0-1.8-.6-2.3-.8zm12.4 2.6c1.5-1.5 3-3 4.5-4.4.4-.4 2-2.1 2.6-2.1h.7999999999999999c.9.2 1.5.7 1.5 1.7v.4c0 .6-.7 1.4-1.2 1.8l-2.7 2.7-4.6 4.7c2 2 4 4 5.9 6l1.6 1.7c.2.2.5.4.6.7.2.3.3.6.3.9v.5c-.2.9-.8 1.6-1.7 1.6h-.3c-.6 0-1.3-.7-1.8-1.1-.9-.8-1.8-1.7-2.6-2.6l-2.9-2.9v4.6c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-26.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.8 1.8 1.9v11.9zm47.6-6.6h.4c1.1 0 1.9.8 1.9 1.9 0 1.6-1.5 2-2.8 2-1.7 0-3.4 1-4.5 2.2-1.5 1.5-2.1 3.3-2.1 5.4v9.2c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-9.8c0-3.8 1.8-6.8 4.9-9 1.8-1.2 3.9-1.9 6.1-1.9zm-27.1 18.3c1.4.5 3 .4 4.4.2.7-.3 2.6-1.1 3.3-1h.2c.4.2.8.5 1 .9.5 1 .3 2-.7 2.6l-.3.2c-3.6 2.1-7.5 1.8-11.1-.2-1.7-.9-3-2.3-4-4l-.2-.4c-2.3-4-2-8.3.6-12.1.9-1.3 2.1-2.3 3.5-3.1l.5-.3c3.4-2 7.1-1.8 10.6-.1 1.9.9 3.4 2.3 4.5 4.1l.2.3c.8 1.3-.2 2.5-1.2 3.3-1.2.9-2.4 2-3.5 3-2.7 2.2-5.3 4.4-7.8 6.6zm-3.3-2.3l8.5-7.3c1-.8 2-1.7 3-2.6-.8-1-2.1-1.7-3.1-2.1-2.2-.8-4.4-.6-6.4.6-2.6 1.5-3.8 4-3.7 7 0 1.2.4 2.3 1 3.4.2.4.4.7.7 1"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.7 33.7h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.3h22.5v-11.3h13.5v22.6z"></path><path fill="#00AADA" d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.6-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.3.2-.5.2z"></path><path fill="#028BB8" d="M18.5 54.6c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"></path><path fill="#019BC6" d="M23.3 54.6c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.2 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.5 24.3h9.8v9.7h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.5 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.8 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.8 24.3h9.8v9.7h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zM62 35.5h9.8v9.8h-9.8v-9.8zm.9.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62 24.3h9.8v9.7h-9.8v-9.7zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62 13h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.2h-.8v-8.2zm1.4 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2zm1.4 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.3 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.6 61.2c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7.1-1.5 1.3-2.7 2.7-2.7"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.6 61.9c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .9-1.9 1.9-1.9M1 55.6h125.3c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.8 4.5-7.5 5.2"></path><path fill="#BFDBE0" d="M55.8 80.6c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6.1 6.1 13.7 10.8 27.6 10.9 1-.1 2-.1 3-.1z"></path><path fill="#D4EEF1" d="M45.9 72.7c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.4 1.3 5.8 2.5 11.4 2.9z"></path>
</svg>
<div className="express-progress" style={{width: '80%',height:'4%', margin: 'auto', }}>
          <Progress percent={80} status="active" />
          </div>
          


        </ParallaxLayer>
        
      </Parallax>
        )
    }
}

export default Skills