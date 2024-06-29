import { makeAutoObservable } from "mobx";

export interface NimotsuContainer {
    id: number;
    icon: string;
    name: string;
    color: string;
}
const findNimotsuContainer = (nimotsuContainers: NimotsuContainer[], id: number): number => {
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
    nimotsu.id = Math.random();
    nimotsuContainers.push(nimotsu)
    return nimotsuContainers;
}

const removeNimotsuContainerFunc = (nimotsuContainers: NimotsuContainer[], id: number) => {
    return nimotsuContainers.filter(x => {
        return x.id != id;
    });
}
const emptyNimotsuContainer = {
    id: Math.random(),
    name: "",
    icon: "🧳",
    color: "rgb(153,0,255)"
}
class Store {
    nimotsuContainers: NimotsuContainer[] = [];
    icons: string[] = ["🧳", "👜", "💼"];
    newNimotsuContainer: NimotsuContainer = emptyNimotsuContainer;
    isNew: boolean = true;
    constructor() {
        this.nimotsuContainers.push({
            id: Math.random(),
            name: "Child Luggage",
            icon: "👜",
            color: "blue"
        });
        makeAutoObservable(this);
    }

    loadNimotsuContainer(id: number) {
        const containerId = findNimotsuContainer(this.nimotsuContainers, id);
        this.newNimotsuContainer = this.nimotsuContainers[containerId];
        this.isNew = false;
    }

    addNimotsuContainer() {
        const existingContainer = findNimotsuContainer(this.nimotsuContainers, this.newNimotsuContainer.id);
        if (existingContainer !== -1) {
            this.nimotsuContainers = updateNimotsuContainer(this.nimotsuContainers, this.newNimotsuContainer);
        } else {
            this.nimotsuContainers = addNimotsuContainerFunc(this.nimotsuContainers, this.newNimotsuContainer);
        }
        emptyNimotsuContainer.id = Math.random();
        this.newNimotsuContainer = emptyNimotsuContainer;
        this.isNew = true;
    }

    removeNimotsuContainer(id: number) {
        this.nimotsuContainers = removeNimotsuContainerFunc(this.nimotsuContainers, id);
    }

}
const store = new Store();
export default store;