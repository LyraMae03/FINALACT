import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1 style={{color: "red"}}>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} {item.middle_name} {item.last_name}: {item.name_extension} - {item.address} - {item.zip_code} - {item.email} - {item.phone} - {item.date_of_birth} - {item.place_of_birth} - {item.sex} - {item.civil_status} - {item.height} - {item.blood_type} - {item.citizenship} - {item.mothers_first_name} - {item.mothers_middle_name}  - {item.mothers_last_name} - {item.fathers_first_name} - {item.fathers_middle_name} - {item.fathers_last_name} - {item.spouses_middle_name} - {item.spouses_first_name} - {item.gsis_id_no} - {item.philhealth_no} - {item.sss_no} - {item.tin_no} - {item.agency_employee_no}
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default ItemList;