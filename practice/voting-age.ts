export function getVotingMessage(age: number): string {
    if (age < 1 || !Number.isInteger(age)) {
        throw new Error("Not a valid number.");
    }

    if (age < 18) {
        return "You can't vote yet.";
    } else {
        return "You can vote.";
    }
}
