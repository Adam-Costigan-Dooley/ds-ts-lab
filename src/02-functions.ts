import {Friend, Colleague } from './myTypes'
import {friends} from './01-basics';
import {colleagues} from './01-basics';

console.log('BOOT:', __filename);


function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(fs: Friend[]): string[] {
  const messages: string[] = [];
  for (let i = 0; i < fs.length; i++) {
    messages.push(older(fs[i]));
  }
  return messages;
}

console.log(older(friends[0]))
console.log(allOlder(friends))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
  const highest = highestExtension(cs);
  const highestPlus = highest.contact.extension + 1;

  const newPerson: Colleague = {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: highestPlus,
    },
  };
  cs.push(newPerson);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
