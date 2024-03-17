'use client'
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function FilterBy() {
    const [allEvents, setAllEvents] = useState([]); 
    const [displayedEvents, setDisplayedEvents] = useState([]); 
    const [sortOrder, setSortOrder] = useState("");

    const categoryOptions = ['Sports', 'Theater', 'Concerts', 'Festivals', 'Conferences', 'Exhibitions'];
    const tagOptions = ['HotDeal', 'Popular', 'RareFind', 'BudgetFriendly', 'UpComing'];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/api/events/search')
            .then(res => {
                setAllEvents(res.data);
                setDisplayedEvents(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        let filteredEvents = allEvents.filter(event => 
            (!selectedCategories.length || selectedCategories.includes(event.category)) &&
            (!selectedTags.length || event.tags.some(tag => selectedTags.includes(tag)))
        );

        if (priceRange) {
            switch (priceRange) {
                case 'less than 10':
                    filteredEvents = filteredEvents.filter(event => event.price < 10);
                    break;
                case 'less than 50':
                    filteredEvents = filteredEvents.filter(event => event.price < 50);
                    break;
                case 'greater than 50':
                    filteredEvents = filteredEvents.filter(event => event.price > 50);
                    break;
                default:
                    break;
            }
        }
        if (sortOrder === 'ascending') {
            filteredEvents.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'descending') {
            filteredEvents.sort((a, b) => b.price - a.price);
        }

        setDisplayedEvents(filteredEvents);
    }, [selectedCategories, selectedTags, allEvents, priceRange, sortOrder]);
     
    return(
        <div className="container my-4">
        <div className="mb-3">
            <select className="form-select" onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
                <option value="">Select Price Range</option>
                <option value="less than 10">Less than $10</option>
                <option value="less than 50">Less than $50</option>
                <option value="greater than 50">Greater than $50</option>
            </select>
        </div>
        <div className="mb-3">
            <select className="form-select" onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                <option value="">Select Sort Order</option>
                <option value="ascending">Price Low to High</option>
                <option value="descending">Price High to Low</option>
            </select>
        </div>
        <div>
        <h3 className="text-white">Category: </h3>
            {categoryOptions.map((category) => (
                <div className="form-check" key={category}>
                    <input 
                        className="form-check-input"
                        type="checkbox" 
                        checked={selectedCategories.includes(category)}
                        onChange={() => setSelectedCategories(prev => 
                            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                        )}
                        id={`category-${category}`} 
                    />
                    <label className="form-check-label" htmlFor={`category-${category}`}>
                        {category}
                    </label>
                </div>
            ))}
        </div>
        <div>
        <h3 className="text-white">Tags: </h3>
            {tagOptions.map((tag) => (
                <div className="form-check" key={tag}>
                    <input 
                        className="form-check-input"
                        type="checkbox" 
                        checked={selectedTags.includes(tag)}
                        onChange={() => setSelectedTags(prev =>
                            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                        )}
                        id={`tag-${tag}`}
                    />
                    <label className="form-check-label" htmlFor={`tag-${tag}`}>
                        {tag}
                    </label>
                </div>
            ))}
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {displayedEvents.map(event => (
                    <tr key={event.id}>
                        <td>{event.title}</td>
                        <td>${event.price}</td>
                        <td>{event.category}</td>
                        <td>{event.tags.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
