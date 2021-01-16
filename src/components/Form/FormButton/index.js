import React from 'react';
import {Button} from './styled';

const FormButton = ({title, onClick}) => (
    <Button onClick={onClick}>{title}</Button>
);

export default FormButton;