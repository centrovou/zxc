
import './JournalItem.css'

const JournalItem = ({ title, text, date }) => {
 const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
  return (
    <>
      <div className="JournalTitle">{title}</div>
      <div className="JournalBody">
        <div className="JournalDate">{formatedDate}</div>
        <div className="JournalText">{text}</div>
      </div>
    </>
  );
};

export default JournalItem;
