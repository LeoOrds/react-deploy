import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Services from "./Sidebar/Services"
import "./Medfam.css"
import { BiMailSend } from "react-icons/bi";
function Familimeds() {
    return (<>
    <Services/>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src="/images/familymedicine.jpg" className="hero_medfam" alt=""/>
            <h1 className="title_medfam">FAMILY MEDICINE</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1 className="vaccine_title_medfam">Your health, your team</h1>
            <p className="vaccine_desc_medfam">
              Bautista Clinic Department of Family Medicine offers primary care services to people of all ages. We have several locations in Phlippines. Some minor illnesses can now even be diagnosed and treated online during virtual visits. <br/><br/>
              People turn to Family Medicine for a wide range of medical, health and wellness concerns, including well-child exams, behavioral health care, minor illnesses, chronic conditions such as diabetes and high blood pressure, and routine health exams. <br/><br/>
              Other common diagnostic and surgical procedures performed in the Family Medicine specialty include: <br/><br/>
              Allergy injections <br/><br/>
              Biopsy and excision of skin lesions <br/><br/>
              Flu shots and immunizations <br/><br/>
              Incision and drainage of abscesses <br/><br/>
              Intrauterine device (IUD) placement and removal <br/><br/>
              Joint injections <br/><br/>
              Lab services <br/><br/>
              Minor surgery, including vasectomy and circumcision <br/><br/>
              Newborn and well-child care <br/><br/>
              Placement and removal of contraceptive implants <br/><br/>
              Obstetrics, including prenatal care, delivery and postpartum care <br/><br/>
              Palliative care <br/><br/>
              Physical exams for sports, school and summer camp <br/><br/>
              Special procedures such as flexible sigmoidoscopy, colposcopy and bone densitometry <br/><br/>
              Treadmill testing <br/><br/>
              Women's health services, including breast exams, mammography, Pap tests and pelvic exams <br/>
              Availability of services may vary. Please confirm when you request an appointment. Learn more about primary care and family medicine services.
            </p>
            <button className="appointment_button_medfam">Request an Appointment<BiMailSend /></button>
            </div>
          <div className="col-md-1"></div>
        </div>
    </div>
    </>
    );
}
export default Familimeds;