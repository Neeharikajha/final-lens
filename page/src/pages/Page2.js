
import React, { useState } from 'react';
import './Page2.css';
import '../App.css';
import images from '../utils/ImportImages';

const clothesOptions = {
    Tops: [
        {
            id: 1,
            name: 'Grey Suit',
            imageUrl: images['Suits_1.jpg'],
        },
        {
            id: 2,
            name: 'Navy Blue Suit',
            imageUrl: images['Suits_2.jpg'],
        },
        {
            id: 3,
            name: 'T-Shirt',
            imageUrl: images['Top_3.jpg'],
        },
        {
            id: 4,
            name: 'Black Suit',
            imageUrl: images['Suits_3.jpg'],
        },
        
    ],
    Bottoms: [
        {
            id: 1,
            name: 'Skinny Jeans',
            imageUrl: images['Bottom_1.jpg'],
        },
        {
            id: 2,
            name: 'Relaxed Jeans',
            imageUrl: images['Bottom_2.jpg'],
        },
        {
            id: 3,
            name: 'Leather Pant',
            imageUrl: images['Bottom_3.jpg'],
        },
        {
            id: 4,
            name: 'Formal Pant',
            imageUrl: images['Bottom_4.jpg'],
        },
        
    ],
    Shoes: [
        {
            id: 1,
            name: 'Casual Shoes',
            imageUrl: images['Shoes_1.jpg'],
        },
        {
            id: 2,
            name: 'Formal Shoes',
            imageUrl: images['Shoes_2.jpg'],
        },
        {
            id: 3,
            name: 'Sports Shoes',
            imageUrl: images['Shoes_3.jpg'],
        },
        
    ],
};

const Page2 = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tops');
    const [selectedCloth, setSelectedCloth] = useState({ Tops: null, Bottoms: null, Shoes: null });
    const [isApplied, setIsApplied] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleClothClick = (category, cloth) => {
        setSelectedCloth((prev) => ({ ...prev, [category]: cloth }));
    };

    const resetSelection = () => {
        setSelectedCloth({ Tops: null, Bottoms: null, Shoes: null });
        setIsApplied(false);
    };

    const applySelection = () => {
        setIsApplied(true);
    };

    return (
        <div className="App">
            <h1>Virtual Try-On</h1>
            <div className="iframe-container">
                <iframe 
                src="https://clara.io/embed/d49ee603-8e6c-4720-bd20-9e3d7b13978a?renderer=webgl&tools=false&hideLogo=true&autoplay=true&header=false"  
 
                 allowFullScreen
                    className={`iframe ${isApplied ? 'hidden' : ''}`}
                />
                {isApplied && (
                    <iframe 

                     src="https://sketchfab.com/models/d9ee4f1001af42c0a071a390ba187287/embed?autospin=1&autostart=1"
                         allowFullScreen
                        className="iframe overlap"
                    />
                )}
            </div>
            <div className="category-buttons">
                {Object.keys(clothesOptions).map(category => (
                    <button key={category}  id="btn"
                        onClick={() => handleCategoryClick(category)}
                        className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="clothes-scroller">
                {clothesOptions[selectedCategory].map(cloth => (
                    <div 
                        key={cloth.id} 
                        className={`cloth-option ${selectedCloth[selectedCategory]?.id === cloth.id ? 'selected-cloth' : ''}`}
                        onClick={() => handleClothClick(selectedCategory, cloth)}
                    >
                        <img src={cloth.imageUrl} alt={cloth.name} className="cloth-image"/>
                        <p>{cloth.name}</p>
                    </div>
                ))}
            </div>
          <div className="button-container">
            <button id="btn1" onClick={resetSelection} className="apply-button">Reset</button>
            <button id="btn2" onClick={applySelection} className="reset-button">Apply</button>
        </div>
    </div>
);
    
};

export default Page2;
