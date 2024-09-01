import './App.css';

import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm.JSX';
import { useState } from 'react';



const INITIAL_DATA = [
 { id:1,
   title: 'Подготовка к обновлению курсов',
   date: new Date(),
   text: 'Горные походы открывают удивительные природные ландшафты',
 },
 {
  id:2,
   title: 'Поход в годы',
   date: new Date(),
   text: 'Большое значение в горном туризме придается бытовому обустройству',
 },
];
function App() {
 const [items, setItems] = useState(INITIAL_DATA)
  
 //добавление айтемов
 const addItem = (item) => {
   setItems(oldItems => [...oldItems, {
    text: item.text,
    title: item.title,
    date: new Date(item.date),
    id: Math.max(...oldItems.map(i => i.id)) + 1
   }])
 }

 const sortItems = (a,b) => {
    if(a.date > b.date) {
     return 1;
    } else {
     return -1;
    }
 }
 
  return (
    <div className="App">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList >
          { items.length === 0 ?  <div>Записей нет</div> : items.sort(sortItems).map((el) => (
            <CardButton key={el.id}>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
