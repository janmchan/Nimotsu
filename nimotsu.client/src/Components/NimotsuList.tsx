import store, { NimotsuContainer } from './Store';
import { observer } from 'mobx-react';
import NimotsuAdd from './NimotsuAdd';
import '.././App.css';
function NimotsuListItems() {
    const contents = 
    <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
            <tr>
                    <th>Luggage</th>
                    <th>Color</th>
                    <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            {store.nimotsuContainers.map( (nimotsuContainer: NimotsuContainer) =>
                <tr key={nimotsuContainer.id}>
                    <td>{nimotsuContainer.name}</td>
                    <td>{nimotsuContainer.color}</td>
                    <td>{nimotsuContainer.icon}</td>
                    <td><button onClick={() => store.removeNimotsuContainer(nimotsuContainer.id)}>Delete</button></td>
                </tr>
            )}
        </tbody>
    </table>;
    return (
        <div>
            <h1 id="tableLabel">Your Nimotsu!</h1>
            <p>This component demonstrates fetching data from the server.</p>
            <NimotsuAdd />
            { contents }
        </div>
    );
}
const NimotsuListObserver = observer(NimotsuListItems);

function NimotsuList() {
    return <NimotsuListObserver/>
}

export default NimotsuList;