import Timeline from "../components/timeline/Timeline";
import TimelineItem from "../components/timeline/TimelineItem";
import TimelineItemModal from "../components/timeline/TimelineItemModel";

const WorkTimeLine = () => {
    return (
        <div className='container'>
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
        </div>
    )
  };
  
  export default WorkTimeLine;