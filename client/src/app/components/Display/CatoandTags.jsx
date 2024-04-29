'use client'
import React from 'react'

export default function CatogoriesAndTags(props) {
    const categoryOptions = ['Sports', 'Theater', 'Concerts', 'Festivals', 'Conferences', 'Exhibitions'];
    const tagOptions = ['HotDeal', 'Popular', 'RareFind', 'BudgetFriendly', 'UpComing'];

    const {selectedCategories, setSelectedCategories, setSelectedTags, selectedTags,}= props;
       

        return (
            <div>
                <div className="container">
                    <h5 style={{color: '#f3d250' }}>Category:</h5>
                    <div className="row">
                        {categoryOptions.map((category, i) => (
                            <div className="col-md-3 mb-3" key={i}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => setSelectedCategories(prev =>
                                            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                                        )}
                                        id={`category-${category}`}
                                    />
                                    <label className="form-check-label" htmlFor={`category-${category}`} style={{ fontSize: '14px', color: '#f3d250' }}>
                                        {category}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Tags filteration here */}
                <div className="container mt-4">
                    <h5 style={{color: '#f3d250' }}>Tags:</h5>
                    <div className="row">
                        {tagOptions.map((tag, i) => (
                            <div className="col-md-3 mb-3" key={i}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selectedTags.includes(tag)}
                                        onChange={() => setSelectedTags(prev =>
                                            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                                        )}
                                        id={`tag-${tag}`}
                                    />
                                    <label className="form-check-label" htmlFor={`tag-${tag}`} style={{ fontSize: '14px', color: '#f3d250' }}>
                                        {tag}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
                                        }        

