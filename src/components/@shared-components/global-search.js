import DMTSearchInput from "@/components/@shared-components/forms/search-input";
const GlobalSearch = ({query, onFilter }) => {
    const handleOnChange = e => {
        const  { value } = e.target;
        onFilter(value)
    }
    return (
        <>
            <DMTSearchInput
                placeholder={'Search...'}
                variant={'outlined'}
                onChange={handleOnChange}
                value={query}
            />
        </>
    )
}

export default GlobalSearch;