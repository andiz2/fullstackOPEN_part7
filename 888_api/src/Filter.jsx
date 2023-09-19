const Filter = ({newFilter, handleFilter}) => {
    return (
        <>
            <input value = {newFilter} onChange = {handleFilter} />
        </>
    )
}
 
export default Filter;