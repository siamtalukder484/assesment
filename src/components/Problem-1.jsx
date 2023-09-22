import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [user, setUser] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleClick = (val) =>{
        setShow(val);
        setActiveFilter(val);
    }

    let [FormData, setFormData] = useState({
        username: "",
        status: "",
    })

    let handleForm = (e) => {
        let {name, value} = e.target
        setFormData({...FormData, [name]:value})

     }

     let handleSubmit = async (e) => {
        e.preventDefault()
        setUser([...user, FormData]); 
        setFormData({
            username: "", 
            status: "",
        });
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input onChange={handleForm} value={FormData.username} name='username' type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input onChange={handleForm} value={FormData.status} name='status' type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {user.filter(item => activeFilter === 'all' || item.status === activeFilter).map(item => (
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                            {/* {user.map(item => (
                                <tr key={item.username}>
                                    <td>{item.username}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;