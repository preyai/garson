import { Container, Media } from "react-bootstrap";
import coming_soon from "../../img/coming_soon.png";

export default function Account(props) {
    return (
        <Container className="py-5">
            <Media className="comming-soon">
                <img src={coming_soon} alt="" className="mr-5" />
                <Media.Body>
                    <div>Coming soon . . .</div>
                </Media.Body>
            </Media>
        </Container>
    )
}