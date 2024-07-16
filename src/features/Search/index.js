import { useDispatch, useSelector } from "react-redux"
import { toggleSelectedValues, updateCounters, updateSelectedClass } from "./Airports.slice"
import SelectCountry from "./SelectCountry"
import { Counter } from "./Counter";
import { CLASSES } from "../../contants";
import { Travellers } from "./Travellers";
import "./search.css"
import { useCallback, useEffect, useRef, useState } from "react";


export const Search = () => {
    const dispatch = useDispatch();
    const toList = useRef()
    const fromList = useRef()
    const counters = useSelector(state => state.counters)
    const from = useSelector(state => state.selectedFrom)
    const to = useSelector(state => state.selectedTo)
    const selectedClass = useSelector(state => state.selectedClass)
    const travellers = counters.adult + counters.child + counters.infant

    const documentClickHandler = useCallback(() => {
        toList.current.style.display = "none";
        fromList.current.style.display = "none";
    });

    useEffect(() => {
        document.addEventListener('click', documentClickHandler)
        return () => document.removeEventListener('click', documentClickHandler)
    }, [])

    return (
        <>
            <section style={{ display: "flex", justifyContent: "center" }}>
                <SelectCountry ref={toList} label="Depart From" name="From" value={from?.cityName} code={from?.cityCode}></SelectCountry>
                <button className="change-btn" onClick={() => dispatch(toggleSelectedValues())}>change</button>
                <SelectCountry ref={fromList} label="Going To" name="To" value={to?.cityName} code={to?.cityCode}></SelectCountry>
            </section>
            <section>
                <h3>Traveller(s) Class</h3>
                <label style={{ fontWeight: "bold" }}>
                    {travellers > 0 && <span>
                        {travellers} Traveller
                    </span>}
                    {(selectedClass && travellers > 0) && ', '}
                    {<span>
                        {selectedClass}
                    </span>}
                </label>
                <Travellers />
            </section >
            <section className="flight-class">
                {
                    Object.keys(CLASSES).map((key) => (
                        <div key={key}><input name="flightClass" type="radio" onClick={() => dispatch(updateSelectedClass(CLASSES[key]))}></input><span style={{ textDecoration: "Capitalize" }}>{CLASSES[key]}</span></div>
                    ))
                }
            </section>
        </>
    )
}