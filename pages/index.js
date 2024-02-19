import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

// this is index page
function HomePage({ meetups }) {

  // Initialize filteredMeetups with all meetups initially
  const [filteredMeetups, setFilteredMeetups] = useState(meetups);

  const [filteredMeetup, setFilteredMeetup] = useState(meetups);

  const handleSearch = (searchTerm) => {
    const results = meetups.filter((meetup) => {
      // Check if the search term is present in any field (title, address, description, etc.)
      return Object.values(meetup).some((field) =>
        String(field).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
 
    setFilteredMeetups(results);
  };


  return ( 
  <Fragment>
  <Head>
    <title>React Meetups</title>
    <meta
      name='description'
      content='Browse a huge list of highly active React meetups!'
    />
  </Head>

  {/* Add the SearchBar component */}
  <SearchBar onSearch={handleSearch} />

{/* Display the filtered meetups */}
  <MeetupList meetups={filteredMeetups} className="m-10"/>

  {/* <MeetupList meetups={props.meetups} /> */}
</Fragment>
);
}


export async function getServerSideProps(context) {
  // Fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://sanaz142:Alast822@cluster0.pjwpe7q.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // Default language if not specified in the document
    const defaultLanguage = 'en';

  const meetupsWithLanguage = meetups.map((meetup) => {
    const language = meetup.language || defaultLanguage;
    
  
    return {
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      id: meetup._id.toString(),
      language: language,
    };
  });

  // Return data as props
  return {
    props: {
      meetups: meetupsWithLanguage,
    },
    
  };
}



export default HomePage;