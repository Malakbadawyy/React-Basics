import { CORE_CONCEPTS , EXAMPLES  } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import  TabButton  from "./components/TabButton";
import {useState} from "react";

function App() 
{
  const [selectedButton, setSelectedButton] = useState();
  

  function handleSelect(selectedButton){
    setSelectedButton(selectedButton);
  }
  return (
    <div>
     <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title}{...conceptItem}/>)}
          {/* <li>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
          </li>
          <li>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
          </li>
          <li>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          </li>

          Example of not using destructuring:
          <li>
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
              />
          </li> */}

        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={selectedButton==="components"}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedButton==="jsx"}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={selectedButton==="props"}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selectedButton==="state"}>State</TabButton>
          </menu>

        </section>
          {!selectedButton ? <p>Please select a topic.</p> : <div id="tab-content">
          <h3>{EXAMPLES[selectedButton].title}</h3>
          <p>{EXAMPLES[selectedButton].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedButton].code}
            </code>
          </pre>
        </div>}
      
      </main>
    </div>
  );
}

export default App;
