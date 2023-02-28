import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import flower from "../../assets/flower-of-life.png";
import { NavbarItemsConfig } from "../../config/NavbarItemsConfig";

const Navbar = () => {
	const navigate = useNavigate();
	const onIconClick = () => {
		navigate("/");
	};

	return (
		<div className={styles.navbar}>
			<img
				src={flower}
				alt='Navbar-logo-flower-of-life'
				className={styles.icon}
				onClick={onIconClick}
			/>
			<ul className={styles.navList}>
				{NavbarItemsConfig.map(({ title, id }) => {
					return (
						<NavLink
							to={`/${id}`}
							key={id}
							className={({ isActive }) =>
								!isActive
									? styles.listLink
									: `${styles.listLink} ${styles.activeListLink}`
							}
						>
							<li className={styles.listItem}>{title}</li>
						</NavLink>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
