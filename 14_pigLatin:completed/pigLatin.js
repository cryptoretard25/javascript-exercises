const { log } = console;
//^[b-df-hj-np-tv-z]\w+/g match full word if starts from one consonant
// const consonantCluster = /^[b-df-hj-np-tv-z]{2,3}\w+/g; //согласные подряд

function pigLatin(str) {
  str = str.split(" ");
  const vovel = /^[aeiou]\w+/g; //гласные буквы
  const consonant = /^[b-df-hj-np-tv-z]*qu|^[b-df-hj-np-tv-z]+/g; //согласные буквы
  const result = [];

  str.forEach(word => {
    if (word.match(consonant)){
        const matches = consonant.exec(word);
        result.push(word.replace(consonant,'') + matches[0] + 'ay')
    }
    if (word.match(vovel)){
        result.push(word+'ay')
    }
    
  });

  return result.join(' ');
}


log(pigLatin("banana"));
log(pigLatin("cherry")); // errychay
log(pigLatin('eat pie'));
log(pigLatin("the quick brown fox"));

// Do not edit below this line
module.exports = pigLatin;
