import { Fragment } from "react";
import styles from './Navbar.module.css';
import image1 from '../Images/American-Tourister-Logo-removebg-preview.png'
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export function Navbar() {
    return (
        <Fragment>
            <div className={styles.main_nav}>
                <p>Free delivery on all orders in India</p>
            </div>
            <div className={styles.sub_nav}>
                <img src={image1} alt="" />
                <ul>
                    <li><strong>Shop</strong>by<strong>Color</strong></li>
                    <li>Luggage</li>
                    <li>Bagpacks</li>
                    <li>Duffles</li>
                    <li>Browse More</li>
                    <li>Discover</li>
                </ul>
                <div className={styles.icons_nav}>
                    <p><PinDropOutlinedIcon fontSize="10px" /></p>
                    <p><PersonOutlineOutlinedIcon fontSize="10px" /></p>
                    <p><SearchOutlinedIcon fontSize="10px" /></p>
                    <p><ShoppingCartOutlinedIcon fontSize="10px" /></p>
                </div>
            </div>
        </Fragment>
    )
}
