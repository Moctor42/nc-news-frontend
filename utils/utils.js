import axios from 'axios'

export const fetchSingleArticle = (articleId) => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles/${articleId}`)
        .then((response) => response.data.article)
        .catch((err) => console.log(err, 'fetchSingleArticle error!'))
}

export const fetchArticles = () => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles`)
        .then((response) => response.data.articles)
        .catch((err) => console.log(err, 'fetchArticles error!'))
}

export const fetchComments = (articleId) => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles/${articleId}/comments`)
        .then((response) => response.data.comments)
        .catch((err) => console.log(err, 'fetchComments error!'))
}

export const patchArticle = (articleId, body) => {
    return axios
        .patch(`https://nc-news-8n39.onrender.com/api/articles/${articleId}`, body)
        .catch((err) => console.log(err, 'patchArticle error!'))
}

export const postComment = (articleId, body)=>{
    return axios
        .post(`https://nc-news-8n39.onrender.com/api/articles/${articleId}/comments`, body)
        .catch((err) => console.log(err.response.data, 'postComment error!'))
}

export const fetchUsers = () => {
    return axios
    .get('https://nc-news-8n39.onrender.com/api/users/')
    .then(response => response.data.users)
    .catch(err => console.log(err, 'fetchUsers error!'))
}

export const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const dateString = date.toUTCString().split(' ').slice(0, 4).join(' ')
    return dateString
}
