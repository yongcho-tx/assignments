

const ParksByState = () => {
    return (
        <div>
            <form action="/" method="get">
                <label htmlFor="park-search">
                    <span>Search National Parks</span>
                </label>
                <input
                    type="text"
                    placeholder="Search National Parks"
                    name="parkSearch"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ParksByState