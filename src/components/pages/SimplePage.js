import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Page from "../Template/Page";
import { useParams } from "react-router-dom";

export default function PrivacyPolicies(props) {
    const [lang, setLang] = useState('en');
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    // const host = 'http://localhost:3030/';
    const host = 'http://backend.garsonaio.com/';

    let { url } = useParams();



    useEffect(() => {

        fetch(host + 'pages?url=' + url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.data);
                setLoad(true)
            });
    }, []);

    return (
        <Page>
            {load === true &&
                <>
                    {data.length > 0 ?
                        <Container>

                            <div className="lanuages d-flex">
                                <button
                                    className="l-en ml-auto"
                                    onClick={() => setLang("en")}
                                >
                                    EN
                                </button>
                                <button
                                    className="l-ru"
                                    onClick={() => setLang("ru")}
                                >
                                    RU
                                </button>
                            </div>
                            {lang === 'ru' ?
                                <section>
                                    <h1>{data[0].title_ru}</h1>
                                    <div dangerouslySetInnerHTML={{ __html: data[0].text_ru }} />
                                </section> :
                                <section>
                                    <h1>{data[0].title_en}</h1>
                                    <div dangerouslySetInnerHTML={{ __html: data[0].text_en }} />
                                </section>}
                        </Container>
                        :
                        <Container>
                            <h1 className="text-center mt-4">not found</h1>
                            <div className="text-center mt-2">404</div>
                        </Container>
                    }
                </>
            }
        </Page>
    )
}