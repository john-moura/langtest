import React from 'react'

const GoogleButton = ({ dark }: { dark?: boolean }) => {
    return (
        <div>
            <script src="https://accounts.google.com/gsi/client" async></script>
            <script src="scripts/googleauth.js" async></script>
            <div
            id="g_id_onload"
            data-auto_prompt="false"
            data-callback="handleCredentialResponse"
            data-client_id="PUT_YOUR_WEB_CLIENT_ID_HERE"
            className="h-10 flex-auto"
            ></div>

            <div className="g_id_signin"></div>
        </div>
        
    )
}

export default GoogleButton