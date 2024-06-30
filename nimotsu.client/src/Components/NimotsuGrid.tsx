import store from './NimotsuStore';
import NimotsuContainer from './NimotsuContainer';
import { observer } from 'mobx-react';
function NimotsuGridLayout() {
    const contents =
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Luggage
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {store.nimotsuContainers.map((nimotsuContainer: NimotsuContainer) =>
                    <tr key={nimotsuContainer.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">
                                <div style={{ width: "25px", height: "25px", backgroundColor: nimotsuContainer.color } }></div>
                        </td>
                        <td className="px-6 py-4">
                            {nimotsuContainer.name}
                        </td>
                            <td className="px-6 py-4">
                                <button
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    onClick={() => store.loadNimotsuContainer(nimotsuContainer.id)}>Edit</button>
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
            <div className="p-4 border border-gray-300 rounded-md shadow-sm">
                {contents}
            </div>
        </>
    );
}
const NimotsuListObserver = observer(NimotsuGridLayout);

function NimotsuGrid() {
    return <NimotsuListObserver />
}

export default NimotsuGrid;