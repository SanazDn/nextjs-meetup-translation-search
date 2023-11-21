import classes from "./MeetupDetail.module.css";
import Card from "../ui/Card";
import { useTranslation } from 'next-i18next';

function MeetupDetail(props) {
  const { t } = useTranslation('translation');
  return (
    <Card>
      <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1 className="m-3">{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </Card>
  );
}

export default MeetupDetail;
