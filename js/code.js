import React from 'react';
import ReactDOM from 'react-dom';
import importedFlashCardDataFile from 'flashCardData';

console.log("Test");

const App = function() {
    const cardData = importedFlashCardDataFile;
    return (
        <div className='App'>
            <h1 className='title'>Flashback</h1>
            <p className="sub-title">An interactive flashcard app.</p>
            <div className="card-list">
                {/* second parameter on map is always index */}
                {cardData.map(
                    (indv_data, index) => 
                        <Card {...Object.assign({key: index}, indv_data.front, indv_data.back)} />
                    ) 
                }
            </div>
        </div>);
};
const Card = ({question, hint}) => 
    (<div className="Card -front">
        <div className="front">
            <h3 className="question">{question}</h3>
            <p className="hint"><span>Hint: </span>{hint}</p>
        </div>
    </div>);
// };
ReactDOM.render(<App/>, document.getElementById('app'));
// export default App;
