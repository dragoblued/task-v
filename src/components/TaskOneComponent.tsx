import React,{ useState, useEffect} from 'react';
import FormSubmit from './FormSubmit';
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
			<FormSubmit onAdd={addHandler} textPlaceholder={'Введите адрес картинки'}/>
			<ImgList imgs={images} onRemove={removeHandler}/>
		</div>
	);
}

export default TaskOneComponent;