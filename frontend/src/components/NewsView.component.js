import React from 'react';
import axios from 'axios';

export default class NewsView extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/news")
            .then(res => {
                let news = res.data
                this.setState({ news })
            })
    }

    render() {
        return (
            <div>
                {this.state.news.map(news => <div>{news.title}</div>)}
            </div>
        )
    }
}
