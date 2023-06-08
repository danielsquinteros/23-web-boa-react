import { useState } from 'react';
import HeartState1 from './heartcolor.svg';
import HeartState2 from './heartscolor.svg';

const LikeButton = () => {
    const [isClick, setIsClick] = useState(false);
    const [counter, setCounter] = useState(216);

    const functionLike = () => {
        setIsClick(!isClick)
        if(isClick === false){
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }
    }
    
    const iconSelect = () => {
        if(isClick === false){
            return <img src={HeartState1} width={'40px'} /> 
        } else {
            return <img src={HeartState2} width={'40px'}/>
        }
    }

    return(
        <>
            <div className='button' onClick={functionLike}>
                {iconSelect()}
            </div>
            <p>{counter} likes</p>
        </>
    )
}

export default LikeButton;