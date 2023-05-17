import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Services from "./Sidebar/Services"
import "./Familiplanning.css"
import { BiMailSend } from "react-icons/bi";

function Familiplanning() {
    return (<>
        <Services/>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src="/images/familyplanning.jpg" className="hero_familplan" alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1 className="vaccine_title_familplan">Family planning: Get the facts about pregnancy spacing</h1>
            <h2 className="vaccine_subtitle_familplan">Pregnancy spacing is an essential part of family planning. Understand the importance of pregnancy spacing and what factors to consider before you conceive again.</h2>
            <p className="vaccine_desc_familplan">
              Considering having another child? Pregnancy spacing is an essential part of family planning. It can affect more than how close your children are in age. Here's what you need to know.
            </p>
            <h1 className="vaccine_title_familplan">Why is family planning important?</h1>
            <p className="vaccine_desc_familplan">
              Knowing whether you do or don't want to have children in the next few years can help you and your partner prepare for conception or choose appropriate contraception. <br/><br/>

              If you're already parents, family planning takes on new meaning. Having another child will change your family's lives. Are you and your partner ready to take care of a newborn again? How will your other child or children react to sharing your attention with a new baby? <br/><br/>

              The timing of your pregnancies is important, too. While you and your partner might have preferences about how close in age you'd like your children to be, some research shows that how you space your pregnancies can affect mother and baby.
            </p>

            <h1 className="vaccine_title_familplan">What are the risks of spacing pregnancies too close together?</h1>

            <p className="vaccine_desc_familplan">
              Research suggests that beginning a pregnancy within six months of a live birth is associated with an increased risk of: <br/><br/>

              Premature birth <br/>
              The placenta partially or completely peeling away from the inner wall of the uterus before delivery <br/>(placental abruption) <br/>
              Low birth weight <br/>
              Congenital disorders <br/>
              Schizophrenia <br/>
              Maternal anemia<br/>
              In addition, recent research suggests that closely spaced pregnancies might be associated with an increased risk of autism in second-born children. The risk is highest for pregnancies spaced less than 12 months apart.<br/><br/>

              Closely spaced pregnancies might not give a mother enough time to recover from pregnancy before moving on to the next. For example, pregnancy and breastfeeding can deplete your stores of nutrients, particularly folate. If you become pregnant before replacing those stores, it could affect your health or your baby's health. Inflammation of the genital tract that develops during pregnancy and doesn't completely heal before the next pregnancy could also play a role.
            </p>

            <img src="/images/familyplanning1.jpg" className="famplan_img_familplan" alt=""/>

            <h1 className="vaccine_title_familplan">Are there risks associated with spacing pregnancies too far apart?</h1>

            <p className="vaccine_desc_familplan">
              Some research also suggests that long intervals between pregnancies pose concerns for mothers and babies, such as an increased risk of preeclampsia in people with no history of the condition. <br/><br/>

              It's not clear why long pregnancy intervals might cause health problems. It's possible that pregnancy improves uterine capacity to promote fetal growth and support, but that over time these beneficial physiological changes disappear.
            </p>

            <h1 className="vaccine_title_familplan">
              What's the best interval between pregnancies?
            </h1>

            <p className="vaccine_desc_familplan">
              To reduce the risk of pregnancy complications and other health problems, research suggests waiting 18 to 24 months but less than five years after a live birth before attempting your next pregnancy. Balancing concerns about infertility, people older than 35 might consider waiting 12 months before becoming pregnant again. <br/><br/>

              The risks and recommendations don't apply to couples who have had a miscarriage. If you're healthy and feel ready, there's no need to wait to conceive after a miscarriage. <br/><br/>

              Choosing when to have another baby is a personal decision. When planning your next pregnancy, you and your partner might consider various factors in addition to the health risks and benefits. Until you make a decision about when to have another child, use a reliable method of birth control.
            </p>

            <h1 className="vaccine_title_familplan">
              What else do I need to know about pregnancy spacing?
            </h1>

            <p className="vaccine_desc_familplan">
              There's no perfect time to have another baby. Even with careful planning, you can't always control when conception happens. However, discussing reliable birth control options until you are ready to conceive and understanding the possible risks associated with the timing of your pregnancies can help you make an informed decision about when to grow your family.
            </p>






            <button className="appointment_button_familplan">Request an Appointment <BiMailSend /></button>
            </div>
          <div className="col-md-1"></div>
        </div>
    </div>
    </>
    );
}
export default Familiplanning;