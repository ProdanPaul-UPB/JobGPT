import "./HeaderSection.scss";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import rectorat from "../../../static/rectorat.jpg";
import genai from "../../../static/generative_ai.jpg";
import micro from "../../../static/microsofthq.jpg";
import corporate from "../../../static/corporate.jpeg";

import Universities from "../../../components/Universities/Universities";
import Communities from "../../../components/Communities/Communities";

const HeaderSection = () => {
    return (
        <div className="header-content">
            <Container>
                <div className="header-content__title">

                    <h1 className={'page_title'}>Ce este JobGPT?</h1>

                    <Row>
                        <Col sm style={{marginBottom: '30px'}}>
                            <Card style={{borderRadius: "10px"}}>
                                <img src={rectorat} style={{height: '200px'}} />
                                <Card.Header style={{background: '#153470'}}>
                                    <Card.Title style={{color: 'white'}}>Student</Card.Title>
                                </Card.Header>
                                <Card.Body style={{height: "300px"}}>
                                    <Card.Text>
                                        Te pricepi la programare, dar nu ştii ce job ţi se potriveşte? Sau poate eşti pasionat de
                                        matematică, dar nu ştii dacă predatul este o meserie care va rămâne vitală peste 20 de ani? Sau poate boţi precum
                                        Dall-E deja te intimidează în lumea fotografiei? JobGPT te poate ajuta să îţi găseşti
                                        răspunsul la aceste întrebări, oferind statistici şi probabilităţi pentru anumite cariere să fie înlocuite
                                        de către inteligenţa artificială în viitorul apropiat.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm style={{marginBottom: '30px'}}>
                            <Card style={{borderRadius: "10px"}}>
                                <img src={genai} style={{height: '200px'}} />
                                <Card.Header style={{background: '#153470'}}>
                                    <Card.Title style={{color: 'white'}}>Inteligenţă artificială</Card.Title>
                                </Card.Header>
                                <Card.Body style={{height: "300px"}}>
                                    <Card.Text>
                                        Inteligenţa artificială de pe platformă te poate ajuta să găseşti jobul potrivit pentru tine,
                                        sau chiar facultatea care îţi poate oferi cele mai bune oportunităţi de carieră, alături de cea mai bună
                                        experienţă de învăţare. Tot ce trebuie să faci este să îţi completezi profilul şi să îţi exprimi
                                        interesele şi abilităţile, ca mai apoi să îţi fie pusă la dispoziţie o comunitate uriaşă de oameni
                                        care îţi pot oferi sfaturi şi recomandări.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm style={{marginBottom: '30px'}}>
                            <Card style={{borderRadius: "10px"}}>
                                <img src={micro} style={{height: '200px'}} />
                                <Card.Header style={{background: '#153470'}}>
                                    <Card.Title style={{color: 'white'}}>Angajator / Universitate </Card.Title>
                                </Card.Header>
                                <Card.Body style={{height: "300px"}}>
                                    <Card.Text>
                                        Dacă eşti angajator, JobGPT te poate ajuta să găseşti oameni talentaţi cu ajutorul recomandărilor
                                        bazate pe aptitudinile şi interesele manifestate pe platformă de către studenţi. Contactarea acestora
                                        este la un click distanţă, cu ajutorul chat-ului încorporat. De asemenea, dacă eşti o universitate,
                                        JobGPT te poate ajuta să îţi promovezi oferta educaţională, prin recomandări bazate pe interesele
                                        manifestate de doritori.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>

                <div style={{background: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ),url(${corporate})`, backgroundSize: 'cover'}}>

                    <a href={"/dialog"} style={{textDecoration: "none"}}>
                        <h1 className={'page_title'} style={{
                            color: 'white', fontSize: "60px"}}>
                            Discută cu JobGPT!
                        </h1>
                    </a>

                </div>

                <div>
                    <h1 className={'page_title'}>Descoperă comunităţi</h1>

                    <div className="header-content__search">
                        <Form.Control placeholder="Caută nume de comunităţi sau cuvinte cheie" className={"search-field"} />
                        <button className={"search-button"}>Caută</button>
                    </div>

                    <Communities />

                </div>

                <div>
                    <h1 className={'page_title'}>Descoperă oportunităţi academice</h1>

                    <div className="header-content__search">
                        <Form.Control placeholder="Caută nume de universităţi sau cuvinte cheie" className={"search-field"} />
                        <button className={"search-button"}>Caută</button>
                    </div>

                    <Communities />
                </div>

                <div>
                    <h1 className={'page_title'}>Descoperă oportunităţi de angajare</h1>

                    <div className="header-content__search">
                        <Form.Control placeholder="Caută nume de joburi sau cuvinte cheie" className={"search-field"} />
                        <button className={"search-button"}>Caută</button>
                    </div>
                    
                    <Communities />
                </div>

            </Container>

        </div>
    )
}

export default HeaderSection;