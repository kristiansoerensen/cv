import React from 'react'
import ResumeProfile from './ResumeHeader'
import ResumeSubList from './ResumeSubList'
import ResumeList from './ResumeList'
import ResumeListItem from './ResumeListItem'

const Resume = () => {
    return (
        <div className='container'>
            <ResumeProfile/>
            <hr/>
            <div className='row'>
                <div className='col-3'>
                    
                </div>
                <div className='col-9'>
                    <ResumeList title='Profile'>
                        <ResumeListItem>
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
                        </ResumeListItem>
                    </ResumeList>
                    <ResumeList>
                        <div className='flex-container'>
                            <ResumeSubList title='Programming Languages'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Arduino C</li>
                                        <li>C#</li>
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                        <li>Rust</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Web Development'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>CSS (Cascading Style Sheets)</li>
                                        <li>HTML (HyperText Markup Language)</li>
                                        <li>NodeJS</li>
                                        <li>SASS (Syntactically Awesome Style Sheets)</li>
                                        <li>Asp.Net</li>
                                        <li>.Net</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Database Management'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Document Database
                                            <ul>
                                                <li>MongoDB</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Data Processing'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Big Data
                                            <ul>
                                                <li>ETL (Extract, Transform, Load)</li>
                                                <li>ELT (Extract, Load, Transform)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Version Control'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Git / GitHub</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Operating Systems'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Linux</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='E-commerce'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>E-commerce</li>
                                        <li>Payment Gateways</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Enterprise Solutions'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>ERP (Enterprise Resource Planning)</li>
                                        <li>Odoo Development</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='APIs and Protocols'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>OAuth (Open Authorization)</li>
                                        <li>REST API (Representational State Transfer Application Programming Interface)</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Hosting and Deployment'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Hosting / Cloud / Deployment</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='GUI Development'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>PyQT</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='SEO'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>SEO (Search Engine Optimization)</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='Data Visualization'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>Visualizing Complex Data Structures</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>

                            <ResumeSubList title='3D Modeling and Printing'  useFlex={true}>
                                <ResumeListItem className='text-start'>
                                    <ul>
                                        <li>3D Modeling</li>
                                        <li>3D Printing</li>
                                    </ul>
                                </ResumeListItem>
                            </ResumeSubList>
                        </div>
                    </ResumeList>
                </div>
            </div>
        </div>
    )
}

export default Resume