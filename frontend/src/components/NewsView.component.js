import React from 'react';
import axios from 'axios';
import moment from 'moment';

import CreateNew from './CreateNew.component';

import "./NewsView.css";

export default class NewsView extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/news")
            .then(res => {
                let news = res.data;
                this.setState({ news })
            })
    }

    archiveNew = (id) => {
        axios.put(`http://localhost:4000/api/news/${id}`, { archiveDate: new Date() } ).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    createModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }

    openModal = () => {
        this.showModal();
    }

    orderNews() {
        this.setState({
            news: this.state.news.sort((a, b) => a.date - b.date)
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <CreateNew ref={this.createModalRef}></CreateNew>
                <header className="d-flex justify-content-between align-items-center border-bottom">
                    <h1>News</h1>
                    <div>
                        <button className="btn btn-success" onClick={this.openModal}>Create New</button>
                    </div>
                </header>
                <main className="mb-4">
                    {this.state.news.map(news =>
                        <div key={news._id} className="card mt-4">
                            <div className="card-body">
                                <h3 className="card-title border-bottom text-start">{news.title}</h3>
                                <h6 className="card-subtitle mb-2 text-muted text-start">Description: {news.description}</h6>
                                <h5 className="text-start">Content</h5>
                                <p className="card-text text-start">{news.content}</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between border-bottom">
                                    <span>Author: {news.author}</span>
                                    <span>{moment(news.date).format("L")}</span>
                                </div>
                                <div className="card-button">
                                    <button className="btn btn-danger" onClick={() => this.archiveNew(news._id)}>Archive</button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        )
    }
}
