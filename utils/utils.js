import axios from 'axios'

export const fetchSingleArticle = (articleId) => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles/${articleId}`)
        .then((response) => response.data.article)
        .catch((err) => console.log(err, 'fetchSingleArticle axios error!'))
}

export const fetchArticles = (query) => {

    let url = `https://nc-news-8n39.onrender.com/api/articles`
    if(query) url += query

    return axios
        .get(url)
        .then((response) => response.data.articles)
        .catch((err) => console.log(err, 'fetchArticles axios error!'))
}

export const fetchComments = (articleId) => {
    return axios
        .get(`https://nc-news-8n39.onrender.com/api/articles/${articleId}/comments`)
        .then((response) => response.data.comments)
        .catch((err) => console.log(err, 'fetchComments axios error!'))
}

export const patchArticle = (articleId, body) => {
    return axios
        .patch(`https://nc-news-8n39.onrender.com/api/articles/${articleId}`, body)
        .catch((err) => console.log(err, 'patchArticle axios error!'))
}

export const postComment = (articleId, body)=>{
    return axios
        .post(`https://nc-news-8n39.onrender.com/api/articles/${articleId}/comments`, body)
        .catch((err) => console.log(err.response.data, 'postComment axios error!'))
}

export const deleteComment = (commentId)=>{
    return axios
    .delete(`https://nc-news-8n39.onrender.com/api/comments/${commentId}`)
    .catch((err)=> console.log(err, "deleteComment axios error!"))
}

export const fetchUsers = () => {
    return axios
    .get('https://nc-news-8n39.onrender.com/api/users/')
    .then(response => response.data.users)
    .catch(err => console.log(err, 'fetchUsers axios error!'))
}

export const fetchTopics = ()=>{
    return axios
    .get('https://nc-news-8n39.onrender.com/api/topics')
    .then(response => response.data.topics.rows)
    .catch(err => console.log(err, 'fetchTopics axios error!'))
}

export const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const dateString = date.toUTCString().split(' ').slice(0, 4).join(' ')
    return dateString
}
