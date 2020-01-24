import React from 'react';
import {IImg} from './interfaces';
import './ImgList.scss';

type ImgListProps = {
	imgs: IImg[]
	onRemove(id: number): void
}

const ImgList: React.FC<ImgListProps> = ({imgs, onRemove}) => {
	return(
		<ul className="list">
			{imgs.map(item => {
				const imgStyle = {
					backgroundImage: `url(${item.url})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					margin: '0 auto',
					width: '90%',
					height: '90%',
					borderRadius: '2px'
				}
				return (
					<li key={item.id} className="list_item">
						<div className="item">
							<div style={imgStyle}></div>
						</div>
						<i className="material-icons black-text btn" onClick={() => onRemove(item.id)}>delete</i>
					</li>
				);
			})}
		</ul>
	)
}

export default ImgList;