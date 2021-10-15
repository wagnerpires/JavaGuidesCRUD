import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId };

        if(id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                history.push('/employees')
            }).catch(error => {
                console.log(error);
            })

        } else {
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data)
    
                history.push('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () => {
        if (id) {
            return <h2 className="text-center"> Alterar Funcionário</h2>
        } else {
            return <h2 className="text-center"> Incluir Funcionário</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Primeiro Nome:</label>
                                    <input
                                        type="text"
                                        placeholder="Entre com o primeiro nome"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Sobrenome:</label>
                                    <input
                                        type="text"
                                        placeholder="Entre com o Sobrenome"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email:</label>
                                    <input
                                        type="text"
                                        placeholder="Entre com endereço de email"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}> Salvar </button>
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