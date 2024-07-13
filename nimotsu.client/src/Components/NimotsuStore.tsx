import { makeAutoObservable } from "mobx";
import NimotsuContainer from './NimotsuContainer';
import { v4 as uuidv4 } from 'uuid';

const findNimotsuContainer = (nimotsuContainers: NimotsuContainer[], id: string): number => {
    const index = nimotsuContainers.findIndex((n) => n.id === id);
    return index;
}
const updateNimotsuContainer = (nimotsuContainers: NimotsuContainer[], container: NimotsuContainer): NimotsuContainer[] => {
    const index = nimotsuContainers.findIndex((n) => n.id === container.id);
    if (index !== -1) {
        nimotsuContainers[index] = container;
    }
    return nimotsuContainers;
}
const addNimotsuContainerFunc = (nimotsuContainers: NimotsuContainer[], nimotsu: NimotsuContainer): NimotsuContainer[] => {
    nimotsu.id = uuidv4();
    nimotsuContainers.push(nimotsu)
    return nimotsuContainers;
}

const removeNimotsuContainerFunc = (nimotsuContainers: NimotsuContainer[], id: string) => {
    return nimotsuContainers.filter(x => {
        return x.id != id;
    });
}
const emptyNimotsuContainer = {
    id: uuidv4(),
    name: "",
    icon: "🧳",
    color: "#0000ff"
}
class NimotsuStore {
    nimotsuContainers: NimotsuContainer[] = [];
    newNimotsuContainer: NimotsuContainer = emptyNimotsuContainer;
    isNew: boolean = true;
    constructor() {
        makeAutoObservable(this);
    }

    loadNimotsuContainer(id: string) {
        const containerId = findNimotsuContainer(this.nimotsuContainers, id);
        this.newNimotsuContainer = this.nimotsuContainers[containerId];
        this.isNew = false;
    }
    updateNimotsuContainer() {
        const existingContainer = findNimotsuContainer(this.nimotsuContainers, this.newNimotsuContainer.id);
        if (existingContainer !== -1) {
            this.nimotsuContainers = updateNimotsuContainer(this.nimotsuContainers, this.newNimotsuContainer);
        }
    }
    addNimotsuContainer() {
        this.nimotsuContainers = addNimotsuContainerFunc(this.nimotsuContainers, this.newNimotsuContainer);
        emptyNimotsuContainer.id = uuidv4();
        this.newNimotsuContainer = emptyNimotsuContainer;
        this.isNew = true;
    }

    removeNimotsuContainer(id: string) {
        this.nimotsuContainers = removeNimotsuContainerFunc(this.nimotsuContainers, id);
    }

}
const store = new NimotsuStore();
export default store;