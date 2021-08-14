import React from "react";
import Select from "react-select";
import './ContactTypeSelect.css';


const data = [
    {value: 'перезвоните мне', label: 'перезвоните мне'},
    {value: 'написать в Viber', label: 'написать в Viber'},
    {value: 'написать в Telegram', label: 'написать в Telegram'},
    {value: 'написать в WatsApp', label: 'написать в WatsApp'},

];


const ContactTypeSelect = ({onChange}) => {
    return (
        <Select
            options={data}
            defaultValue={data[0]}
            onChange={onChange}
            className="react-select__custom"
            classNamePrefix={'react-select'}
            isSearchable={false}

        />

    );
};

export default ContactTypeSelect;