import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const history = useHistory();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId};

        EmployeeService.createEmployee(employee).then((response) => {

            console.log(response.data)

            history.push('/employees');

        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <br /><br />
           <div className="container">
               <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center"> Cadastrar Funcionário </h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Primeiro Nome:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Entre com o primeiro nome"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Sobrenome:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Entre com o Sobrenome"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Entre com endereço de email"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick = {(e) => saveEmployee(e)}> Salvar </button>
                                <Link to="/employees" className="btn btn-danger">Voltar</Link>

                            </form>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default AddEmployeeComponent;