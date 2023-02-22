import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Profile
          className="prof"
          fullName={"sameh l'andolsi"}
          profession={"Full Stack Developer"}
          bio="A Full Stack Developer with experience in Javascript, React,  etc...."
          handleName={handleName}
        ></Profile>
        <img
          className="image"
          src="https://i.pinimg.com/originals/9b/e3/9c/9be39c6c000a7175483fc15f615c9c48.jpg"
          alt=""
          style={{ borderRadius: "15px", width: "300px" }}
        />
      </div>
    </div>
  );
}

export default App;