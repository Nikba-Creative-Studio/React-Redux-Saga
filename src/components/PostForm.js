import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';

import { Alert } from './Alert';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        
        const { title } = this.state

        if(!title.trim()) {
            return this.props.showAlert('Post title is required', 'danger')
        }

        const newPost =  {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState({
            title: ''
        })
    }

    // Universal change handler
    changeInputHendler = (e) => {
        e.persist()
        this.setState( prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }


    render() {
        return (
        <form onSubmit={this.submitHandler} className="mb-4">

            {this.props.alert && <Alert props={this.props.alert} />}

            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Post title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            value={this.state.title}
                            onChange={this.changeInputHendler}
                            name="title"
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </div>
        </form>
        )
    }

}

const mapDispatchToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => ({ 
    alert: state.app.alert
 })


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)