import React from 'react';
import Navbar from '../../components/navbar/navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counter-slice'

const Home = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <Navbar></Navbar>
            <h1>HOME</h1>

            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;
