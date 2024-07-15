import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const db = [
  {
    name: 'Midnight Streetwise',
    description: 'Stealth mode streetwear activated',
    price: '$49.99',
    url: 'https://www.renderhub.com/3dfarm/stylish-guy-in-jeans-and-black-jacket-0170/stylish-guy-in-jeans-and-black-jacket-0170-01.jpg'
  },
  {
    name: 'Urban Chic',
    description: 'Effortlessly cool with a touch of elegance',
    price: '$59.99',
    url: 'https://www.renderhub.com/3dfarm/fashion-woman-1223/fashion-woman-1223-01.jpg'
  },
  {
    name: 'Pitch Perfect Blue',
    description: 'Confidence, class, crush it',
    price: '$79.99',
    url: 'https://www.renderhub.com/3dfarm/woman-in-blue-dress-0035/woman-in-blue-dress-0035-04.jpg'
  },
  {
    name: 'Streetwise Scholar',
    description: 'Sophisticated style meets urban edge',
    price: '$69.99',
    url: 'https://www.renderhub.com/3dfarm/man-in-checkered-suit-0220/man-in-checkered-suit-0220-01.jpg'
  },
  {
    name: 'Night Out Vibes',
    description: 'Own the streets with confidence and flair',
    price: '$89.99',
    url: 'https://www.renderhub.com/3dfarm/man-in-jacket-1121/man-in-jacket-1121-01.jpg'
  }
];

function Simple() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState(null);
  const [bookmarked, setBookmarked] = useState(Array(db.length).fill(false));
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((_, index) => React.createRef()),
    [db.length]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const toggleBookmark = (index) => {
    const newBookmarks = [...bookmarked];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarked(newBookmarks);
  };

  const canSwipe = currentIndex >= 0;
  const canGoBack = currentIndex < db.length - 1;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx] && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div>
      <h1>Skip or Drip</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: `url(${character.url})`, position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center' }}
              className='card'
            >
              {/* Bookmark Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  zIndex: 10,
                }}
              >
                {bookmarked[index] ? (
                  <BookmarkIcon
                    onClick={() => toggleBookmark(index)}
                    style={{ fontSize: '2rem', color: '#FFF', height: '22px', width: '22px' }} // Adjusted height and width
                  />
                ) : (
                  <BookmarkBorderIcon
                    onClick={() => toggleBookmark(index)}
                    style={{ fontSize: '2rem', color: '#FFF', height: '22px', width: '22px' }} // Adjusted height and width
                  />
                )}
              </div>

              <div className='cardContent'>
                <h3>{character.name}</h3>
                {character.description && (
                  <p className='description'>{character.description}</p>
                )}
                {character.price && <p className='priceTag'>{character.price}</p>}
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Simple;
