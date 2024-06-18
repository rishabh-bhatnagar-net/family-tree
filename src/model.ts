import {getColor} from "./color.ts";

export function generateTitleFromObject(data: { [key: string]: string }) {
    const element = document.createElement("div");

    // Iterate over the key-value pairs and create HTML elements
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const pairElement = document.createElement("div");
            const strongElement = document.createElement("strong");
            strongElement.textContent = `${key}:`;
            const valueElement = document.createElement("span");
            valueElement.textContent = ` ${data[key]}`;
            pairElement.appendChild(strongElement);
            pairElement.appendChild(valueElement);
            element.appendChild(pairElement);
        }
    }
    return element;
}


export enum Gender {
    MALE, FEMALE
}

export class Person {
    static nPeople = 0;
    private id: number;
    private name: string;
    private dob: string;
    private generation: number;
    public readonly gender: Gender;

    constructor(name: string, gender: Gender, date_of_birth: string, generation: number) {
        this.id = Person.nPeople++;
        this.name = name;
        this.dob = date_of_birth
        this.generation = generation
        this.gender = gender
    }

    getID() {
        return this.id;
    }

    toNode() {
        return {
            id: this.id,
            label: this.name.replaceAll(" ", "\n"),
            color: getColor(this.generation),
            title: generateTitleFromObject({"Date Of Birth": this.dob}),
        }
    }
}


export class FamilyTree {
    private people: Person[];
    private edges: { from: number, to: number, label: string }[];

    constructor() {
        this.people = [];
        this.edges = [];
    }

    addPerson(person: Person) {
        this.people.push(person);
    }

    addPeople(people: Person[]) {
        this.people.push(...people);
    }

    marry(person1: Person, person2: Person) {
        this.edges.push({from: person1.getID(), to: person2.getID(), label: "Married To"});
        this.edges.push({from: person2.getID(), to: person1.getID(), label: "Married To"});
    }

    addChildren(parent1: Person, parent2: Person, children: Person[]) {
        for (let child of children) {
            let what = child.gender === Gender.MALE ? "Son" : "Daughter";
            this.people.push(child);
            this.edges.push({from: parent1.getID(), to: child.getID(), label: what})
            this.edges.push({from: parent2.getID(), to: child.getID(), label: what});
        }
    }

    toGraph() {
        return {
            nodes: this.people.map(person => person.toNode()),
            edges: this.edges
        }
    }
}