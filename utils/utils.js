import axios from 'axios'

export const fetchSingleArticle = (articleId) => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles/${articleId}`)
        .then((response) => response.data.article)
        .catch((err) => console.log(err, "fetchSingleArticle error!"))
}


export const fetchArticles = () => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles`)
        .then((response) => response.data.articles)
        .catch((err) => console.log(err, "fetchArticles error!"))
}

export const fetchComments = (articleId) => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles/${articleId}/comments`)
        .then((response) => response.data.comments)
        .catch((err) => console.log(err, "fetchComments error!"))
}

export const formatDate = (timestamp)=>{
    const date = new Date(timestamp)
    const dateString = date.toUTCString().split(" ").slice(0, 4).join(" ")
    return dateString
}