//info types are used as blueprints
export type character = {
    name: string;
    level: number;
    levelPoints: number;
    maxHp: number;
    manaRegen: number;
    cardSpeed: number;
    unlocked: boolean;
}

export type characterInfo = {
    name: string;
    description: string;
    maxHp: number;
    manaRegen: number;
    cardSpeed: number;
}

export type card = {
    topic: string;
    effect: string; //damage, manaBlock (slow down regeneration of mana), cardBlock (slow down card drawing speed), buff, heal
    difficulty: number; // 1.1 ^ difficulty-1
    effectMultiplier: number;
    manaUsage: number;
    question: question | null;
}

export type cardInfo = {
    topic: string;
    effectMultiplier: number;
    manaUsage: number;
}

export type question = {
    name: string;
}