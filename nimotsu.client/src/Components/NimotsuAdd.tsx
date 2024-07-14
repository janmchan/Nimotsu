import { observer } from 'mobx-react';
import { useState } from 'react';
import NimotsuStore from './NimotsuStore';
import { Combobox } from '@headlessui/react';
import NimotsuContainer from './NimotsuContainer';


function NimotsuListAdd() {
    const [store] = useState(NimotsuStore);
    const [selectedPerson, setSelectedPerson] = useState(NimotsuStore.newNimotsuContainer)
    const [query, setQuery] = useState('')
    const filteredNimotsu =
        query === ''
            ? store.nimotsuContainers
            : store.nimotsuContainers.filter((n) => {
                return n.name.toLowerCase().includes(query.toLowerCase())
            })

    const setPerson = (value: NimotsuContainer): void => {
        setSelectedPerson(value)
    }


    const comboBox = (
        <Combobox value={selectedPerson} onChange={setPerson}>
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
            <Combobox.Options>
                {filteredNimotsu.map((nimotsu) => (
                    <Combobox.Option key={nimotsu.id} value={nimotsu.name}>
                        {nimotsu.name}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
    return (
        <div className="container mx-auto mb-8 p-4 border border-gray-300 rounded-md shadow-sm">
            {comboBox}
            <div className="mb-5">
                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name</label>
                <input
                    type="color"
                    value={store.newNimotsuContainer.color}
                    style={{ backgroundColor: store.newNimotsuContainer.color }}
                    className="max-w-xs"
                    onChange={(evt) => (store.newNimotsuContainer.color = evt.target.value)}
                />
                <input className="w-500"
                placeholder="Name"
                value={store.newNimotsuContainer.name}
                onChange={(evt) => (store.newNimotsuContainer.name = evt.target.value)}
                />
            </div>
            
            <button onClick={() => store.isNew ? store.addNimotsuContainer() : store.updateNimotsuContainer()}>{store.isNew ? "Add" : "Edit"} Nimotsu</button>
        </div>
    );
}

export default observer(NimotsuListAdd); 