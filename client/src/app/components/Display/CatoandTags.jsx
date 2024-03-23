'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function CatogoriesAndTags(props) {
    const categoryOptions = ['Sports', 'Theater', 'Concerts', 'Festivals', 'Conferences', 'Exhibitions'];
    const tagOptions = ['HotDeal', 'Popular', 'RareFind', 'BudgetFriendly', 'UpComing'];

    const {selectedCategories, setSelectedCategories, setSelectedTags, selectedTags, pageName}= props;
       
        const getImageForCategory = (category) => {
            switch (category) {
                case 'Concerts':
                    return '/concert.jpg';
                case 'Festivals':
                    return '/MusicFestival.jpg';
                case 'Sports':
                    return '/sport.jpg';
                case 'Theater':
                    return '/theater.jpg';
                case 'Conferences':
                    return '/conference.jpg';
                default:
                    return '/kids.jpg'; 
            }
        };

  return (
    <div>
        <div className="container">
            <h3 className="text-white">Category:</h3>
            <div className="row">
            {categoryOptions.map((category, i) => (
                <div className="form-check" key={i}> 
                    {(pageName === "events") ? (
                    <div>
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            checked={selectedCategories.includes(category)}
                            onChange={() => setSelectedCategories(prev => 
                                prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                            )}
                            id={`category-${category}`} 
                        />
                    <label className="form-check-label d-block" htmlFor={`category-${category}`}>
                            {category} 
                    </label>
                    {selectedCategories.includes(category) && (
                        <div className="category-content">
                            <p>Content for {category}</p>
                        </div>
                    )}
                </div>
                ) : (
                    <div key={i}  > 
                    <Link  href={`/events`} className="form-check-label d-block">
                    <button
                        className={`btn ${selectedCategories.includes(category) ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedCategories(prev => 
                            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                        )}
                        id={`button-${category}`}
                       >
                       <br/>
                    {selectedCategories}
                        {category}
                      
                    </button>
           </Link>  </div>
        )}
        </div>
        ))}</div>
    
           </div>                 {/* tags filteration here */}
        <div>
            <h3 className="text-white">Tags:</h3>
            {tagOptions.map((tag, i) => (
                <div className="form-check" key={i}>
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
    </div>
  )
}

// <Image src={getImageForCategory(category)} width={300} height={245} alt={category} />