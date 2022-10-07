import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {


    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Grocery Aisle'
          },
          {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Grocery Booth'
          },
          {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Building Exterior'
          },
          {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Restuarant Table'
          },
          {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Cafe Interior'
          },
          {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Cat with Green Eyes'
          },
          {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Green Parrot'
          },
          {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Yellow Macaw'
          },
          {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Smiling Pug'
          },
          {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Pancakes'
          },
          {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Burrito'
          },
          {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Scallop Pasta'
          },
          {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Burger'
          },
          {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Fruit Bowl'
          },
          {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Green River'
          },
          {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Docks'
          },
          {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Panoramic View of a Village by the Sea'
          },
          {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Domestic Landscape'
          },
          {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            alt: 'Park Bench'
          },
        ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    {/*set up props*/}
    const [currentPhoto, setCurrentPhoto] = useState();
    
    {/*hook to manage modal being open*/}
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image, i) => {
      setCurrentPhoto({ ...image, index: i })
      setIsModalOpen(!isModalOpen);
    }

    return(
        <div>
            {/* pass currentPhoto as prop to Modal component...only render if modal is opened*/} 
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name} />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;