export const Filter = ({ onChange }) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="string" name="filter" onChange={onChange} />
        </>
    )
}