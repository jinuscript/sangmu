import { atom } from "jotai";

type TServiceTypeAtom = "가사" | "민사" | "형사";

export const serviceTypeAtom = atom<TServiceTypeAtom>("가사");
