import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";
import './ListEmployeeComponent.css';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
    <div className = "container">
        <h2 className = "text-center h2-custom">Listagem geral de Funcionários</h2>
        <Link to ="/add-employee" className="btn btn-primary mb-2"> Cadastrar Funcionário </Link>
            <table className = "table table-bordered table-stripped">
                <thead>
                     <th>Matrícula</th>
                     <th>Nome</th>
                     <th>Sobrenome</th>
                     <th>Endereço de Email</th>
                </thead>

                <tbody> {
                    employees.map((employee) => (
                        <tr key = {employee.id} >
                            <td> {employee.id} </td>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName} </td>
                            <td> {employee.emailId} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
    );
};
export default ListEmployeeComponent;