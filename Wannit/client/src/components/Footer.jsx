import React from 'react';


export default function Footer(props) {
    const { currentUser, handleLogout } = props;
        return (
            <footer className = "footer">
                <p className="ch">Developed by: Chris Haar</p>
            </footer>
        )

}