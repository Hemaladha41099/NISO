import React, { useEffect, useState } from 'react'

const Form1 = () => {
    const [Registration, setRegistration] = useState({
        username: "",
        Email: "",
        Age: "",
        Phone: "",
        Gender: "",
        qualification: "",
        Institute: "",
        Competition: "",
        Address: "",
    });
    const RegistrationFromLocalStorage=JSON.parse(localStorage.getItem("Registration")|| "[]")
    useEffect(()=>{
    localStorage.setItem("Registration",JSON.stringify(Registration));
    },[Registration])
    const [Records, setRecords] = useState([RegistrationFromLocalStorage])
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setRegistration({ ...Registration, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...Registration, id: new Date().getTime().toString() };
        console.log(Records)
        setRecords([...Records, newRecord])
        console.log(Records)
        setRegistration({
            username: "",
            Email: "",
            Age: "",
            Phone: "",
            Gender: "",
            qualification: "",
            Institute: "",
            Competition: "",
            Address: "",
        })
    }
    
    return (<div><div className=' event h-200px'>
        <h4 className='centered '> <b><i>Event Registration</i></b></h4></div>
        <div className='container-fluid'>
            <div className='box'>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" value={Registration.username} name="username" onChange={handleInput} id="inputName" />
                        {/* {this.validator.message('Name', Registration.name, 'required')} */}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputemail" className="form-label">Email</label>
                        <input type="email" className="form-control" value={Registration.Email} name="Email" onChange={handleInput} id="inputemail14" />
                        {/* {this.validator.message('Email', Registration.Email, 'required|email')} */}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputPhone" className="form-label">Age</label>
                        <input type="Age" className="form-control" value={Registration.Age} name="Age" onChange={handleInput} id="inputPhone" />
                        {/* {this.validator.message('Age', Registration.Age, 'required|numeric|min:2|max:2')} */}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input type="Number" className="form-control" value={Registration.Phone} name="Phone" onChange={handleInput} id="inputPhone" />
                        {/* {this.validator.message('Phone', Registration.Phone, 'required|phone')} */}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="inputPhone" className="form-label">Gender</label>
                        <input type="text" className="form-control" value={Registration.Gender} name="Gender" onChange={handleInput} id="inputPhone" />
                        {/* {this.validator.message('Gender', Registration.Gender, 'required')} */}
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputqualification" className="form-label">qualification</label>
                        <input type="text" className="form-control" value={Registration.qualification} name="qualification" onChange={handleInput} id="inputqualification" />
                        {/* {this.validator.message('Qualification', Registration.qualification, 'required')} */}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputInstituteName" className="form-label">Institute Name</label>
                        <input type="text" className="form-control" value={Registration.Institute} name="Institute" onChange={handleInput} id="inputInstituteName" />
                        {/* {this.validator.message('Institute', Registration.Institute, 'required')} */}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputcompetition" className="form-label">Competition Name</label>
                        <input type="text" className="form-control" value={Registration.Competition} name="Competition" onChange={handleInput} id="inputcompetition" placeholder="Enter the your competition " />
                        {/* {this.validator.message('Competition', Registration.Competition, 'required')} */}
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address</label>
                        <input type="text" className="form-control" value={Registration.Address} name="Address" onChange={handleInput} id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        {/* {this.validator.message('Address', Registration.Address, 'required')} */}
                    </div>
                    <div className="col-12">
                        <button type="submit justify-content-center" onClick={handleSubmit} className="btn btn-primary">submit
                        </button>
                    </div>
                </form>


                <div>
                </div>
                
                <div className='centered'> Participation</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Qualification</th>
                                <th>Institute</th>
                                <th>Competition</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Records.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.username}</td>
                                    <td>{record.Email}</td>
                                    <td>{record.Age}</td>
                                    <td>{record.Phone}</td>
                                    <td>{record.Gender}</td>
                                    <td>{record.qualification}</td>
                                    <td>{record.Institute}</td>
                                    <td>{record.Competition}</td>
                                    <td>{record.Address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Form1