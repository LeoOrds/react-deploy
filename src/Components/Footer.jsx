import "./Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
    return (<>
    <div className="footer_container">
      <Container>
        <Row>
          <Col md={3}>
          <h1 className="footer_logo_title">BAUTISTA RHU</h1>
          <h2 className="footer_logo_subtitle">Municipal Maternal Clinic</h2>
          <h3 className="footer_logo_quotes">"You bear, We care."</h3>
          </Col>
          <Col md={2} className="text-center">
          <h1 className="footer_titles">QUICK LINKS</h1>
          <a href="index.html" className="quick_links">Home</a><br/>
          <a href="" className="quick_links">About</a><br/>
          <a href="wellness.html" className="quick_links">Wellness</a><br/>
          <a href="faqs.html" className="quick_links">FAQ's</a><br/>
          </Col>
          <Col md={2} className="text-center">
          <h1 className="footer_titles">OUR SERVICES</h1>
          <a href="" className="quick_links1">Birthing Care</a><br />
          <a href="" className="quick_links1">Immunization</a><br />
          <a href="" className="quick_links1">Family Medicine</a><br />
          <a href="" className="quick_links1">Family Planning</a><br />
          </Col>
          <Col md={2}>
          <h1 className="footer_titles">Contact Information</h1>
          <p className="footer_contact_desc">Alcala-Bayambang Road, Bautista, Philippines</p>
          <p className="footer_contact_desc">rhu.bautista@yahoo.com</p>
          <p className="footer_contact_desc">0936-544-9982</p>
          </Col>
          <Col md={3} className="text-center">
          <h1 className="footer_titles_social">Social Accounts</h1>
          <a className="footer_social_accounts" href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a>
          <a className="footer_social_accounts"  href="https://twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a>
          <a className="footer_social_accounts" href="https://www.youtube.com/"><ion-icon name="logo-youtube"></ion-icon></a>
          <a className="footer_social_accounts" href="https://discord.com/"><ion-icon name="logo-discord"></ion-icon></a>
          </Col>
        </Row>
      </Container>
    
    </div>
    </>
    );
}
export default Footer;