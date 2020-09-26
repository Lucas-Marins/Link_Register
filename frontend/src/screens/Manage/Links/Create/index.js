import React from 'react'

import Layout from '../../../Layouts/Manage/index'

const Create = () =>{
    return (
        <Layout>
        <h1>Create Link</h1>
            <div>
                <form>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Url</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial"></input>
                            <span className="form-check-sign"></span>
                            Is social
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
    
        </Layout>
    );
}

export default Create