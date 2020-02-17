import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();
        props.updateUser(user.id, user);
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <input type="text" 
                            id={user.id} 
                            name="name"
                            value={user.name}
                            onChange={handleInputChange} 
                            required />
                    <label htmlFor="name"></label>
                </div>

                <div>
                    <input type="text" 
                            name="username" 
                            value={user.username}
                            onChange={handleInputChange} 
                            required />
                    <label htmlFor="username"></label>
                </div>
                
                <div>
                    <button>Update</button>
                    <button onClick={() => props.setEditing(false)}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;
