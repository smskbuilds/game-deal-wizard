import React, { useState } from 'react';
import './Sidebar.css';

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
                <label className='sidebar-checkbox'>
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
                <label className='sidebar-checkbox'>
                    <input
                        className='sidebar-checkbox'
                        type='checkbox'
                        checked={filters['platforms'][platform]['selected']}
                        onChange={() => handlePlatformFilterChange(platform)}
                    />
                    {filters['platforms'][platform]['platformName']}
                </label>
            </div>
        );
    }

    let subscriptionFilters = filters['subscriptionServices'];
    let subscriptionFiltersJsx = [];

    for (const subscription in subscriptionFilters) {
        subscriptionFiltersJsx.push(
            <div
                key={
                    filters['subscriptionServices'][subscription][
                        'subscriptionName'
                    ]
                }>
                <label className='sidebar-checkbox'>
                    <input
                        className='sidebar-checkbox'
                        type='checkbox'
                        checked={
                            filters['subscriptionServices'][subscription][
                                'selected'
                            ]
                        }
                        onChange={() =>
                            handleSubscriptionServiceFilterChange(subscription)
                        }
                    />
                    {
                        filters['subscriptionServices'][subscription][
                            'subscriptionName'
                        ]
                    }
                </label>
            </div>
        );
    }

    return (
        <form className='sidebar'>
            <h5
                className='sidebar-heading'
                onClick={() => setIsOpenPlatforms(!isOpenPlatforms)}
                style={{ cursor: 'pointer' }}>
                Platforms{' '}
                <span className='collapse-icon'>
                    {isOpenPlatforms ? '▼' : '▶'}
                </span>
            </h5>
            <div
                className={`collapsible-content ${
                    isOpenPlatforms ? 'open' : ''
                }`}>
                {platformFiltersJsx}
            </div>
            <h5
                className='sidebar-heading'
                onClick={() => setIsOpenSubscriptions(!isOpenSubscriptions)}
                style={{ cursor: 'pointer' }}>
                Subscriptions{' '}
                <span className='collapse-icon'>
                    {isOpenSubscriptions ? '▼' : '▶'}
                </span>
            </h5>
            <div
                className={`collapsible-content ${
                    isOpenSubscriptions ? 'open' : ''
                }`}>
                {subscriptionFiltersJsx}
            </div>

            <h5
                className='sidebar-heading'
                onClick={() => setIsOpenGenres(!isOpenGenres)}
                style={{ cursor: 'pointer' }}>
                Genres{' '}
                <span className='collapse-icon'>
                    {isOpenGenres ? '▼' : '▶'}
                </span>
            </h5>
            <div
                className={`collapsible-content ${isOpenGenres ? 'open' : ''}`}>
                {genreFiltersJsx}
            </div>
        </form>
    );
}
