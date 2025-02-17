import React from 'react'
import './css/Exploremenu.css'
import { menu_list  } from '../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu  d-flex flex-column" id='explore-menu'>
        <h1 className='text-dark fw-normal'>Explore Menu</h1>
        <p className="explore-menu-text">choose from diverse menu featuring a delectable array of dishes.Our mission is to specify your cravings and elevate your dining expriences,one delicious meal at a time</p>
        <div className="explore-menu-list d-flex justify-content-between align-items-center gap-5 text-center ">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })

            }
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
