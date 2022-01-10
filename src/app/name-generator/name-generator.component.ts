import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.css']
})
export class NameGeneratorComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getRandom(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  getOneConsonant(consonants: string) {
    let start = this.getRandom(1, 20);
    let end = start + 1;
    console.log("consonant", start, consonants.slice(start, end))
    return consonants.slice(start, end);
  }

  getOneVowel(vowel: string) {
    let start = this.getRandom(1, 4);
    let end = start + 1;
    console.log("vowel", start, vowel.slice(start, end))
    return vowel.slice(start, end);
  }

  formOneSyllable(vowels: string, consonants: string) {
    const syllable =
      this.getOneConsonant(consonants) + this.getOneVowel(vowels);
    return syllable;
  }

  generateNewName() {
    const vowels = 'AEIOU';
    const consonants = 'QWRTYPSDFGHJKLMNBVCXZ';
    const numberOfSyllables = this.getRandom(2, 4);
    console.log("number Of Syllables", numberOfSyllables)
    this.name = '';

    for (let i = 1; i <= numberOfSyllables; i++) {
      this.name += this.formOneSyllable(vowels, consonants).toLowerCase();
    }
  }

}
