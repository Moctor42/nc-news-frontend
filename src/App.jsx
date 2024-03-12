import { useState } from 'react'
import './App.css'
import { Navigation } from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Articles } from './components/pages/Articles'
import { SingleArticle } from './components/pages/SingleArticle'

function App() {
    return (
        <>
            <h1>NC News</h1>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:article_id" element={<SingleArticle />} />
                </Routes>
            </div>
        </>
    )
}

export default App
