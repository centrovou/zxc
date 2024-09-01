import './JournalForm.css';
import Button from '../Button/Button';
const JournalForm = ({ onSubmit }) => {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const FormProps = Object.fromEntries(formData);
    onSubmit(FormProps);
  };
  return (
    <form className="journalForm" onSubmit={addJournalItem}>
      <div>
        <input className="styleTitleInput" type="text" name="title" />
      </div>
      <div className='wrapperLabelDate'>
        <label htmlFor="date" className='dateForm'>
         <img src="/date.svg" alt="zxc" />
          <span>Data</span>
        </label>
        <input id="date" type="date" name="date" />
      </div>

      <div className='wrapperLabelDate'>
        <label htmlFor="text" className='dateForm'>
         <img src="/folder.svg" alt="zxc" />
          <span>Метки</span>
        </label>
        <input id='text' type="text" name="tag" />
      </div>
       <textarea className='' name="text" id=""></textarea>
      <Button text="Cохранить" />
    </form>
  );
};

export default JournalForm;
