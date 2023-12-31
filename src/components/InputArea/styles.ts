import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    text-aling: center;
    color: #FBB03B
    `;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 5rem;
    height: 2rem;
    padding: 0 5px;
    border-radius: 15px;
    background-color: #FBB03B;
    box-shadow: 0px 5px 5px #CCC;
    color: white;
    cursor: pointer;

    &:hover {
        transition: 0.4s;
        background-color: transparent;
        color: #FBB03B;
    }
`;