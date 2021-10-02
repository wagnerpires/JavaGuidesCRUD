import React from 'react'
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div>
             <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "https://javaguides.net" className = "navbar-brand navbar-custom">Sistema de Gerenciamento Integrado - [Funcionários]</a>
                    </div>
                </nav>
             </header>
        </div>
    )
}

export default HeaderComponent