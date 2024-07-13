import NimotsuContainer from './NimotsuContainer';
import retry from './RetryComponent';
class NimotsuApi {
    async get(): Promise<NimotsuContainer[]> {
        return retry<NimotsuContainer[]>(async () => {
            const response =  await fetch('luggage');
            const data = await response.json();
            return data;
        });
    }
}
const NimotsuApiInstance = new NimotsuApi();
export default NimotsuApiInstance;