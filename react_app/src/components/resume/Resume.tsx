import React from 'react'
import ResumeProfile from './ResumeHeader'
import ResumeList from './ResumeList'
import ResumeListItem from './ResumeListItem'
import wooLogo from '../../assets/images/Woo-logo-color.svg'
import WorldlineLogo from '../../assets/images/WL_logo_turquoise.png'
import SQLLogo from '../../assets/images/sql-server.png'
import ResumeSkillBar from './ResumeSkillBar'
import Timeline from '../timeline/Timeline'
import TimelineItem from '../timeline/TimelineItem'
import AgeCalculator from '../AgeCalculator'
import TimelineItemModal from '../timeline/TimelineItemModel'

const Resume = () => {
    return (
        <div className='container'>
            <ResumeProfile/>
            <hr/>
            <div className='row'>
                <div className='col-lg-3 text-center'>
                    <ResumeList title='Programming Languages' noIndent={true} titleClass="h3">
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Python' skillValue={100}  imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='C#' skillValue={90}  imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Arduino C' skillValue={85} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg'/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='JavaScript' skillValue={85} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='SQL' skillValue={80} imgSrc={SQLLogo}/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='HTML' skillValue={75} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='CSS' skillValue={70} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Rust' skillValue={30} imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg'/>
                    </ResumeList>
                    <hr className='mb-2 pb-0 pt-0 mt-4'/>
                    <ResumeList title='Human Languages' noIndent={true} titleClass="h3">
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='Danish' skillValue={100}/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='English' skillValue={90}/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='German' skillValue={30}/>
                        <ResumeSkillBar extraClassName="progress-bar-striped progress-bar-animated" title='French' skillValue={10}/>
                    </ResumeList>
                </div>
                <div className='col-lg-9'>

                    <ResumeList title='About Me' noIndent={true} titleClass="h3">
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

                    <ResumeList title='Agile Learning & Diverse Experience' noIndent={true} titleClass="h3">
                        <p>
                            As a dynamic software engineer with a steadfast dedication, I am deeply committed to contributing to innovative solutions that shape our future. 
                            My agility in adapting to new challenges, complemented by my unwavering loyalty to the projects I undertake, consistently positions me at the forefront of technological advancement.
                        </p>
                        <p>
                            My aptitude for rapid comprehension equips me to excel in assimilating and mastering new systems and software. 
                            This ability to swiftly learn and adapt to new technological environments has consistently emerged as one of my strongest professional attributes.
                        </p>
                        <p>
                            My experience is broad and varied, spanning numerous projects where I have applied and honed my expertise in Python, C#, JavaScript, SQL, and a host of other programming languages. 
                            This exposure has endowed me with a deep understanding of diverse technological environments, further strengthening my capacity to adapt to and conquer new technical challenges.
                        </p>
                    </ResumeList>

                    <Timeline title='Professional Experiences'>
                        <TimelineItem title="Software Developer" right={false} >
                            <p className='mb-0'><strong>Employer: </strong>VK DATA ApS, Tønder</p>
                            <p className='mb-0'><strong>Employment Status: </strong>Full-time with education</p>
                            <p>July 7th 2020 - Current</p>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#vk-data-aps-read-more">
                                Read more...
                            </button>
                            <TimelineItemModal title='VK DATA ApS, Tønder' modelId="vk-data-aps-read-more">
                                <h4>My Software Development Journey at VK DATA ApS</h4>
                                <p>
                                    In the span of 3.5 years at VK DATA ApS, I have grown from a novice software developer to a key contributor, handling complex tasks and projects. 
                                    My journey has been marked by continuous learning, overcoming challenges, and contributing to significant projects.
                                </p>
                                
                                <h4>Major Projects and Achievements</h4>
                                <ol>
                                    <li>
                                        <strong>Det Danske Spejder Korps Member System Migration:</strong> One of my most significant contributions was the migration of the Det Danske Spejder Korps member system. 
                                        I successfully migrated their version 8.0 Odoo database to version 12.0 Odoo, upgrading all underlying modules. 
                                        This project involved around 55K lines of code alone in custom modules and spanned over 1 to 1.5 years.
                                    </li>
                                    <li>
                                        <strong>Bambora / Worldline Payment Terminals Integration:</strong> In the early stages of my employment, I developed an integration with Bambora / Worldline payment terminals using their Host2T protocol. 
                                        This project was a steep learning curve, where I honed my skills in JavaScript / OWL, low-level TCP communication with an embedded device, and UI presentation in the Odoo PoS. 
                                        The project required communication from the payment terminal to an IoT Box / Raspberry Pi, and from the Raspberry Pi to the PoS computer, and vice versa.
                                    </li>
                                </ol>
                                
                                <h4>Current Role and Major Project</h4>
                                <p>
                                    Currently, I hold multiple roles at VK DATA ApS - I am a project leader, software architect, and software developer for one of our biggest projects, "MitMedlem". MitMedlem is a comprehensive member system based on Odoo version 16.0. 
                                    It's a completely new platform, designed to replace the old member system that Det Danske Spejder Korps is currently using.
                                </p>
                                <p>
                                    MitMedlem is a robust system capable of handling all member data, including events, accounting, website management, member portal, access right control, membership and subscription, statistics, and much more. 
                                    As the mastermind and architect of this project, I am responsible for its design and development.
                                </p>
                                
                                <h4>Growing Responsibilities and Skills</h4>
                                <p>
                                    Over the years, my responsibilities have grown in tandem with my skills. 
                                    I have taken on increasingly complex tasks, making me an integral part of the team. 
                                    My ability to visualize complex software pieces has made me harder to replace.
                                </p>
                                
                                <h4>Coding Philosophy</h4>
                                <p>
                                    I strive to adhere to, and often exceed, coding guidelines. 
                                    My focus is on writing clean, well-structured, and extendable code. 
                                    This approach ensures that the software we build today can easily be understood and expanded upon in the future.
                                </p>
                            </TimelineItemModal>
                        </TimelineItem>
                        <TimelineItem title="Product Maintenance on Website" right={true} >
                            <p className='mb-0'><strong>Employer: </strong>Nyvo, Padborg</p>
                            <p className='mb-0'><strong>Employment Status: </strong>After-school / part-time</p>
                            <p>January 2020 - July 2020</p>
                        </TimelineItem>
                        <TimelineItem title="Warehouse and Packaging Associate" right={false} >
                            <p className='mb-0'><strong>Employer: </strong>H.P. Therkelsen, Padborg</p>
                            <p className='mb-0'><strong>Employment Status: </strong>Full-time</p>
                            <p>Marts 2019 - Septemper 2019</p>
                        </TimelineItem>
                        <TimelineItem title="Retail Associate" right={true} >
                            <p className='mb-0'><strong>Employer: </strong>Calle Kruså</p>
                            <p className='mb-0'><strong>Employment Status: </strong>After-school / part-time</p>
                            <p>Marts 2017 - December 2017</p>
                        </TimelineItem>
                        <TimelineItem title="Janitorial Role" right={false} >
                            <p className='mb-0'><strong>Employer: </strong>Johannes Sloth, Faarhus</p>
                            <p className='mb-0'><strong>Employment Status: </strong>After-school / part-time</p>
                            <p>June 2015 - Septemper 2016</p>

                        </TimelineItem>
                    </Timeline>

                    <div className='flex-container'>

                        <ResumeList title='Web Development' useFlex={true} titleClass="h3">
                            <ResumeListItem title="NodeJS" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="SASS (Syntactically Awesome Style Sheets)" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title=".NET Core" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="Reat" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="OWL" iconEntity="&#129417;">
                            </ResumeListItem>
                            <ResumeListItem title="Bootstrap" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"></ResumeListItem>
                            <ResumeListItem title="SEO (Search Engine Optimization)"></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='Database Management' useFlex={true} titleClass="h3">
                            <ResumeList title='Document Database' useFlex={false} titleClass="h5">
                                <ResumeListItem title="MongoDB" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'>
                                </ResumeListItem>
                            </ResumeList>
                            <ResumeList title='Relational database' useFlex={false} titleClass="h5">
                                <ResumeListItem title="PostgreSQL" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'>
                                </ResumeListItem>
                                <ResumeListItem title="Microsoft SQL Server" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'>
                                </ResumeListItem>
                                <ResumeListItem title="SQLite" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'>
                                </ResumeListItem>
                            </ResumeList>
                        </ResumeList>

                        <ResumeList title='Data Processing' useFlex={true} titleClass="h3">
                            <ResumeList title='Big Data' useFlex={false} titleClass="h5">
                                <ResumeListItem title="ETL (Extract, Transform, Load)" imgSrc=''></ResumeListItem>
                                <ResumeListItem title="ELT (Extract, Load, Transform)" imgSrc=''></ResumeListItem>
                            </ResumeList>
                        </ResumeList>

                        <ResumeList title='Content Management Systems (CMS)' useFlex={true} titleClass="h3">
                            <ResumeListItem title="Odoo" imgSrc='https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg'></ResumeListItem>
                            <ResumeListItem title="WordPress" imgSrc='https://s.w.org/style/images/about/WordPress-logotype-wmark.png'></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='Version Control' useFlex={true} titleClass="h3">
                            <ResumeListItem title="git" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="GitHub" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'>
                            </ResumeListItem>
                        </ResumeList>

                        <ResumeList title='Operating Systems' useFlex={true} titleClass="h3">
                            <ResumeListItem title="Windows 11 / 10 / 8.1 + 8 / 7 / XP" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="Ubuntu (Linux)" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="Debian (Linux)" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="Raspberry Pi OS" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg'>
                            </ResumeListItem>
                        </ResumeList>

                        <ResumeList title='E-commerce' useFlex={true} titleClass="h3">
                            <ResumeListItem title="WooCommerce" imgSrc={wooLogo}></ResumeListItem>
                            <ResumeListItem title="Odoo E-commerce" imgSrc='https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg'></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='PoS' useFlex={true} titleClass="h4">
                            <ResumeListItem title="Odoo PoS"  imgSrc='https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg'></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='Online Payment' useFlex={true} titleClass="h3">
                            <ResumeListItem title="OnPay" imgSrc='https://onpay.io/build/images/onpay-logo-landing.9a91c73f.svg'></ResumeListItem>
                            <ResumeListItem title="Sampath Bank (Sri Lanka)" imgSrc='https://asset.brandfetch.io/idWS-jlPHh/idpMshWnB4.png?updated=1692407281395'></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='PoS Payment' useFlex={true} titleClass="h3">
                            <ResumeListItem title="Worldline / Bambora Host2T" imgSrc={WorldlineLogo}></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='Enterprise Solutions' useFlex={true} titleClass="h3">
                            <ResumeListItem title="Odoo ERP (Enterprise Resource Planning)" imgSrc=''></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='APIs and Protocols' useFlex={true} titleClass="h3">
                            <ResumeList title="OAuth (Open Authorization)" titleClass='h5'>
                                <ResumeListItem title="Duende" imgSrc='https://duendesoftware.com/img/logo.png'></ResumeListItem>
                                <ResumeListItem title="Google" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'></ResumeListItem>
                            </ResumeList>
                            <ResumeList title="REST API" titleClass='h5'>
                                <ResumeListItem title="ASP.NET Core Web API"></ResumeListItem>
                                <ResumeListItem title="Flask" imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/690px-Flask_logo.svg.png'></ResumeListItem>
                            </ResumeList>
                        </ResumeList>

                        <ResumeList title='Hosting and Deployment' useFlex={true} titleClass="h3">
                            <ResumeListItem title="NGINX" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'></ResumeListItem>
                            <ResumeListItem title="Docker" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'>
                            </ResumeListItem>
                        </ResumeList>

                        <ResumeList title='GUI Development' useFlex={true} titleClass="h3">
                            <ResumeListItem title="PyQT" imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg'>
                            </ResumeListItem>
                            <ResumeListItem title="WPF" imgSrc=''></ResumeListItem>
                            <ResumeListItem title="Tkinter" imgSrc=''></ResumeListItem>
                        </ResumeList>

                        <ResumeList title='3D Modeling and Printing' useFlex={true} titleClass="h3">
                            <ResumeListItem title="3D Modeling" imgSrc=''></ResumeListItem>
                            <ResumeListItem title="3D Printing" imgSrc=''></ResumeListItem>
                        </ResumeList>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume