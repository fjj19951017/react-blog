import React, { Component } from 'react';
import '../style/Article.less';

export default class Article extends Component {

    render() {
        return (
            <article className="article">
                <img className="article-img" />
                <h3 className="title"></h3>
                <div className="description"></div>
                <div className="tag"></div>
                <div className="date"></div>
            </article>
        )
    }
}