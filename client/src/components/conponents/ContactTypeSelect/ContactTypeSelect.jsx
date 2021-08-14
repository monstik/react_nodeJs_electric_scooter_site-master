import React from "react";
import Select from "react-select";
import './ContactTypeSelect.css';


const data = [
    {value: 'перевоните мне', label: 'перевоните мне'},
    {value: 'написать в Viber', label: 'перевоните в Viber'},
    {value: 'написать в Telegram', label: 'написать в Telegram'},
    {value: 'написать в WatsApp', label: 'написать в WatsApp'},

];


const ContactTypeSelect = () => {
    return (
        <Select
            options={data}
            defaultValue={data[0]}
            className="react-select__custom"
            classNamePrefix={'react-select'}
            isSearchable={false}

        />


    );
};

export default ContactTypeSelect;