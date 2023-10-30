import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MyCard from "./MyCard";

const MyTable = ()=>{
    return (
        <>
        <Table variant="light">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>User name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mic</td>
                        <td>Loven</td>
                        <td>Larry</td>
                    </tr> 
                    <tr>
                        <td>2</td>
                        <td>De</td>
                        <td>Nut</td>
                        <td>Candace</td>
                    </tr>      
                </tbody>
            </Table>
            <Button variant="success" element={<MyCard />} >Add an Account</Button>    

            <Outlet />
        </>
    )
};

export default MyTable;