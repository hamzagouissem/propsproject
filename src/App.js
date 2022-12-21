import './App.css';
import Profile from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBar from './components/NaveBar';

function App() {
  const profileElements =
  {
    fullName:"gouissem hamza",
    bio:"development is my way",
    profession:"Software Engineerweb developper",
    imgSrc:"/my_profile_pic.png",
    handleName:()=>{alert(`${profileElements.fullName}`)},
  }

  return (
    <div className="App">
      <NaveBar login={profileElements.fullName}/>
      <h1>Welcome to my Profile </h1>
      <Profile data={profileElements} handleName={profileElements.handleName}><img src={profileElements.imgSrc} alt="Profile pic"/></Profile>
    </div >
  );
}

export default App;
