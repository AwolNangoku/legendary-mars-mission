import React from 'react';
import {FieldContainer, FieldInput, FieldInputWrapper, FieldLabel, FieldLabelWrapper} from "./styled";

const FormField = ({label, type, id, value, onChange}) => (
    <FieldContainer>
        <FieldLabelWrapper>
            <FieldLabel htmlFor={id}>
                {label}
            </FieldLabel>
        </FieldLabelWrapper>
        <FieldInputWrapper>
            <FieldInput type={type} id={id} value={value} onChange={onChange}/>
        </FieldInputWrapper>
    </FieldContainer>
);

export default FormField;