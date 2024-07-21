import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameExtension, setNameExtension] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateofBirth, setDateOfBirth] = useState('');
    const [placeofBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [mothersFirstName, setMothersFirstName] = useState('');
    const [mothersMiddleName, setMothersMiddleName] = useState('');
    const [mothersLastName, setMothersLastName] = useState('');
    const [fathersFirstName, setFatherFirstName] = useState('');
    const [fathersMiddleName, setFatherMiddleName] = useState('');
    const [fathersLastName, setFatherLastName] = useState('');
    const [spousesUsername, setSpousesUsername] = useState('');
    const [spousesMiddleName, setSpousesMiddleName] = useState('');
    const [spousesFirstName, setSpousesFirstName] = useState('');
    const [gsisIdNo, setGsisIdNo] = useState('');
    const [pagibigIdNo, setPagibigIdNo] = useState('');
    const [philhealthNo, setPhilhealthNo] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [tinNo, setTinNo] = useState('');
    const [agencyEmployeeNo, setAgencyEmployeeNo] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setNameExtension(item.nameExtension);
            setAddress(item.address);
            setZipCode(item.zipCode);
            setEmail(item.email);
            setPhone(item.phone);
            setDateOfBirth(item.date_of_birth);
            setDateOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.bloodType);
            setCitizenship(item.citizenship);
            setMothersFirstName(item.mothers_first_name);
            setMothersMiddleName(item.mothers_middle_name);
            setMothersLastName(item.mothers_last_name);
            setFatherFirstName(item.fathers_first_name);
            setFatherMiddleName(item.fathers_middle_name);
            setFatherLastName(item.fathers_last_name);
            setSpousesUsername(item.spouses_username);
            setSpousesMiddleName(item.spouses_middle_name);
            setSpousesFirstName(item.spouses_first_name);
            setGsisIdNo(item.gsisIdNo);
            setPagibigIdNo(item.pagibigIdNo);
            setPhilhealthNo(item.philhealthNo);
            setSssNo(item.sssNo);
            setTinNo(item.tinNo);
            setAgencyEmployeeNo(item.agencyEmployeeNo);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            name_extension: nameExtension,
            address,
            zip_code: zipCode,
            email,
            phone,
            date_of_birth: dateofBirth,
            place_of_birth: placeofBirth,
            sex,
            civil_status: civilStatus,
            height,
            weight,
            blood_type: bloodType,
            citizenship,
            mothers_first_name: mothersFirstName,
            mothers_middle_name: mothersMiddleName,
            mothers_last_name: mothersLastName,
            fathers_first_name: fathersFirstName,
            fathers_middle_name: fathersMiddleName,
            fathers_last_name: fathersLastName,
            spouses_username: spousesUsername,
            spouses_middle_name: spousesMiddleName,
            spouses_first_name: spousesFirstName,
            gsis_id_no: gsisIdNo,
            pagibig_id_no: pagibigIdNo,
            philhealth_no: philhealthNo,
            sss_no: sssNo,
            tin_no: tinNo,
            agency_employee_no: agencyEmployeeNo,
        };

        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label style={{backgroundColor: "yellow"}}>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Name Extension:</label>
                <input type="text" value={nameExtension} onChange={(e) => setNameExtension(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Zip Code:</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Date Of Birth:</label>
                <input type="text" value={dateofBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Place Of Birth:</label>
                <input type="text" value={placeofBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Civil Status:</label>
                <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Height:</label>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Weight:</label>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Blood Type:</label>
                <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Mother's First Name:</label>
                <input type="text" value={mothersFirstName} onChange={(e) => setMothersFirstName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Mother's Midlle Name:</label>
                <input type="text" value={mothersMiddleName} onChange={(e) => setMothersMiddleName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Mother's Last Name:</label>
                <input type="text" value={mothersLastName} onChange={(e) => setMothersLastName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Father's First Name:</label>
                <input type="text" value={fathersFirstName} onChange={(e) => setFatherFirstName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Father's Middle Name:</label>
                <input type="text" value={fathersMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Father's Last Name:</label>
                <input type="text" value={fathersLastName} onChange={(e) => setFatherLastName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Spouse's Username:</label>
                <input type="text" value={spousesUsername} onChange={(e) => setSpousesUsername(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Spouse's Middle Name:</label>
                <input type="text" value={spousesMiddleName} onChange={(e) => setSpousesMiddleName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>Spouse's First Name:</label>
                <input type="text" value={spousesFirstName} onChange={(e) => setSpousesFirstName(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>GSIS Id No:</label>
                <input type="text" value={gsisIdNo} onChange={(e) => setGsisIdNo(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>PAG-IBIG Id No:</label>
                <input type="text" value={pagibigIdNo} onChange={(e) => setPagibigIdNo(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>PHILHEALTH NO:</label>
                <input type="text" value={philhealthNo} onChange={(e) => setPhilhealthNo(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>SSS NO:</label>
                <input type="text" value={sssNo} onChange={(e) => setSssNo(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>TIN NO:</label>
                <input type="text" value={tinNo} onChange={(e) => setTinNo(e.target.value)} />
            </div>
            <div>
                <label style={{backgroundColor: "yellow"}}>AGENCY EMPLOYEE NO:</label>
                <input type="text" value={agencyEmployeeNo} onChange={(e) => setAgencyEmployeeNo(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
       
};
export default ItemForm;