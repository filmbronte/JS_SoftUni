class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.forEach(player => {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            const currentPlayer = this.invitedPlayers.find(p => p.name === name);

            if (!currentPlayer) {
                this.invitedPlayers.push({ name, age, playerValue });
            } else {
                if (currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue;
                }
            }
        });
        const invited = [];
        this.invitedPlayers.forEach(p => invited.push(p.name));

        return `You successfully invite ${invited.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');

        const currentPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else if (currentPlayer.playerValue > playerOffer) {
            let difference = currentPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`);
        } else {
            currentPlayer.playerValue = 'Bought';
        }

        return `Congratulations! You sign a contract with ${currentPlayer.name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        age = Number(age);

        const currentPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else if (currentPlayer.age < age) {
            let difference = age - currentPlayer.age;

            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else if (currentPlayer.age >= age) {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let result = ['Players list:'];

        const sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sorted.forEach(player => {
            result.push(`Player ${player.name}-${player.playerValue}`);
        });

        return result.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",
//     "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",
//     "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50",
    "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());