import React, { useState } from 'react';
import './Sidebar.css'; // Make sure to create this CSS file

export default function Sidebar({
    filters,
    handlePlatformFilterChange,
    handleSubscriptionServiceFilterChange,
    handleGenreFilterChange,
}) {
    const [isOpenPlatforms, setIsOpenPlatforms] = useState(false);
    const [isOpenSubscriptions, setIsOpenSubscriptions] = useState(false);
    const [isOpenGenres, setIsOpenGenres] = useState(false);

    let genreFilters = filters['genres'];
    let genreFiltersJsx = [];

    for (const genre in genreFilters) {
        genreFiltersJsx.push(
            <div key={filters['genres'][genre]['genreName']}>
                <label>
                    <input
                        type='checkbox'
                        checked={filters['genres'][genre]['selected']}
                        onChange={() => handleGenreFilterChange(genre)}
                    />
                    {filters['genres'][genre]['genreName']}
                </label>
            </div>
        );
    }

    let platformFilters = filters['platforms'];
    let platformFiltersJsx = [];

    for (const platform in platformFilters) {
        platformFiltersJsx.push(
            <div key={filters['platforms'][platform]['platformName']}>
                <label>
                    <input
                        type='checkbox'
                        checked={filters['platforms'][platform]['selected']}
                        onChange={() => handlePlatformFilterChange(platform)}
                    />
                    {filters['platforms'][platform]['platformName']}
                </label>
            </div>
        );
    }

    return (
        <div className='sidebar'>
            <form>
                <h5
                    onClick={() => setIsOpenPlatforms(!isOpenPlatforms)}
                    style={{ cursor: 'pointer' }}>
                    Platforms {isOpenPlatforms ? '▼' : '▶'}
                </h5>
                <div
                    className={`collapsible-content ${
                        isOpenPlatforms ? 'open' : ''
                    }`}>
                    {platformFiltersJsx}
                </div>

                <h5
                    onClick={() => setIsOpenSubscriptions(!isOpenSubscriptions)}
                    style={{ cursor: 'pointer' }}>
                    Subscriptions {isOpenSubscriptions ? '▼' : '▶'}
                </h5>
                <div
                    className={`collapsible-content ${
                        isOpenSubscriptions ? 'open' : ''
                    }`}>
                    <label>
                        <input
                            type='checkbox'
                            checked={
                                filters['subscriptionServices'][1]['selected']
                            }
                            onChange={() =>
                                handleSubscriptionServiceFilterChange(1)
                            }
                        />
                        PS Plus Extra
                    </label>
                </div>

                <h5
                    onClick={() => setIsOpenGenres(!isOpenGenres)}
                    style={{ cursor: 'pointer' }}>
                    Genres {isOpenGenres ? '▼' : '▶'}
                </h5>
                <div
                    className={`collapsible-content ${
                        isOpenGenres ? 'open' : ''
                    }`}>
                    {genreFiltersJsx}
                </div>
            </form>
        </div>
    );
}
