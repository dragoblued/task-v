import React,{ useState, useEffect} from 'react';
import FormSubmit from './FormSubmit';
import axios from 'axios';

const TaskTwoComponent: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const addHandler = (name: string) => {
        const url = `http://numbersapi.com/${name}`
        axios.get(url)
            .then(response => {
                console.log(response.data);
                setAnswer(prev => prev = response.data)
        })
	}
    return(
        <>
            <FormSubmit textPlaceholder={"Введите любое число"} onAdd={addHandler}/>
            <div className="text_answer">{answer}</div>
        </>
    )
}

export default TaskTwoComponent;