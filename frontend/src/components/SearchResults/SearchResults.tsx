import React from 'react';
import './SearchResults.css';

interface SearchResultsProps {
    results: { name: string }[]; // Typage des résultats
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className='results-list'>
            {results.length > 0 ? (
                results.map((result, id) => (
                    <div key={id}>{result.name}</div>
                ))
            ) : (
                <div>No results found</div>
            )}
        </div>
    );
}

export default SearchResults;
