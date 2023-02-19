import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../stores/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector