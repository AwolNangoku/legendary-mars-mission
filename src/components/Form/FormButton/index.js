import React from 'react';
import {Button} from './styled';

const FormButton = ({title, onClick, isDisabled}) => (
    <Button
        onClick={onClick}
        disabled={isDisabled}
    >
        {title}
    </Button>
);

export default FormButton;