import React from 'react';
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (<>
    <Container>
      <Row className="container_one">
        <Col md={12}>
          <img src="/images/logo-removebg.png" className="aboutus_logo" alt="" />
          <h1 className="vision_mission">Vision</h1>
            <p className="vismis_desc">To be the Premier provider of quality health care in Bautista, Pangasinan.</p>
          <h1 className="vision_mission">Mission</h1>
            <p className="vismis_desc">To continuously provide high quality management health care service to all its interested parties and achieve maximum returns on investments of our stakeholders. <br />
            To achieve opportunities for professional growth and high morale for our Medical Staff and employees. <br />
            To be an exemplary corporate citizen and an asset to our community.
          </p>
        </Col>
      </Row>
      <Row className="row container_two">
        <Col md={6}>
          <img src="/images/aboutus1.jpg" className="aboutus_img1" alt="" />
          <p className="aboutus_title">Bautista RHU-Municipal Birthing Clinic <br /> Alcala - Bayambang Road, Bautista, Philippines
        </p>
        </Col>
        <Col md={6}>
        <Row>
            <Col>
              <p className="aboutus_desc">
              Bautista Clinic's mission is to inspire hope and promote health. We provide health information to help you make informed decisions about your health.
              Health information includes: Diseases and conditions, Symptoms, Tests and procedures, Drugs and supplements and Healthy lifestyle. Bautista Clinic is committed to providing health information that is: 1. Accurate and actionable. We write to inform,
               educate and empower you to make informed decisions about your health. 2. Easily understood. We write in plain language that is quickly and easily understood by those of all literacy levels. 3.Inclusive and diverse. We use words and images that reflect
                a global community, inclusive of all ages, races, genders and ability levels. 4.Evidence based. Our content is based on the medical literature and Bautista Clinic expert opinion. We list our sources at the end of articles. 
            </p>
            </Col>
           
        </Row>
        
        </Col>
      </Row>
      <Row>
        <Col md={12}>
        <img src="/images/logo-removebg.png" className="aboutus_logo" alt="" />
        </Col>
      </Row>
      <Row>
          <Col md={3}>
          <img src="/images/aboutus2.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={3}>
          <img src="/images/aboutus3.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={3}>
          <img src="/images/aboutus4.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={3}>
          <img src="/images/aboutus5.jpg" className="gallery_img" alt="" />
          </Col>

        </Row>
        <Row>
          <Col md={3}>
          <img src="/images/aboutus6.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={6}>
          <h1 className="gallery_title">You Bear, <br /> We Care...</h1>
          </Col>
          <Col md={3}>
          <img src="/images/aboutus7.jpg" className="gallery_img" alt="" />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
          <img src="/images/aboutus8.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={3}>
          <img src="/images/aboutus9.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={3}>
          <img src="/images/aboutus10.jpg" className="gallery_img" alt="" />
          </Col>
          <Col md={3}>
          <img src="/images/aboutus11.jpg" className="gallery_img" alt="" />
          </Col>

        </Row>
        <Row>
          <Col md={6}>
          <p className="aboutus_desc2">
            To further our mission of making reliable health information available to the public, we accept advertising and sponsorship under strict guidelines. We will refuse any advertisement that we believe is incompatible with our mission. The presence of an ad on our site or in one of our newsletters does not imply endorsement of the advertised company or product
          </p>
          </Col>
          <Col md={6}>
          <p className="aboutus_desc2">
            Advertisers and sponsors must not make unsubstantiated health claims or suggest that Bautista Clinic has endorsed a product. Advertising may be placed on the site adjacent to content related to advertiser or sponsor interest, and also may be targeted to users by using non-personal data. Our sponsors and advertisers have agreed that they will   not collect any personally 
          </p>
          </Col>
          <Col md={6}>
          <p className="aboutus_desc2">
              identifiable information from our site visitors while they are on Bautista Clinic's health information website. Bautista Clinic maintains a distinct separation between advertising content and editorial content. All advertising content on Bautista Clinic's health information website or in one of our newsletters is clearly labeled as an advertisement. 
          </p>
          </Col>
          <Col md={6}>
          <p className="aboutus_desc2">
            Sponsored areas of the site are labeled as such, and the sponsoring organizations are identified. Our mission is to provide accurate and useful health information. If we determine that our content contains confusing, misleading or inaccurate information, we will revise the content. This policy applies to all original content.
          </p>
          </Col>
        </Row>
    </Container>
    
    
    </>
    );
}
export default About;
{/* 

    <div className="row">
      <div className="col-md-3">
        <p className="aboutus_desc2">
          To further our mission of making reliable health information available to the public, we accept advertising and sponsorship under strict guidelines. We will refuse any advertisement that we believe is incompatible with our mission. The presence of an ad on our site or in one of our newsletters does not imply endorsement of the advertised company or product
        </p>
      </div>
      <div className="col-md-3">
        <p className="aboutus_desc2">
        Advertisers and sponsors must not make unsubstantiated health claims or suggest that Bautista Clinic has endorsed a product. Advertising may be placed on the site adjacent to content related to advertiser or sponsor interest, and also may be targeted to users by using non-personal data. Our sponsors and advertisers have agreed that they will   not collect any personally 
      </p>
      </div>
      <div className="col-md-3">
        <p className="aboutus_desc2">
          identifiable information from our site visitors while they are on Bautista Clinic's health information website. Bautista Clinic maintains a distinct separation between advertising content and editorial content. All advertising content on Bautista Clinic's health information website or in one of our newsletters is clearly labeled as an advertisement. 
      </p>
      </div>
      <div className="col-md-3">
        <p className="aboutus_desc2">
          Sponsored areas of the site are labeled as such, and the sponsoring organizations are identified. Our mission is to provide accurate and useful health information. If we determine that our content contains confusing, misleading or inaccurate information, we will revise the content. This policy applies to all original content.
        </p>
      </div>
    </div> */}