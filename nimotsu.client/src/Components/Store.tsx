import { makeAutoObservable } from "mobx";

export interface NimotsuContainer {
    id: number;
    icon: string;
    name: string;
    image: string;
    color: string;
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
    icon: "",
    color: "",
    image: ""
}
class Store {
    nimotsuContainers: NimotsuContainer[] = [];
    newNimotsuContainer: NimotsuContainer = emptyNimotsuContainer;
    constructor() {
        this.nimotsuContainers.push({
            id: Math.random(),
            name: "Child Luggage",
            icon: "🧳",
            color: "blue",
            image: "sample/path.jpg"
        });
        makeAutoObservable(this);
    }

    addNimotsuContainer() {
        this.nimotsuContainers = addNimotsuContainerFunc(this.nimotsuContainers, this.newNimotsuContainer);
        emptyNimotsuContainer.id = Math.random();
        this.newNimotsuContainer = emptyNimotsuContainer;
    }

    removeNimotsuContainer(id: number) {
        this.nimotsuContainers = removeNimotsuContainerFunc(this.nimotsuContainers, id);
    }

}
const store = new Store();
export default store;