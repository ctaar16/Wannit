import React from 'react';


export default function Footer(props) {
    const { currentUser, handleLogout } = props;
        return (
            <div className = "footer">
                <h6 className="ch">Developed by: Chris Haar</h6>
            </div>
        )

}