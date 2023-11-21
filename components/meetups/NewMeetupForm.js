import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

import { useRouter } from 'next/router';

function NewMeetupForm(props) {
  const { t } = useTranslation('translation');
  //let userLanguage = 'en'; // Default language
  const router = useRouter();
  const language = router.query.data;
  console.log("Form language",language );
  
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // // Get the user's browser language or use a default language
  // if (typeof window !== 'undefined' && window.navigator) {

  //   // Check if the code is running in a browser environment
  //   // userLanguage = window.navigator.language || 'en';

  //   // Extract only the language code (e.g., "en" or "fr")
  // // userLanguage = browserLanguage.split('-')[0] || 'en';

  // // Check if the code is running in a browser environment and if navigator.language is available
  // const browserLanguage = window.navigator.language;
  
  // // Extract only the language code (e.g., "en" or "fr")
  // userLanguage = browserLanguage.split('-')[0] || 'en';
  // }
  // console.log('User Language:', userLanguage);

  function submitHandler(event) {
    console.log("Form language2",language );
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      language: language,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} data-test="submit" onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title' data-test="title" >{t('Meetup Title')}</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image' data-test="image">{t('Meetup Image')}</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address' data-test="address">{t('Address')}</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>{t('Description')}</label>
          <textarea
            data-test="description"
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button  data-test="add">{t('Add Meetup')}</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
