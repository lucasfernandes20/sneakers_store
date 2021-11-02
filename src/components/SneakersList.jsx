import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import useSneakers from '../hooks/useSneakers';
import SneakerCard from './SneakerCard';

const SneakersList = () => {
  const { sneakers, getSneakers, pages } = useSneakers();

  return (
    <section className="sneakers-list-content">
      <h2>Find the perfect Sneaker for you!</h2>
      <select onChange={({ target }) => getSneakers(pages, target.value)}>
        <option>men</option>
        <option>women</option>
      </select>
      <div className="sneakers-list">
        {
        sneakers
          ? sneakers.map((e) => (e.image.original ? <SneakerCard sneaker={e} key={e.id} /> : null))
          : null
      }
      </div>
      <div className="sneakers-list-btn-content">
        <button className="sneakers-list-btn" type="button" onClick={() => getSneakers(pages - 1)} disabled={pages <= 0}>
          <AiOutlineArrowLeft />
        </button>
        {pages}
        <button className="sneakers-list-btn" type="button" onClick={() => getSneakers(pages + 1)}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SneakersList;
