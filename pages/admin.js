import React from 'react'

const admin = () => {
    return (
        <div>
        <head>
            <title>Admin Account</title>
        </head>
        <h1>Welcome, (Admin Name)</h1>
        <hr></hr>
        <div className="tile reservation-info">
            <h3 className="header-text">Reservations</h3>
            <hr></hr>
            <ul>
                <li>Create Reservation</li>
                <li>View Reservation</li>
                <li>Update Reservation</li>
                <li>Delete Reservation</li>
            </ul>
        </div>

        <div className="tile manage">
            <h3 className="header-text">Manage</h3>
            <hr></hr>
            <ul>
                <li>View Users</li>
                <li>View Hotel Availability</li>
                <li>View Promotions</li>
            </ul>
        </div>
    </div>
    )
}

export default admin
