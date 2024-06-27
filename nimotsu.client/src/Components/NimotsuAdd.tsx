import { observer } from 'mobx-react';
import store from './Store';

function NimotsuListAdd() {
    return (
        <div>
            <input
                placeholder="Name"
                value={store.newNimotsuContainer.name}
                onChange={ (evt) => (store.newNimotsuContainer.name = evt.target.value)}
            />
            <input
                placeholder="Color"
                value={store.newNimotsuContainer.color}
                onChange={(evt) => (store.newNimotsuContainer.color = evt.target.value)}
            />
            <input
                placeholder="icon"
                value={store.newNimotsuContainer.icon}
                onChange={(evt) => (store.newNimotsuContainer.icon = evt.target.value)}
            />
            <input
                placeholder="path/to/image.jpg"
                value={store.newNimotsuContainer.image}
                onChange={(evt) => (store.newNimotsuContainer.image = evt.target.value)}
            />
            <button onClick={ () => store.addNimotsuContainer() }>Add Nimotsu</button>
        </div>
    );
}

export default observer(NimotsuListAdd);