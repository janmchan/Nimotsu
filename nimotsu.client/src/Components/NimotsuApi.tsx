import NimotsuContainer from './NimotsuContainer';
class NimotsuApi {
    async get(): Promise<NimotsuContainer[]> {
        const response = await fetch('luggage');
        const data = await response.json();
        return data;
    }
}
const NimotsuApiInstance = new NimotsuApi();
export default NimotsuApiInstance;