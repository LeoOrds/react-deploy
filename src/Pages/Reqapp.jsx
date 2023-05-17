import "./Reqapp.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Reqapp() {
    return ( <>
    <div className="body_one">
    <Container>
        <Row>
            <Col md={6}>
            <div>
                <h1 className="body_title">Start your appointment request here.</h1>
                <h2 className="body_subtitle">This is the easiest way to reach. us</h2>
            </div>
            </Col>
            <Col md={6}>
            <div >
                <a href="./Signup" className="body_newpatient">New Patients</a>
                <p className="body_newdesc">Provide your info and set a call time.</p>
                <a href="./Login" className="body_returningpatient">Returning Patients</a>
                <p className="body_returningdesc">Login to set an appointment.</p>
            </div>
            </Col>
            
            
        </Row>
        <Row>
        <Col md={6}>
            <div>
                <h1 className="bodytwo_title">Still want to schedule by phone?</h1>
            </div>
            </Col>
            <Col md={6}>
            <div>
                <p>Call during local business hours to speak with an appointment coordinator. Because hold times vary, you can also use our online request above to use when to call you. If this is an emergency, call your local emergency services.
                    <h1 className="bodytwo_info">Alcala - Bayambang Road, Bautista, Philippines</h1>
                        <p className="bodytwo_info">0936-544-9982</p>
                        <p className="bodytwo_info">8 a.m to 5 p.m</p>
                        <p className="bodytwo_info">Monday through Friday</p>
                </p>
            </div>   
            </Col>
        </Row>
    </Container>
    </div>
    
</>
    )
}

export default Reqapp
{/* <div className="row body_one">
    
    <div className="row body_two">
    <div className="col-md-6">
    <h1 className="bodytwo_title">Still want to schedule by phone?</h1>
    </div>
    <div className="col-md-6">
    <p className="bodytwo_desc">Call during local business hours to speak with an appointment coordinator. Because hold times vary, you can also use our online request above to use when to call you. If this is an emergency, call your local emergency services.
    <h1 className="bodytwo_info">Alcala - Bayambang Road, Bautista, Philippines</h1>
    <p className="bodytwo_info">0936-544-9982</p>
    <p className="bodytwo_info">8 a.m to 5 p.m</p>
    <p className="bodytwo_info">Monday through Friday</p>
    </p>
    </div> */}

