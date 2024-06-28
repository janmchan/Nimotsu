import { observer } from 'mobx-react';
import store from './Store';

function NimotsuListAdd() {
    return (
        <div className="container mx-auto mb-8 p-4 border border-gray-300 rounded-md shadow-sm">
            <div className="mb-5">
                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name</label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                value={store.newNimotsuContainer.name}
                onChange={(evt) => (store.newNimotsuContainer.name = evt.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Color</label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Color"
                value={store.newNimotsuContainer.color}
                onChange={(evt) => (store.newNimotsuContainer.color = evt.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Icon</label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="icon"
                value={store.newNimotsuContainer.icon}
                onChange={(evt) => (store.newNimotsuContainer.icon = evt.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Image</label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="path/to/image.jpg"
                value={store.newNimotsuContainer.image}
                onChange={(evt) => (store.newNimotsuContainer.image = evt.target.value)}
                />
            </div>            
            <button onClick={() => store.addNimotsuContainer()}>Add Nimotsu</button>
        </div>
    );
}

export default observer(NimotsuListAdd); 