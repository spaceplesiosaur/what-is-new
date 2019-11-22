import React from 'react';
import './Menu.css'
import { FaBeer } from 'react-icons/fa';

const Menu = (props) => {
  const menuOptions = props.menuItems
  const listItems = menuOptions.map((item, i) => {
    const topicPicker = () => props.setTopic(item.id)
    return (
        <li className="menuCategory" key={i} id={item.id} onClick={topicPicker}>
          <img className="menuItemImage" alt="menu icon" src={item.image}/>
          <p className="menuItemName">{item.name}</p>
        </li>
      )
  });
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
