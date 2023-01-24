import React, { useState } from 'react';
import Data from "../data.json";
import { BsSortAlphaDown } from 'react-icons/bs';
import { Select } from 'antd';
const Table = () => {
    const [mainState, setMainState] = useState(Data.data)

    const uniqueName = [];
    const uniqueNames = Data.data.filter(element => {
        const isDuplicate = uniqueName.includes(element.name);
        if (!isDuplicate) {
        uniqueName.push(element.name);
        return true;
        }
        return false;
    });

    const filterFunction = (value) => {
        if(value === 'all') {
            return setMainState(Data.data)
        } else {
            return setMainState(Data.data.filter((item) => item.name === value))
        }
    }
    
    const unFilterFunction = (value) => {
        if(value === 'all') {
            return setMainState(Data.data)
        } else {
            return setMainState(Data.data.filter((item) => item.name !== value))
        }
    }

    const selectedDelet = (value) => {
        const toStr = value.toString()
        console.log(toStr)
        if(toStr === 'all') {
            return setMainState(Data.data)
        } else {
            return setMainState(Data.data.filter((item) => item.name !== toStr))
        }
    }
    const sortByEmail = () => {
        let sor = [...mainState].sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1);
        setMainState(sor)
    }
    const sortByName = () => {
        let sor = [...mainState].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        setMainState(sor)
    }
    const sortBySalary = () => {
        let sor = [...mainState].sort((a, b) =>  a.salary - b.salary);
        setMainState(sor)
    }
 
    return (
        <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name <BsSortAlphaDown onClick={sortByName}/></th>
                <th scope="col">Email <BsSortAlphaDown onClick={sortByEmail}/></th>
                <th scope="col">Salary <BsSortAlphaDown onClick={sortBySalary}/></th>
                <th scope="col">
                    <span><sup>Change name to filter list..</sup></span>
                    <select onChange={(e) => filterFunction(e.target.value)} className="table-form">
                        <option value='all' >All Names</option>
                        {uniqueNames.map((item, i) => (
                            <option key={i} value={item.name}>{item.name}</option>
                        ))}
                    </select> 
                </th>
                <th scope="col">
                    <span><sup>Change name to delete</sup></span>
                    <select onChange={(e) => unFilterFunction(e.target.value)} className="table-form">
                        <option value='all'>Names List</option>
                        {uniqueNames.map((item, i) => (
                            <option key={i} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </th>
                <th scope="col">
                    <span><sup>Change name to filter names list...</sup></span>
                    <Select 
                        mode="multiple"  
                        allowClear   
                        style={{ width: '65vh'}} 
                        maxTagCount={2}
                        placeholder="Please select" 
                        onChange={selectedDelet}
                        options={mainState}
                >
                        {uniqueNames.map((item, i) => (
                            <Select.Option key={i} value={item.name}>{item.name}</Select.Option>
                        ))}
                </Select>
                </th>
                </tr>
            </thead>
            <tbody>
                {mainState.map((item, i) => (
                 <tr key={i} label={item.label} value={item.value}>
                 <th scope="row">{++i}</th>
                 <td>{item.name}</td>
                 <td>{item.email}</td>
                 <td>{item.salary}$</td>
                 </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default Table;


