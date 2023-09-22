import ResumeList from "../components/resume/ResumeList";
import ResumeSkillBar from "../components/resume/ResumeSkillBar";
import SQLLogo from '../assets/images/sql-server.png'

const Skills = () => {
    return (
        <div className='container'>
            <ResumeList titleClass="h1 text-center" noIndent={true} title="Skills">
                <hr/>
                <div className='row'>
                    <div className='col-lg-3 text-center'>
                        <ResumeList title='Programming Languages' noIndent={true} titleClass="h4 text-center">
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Python' skillValue={100}  imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='C#' skillValue={90}  imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Arduino C' skillValue={85} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg'/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='JavaScript' skillValue={85} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='SQL' skillValue={80} imgSrc={SQLLogo}/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='HTML' skillValue={75} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='CSS' skillValue={70} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Rust' skillValue={30} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg'/>
                        </ResumeList>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim purus, ornare quis vestibulum non, ullamcorper eget felis. Nam lobortis turpis laoreet ante interdum finibus. Proin consectetur augue id nunc interdum consequat. Donec non tristique ligula. Praesent ac est efficitur, mattis dui quis, molestie diam. Morbi vehicula diam neque, dignissim fermentum tortor sollicitudin at. Nulla facilisi. Nunc vitae lacinia purus. Pellentesque id odio ut felis accumsan sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris consectetur odio eget dignissim viverra.
                        </p>

                        <p>
                            Morbi cursus, orci a imperdiet convallis, orci felis suscipit urna, id porta lacus odio vel quam. Sed blandit venenatis sodales. Etiam quis elementum turpis. Praesent id dui et sapien porttitor tempor fringilla eget magna. Etiam non sodales dolor. Nam pretium finibus lobortis. Fusce sit amet neque pellentesque, scelerisque nulla vitae, maximus ipsum. Aenean justo justo, convallis at iaculis sed, tempor vel sem. Praesent at aliquam elit.
                        </p>
                    </div>
                    <div className='col-lg-3 text-center'>
                        <ResumeList title='Languages' noIndent={true} titleClass="h4 text-center">
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Danish' skillValue={100}/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='English' skillValue={90}/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='German' skillValue={30}/>
                            <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='French' skillValue={10}/>
                        </ResumeList>
                    </div>
                </div>
            </ResumeList>
        </div>
    )
  };
  
  export default Skills;