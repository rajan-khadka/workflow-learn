import { createContext } from "react";
import { INoteContext } from "./NoteState";

export const NoteContext = createContext<null | INoteContext>(null);
