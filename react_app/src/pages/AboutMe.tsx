import AgeCalculator from "../components/AgeCalculator";
import ResumeList from "../components/resume/ResumeList";

const AboutMe = () => {
    return (
        <div className='container'>
            <ResumeList title='About Me' noIndent={true} titleClass="h1 text-center">
                <hr/>
                <p>
                    Hello! 
                    I'm a <AgeCalculator DateOfBirth={new Date(2001, 6, 26)}/>-year-old technology enthusiast living in the beautiful town of Gråsten, Denmark. 
                    Despite my age, I often surprise people with my level of maturity and responsibility.
                    My passion for computers and technology is not just a hobby, but a way of life. 
                    I have an agile mind that thrives on the fast-paced, ever-evolving world of tech.
                </p>
                <p>
                    From a young age, I've always been eager to work and make a difference. 
                    At the age of 14, I took on my first after-school job, and since then, I've balanced my education with various roles. 
                    This early introduction to the working world has instilled in me a strong work ethic and a sense of responsibility that I carry into my professional life.
                </p>
                <p>
                    I believe in doing things right. 
                    Whether it's a work project or a personal task, I approach it with organization and meticulousness. 
                    This not only ensures the quality of my work but also reflects my commitment to excellence.
                </p>
                <p>
                    One of my strengths is my eagerness to learn. 
                    If I encounter something I don't know, I see it as an opportunity to expand my knowledge and skills. 
                    This curiosity has served me well in my programming career, allowing me to understand and solve complex problems.
                </p>
                <p>
                    I value self-reliance and strive to be as independent as possible. 
                    This mindset has broadened my understanding and enabled me to see things from multiple perspectives. 
                    It's a trait that has proven invaluable in my work, helping me to anticipate challenges and devise effective solutions.
                </p>
                <p>
                    In my spare time, you'll find me exploring the latest tech trends or working on my own projects, always eager to learn and grow. 
                    I look forward to bringing my passion, dedication, and unique perspective to new opportunities in the tech industry.
                </p>
            </ResumeList>
        </div>
    )
  };
  
  export default AboutMe;