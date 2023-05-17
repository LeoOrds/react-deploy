import "./Signup.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Signup() {
  return (
    <>
    <div className="container-fluid cont_loging">
      <Container>
        <Row>
            <Col md={12}>
            <a href="index.html"><img src="/images/logo-removebg.png" alt="" className="logo" /></a>
            </Col>
            <div className="box_loging">
          <Form className="justify-content-md-center">
          <h1 className="title_login">Sign Up! It's free and always will be.</h1>
            <Form.Group className="mb-3" controlId="formGroupFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupBirth Date">
              <Form.Label>Birth Date address</Form.Label>
              <Form.Control type="text" placeholder="Enter Birth Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupaddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>
          <p className="privacy_desc">
                  The information you will be providing is governed by our Privacy Policy, which was developed to allow us to better manage your personal information and ensure that your privacy is protected. Aligned with the implementing rules and regulations of Republic Act No. 10173 or the Data Privacy Act of 2012, our policy describes how we at Bautista Maternal Clinic can collect, use, disclose, store, secure and dispose of your Personal Information.
                 </p>
               <label className="privacy_notice"><input type="checkbox" /> I Agree to the Privacy Notice.</label><br/>
                  <button className="button_signin">Sign up</button>
          </div>
      </Row>
    </Container>
    </div>
    </>
  );
}

export default Signup;
// import "./Signup.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// function Signup () {
//     return ( <>
//     <div className="container-fluid cont_login">
//     <Container>
//       <Row>
//         <Col md={12}>
//         <a href="index.html"><img src="/images/logo-removebg.png" alt="" className="logo" /></a>
//         </Col>
//         <div  className="justify-content-md-center">
       
//         <div className="justify-content-md-center box_login">
//                   <Col md={12}><h1 className="title_login">Sign Up! It's free and always will be.</h1></Col>
//                   <Col md={12}><input type="text" placeholder="First Name" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="text" placeholder="Last Name" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="email" placeholder="Email Address" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="number" placeholder="Mobile Number" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="text" className="container_firstname align-items-center" placeholder="Birthday"/></Col>
//                   <Col md={12}><input type="text" placeholder="Address" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="password" placeholder="Password" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="password" placeholder="Password" className="container_firstname align-items-center"/></Col>
//                   <Col md={12}><input type="password" placeholder="Confirm Password" className="container_firstname align-items-center"/></Col>

//                   <p className="privacy_desc">
//                     The information you will be providing is governed by our Privacy Policy, which was developed to allow us to better manage your personal information and ensure that your privacy is protected. Aligned with the implementing rules and regulations of Republic Act No. 10173 or the Data Privacy Act of 2012, our policy describes how we at Bautista Maternal Clinic can collect, use, disclose, store, secure and dispose of your Personal Information.
//                   </p>
//                   <label className="privacy_notice"><input type="checkbox" /> I Agree to the Privacy Notice.</label><br/>
//                   <button className="button_signin">Sign up</button>
//                   </div>
            
//                   </div>
//       </Row>
//     </Container>
//      </div>
//     </>

//     );
// };
// export default Signup;
{/* <div className="container-fluid cont_login">
        
        <div className="row container_login">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="box_login">
                  <h1 className="title_login">Sign Up! It's free and always will be.</h1>
                  <input type="text" placeholder="First Name" className="container_firstname"/>
                  <input type="text" placeholder="Last Name" className="container_lastname"/>
                  <input type="email" placeholder="Email Address" className="container_emailadd"/>
                  <input type="number" placeholder="Mobile Number" className="container_mobile"/>
                  <input type="text" className="container_birthday" placeholder="Birthday"/>
                  <input type="text" placeholder="Address" className="container_address"/>
                  <input type="password" placeholder="Password" className="container_password"/>
                  <input type="password" placeholder="Confirm Password" className="container_confirmpass"/>
                  <p className="privacy_desc">
                    The information you will be providing is governed by our Privacy Policy, which was developed to allow us to better manage your personal information and ensure that your privacy is protected. Aligned with the implementing rules and regulations of Republic Act No. 10173 or the Data Privacy Act of 2012, our policy describes how we at Bautista Maternal Clinic can collect, use, disclose, store, secure and dispose of your Personal Information.
                  </p>
                  <label className="privacy_notice"><input type="checkbox" /> I Agree to the Privacy Notice.</label><br/>
                  <button className="button_signin">Sign up</button>
                </div>
    </div>
      <div className="cold-md-2"></div>
    </div>
  </div> */}