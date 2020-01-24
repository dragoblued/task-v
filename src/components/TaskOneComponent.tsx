import React,{ useState, useEffect} from 'react';
import ImgForm from './ImgForm';
import {IImg} from './interfaces';
import ImgList from './ImgList';

const TaskOneComponent: React.FC  = () => {
	const [images, setImgs] = useState<IImg[]>([])
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('images') || '[]') as IImg[]
		setImgs(saved)
	}, [])
	useEffect(() => {
		localStorage.setItem('images', JSON.stringify(images))
	}, [images])
	const addHandler = (url: string) => {
		const newImg: IImg = {
			url: url,
			id: Date.now()
		}
		setImgs( prev => [newImg, ...prev])
		console.log(images)
	}
	const removeHandler = (id: number) => {
	    setImgs(prev => prev.filter(item => item.id !== id))
  	}
	return(
		<div>
			<ImgForm onAdd={addHandler}/>
			<ImgList imgs={images} onRemove={removeHandler}/>
		</div>
	);
}

export default TaskOneComponent;