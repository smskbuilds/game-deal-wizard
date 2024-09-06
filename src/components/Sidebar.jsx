export default function Sidebar({filters,handlePlatformFilterChange,handleSubscriptionServiceFilterChange,handleGenreFilterChange}) {

    let genreFilters = filters['genres']
    let genreFiltersJsx = []

    for (const genre in genreFilters){
        genreFiltersJsx.push(
            <>
                <br/>
                <label>
                    <input type="checkbox" 
                        checked={filters['genres'][genre]['selected']}
                        onChange={() => handleGenreFilterChange(genre)}
                    />
                    {filters['genres'][genre]['genreName']}
                </label>
            </>
        )
    }

    let platformFilters = filters['platforms']
    let platformFiltersJsx = []

    for (const platform in platformFilters){
        platformFiltersJsx.push(
            <>
                <br/>
                <label>
                    <input type="checkbox" 
                        checked={filters['platforms'][platform]['selected']}
                        onChange={() => handlePlatformFilterChange(platform)}
                    />
                    {filters['platforms'][platform]['platformName']}
                </label>
            </>
        )
    }

    return(
        <form>
            <h6>
                Platforms
            </h6>
            {platformFiltersJsx}
            <br/>
            <br/>
            <h6>
                Subscriptions
            </h6>
            <br/>
            <label>
                <input type="checkbox" 
                    checked={filters['subscriptionServices'][1]['selected']}
                    onChange={() => handleSubscriptionServiceFilterChange(1)}
                />
                PS Plus Extra
            </label>
            <br/>
            <br/>
            <h6>
                Genres
            </h6> 
            {genreFiltersJsx}
        </form>
    )
}