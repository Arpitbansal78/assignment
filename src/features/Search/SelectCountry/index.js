import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../../../utils/debounce";
import { updateSelectedTo, updateSelectedFrom } from "../Airports.slice";

import "./country.css"
import { useDebouncedValue } from "../../../hooks/useDeboucedValue";

const SelectCountry = forwardRef(function (props, ref) {
    const { label, value, code, name } = props
    const [searchKeyword, setSearchKeyword] = useState("");
    const debounceTerm = useDebouncedValue(searchKeyword, 300);
    const dispatch = useDispatch();
    const cities = useSelector(state => state.airports)
    const [filteredCities, setFilteredCities] = useState();


    useEffect(() => {
        const filteredData = cities.filter((key) => key.cityName.toLowerCase().includes(searchKeyword?.toLowerCase()));
        setFilteredCities(filteredData)
    }, [debounceTerm])

    const handleCountrySelect = (city) => {
        if (name?.toLowerCase() === "to")
            dispatch(updateSelectedTo(city));
        else
            dispatch(updateSelectedFrom(city))
        setFilteredCities([])
        ref.current.style.display = "none";
        setSearchKeyword('')
    }

    return (
        <>
            <div className="country-container">
                <label className="label">{label}</label>
                <label className="label">{value}</label>
                <input type="text" value={code} onChange={(e) => {
                    ref.current.style.display = "block";
                    setSearchKeyword(e.target.value)
                }
                }></input>
            </div>
            <ul className="list" ref={ref}>{filteredCities?.length > 0 && filteredCities.map((city, index) => (
                <li key={index} style={{ listStyle: "none", cursor: "pointer" }} onClick={() => handleCountrySelect(city)}>
                    <label className="city-name" dangerouslySetInnerHTML={{
                        __html: `${city.cityName.replaceAll(debounceTerm, '<span class="red">' + debounceTerm + '</span>')} (${city.cityCode})`
                    }} />
                    <label className="airport-name" dangerouslySetInnerHTML={{
                        __html: `${city.airportName.replaceAll(debounceTerm, '<span class="red">' + debounceTerm + '</span>')}`
                    }} />
                </li >
            ))}
            </ul >
        </>
    )
})

export default SelectCountry;