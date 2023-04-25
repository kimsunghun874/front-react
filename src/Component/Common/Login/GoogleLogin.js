import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
const GoogleLoginButton= () => {
    const clientId = '125793142218-ad9l388gjfgq2ah3jnk73nra57i8mo0r.apps.googleusercontent.com'
    return (

        <>
            <GoogleOAuthProvider clientId={clientId}>

                <GoogleLogin
                    onSuccess={(res)=>{
                        console.log(res);
                        // 이건 잡아야한다.
                        window.location.href="/main"
                        
                    }}
                    onFailure={(err)=>{
                        console.log(err);
                    }}
                    />
            </GoogleOAuthProvider>
        </>
    )
}
export default GoogleLoginButton;