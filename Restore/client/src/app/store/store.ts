import { legacy_createStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/contact/counterReduces";

export function configureTheStore() {
    return legacy_createStore(counterReducer)
}