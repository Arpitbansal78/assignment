export const Counter = (props) => {
    const { value, handler } = props;

    return (<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <button disabled={value >= 9} onClick={() => handler(+1)}>+</button>
        <div style={
            { padding: "5px", border: "1px solid #AAA" }
        }>{value}</div>
        <button disabled={value === 0} onClick={() => handler(-1)}>-</button >
    </div>)
}