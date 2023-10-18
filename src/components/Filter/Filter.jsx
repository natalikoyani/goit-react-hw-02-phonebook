import { StyledTitle, StyledFilter } from "./Filter.styled";

export const Filter = ({ onChange }) => {
    return (
        <>
            <StyledTitle>Find contacts by name</StyledTitle>
            <StyledFilter type="string" name="filter" onChange={onChange} />
        </>
    )
}