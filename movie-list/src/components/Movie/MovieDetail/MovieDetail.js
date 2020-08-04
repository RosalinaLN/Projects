import React, { useContext } from 'react';
import { MovieContext } from '../../../context/movie-context';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Header from '../../shared/Header';
import Row from 'react-bootstrap/Row'

const MovieDetail = (props) => {
    const { detailMovie } = useContext(MovieContext);
    const id = props.match.params.id;

    let moviesDetail = 'No specific movie';
    if (detailMovie(id).length > 0) {
        moviesDetail = detailMovie(id).map(movie => {
            return (
                <Card key={movie.id}>
                    <Card.Header as="h3">{movie.name} ({movie.productionYear})</Card.Header>
                    <Card.Body> 
                        <Card.Title>Synopsis:</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: movie.synopsis }}></Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">{movie.genre}</Card.Footer>
                </Card>
            )
        })  
    }

    return (
        <Container>
            <Header title="Movie Detail" />
            <Row className="justify-content-center">{moviesDetail}</Row>
        </Container>
    );
}
 
export default MovieDetail;