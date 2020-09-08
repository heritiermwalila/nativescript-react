import * as React from 'react'
import {EventData} from '@nativescript/core'

interface LoginProps {}




const Login = () => {

    const [user, setUser] = React.useState({email:'', password:''})


    const _passwordHandler = (event:EventData) => {
        console.log(event);
        
    }

    return <flexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
                <stackLayout className="login-container" width="100%">
                    <textField hint="Email address" className="input-text" keyboardType="email" lineHeight={16}/>
                    <textField hint="Password" className="input-text" secure lineHeight={16} onTextChange={(args: EventData)=>_passwordHandler(args)}/>
                    <button text="Login"/>
                </stackLayout>
            </flexboxLayout>
}

export default Login