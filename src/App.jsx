import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <div>
     <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <li>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
          </li>
          <li>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
          </li>
          <li>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          </li>

          {/* Example of not using destructuring: */}
          <li>
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
              />
          </li>

        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
