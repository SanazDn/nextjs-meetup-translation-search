import { MongoClient } from 'mongodb';
//import Meetup from '../../models/meetup';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const language = data.language || 'en'; // Get language from the submitted data

    // Validate the data against the schema
    //const validatedData = Meetup.validate(data);
    
    // if (validatedData.error) {
    //   res.status(400).json({ message: 'Invalid data format' });
    //   return;
    // }

    const client = await MongoClient.connect(
      //'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
      'mongodb+srv://sanaz142:Alast822@cluster0.pjwpe7q.mongodb.net/meetups?retryWrites=true&w=majority'
      /* In a new version of mongodb there is no meetups or a place to replace */
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    // Include language when saving the meetup data
    const meetupDataWithLanguage = { ...data};

    const result = await meetupsCollection.insertOne(meetupDataWithLanguage);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }

  const taskId = req.query.id; // Get the task ID from the URL
  if (req.method === 'DELETE') {
    // Handle the DELETE request to delete the task
    // Here you might delete the task in a database or data source

    const client = await MongoClient.connect(
        //'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
        'mongodb+srv://sanaz142:Alast822@cluster0.pjwpe7q.mongodb.net/meetups?retryWrites=true&w=majority'
        /* In a new version of mongodb there is no meetups or a place to replace */
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');
  
      const result = await meetupsCollection.deleteOne(data);

    res.status(200).json({ message: `Task with ID ${taskId} deleted successfully` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;