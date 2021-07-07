import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';

import "./ArchivedNews.css";

export default class ArchivedNews extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/archived")
            .then(res => {
                let news = res.data;
                this.setState({ news })
            })
    }

    render() {
        return (
            <div className="container mt-5">
                <header className="d-flex justify-content-between align-items-center border-bottom">
                    <h1>Archived news</h1>
                </header>
                <main>
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
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        )
    }
}
