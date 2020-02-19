import React, { useState, useContext } from 'react';
import sun from '../../../assets/sunny-icon.svg';
import moon from '../../../assets/night-icon.svg';
import { ThemeContext } from '../../../contexts/ThemeContext/';

import "./styles.scss";

const ToggleTheme = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const [icon, setIcon] = useState(true);

	const iconChange = () => {
		let newIcon = !icon;
		setIcon(newIcon);
	}

	return (
		<div className="toggle__box">
			<span>
			{icon ? (
				<img src={moon} className="moon-icon" />
			) : (
				<img src={sun} className="sun-icon" />
			)}
			</span>
			<div className="toggle__btn" onClick={toggleTheme}>
				<input type="checkbox" className="checkbox" onChange={iconChange}  />
				<div className="circle"></div>
				<div className="layer"></div>
			</div>
 		</div>
	)
}

export default ToggleTheme;