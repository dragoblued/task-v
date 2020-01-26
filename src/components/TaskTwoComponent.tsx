import React,{ useState, useEffect} from 'react';
import FormSubmit from './FormSubmit';
import axios from 'axios';

const TaskTwoComponent: React.FC = () => {
    const [answer, setAnswer] = useState('');
    const [load, setLoad] = useState(false);
    const addHandler = (name: string) => {
        const url = `http://numbersapi.com/${name}`
        setLoad(prev => prev = true)
        setTimeout(() => {
            axios.get(url)
                .then(response => {
                    setLoad(prev => prev = false)
                    setAnswer(prev => prev = response.data)
            })
        }, 2000);
        
	}
    const loader = <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-green-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>;
    return(
        <>
            <FormSubmit textPlaceholder={"Введите любое число"} onAdd={addHandler}/>
            <div className="text_answer">{load === false ? answer : loader}</div>
        </>
    )
}

export default TaskTwoComponent;