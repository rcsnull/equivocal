"use strict";

class Fantasy {
    constructor(illusion) {
        this.illusion = illusion;
    }

    compare(reality) {
        return this.illusion.includes(reality);
    }
}

class Perspective {
    constructor(fantasy) {
        this.fantasy = fantasy;
    }

    equivocal(otherPerspective) {
        return this.fantasy.compare(otherPerspective.fantasy.illusion);
    }
}

class Person {
    constructor(illusion) {
        let fantasy = new Fantasy(illusion);
        this.perspective = new Perspective(fantasy);
    }
}

let king = new Person("The Izanagi always seeks perspective");
let queen = new Person("The Izanami values loyalty.");
let izanagi = new Perspective(new Fantasy("Izanagi"));
let izanami = new Perspective(new Fantasy("Izanami"));

console.log(king.perspective.equivocal(izanagi));
console.log(king.perspective.equivocal(izanami));
console.log(queen.perspective.equivocal(izanami));
console.log(king.perspective.fantasy.illusion); // "The Izanagi always seeks perspective"
console.log(queen.perspective.fantasy.illusion); // "The Izanami values loyalty."

function makeRoyalDecision(kingPerspective, queenPerspective, izanagiPerspective, izanamiPerspective) {
    if (kingPerspective.equivocal(izanagiPerspective) && queenPerspective.equivocal(izanamiPerspective)) {
        console.log("Both king and queen agree with the divine perspectives. Peace reigns in the kingdom.");
    } else if (kingPerspective.equivocal(izanagiPerspective)) {
        console.log("Only the king agrees with the divine perspective. The court is in mild discord.");
    } else if (queenPerspective.equivocal(izanamiPerspective)) {
        console.log("Only the queen agrees with the divine perspective. The court is in mild discord.");
    } else {
        console.log("Neither the king nor the queen agree with the divine perspectives. The kingdom faces turmoil.");
    }
}

makeRoyalDecision(king.perspective, queen.perspective, izanagi, izanami);
makeRoyalDecision(queen.perspective, king.perspective, izanagi, izanami);
