import React from 'react';

const Profile = React.memo(({ firstname, lastname } : { firstname: string; lastname: string }) => {
    console.log("Rendered Profile Component");

    return(
        <div>
            <h2>Profile</h2>
            <p>Firstname: {firstname}</p>
            <p>Lastname: {lastname}</p>
        </div>
    );
});

export default Profile;