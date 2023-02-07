import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Group from './Group'

var img = ['./src/img/1.png','./src/img/2.png','./src/img/3.png']
function App() {
  

  return (
    <div className="app">
        <div className="services_item">
            <ul className="ul_services">
                <li className="item_service">
                    Home
                </li>
                <li className="item_service">
                    Service
                </li>
                <li className="item_service news">
                    News
                </li>
                <li className="item_service">
                    Blog
                </li>
                <li className="item_service">
                    Contact
                </li>
            </ul>
        </div>
        <div className="Home">
          <div className="img_home">
            <img src="./src/img/logo.png" alt="" className='img_home'/>
          </div>
            <div className="container">
                <h4 className="title_container">
                Lorem ipsum dolor sit asmet?
                </h4>
                <div className="content_container">
                  <p className="text_container">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                  </p>
                </div>
            </div>
            <div className="block_group">
                {
                  img.map((item,index) => {
                    return (
                      <div key={index} className="item_group">
                          <Group src={item} />
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default App
