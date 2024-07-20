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
    public name: string;
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
    people: Person[];
    edges: { from: number, to: number, label: string }[];

    constructor(people = [], edges = []) {
        this.people = people;
        this.edges = edges;
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

    filter(personName: string): FamilyTree {
        console.log("Filtering for a person named:", personName)

        // Get person's record with the given name
        let person = (function (nodes: Person[], memberName: string): Person {
            for (let person of nodes) {
                if (person.name === personName) {
                    return person;
                }
            }
        })(this.people, personName)
        if (!person) {
            console.warn("Person not found, can't filter for lineage.");
            return this;
        }

        // Filtering out the nodes and edges related to this person
        return new FamilyTreeDFS(this).traverse(person);
    }

    toGraph() {
        return {
            nodes: this.people.map(person => person.toNode()),
            edges: this.edges
        }
    }

    empty() {
        return this.people.length === 0;
    }
}

class FamilyTreeDFS {
    private familyTree: FamilyTree;
    private adjList: { [key: number]: { from: number, to: number, label: string }[] };
    private nodeMap: { [key: number]: Person };

    constructor(familyTree: FamilyTree) {
        this.familyTree = familyTree;
        this.adjList = function (nodes, edges): { [key: number]: { from: number, to: number, label: string }[] } {
            let adj = {};
            for (let node of nodes) {
                adj[node.getID()] = [];
            }
            for (let edge of edges) {
                adj[edge.from] = adj[edge.from] || [];
                adj[edge.from].push(edge);
            }
            return adj;
        }(familyTree.people, familyTree.edges);
        this.nodeMap = function (nodes): { [key: number]: Person } {
            let map = {};
            for (let node of nodes) {
                map[node.getID()] = node;
            }
            return map;
        }(familyTree.people)
    }

    _traverse(person: Person, visited = {}, path = [], edges = []) {
        if (!person)
            return;
        if (visited[person.getID()])
            return;
        visited[person.getID()] = true;
        path.push(person);
        for (let neighbourEdge of this.adjList[person.getID()]) {
            edges.push(neighbourEdge);
            let neighbour = this.nodeMap[neighbourEdge.to];
            edges.push(neighbourEdge);
            this._traverse(neighbour, visited, path, edges);
        }
    }

    traverse(person: Person): FamilyTree {
        let visited = {};
        let path = [];
        let edges = [];
        this._traverse(person, visited, path, edges);
        // keep only unique edges
        edges = function (edges) {
            let uniqueEdges = [];
            let seen = {};
            for (let edge of edges) {
                let key = edge.from + "-" + edge.to;
                if (!seen[key]) {
                    seen[key] = true;
                    uniqueEdges.push(edge);
                }
            }
            return uniqueEdges;
        }(edges)
        console.log(edges)
        console.log(path)
        return new FamilyTree(path, edges);
    }
}