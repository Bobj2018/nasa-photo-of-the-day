import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);

    const didUpdate = () => {
        axios
        .get("http://api.nasa.gov/planetary/apod?api_key=obMZFZ3GvnlHOUa1HGsPGOMsLBd4gsCi9etteUTb")
        .then(res => {
            console.log(res.data);
            setPhotos(res.data);
        })
        .catch(err => console.log('Error: ', err));
    };

    useEffect(didUpdate, []);

    return (
        <div>
            
                <PhotoCard title={ photos.title } date={photos.date} hdurl={photos.hdurl} explanation={photos.explanation}/>
            
        </div>
    )
}
