import React, { useRef} from 'react';
import './FormSubmit.scss';

interface FormSubmitProps {
    onAdd(title: string): void,
    textPlaceholder: string
}

const FormSubmit: React.FC<FormSubmitProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        props.onAdd(ref.current!.value);
        ref.current!.value = '';
    }

    return(
        <form className="input_img" 
                onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="title" 
                ref={ref}
                placeholder={props.textPlaceholder}
            />
            <input type="submit" className="button_submit" value="SEND" />
        </form>
    )
}

export default FormSubmit;