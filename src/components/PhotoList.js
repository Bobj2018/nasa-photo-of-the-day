import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import { Container, Row } from 'reactstrap';

export default function PhotoList() {
	const [ photos, setPhotos ] = useState([]);
	const [ photoDate, setPhotoDate ] = useState(today());
	//STEP 1: DECLARE DATE USESTATE


    //AUTO SETS TO TODAYS DATE 
	function today() {
		const todaysDate = new Date();
		const month = todaysDate.getMonth() + 1;
		const year = todaysDate.getFullYear();
        const day = todaysDate.getDate();
        console.log(`${year}-${month}-${day}`)
		return `${year}-${month}-${day}`;
	};

	const didUpdate = () => {
		axios
			.get(
				`http://api.nasa.gov/planetary/apod?api_key=obMZFZ3GvnlHOUa1HGsPGOMsLBd4gsCi9etteUTb&date=${photoDate}` //SET CURRENT STATE
			)
			.then((res) => {
				console.log(res.data);
				setPhotos(res.data);
			})
			.catch((err) => console.log('Error: ', err));
	};

	function changeDate(newDate) {
		setPhotoDate(newDate); // STEP 4: SET STATE TO ARG PASSED
		console.log('Changing: ', newDate);
	}

	useEffect(didUpdate, [ photoDate ]); // STEP 5: CHECK IF PHOTODATE HAS UPDATED

	return (
		<Container>
			<Row>
				<PhotoCard
					title={photos.title}
					date={photos.date}
					hdurl={photos.hdurl}
					explanation={photos.explanation}
					changeDate={changeDate} // STEP 2: ADD changeDate FUNCTION AS PROP
				/>
			</Row>
		</Container>
	);
}
