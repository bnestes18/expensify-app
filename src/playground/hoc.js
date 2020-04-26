// Higher Ordr Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// This is the wrapped component
const Info = (props) => (
    <div>
        <p>{props.success}</p>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     )
// };

const requireAuthentication = (WrappedComponent) => {
    // Return HOC
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>You don't have the correct permissions to see this information.</p>
                )}
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} success="You have been authenticated!" info="These are the details" />, document.getElementById('app'));