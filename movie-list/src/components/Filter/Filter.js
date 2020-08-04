import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './Filter.css'

const Filter = ({ updateFilter, genreList, yearList, count, filter }) => {
    const [genre, setGenre] = useState(filter.genre);
    const [year, setYear] = useState(filter.year);
    const [message, setMessage] = useState(`${year?' '+year+' ':''}${genre?' '+genre+' ':''}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`${year?' '+year+' ':''}${genre?' '+genre+' ':''}`);
        updateFilter({year: year, genre: genre});
    }

    const handleReset = () => {
        setGenre('');
        setYear('');
        setMessage('');
        updateFilter({});
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Row className="justify-content-center">
                    <Form.Group as={Col} xs="5" md="3">
                        <Form.Control as="select" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                            <option value="">Genre</option>
                            {genreList.map(gr => (
                                    <option key={gr} value={gr.toLowerCase()}>{gr}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} xs="5" md="3">
                        <Form.Control as="select" id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                            <option value="">Year</option>
                            {yearList.map(yr => (
                                    <option key={yr} value={yr}>{yr}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} xs="3" md="2">
                        <Button type="submit" block>Submit</Button>
                    </Form.Group>
                    <Form.Group as={Col} xs="3" md="2">
                        <Button type="button" onClick={handleReset} block variant="success">Reset</Button>
                    </Form.Group>
                </Form.Row>
            </Form>

            {
            genreList.length > 0 ? 
                <div className="message" align="center">{`Showing ${message} movies (${count})`}</div>
            :   <div align="center"><Spinner animation="border" /></div>
            }
        </>
    );
}
 
export default Filter;