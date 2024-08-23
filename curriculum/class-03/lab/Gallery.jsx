import HornedBeast from './HornedBeast';
// import hornedBeast from './hornetBeast.json';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
function Gallery(props) {
    return (
        <>
            <Container>
                <Row xs={2} sm={4} md={5} lg={6}>
                    {/* <HornedBeast title="ciervo" description="animal con abundantes cuernos macho " horns="Muchos" keyword="Deer" imageUrl="https://plus.unsplash.com/premium_photo-1674045998137-5149eac0d969?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <HornedBeast title="toro" description="animal de dos cuernos macho" horns="2" keyword="Bull" imageUrl="https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
                    {/* {hornedBeast.map(data => (
                        <HornedBeast title={data.title} description={data.description} horns={data.horns} keyword={data.keyword} imageUrl={data.image_url} />
                    ))
                    } */}
                    {props.allbeast.map((data2,idx) => (
                        <HornedBeast index={idx} mostrarModal={props.mostrarModal} key={data2._id} title={data2.title} description={data2.description} horns={data2.horns} keyword={data2.keyword} imageUrl={data2.image_url} />
                    ))
                    }
                </Row>
            </Container>
        </>
    );
}
export default Gallery;
