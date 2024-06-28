import store, { NimotsuContainer } from './Store';
import { observer } from 'mobx-react';
import NimotsuAdd from './NimotsuAdd';
function NimotsuListItems() {
    const contents =

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Icon
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Luggage
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Content
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {store.nimotsuContainers.map((nimotsuContainer: NimotsuContainer) =>
                    <tr key={nimotsuContainer.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {nimotsuContainer.icon}
                        </th>
                        <td className="px-6 py-4">
                            {nimotsuContainer.color}
                        </td>
                        <td className="px-6 py-4">
                            {nimotsuContainer.name}
                        </td>
                        <td className="px-6 py-4">
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    onClick={() => store.removeNimotsuContainer(nimotsuContainer.id)}>Delete</button>
                        </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>;
    return (
        <>
            <NimotsuAdd />
            <div className="p-4 border border-gray-300 rounded-md shadow-sm">
                {contents}
            </div>
        </>
    );
}
const NimotsuListObserver = observer(NimotsuListItems);

function NimotsuList() {
    return <NimotsuListObserver/>
}

export default NimotsuList;