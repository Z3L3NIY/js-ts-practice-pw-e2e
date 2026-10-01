import { test, expect } from "@playwright/test";
import { getVotingMessage } from "../practice/voting-age";

const CAN_VOTE_MESSAGE = "You can vote.";
const CAN_NOT_VOTE_MESSAGE = "You can't vote yet.";
const ERROR_MESSAGE = "Not a valid number.";

test(`1 returns ${CAN_NOT_VOTE_MESSAGE}`, () => {
    expect(getVotingMessage(1)).toBe(CAN_NOT_VOTE_MESSAGE);
});

test(`9 returns ${CAN_NOT_VOTE_MESSAGE}`, () => {
    expect(getVotingMessage(9)).toBe(CAN_NOT_VOTE_MESSAGE);
});

test(`17 returns ${CAN_NOT_VOTE_MESSAGE}`, () => {
    expect(getVotingMessage(17)).toBe(CAN_NOT_VOTE_MESSAGE);
});

test(`18 returns ${CAN_VOTE_MESSAGE}`, () => {
    expect(getVotingMessage(18)).toBe(CAN_VOTE_MESSAGE);
});

test(`19 returns ${CAN_VOTE_MESSAGE}`, () => {
    expect(getVotingMessage(19)).toBe(CAN_VOTE_MESSAGE);
});

test(`27 returns ${CAN_VOTE_MESSAGE}`, () => {
    expect(getVotingMessage(27)).toBe(CAN_VOTE_MESSAGE);
});

test("-Infinity invokes an error", () => {
    expect(() => getVotingMessage(-Infinity)).toThrow(ERROR_MESSAGE);
});

test("Infinity invokes an error", () => {
    expect(() => getVotingMessage(Infinity)).toThrow(ERROR_MESSAGE);
});

test("-1 invokes an error", () => {
    expect(() => getVotingMessage(-1)).toThrow(ERROR_MESSAGE);
});

test("0 invokes an error", () => {
    expect(() => getVotingMessage(0)).toThrow(ERROR_MESSAGE);
});

test("Decimal number invokes an error", () => {
    expect(() => getVotingMessage(17.5)).toThrow(ERROR_MESSAGE);
});

test("Nan number invokes an error", () => {
    expect(() => getVotingMessage(NaN)).toThrow(ERROR_MESSAGE);
});
