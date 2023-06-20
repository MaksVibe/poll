import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setInputState } from '../../redux/inputs/inputsOperations';
import {
    selectDepartament,
    selectInputs,
    selectStack,
} from '../../redux/selectors';
import {
    addAmount,
    addTechnology,
    fetchTechs,
} from '../../redux/techs/techsOperations';
import Container from '../Container/Container';
import './TechStack.css';
import 'react-toastify/dist/ReactToastify.css';

export default function TechStack() {
    const dispatch = useDispatch();
    const stack = useSelector(selectStack);
    const departament = useSelector(selectDepartament);
    const inputs = useSelector(selectInputs);

    const input = inputs[departament];

    const handleInput = e => {
        dispatch(
            setInputState({
                departament,
                value: e.target.value,
                newTech: false,
            })
        );
    };

    const handleClick = () => {
        dispatch(addTechnology({ query: departament, body: input.value }));
        dispatch(setInputState({ departament, value: '', newTech: true }));
        setTimeout(() => {
            dispatch(fetchTechs(departament));
        }, 200);
    };

    const handleAdd = e => {
        dispatch(addAmount({ query: departament, id: e.target.id }));
        setTimeout(() => {
            dispatch(fetchTechs(departament));
        }, 500);
    };

    return (
        <Container>
            <p style={{ padding: '10px' }}>
                Add your technology or find and vote for existing one
            </p>
            <div className="wrapper">
                <div>
                    <input
                        type="text"
                        placeholder="Your variant"
                        className={`input ${
                            departament && input.isValid === false
                                ? 'invalid'
                                : ''
                        }`}
                        max={30}
                        value={departament ? input.value : ''}
                        onChange={handleInput}
                    />
                    <button
                        type="button"
                        disabled={
                            departament &&
                            input.isValid &&
                            input.value.length > 0
                                ? false
                                : true
                        }
                        className="button"
                        style={{ display: 'inline-block', marginLeft: '20px' }}
                        onClick={handleClick}
                    >
                        Add
                    </button>
                    <div className="inv-text">
                        {departament && (
                            <p
                                className={
                                    input.isValid === true
                                        ? 'fade-out'
                                        : 'fade-in'
                                }
                            >
                                Please, use only latin letters
                            </p>
                        )}
                        {departament && (
                            <p
                                className={
                                    input.isEmpty === false
                                        ? 'fade-out'
                                        : 'fade-in'
                                }
                            >
                                The field can't be empty
                            </p>
                        )}
                    </div>
                </div>
                <div className="separator"></div>
                <ul className="technologies">
                    {stack &&
                        stack.map((item, index) => (
                            <li key={index + 1} className="technology">
                                <p>{item.name}</p>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <p>{item.amount}</p>
                                    <button
                                        onClick={handleAdd}
                                        id={item._id}
                                        className="addBtn"
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
            <ToastContainer />
        </Container>
    );
}
