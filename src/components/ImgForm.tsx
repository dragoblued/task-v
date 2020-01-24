import React, { useRef} from 'react';
import './ImgForm.scss';

interface ImgFormProps {
	onAdd(title: string): void
}

const ImgForm: React.FC<ImgFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        props.onAdd(ref.current!.value)
        ref.current!.value = ''
    }
    return(
        <form className="form_task2" 
                onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="title" 
                ref={ref}
                placeholder='Введите адрес картинки'
            />
            <input type="submit" className="button_submit" value="Отправить" />
        </form>
    )
}

export default ImgForm;