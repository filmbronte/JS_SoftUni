class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);

            const currentCandidate = this.jobCandidates.find(c => c.name === name);

            if (!currentCandidate) {
                this.jobCandidates.push({ name, education, yearsExperience });
            } else {
                if (currentCandidate.yearsExperience < yearsExperience) {
                    currentCandidate.yearsExperience = yearsExperience;
                }
            }
        });

        const added = [];

        this.jobCandidates.forEach(c => added.push(c.name));

        return `You successfully added candidates: ${added.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');

        const currentCandidate = this.jobCandidates.find(c => c.name === name);

        if (!currentCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (currentCandidate.yearsExperience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        } else {
            currentCandidate.yearsExperience = 'hired';
        }

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const currentCandidate = this.jobCandidates.find(c => c.name === name);

        if (!currentCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (currentCandidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (currentCandidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        } else {
            let result = ['Candidates list:'];

            const sorted = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
            sorted.forEach(c => {
                result.push(`${c.name}-${c.yearsExperience}`);
            });

            return result.join('\n');
        }
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18", "Daniel Jones- Bachelor-20"]));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());