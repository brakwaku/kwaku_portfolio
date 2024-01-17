import '../styles/pages/about.css';

const AboutPage = () => {
  return (
    <div className='main_page_container'>
      <div className='about_container container'>
        <h1>About Me</h1>
        <p>
          My name is Theophilus (Kwaku) Appau-Nkansah. I'm an innovative creator
          with a passion for problem-solving. After discovering my love for
          programming during a C++ class in 2019, I pursued a B.S. in Software
          Engineering and a Data Science certificate at Brigham Young University
          - Idaho (BYUI). My goal is to simplify complexity and provide
          solutions that improve people's lives.
        </p>
        <p>
          As a Full-Stack Developer, my background in graphic design makes me
          exceptional and gives me a keen eye for detail. I've worked on
          numerous projects, utilizing a variety of technologies such as:
        </p>
        <ul className='skillset_wrapper'>
          <li>JavaScript</li>
          <li>Node Js / Express Js</li>
          <li>PHP</li>
          <li>React & Angular, GraphQL</li>
          <li>jQuery</li>
          <li>MySQL</li>
          <li>Java</li>
          <li>C++</li>
          <li>C#</li>
          <li>Python</li>
          <li>R</li>
          <li>HTML5 & CSS</li>
        </ul>
        <br />
        <p>Whether it's coding or design, I bring a unique perspective to every project.</p>
      </div>
    </div>
  );
};

export default AboutPage;
