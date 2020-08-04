import React, { useContext } from 'react';
import { MovieContext } from '../../context/movie-context';
import Filter from '../Filter/Filter';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Header from '../shared/Header';
import { Link } from 'react-router-dom';

const Movie = () => {
    const { allMovies, filterMovies, updateFilter, filter } = useContext(MovieContext);

    const uniqueList = (allList, type) => {
        return allList.map(li => li[type]).filter((item,i,arr) => arr.indexOf(item) === i).sort();
    }
    
    const genreList = uniqueList(allMovies, 'genre');
    const yearList = uniqueList(allMovies, 'productionYear');

    const movieList = filterMovies && filterMovies.map(movie => {
        return (
            <CardDeck as={Col} key={movie.id} className="mb-4">
                <Card>
                    <Card.Header>{movie.genre}</Card.Header>
                    <Card.Body className="position-relative">
                        <Card.Title>{movie.name} ({movie.productionYear})</Card.Title>
                        <Card.Text>{movie.synopsisShort}</Card.Text>
                        <Link to={"/movie/"+movie.id} className="stretched-link text-info">
                            Detail
                        </Link>
                    </Card.Body>
                </Card> 
            </CardDeck>
        )
    })

    return (
        <Container>
            <Header title="Movies List" />
            <Filter updateFilter={updateFilter} genreList={genreList} yearList={yearList} count={filterMovies.length} filter={filter}/>
            <Row xs={1} md={2} lg={4} className="justify-content-center">{movieList}</Row>
        </Container>
    );
}
 
export default Movie;