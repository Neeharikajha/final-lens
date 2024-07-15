
import React, { useState } from 'react';
import './Page1.css';
import '../App.css';
import images from '../utils/ImportImages';

const clothesOptions = {
    Tops: [
        {
            id: 1,
            name: 'Strapless Top',
            imageUrl: images['Top_1.jpg'],
        },
        {
            id: 2,
            name: 'Leopard Print Top',
            imageUrl: images['Top_2.jpg'],
        },
        {
            id: 3,
            name: 'Halter Neck Dress',
            imageUrl: images['Dress_5.jpg'],
        },
        {
            id: 4,
            name: 'Halter Neck top',
            imageUrl: images['Top_4.jpg'],
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
            name: 'Pink Bellies',
            imageUrl: images['Shoes_4.jpg'],
        },
        {
            id: 3,
            name: 'Boots',
            imageUrl: images['Shoes_5.jpg'],
        },
        
    ],
};

const Page1 = () => {
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
                    src="https://clara.io/embed/3832af86-0c6c-4909-a17e-e95ff48312e7?renderer=webgl&tools=false&hideLogo=true&autoplay=false&header=false" 
                    allowFullScreen
                    className={`iframe ${isApplied ? 'hidden' : ''}`}
                />
                {isApplied && (
                    <iframe 
                        src="https://clara.io/embed/b42fb3f0-6057-4081-a5b8-141a513cf57c?renderer=webgl&tools=false&hideLogo=true&autoplay=false&header=false" 
                        allowFullScreen
                        className="iframe overlap"
                    />
                )}
            </div>
            <div className="category-buttons">
                {Object.keys(clothesOptions).map(category => (
                    <button key={category} id="btn"
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

export default Page1;
