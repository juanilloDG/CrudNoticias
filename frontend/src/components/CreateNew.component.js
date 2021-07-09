import axios from 'axios';
import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class CreateNew extends Component {

    state = {
        title: String,
        description: String,
        content: String,
        author: String
    }

    getTitleData = event => {
        this.setState({
            title: event.target.value
        })
    }
    getDescriptionData = event => {
        this.setState({
            description: event.target.value
        })
    }
    getAuthorData = event => {
        this.setState({
            author: event.target.value
        })
    }
    getContentData = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = event => {

        let news = {
            title: this.state.title,
            description: this.state.description,
            date: new Date(),
            content: this.state.content,
            author: this.state.author
        }

        axios.post("http://localhost:4000/api/news", { news }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }


    render() {
        return (
            <Modal
                {...this.props}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a New</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="formGroupTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter a Title" onChange={this.getTitleData} />
                        </Form.Group>
                        <Form.Group controlId="formGroupDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Enter a Description" onChange={this.getDescriptionData} />
                        </Form.Group>
                        <Form.Group controlId="formGroupAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" name="author" placeholder="Enter a Author name" onChange={this.getAuthorData} />
                        </Form.Group>
                        <Form.Group controlId="formGroupContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" name="content" placeholder="Enter a Content" onChange={this.getContentData} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                        </Button>
                        <Button type="submit" variant="success">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}
