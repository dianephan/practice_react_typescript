import './App.css';

function ShowEntry(props) {
  return (
    <div className="usernames_list">
      {props.email}
    <ul>
      <li>{props.fullname}</li>
      <li>{props.phonenumber}</li>
    </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 style={{color: "pink"}}>People who entered the giveaway</h1>
      <ShowEntry
        email = "dianerobinson@gmail.com"
        fullname = "Diane Robinson"
        phonenumber = "+14086668888">
      </ShowEntry>
      <ShowEntry 
        email = "twiliodevs@twil.io"
        fullname = "Jeff Lawson"
        phonenumber = "+1800ASKYOURDEVELOPER">
      </ShowEntry>
      <ShowEntry 
        email = "TwilioQuest@gmail.com"
        fullname = "Cedric TwilioQuest"
        phonenumber = "+17141001337">
      </ShowEntry>
    </>
    )
}

export default App;
