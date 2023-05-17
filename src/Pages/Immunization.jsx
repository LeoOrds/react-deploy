import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Services from "./Sidebar/Services"
import "./Immunization.css";
import { BiMailSend } from "react-icons/bi";
function Immunization() {
    return (<>
    <Services/>
     <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src="/images/immunization1.jpg" className="hero_immun" alt=""/>
            <h1 className="title_immun">IMMUNIZATION</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1 className="vaccine_title_immun">Vaccines protect children from life-threatening diseases, saving millions of lives each year.</h1>
            <p className="vaccine_desc">
              For routine vaccines to be effective, children need to complete the required doses according to schedule from the time they are born until they are one year old. They also need to complete additional doses during supplementary or outbreak vaccination campaigns announced by the Department of Health. <br/><br/>
              Children who missed some of their routine vaccines should complete them during catch-up vaccinations. <br/><br/>
              Routine immunization coverage among children must be at least 95%. Routine vaccines are provided by the Government for free in public health centers and facilities.
            </p>
            <h1 className="vaccine_title_immun">Vaccine: BCG </h1>
            <h2 className="vaccine_subtitle_immun">Protection from: Tuberculosis <br/>  
            When to give: At birth  </h2>
            <p className="vaccine_desc_immun">
              Tuberculosis (TB) is an infection that most often attacks the lungs. In infants and young children, it affects other parts of the body like the brain, bones, joints and other internal organs (extrapulmonary or miliary tuberculosis). A severe case could cause serious complications or death. The BGC vaccine has a protective effect against meningitis and disseminated TB in children. <br/><br/>
              TB is very difficult to treat when contracted, and treatment is lengthy and not always successful. According to the 2020 World Health Organization global TB report, the Philippines has the highest TB incidence rate in Asia, with 554 cases for every 100,000 Filipinos.
            </p>
            <h1 className="vaccine_title_immun">
              Vaccine: Hepatitis B 
            </h1>
            <h2 className="vaccine_subtitle_immun">Protection from:       Hepatitis   B <br/>
              When to give: At birth   
            </h2>
            <p className="vaccine_desc_immun">
              Hepatitis B virus is a dangerous liver infection that, when caught as an infant, often shows no symptoms for decades. It can develop into cirrhosis and liver cancer later in life. Children less than 6 years old who become infected with the hepatitis B virus are the most likely to develop chronic infections.
            </p>
            <img src="/images/immunization.jpeg" alt="" className="immunization_img1_immun"/> <br/><br/>
            <button className="appointment_button_immun">Request an Appointment <BiMailSend /></button>
            <h1 className="vaccine_title_immun">Vaccine: Pentavalent vaccine</h1>
            <h2 className="vaccine_subtitle_immun">Protection from: Diphtheria, Pertussis, Tetanus, Haemophilus Influenzae type b and Hepatitis B  
              When to give: 6, 10 and 14 weeks  
            </h2>
            <p className="vaccine_desc_immun">
              Diphtheria infects the nose, throat, tonsils and/or skin. The diphtheria toxin may cause obstructive pseudo-membranes in the upper respiratory tract, making it hard for children to breathe and swallow. Severe cases can cause paralysis, heart failure, kidney failure and sometimes death. <br/><br/>
              Pertussis (whooping cough) causes coughing spells that can last for weeks. In some cases, it can lead to troubled breathing, pneumonia, and death. <br/><br/>
              Tetanus causes very painful muscle contractions. It can cause children’s neck and jaw muscles to lock (lockjaw), making it hard for them to open their mouth, swallow, breastfeed or breathe. Even with treatment, tetanus is often fatal. <br/><br/>
              Haemophilus Influenzae type b causes death and serious disease from meningitis and pneumonia in infants and young children. Hib bacteria are carried in the human nasopharynx from where they can be transmitted to other humans via droplets from nasopharyngeal secretions. <br/><br/>
              80–90% of infants infected with Hepatitis B during the first year of life are most likely to develop chronic infections.
            </p>
            <h1 className="vaccine_title_immun">Vaccine: Oral Polio Vaccine  </h1>
            <h2 className="vaccine_subtitle_immun">When to give: 6, 10 and 14 weeks </h2>
            <h1 className="vaccine_title_immun">Vaccine: Inactivated polio vaccine </h1>
            <h2 className="vaccine_subtitle_immun">When to give: 14 weeks and 9 months <br/> Protection from: Poliovirus  </h2>
            <p className="vaccine_desc_immun">
              Polio is a virus that paralyzes 1 in 200 people who get infected. Among those cases, 5 to 10 per cent die when their breathing muscles are paralyzed. There is no cure for polio once the paralysis sets in.
            </p>
            <h1 className="vaccine_title_immun">Vaccine: PCV  </h1>
            <h2 className="vaccine_subtitle_immun">When to give: 6, 10 and 14 weeks <br/>  
              Protection from: Pneumonia and Meningitis  </h2>
            <p className="vaccine_desc_immun">
              Pneumococcal diseases such as pneumonia and meningitis are a common cause of sickness and death worldwide, especially among young children under 2 years old.
            </p>
            <h1 className="vaccine_title_immun">Vaccine: MMR  </h1>
            <h2 className="vaccine_subtitle_immun">When to give: 9 months and 1 year old <br/> 
              Protection from: Measles, Mumps and Rubella  </h2>
            <p className="vaccine_desc_immun">
              Measles is a highly contagious disease with symptoms that include fever, runny nose, white spots in the back of the mouth and a rash. Most common complications are ear infection, diarrhea and pneumonia. Serious cases can cause blindness, brain swelling and death. <br/><br/>
              Mumps can cause headache, malaise, fever, and swollen salivary glands. Complications can include meningitis, inflammation of the testicles and deafness. <br/><br/>
              Rubella infection in children and adults is usually mild, but in pregnant women it can cause miscarriage, stillbirth, infant death or birth defects in the eyes, ears, heart and brain (Congenital Rubella Syndrome).
            </p>
            <h1 className="vaccine_title_immun">Safe vaccination during the COVID-19 pandemic</h1>
            <p className="vaccine_desc_immun">
              The Department of Health has identified routine immunization for children as an essential health service to prevent the spread and avoid outbreaks of vaccine-preventable diseases. The provision of routine vaccinations for children below one year old, including supplemental or catch-up vaccination for children, is maintained as long as the COVID-19 response measures will allow. <br/><br/>
              Routine and catch-up immunization activities must comply with COVID-19 infection prevention and control measures: <br/><br/>
              Health workers must practice hand hygiene between clients by handwashing with soap or using alcohol-based sanitizers for at least 20 seconds.
              Health workers must wear a face mask and follow recommended safety protocols. <br/><br/>
              Parents and caregivers must wear a face mask and bring their child's vaccination card during their immunization visit at the health center or vaccination post in the barangay. <br/><br/>
              Vaccination must be performed in areas that are disinfected, well ventilated and spacious enough to allow people to maintain at least 1 meter of physical distancing. <br/><br/>
              Areas where vaccination is conducted must be separate from curative areas in the health facility where acutely sick patients are most likely to be present.
              Because the COVID-19 situation is evolving and quarantine restrictions vary across the country at any given time, please check with your local government unit or health center for the latest announcements and guidelines for routine immunization in your area. <br/><br/>
              The Department of Health encourages private health facilities to continue providing routine immunization services with strict adherence to COVID-19 infection prevention and control measures.
            </p>
            <button className="appointment_button2_immun">Request an Appointment <BiMailSend /></button>
          </div>
          <div className="col-md-1"></div>
        </div>
    </div>
    </>
    );
}
export default Immunization;