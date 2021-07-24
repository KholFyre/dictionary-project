import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary /> 
        </main>
      
        <footer className="footer">
          This project was coded by &nbsp;
      <a href="https://www.linkedin.com/in/rachel-dyer-b1681457/">
      Rachel Dyer
      </a> and is&nbsp;
      <a
        className="github-link"
        href="https://github.com/KholFyre/dictionary-project"
      >
        open-sourced on Github{""}
      </a>
      &nbsp;and is hosted on &nbsp;
      <a
        className="netlify-link"
        href="https://mystifying-pike-88124d.netlify.app/"
      >
      Netlify. {""}
      </a>
    </footer>
      </div>
    </div>
  );
}