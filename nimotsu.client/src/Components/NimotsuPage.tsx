import NimotsuAdd from './NimotsuAdd';
import NimotsuGrid from './NimotsuGrid';
import NimotsuStore from './NimotsuStore';
import NimotsuApi from './NimotsuApi';
import { useEffect } from 'react';
function NimotsuPage() {
    useEffect(() => {
        async function getData() {
            NimotsuStore.nimotsuContainers = await NimotsuApi.get();
        }
        getData();
    });
    return (
        <>
            <NimotsuAdd/>
            <NimotsuGrid />
        </>
    );
}

export default NimotsuPage;