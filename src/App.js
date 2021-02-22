import './App.css';
import ProfilePictureComponent from "./components/ProfilePictureComponent"
import CustomImageComponent from "./components/CustomImageComponent";

function App() {
  return (
    <>
      <h1>ProfilePicture Component and Custom Image Component</h1>
      <ProfilePictureComponent
        alt="Small round Twilio logo for profile picture."
        className="ProfilePictureTwilioClass"
        imageClassName="CustomImageClassName"
        src="/twiliologo.png"
      >
        <p>This is my ProfilePicture component!</p>
      </ProfilePictureComponent>

      <CustomImageComponent 
        alt="Large Twilio.org logo with heart in speech bubble."
        className="CustomImageComponentClass"
        height="100px"
        src="/twilioorglogo.jpg"
        width="150px"
      >
      </CustomImageComponent>
    </>
    )
}

export default App;
