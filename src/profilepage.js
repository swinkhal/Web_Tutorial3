import { useLocation } from "react-router-dom";
import './profilestyle.css';


function ProfilePage(props){

    //Reference: https://stackabuse.com/programmatically-navigate-using-react-router/
    //Reference: https://reactrouter.com/en/main/hooks/use-navigate
    const location = useLocation()
    const userInfo = location.state;
    console.log("Entered Profile page", JSON.stringify(userInfo));

    return(
        <div>
                    <h1>PROFILE PAGE</h1>

        <h4>
            <div>
                {userInfo.firstname}
            </div>
            <div>
            {userInfo.lastname}
            </div>
            <div>
            {userInfo.email}
            </div>
        </h4>

        </div>

        
  
    );
}

export default ProfilePage;