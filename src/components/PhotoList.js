import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import {Container, Row} from "reactstrap"

//Timer
import Moment from 'moment';
import DateTime from 'react-datetime';

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [ photoDate, setPhotoDate ] = useState('2012-03-14');
    const didUpdate = () => {
        axios
        .get(`http://api.nasa.gov/planetary/apod?api_key=obMZFZ3GvnlHOUa1HGsPGOMsLBd4gsCi9etteUTb&date=${photoDate}`)
        .then(res => {
            console.log(res.data);
            setPhotos(res.data);
        })
        .catch(err => console.log('Error: ', err));
    };

    function changeDate(newDate) {
        setPhotoDate(newDate)
        console.log("Changing: ", newDate);
        
    }

    useEffect(didUpdate, [photoDate]);

    return (
        <Container>
            <Row>
                
                <PhotoCard title={ photos.title } date={photos.date} hdurl={photos.url} explanation={photos.explanation} changeDate={changeDate}/>
                </Row>
        </Container>
    )
}
