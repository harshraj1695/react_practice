import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
    const username="jdskfbks"
    return(
        <div>
            <h1>harsh raj singh</h1>
            {username}
        </div>
    )
}
const anotherELmemnt=(
    <a href="https://google.com" target='_blank'>google</a>
)
createRoot(document.getElementById('root')).render(
    <MyApp />
    // anotherELmemnt
)
