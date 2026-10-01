export function getVotingMessage(age: number): string {
    if (age < 1 || !Number.isInteger(age)) {
        throw new Error("Невалідне число.");
    }

    if (age < 18) {
        return "Ви ще не можете голосувати.";
    } else {
        return "Ви можете голосувати.";
    }
}
