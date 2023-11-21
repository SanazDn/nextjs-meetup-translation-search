import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import MeetupList from '../components/meetups/MeetupList';
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18n from '../i18n'; // Import your i18n instance

function HomePage(props) {
  const { t } = useTranslation('translation');
  return ( 
  <Fragment>
  <Head>
    <title>React Meetups</title>
    <meta
      name='description'
      content='Browse a huge list of highly active React meetups!'
    />
  </Head>
  <MeetupList meetups={props.meetups} />
</Fragment>
);
}


// export async function getStaticProps() {
//   // fetch data from an API
//   const client = await MongoClient.connect(
//     'mongodb+srv://sanaz142:Alast822@cluster0.pjwpe7q.mongodb.net/meetups?retryWrites=true&w=majority'
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups');

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps(context) {
  // Fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://sanaz142:Alast822@cluster0.pjwpe7q.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // Default language if not specified in the document
    const defaultLanguage = 'en';
  

  // Include language in the props, using the default if not specified
  // const meetupsWithLanguage = meetups.map((meetup) => ({
  //   title: meetup.title,
  //   address: meetup.address,
  //   image: meetup.image,
  //   id: meetup._id.toString(),
  //   language: meetup.language || defaultLanguage,
    
  // }));

  const meetupsWithLanguage = meetups.map((meetup) => {
    const language = meetup.language || defaultLanguage;
    console.log("app language", language); // Log the language for each meetup
  
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