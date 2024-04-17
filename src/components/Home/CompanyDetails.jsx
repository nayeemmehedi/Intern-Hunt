import React from 'react';
// import {Link} from 'react-router-dom'

const CompanyDetails = () => {
    return (
        <div className='container' >
            <div className="row">
                <div className="col-sm-5 text-center m-3 p-3">
                    <h2>
                        Learn <span style={{color:'#875040'}}>Something..</span>
                    </h2>
                    <small>
                       It's our learning section where u learn how to improve your skill some particular sector. <br />
                        
                    </small> <br />
                    <button className='btn btn-dark'>Learn Page</button>


                </div>
                <div className="col-sm-5 text-center m-3 p-3">
                    <h2>
                       <span style={{color:"#e37e5f"}}> Company</span> Page
                    </h2>
                    <small>
                        If u are not come here to get e job otherwise come here to give a job this section for you .   <br />

                        
                       
                    </small> <br />
                    {/* <Link to="./company/nayeem"> */}
                         <button className='btn btn-dark'>Company</button> 
                         {/* </Link> */}


                </div>
            </div>

        </div>
    );
};

export default CompanyDetails;