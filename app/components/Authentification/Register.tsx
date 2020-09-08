import * as React from 'react'

const Register = () => {
    return (
        <stackLayout>
            <textView hint="Email address"/>
            <textView hint="Password"/>
            <button text="Sign up"/>
        </stackLayout>
    )
}

export default Register