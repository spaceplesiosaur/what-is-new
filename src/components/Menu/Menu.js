import React from 'react';
import './Menu.css'

const menuItems = [
  {name: 'Local News', image: '/favicon.ico'},
  {name: 'Technology', image: '/favicon.ico'},
  {name: 'Entertainment', image: '/favicon.ico'},
  {name: 'Science', image: '/favicon.ico'},
  {name: 'Health', image: '/favicon.ico'}
]

const ListedMenu = (props) => {
  return (
    <li className="menuCategory">
      <img className="menuItemImage" alt="menu icon" src={props.pic}/>
      <p className="menuItemName">{props.name}</p>
    </li>
  )
}

const listItems = menuItems.map((item, i) => {
  return (
    <ListedMenu
    key={i}
    name={item.name}
    pic={item.image}
  />
)
});

const Menu = () => {
  return (
    <section className="menuContainer">
      <h1 className="menuHeader">What's New?</h1>
      <ul>
      {listItems}
     </ul>
    </section>
  )
}

export default Menu;
