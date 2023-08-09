import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MegaMenu extends Component {

    constructor(props){
      super();

    }
    
    MenuItemClick = (e)=>{
      e.target.classList.toggle("active");
      var panel = e.target.nextElementSibling;
          if(panel.style.maxHeight){
            panel.style.maxHeight = null;
          }else{
            panel.style.maxHeight = panel.scrollHeight+"px"
          }
    }

  render() {

    const CatList = this.props.data;
    const MyView = CatList.map((CatList,i)=>{
        return <div key={i.toString()}>
        <button onClick={this.MenuItemClick} className='accordion'>
        <img className='accordionMenuIcon' src={CatList.category_image} alt='some'></img> {CatList.category_name}
      </button>
            <div className='panel'>
            <ul>
            {
              (CatList.subcategory_name).map((SubList,i)=>{
                return <li key={i}>
              <Link to={"/productsubcategory/"+CatList.category_name+"/"+SubList.subcategory_name}  className='accordionItem'>{SubList.subcategory_name}</Link>
              </li>
              })
            }
            
            </ul>
            </div>
        </div>
    });

    return (
      <div className='accordionMenuDiv'>
        <div className='accordionMenuDivInside'>
            {MyView}
        </div>
      </div>
    )
  }
}

export default MegaMenu
