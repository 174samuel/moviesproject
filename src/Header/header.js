import css from "./header.module.css";
import {FaPlus} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const buttons=["Movies" ,"Tv","More"]

const Header =()=>{
   const nav=useNavigate()
    const changeRoute = (target) => {
        nav(target)
    }
    const changeToApp=()=>{
       nav('/')
    }

                                                                                                     // key
    return (

            <div className={css.header}>
                <div className={css.leftHeader}>
                    <img onClick={changeToApp} src="https://www.sam.biz/wp-content/uploads/2023/09/SAM_TM_color_rgb.png" />
                    {buttons.map(item => (
                        <button key={item} onClick={() => changeRoute(`/${item.toLowerCase()}`)} className={css.buttonsHeader}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className={css.rightHeader}>
                    <FaPlus className={css.buttonsHeader} />
                    <button key="en" className={`${css.en} ${css.buttonsHeader}`}>EN</button>
                    <button className={css.buttonsHeader} key="login">Login</button>
                    <button className={css.buttonsHeader} key="joinSam">Join Sam</button>
                </div>
            </div>
    );
}

export default Header