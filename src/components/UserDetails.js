import React from 'react'

const UserDetails = (props) => {
    console.log(props)
    if (props.show) {
        return (
            <div>
                <p>{props.user.email}</p>
                <p>{props.user.phone}</p>
            </div>
        )
    } else {
        return null
    }
}

export default UserDetails