import './Header.css';
import reactImg from "../../assets/react-core-concepts.png";

const reactDescriptions=  ["Fundamental", "Core", "Crucial", "Essential", "Basic", "Indispensable", "Necessary", "Required", "Vital", "Key"];
function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length-1)];
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}


