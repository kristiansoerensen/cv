import ResumeList from "../components/resume/ResumeList";
import ResumeListItem from "../components/resume/ResumeListItem";
import ResumeHeader from "../components/resume/ResumeHeader";
import wooLogo from '../assets/images/Woo-logo-color.svg';
import WorldlineLogo from '../assets/images/WL_logo_turquoise.png';


const Home = () => {
    return (
      <div className='container'>
          <ResumeHeader/>
          <hr className='mt-2'/>

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
          
          <ResumeList title='What I have worked with...' noIndent={true} titleClass='h2 text-center'>
              <hr/>
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
              </ResumeList>
        </div>
    )
  };
  
  export default Home;