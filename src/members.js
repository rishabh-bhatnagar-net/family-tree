import {FamilyTree, Gender, Person} from "./model.ts";

export function getMembersGraph() {
  let tree = new FamilyTree();
  let dadaji = new Person("Kharaksingh Bhatnagar", Gender.MALE, "", 0);
  let dadiji = new Person("Shantidevi Bhatnagar", Gender.FEMALE, "", 0);
  tree.addPerson(dadaji)
  tree.addPerson(dadiji)
  tree.marry(dadaji, dadiji)

  let naniji = new Person("Kanti Bhatnagar", Gender.MALE, "", 0);
  let nanaji = new Person("Vijay Pal Bhatnagar", Gender.MALE, "", 0);
  tree.addPeople([naniji, nanaji])
  tree.marry(nanaji, naniji)

  let papa = new Person("Sushil Kumar Bhatnagar", Gender.MALE, "9th October 1965", 1);
  let mummy = new Person("Ritu Bhatnagar", Gender.FEMALE, "23rd June 1973", 1);
  let badeTauji = new Person("Anil Kumar Bhatnagar", Gender.MALE, "02nd February", 1);
  let badiTaiji = new Person("Abha Bhatnagar", Gender.MALE, "27th September", 1);
  let choteTauji = new Person("Somprakash Bhatnagar", Gender.MALE, "18th June", 1);
  let chotiTaiji = new Person("Neelam Bhatnagar", Gender.FEMALE, "18th November", 1);
  let chachaji = new Person("Vipin Bhatnagar", Gender.MALE, "10th August", 1)
  let chachiji = new Person("Shobha Bhatnagar", Gender.FEMALE, "28th June", 1)
  let buaji = new Person("Rekha Bhatnagar", Gender.FEMALE, "27th June", 1);
  let fufaji = new Person("Arun Kumar Bhatnagar", Gender.MALE, "30th June", 1);
  tree.addChildren(dadaji, dadiji, [papa, choteTauji, badeTauji, chachaji, buaji])
  tree.addPeople([chachiji, chotiTaiji, badiTaiji, fufaji])

  let didi = new Person("Ankita Bhatnagar", Gender.FEMALE, "15th October 1996", 2);
  let sunny = new Person("Aditya Bhatnagar", Gender.MALE, "19th January 2004", 2);
  let rishabh = new Person("Rishabh Bhatnagar", Gender.MALE, "11th January 1999", 2);
  let jijaji = new Person("Utkarsh Pandharkar", Gender.MALE, "22nd May", 2);
  tree.addChildren(papa, mummy, [didi, sunny, rishabh])
  tree.addPerson(jijaji);
  tree.marry(didi, jijaji);

  let daksh = new Person("Daksh Bhatnagar", Gender.MALE, "2nd January", 2);
  let ansh = new Person("Ansh Bhatnagar", Gender.MALE, "11th January", 2);
  tree.addChildren(chachaji, chachiji, [daksh, ansh]);

  let divya = new Person("Divya Bhatnagar", Gender.FEMALE, "22nd December", 2);
  let himanshu = new Person("Himanshu Bhatnagar", Gender.MALE, "5th October", 2);
  let shubham = new Person("Shubham Bhatnagar", Gender.MALE, "2nd October", 2);
  tree.addChildren(fufaji, buaji, [divya, himanshu, shubham]);

  let chotiMamiji = new Person("Shweta Bhatnagar", Gender.FEMALE, "", 1);
  let choteMamaji = new Person("Pankaj Bhatnagar", Gender.MALE, "", 1);
  let badiMamiji = new Person("Mahima Bhatnagar", Gender.MALE, "", 1);
  let badeMamaji = new Person("Ritesh Bhatnagar", Gender.MALE, "", 1);
  tree.addPeople([chotiMamiji, badiMamiji])
  tree.marry(choteMamaji, chotiMamiji)
  tree.marry(badeMamaji, badiMamiji)
  tree.addChildren(nanaji, naniji, [badeMamaji, choteMamaji, mummy])

  let divyansh = new Person("Divyansh Bhatnagar", Gender.MALE, "", 2);
  let dhruv = new Person("Dhruv Bhatnagar", Gender.MALE, "", 2);
  let mantram = new Person("Mantram Bhatnagar", Gender.MALE, "", 2);
  let khyati = new Person("Khyati Bhatnagar", Gender.MALE, "", 2);
  tree.addChildren(badeMamaji, badiMamiji, [mantram, khyati])
  tree.addChildren(choteMamaji, chotiMamiji, [divyansh, dhruv])


  let anshika = new Person("Anshika Bhatnagar", Gender.FEMALE, "29th October", 2);
  let anurag = new Person("Anurag Bhatnagar", Gender.MALE, "26th August", 2);
  let prisha = new Person("Prisha Bhatnagar", Gender.FEMALE, "17th June", 2);
  tree.addPerson(prisha)
  tree.addChildren(choteTauji, chotiTaiji, [anshika, anurag])
  tree.marry(anurag, prisha)
  tree.addChildren(anurag, prisha, [
    new Person("Krishiv Bhatnagar", Gender.MALE, "18th February", 3),
    new Person("Shivaang Bhatnagar", Gender.MALE, "24th April", 3),
  ]);

  let surbhi = new Person("Surbhi Bhatnagar", Gender.FEMALE, "30th June", 2);
  let varun = new Person("Varun Joshi", Gender.MALE, "31st May", 2);
  let neha = new Person("Neha Bhatnagar", Gender.FEMALE, "", 2);
  let avijit = new Person("Avijit Bansal", Gender.MALE, "1st April", 2);
  tree.addPeople([avijit, varun]);
  tree.marry(neha, avijit);
  tree.marry(surbhi, varun);
  tree.addChildren(surbhi, varun, [new Person("Arya Joshi", Gender.FEMALE, "5th April", 3)])
  tree.addChildren(neha, avijit, [
    new Person("Advit Bansal", Gender.MALE, "25th August", 3),
    new Person("Neevan Bansal", Gender.MALE, "6th December", 3),
  ])
  tree.addChildren(badeTauji, badiTaiji, [surbhi, neha])

  tree.marry(papa, mummy)
  tree.marry(choteTauji, chotiTaiji)
  tree.marry(badeTauji, badiTaiji)
  tree.marry(chachaji, chachiji)
  tree.marry(fufaji, buaji)

  const lineageOf = new URLSearchParams(window.location.search).get('lineageOf');
  const surname = new URLSearchParams(window.location.search).get('surname');
  console.log(`Filtering by lineageOf: ${lineageOf}, surname: ${surname}`)
  tree = tree.filter(lineageOf, surnameFilter(surname))
  let graph = tree.toGraph();
  console.log("graph", graph)
  return graph
}

function surnameFilter(surname: string): (p: Person) => boolean {
  return function (p: Person): boolean {
    if (!surname)
      return true;
    return p.getSurname() === surname;
  }
}
