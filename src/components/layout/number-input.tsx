//Packages
import * as React from 'react';

//Interfaces
interface INumberInputProps {
    min?: number,
    value: number | '',
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const NumberInput: React.FC<INumberInputProps> = (props: INumberInputProps) =>
    <input
        type="number" 
        className='form-control' 
        placeholder='#' 
        pattern="[0-9]*"
        onChange={props.onChange}
        value={props.value}
        min={props.min} 
    />;