'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent } from '@nextui-org/modal'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/store/store';
import { setRating } from '@/store/ratingSlice';
import { HollowStarIcon } from './icons';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

function RatingModal({ isOpen, onClose, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = () => {
    if (!rating) {
      alert('Please select a rating!');
      return;
    }
    onSubmit(rating);
    setRating(0);
    setHover(0);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        {(onClose) => (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Rate the Movie</h3>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <div className="flex justify-end">
              <Button color="warning" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" className="ml-2" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}

export function RatingComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const rating = useSelector((state: RootState) => state.rating.rating)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitRating = (rating: number) => {
    dispatch(setRating(rating));
  };

  return (
    <div>
      <div className="flex py-4">
        <Button variant="bordered" startContent={<HollowStarIcon/>} onClick={handleOpenModal}>
          Rate Now
        </Button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl mb-4">Your Latest Rating</h2>
        {rating !== null ? (
          <div className="p-4 border border-gray-300 rounded-md mb-4">
            <div className="text-sm text-gray-500">Rating: {rating} Stars</div>
          </div>
        ) : (
          <div className="text-sm text-gray-500">No rating yet</div>
        )}
      </div>
      <RatingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitRating}
      />
    </div>
  )
} 