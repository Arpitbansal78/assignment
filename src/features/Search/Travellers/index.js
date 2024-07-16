import { useDispatch, useSelector } from "react-redux"
import { Counter } from "../Counter";
import { updateCounters } from "../Airports.slice";
import { TRAVELERS_SETTINGS } from "../../../contants";

export const Travellers = () => {
    const dispatch = useDispatch();
    const counters = useSelector(state => state.counters)

    return (<section style={{ display: "flex", justifyContent: "center" }}>
        {
            Object.keys(TRAVELERS_SETTINGS).map((setting) => (
                <div key={setting}>
                    <label>{TRAVELERS_SETTINGS[setting]}</label>
                    <Counter value={counters[setting]} handler={(value) => dispatch(updateCounters({ type: setting, value }))}></Counter>
                </div>
            ))
        }
    </section >)
}