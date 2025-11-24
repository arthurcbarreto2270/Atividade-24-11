import './style.css'
export default function Footer(params) {
    return(
        <footer className='footer'>
            <p>&copy;{new Date().getFullYear()} Todos os direitos reservados
            </p>
        </footer>
    )
    
}