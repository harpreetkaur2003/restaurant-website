import React from 'react';
import '../Hotel_Items/Card.css';
import { Link } from 'react-router-dom';
import res1 from '../Images/res1.png';
import res2 from '../Images/res2.png'
function Card() {
    return (
        <>
    <div class="main">
    <header id="header">Barbecue</header>
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <img src={res1.png} />
            <span class="card_price"><span>$</span>9</span>
          </div>
          <div class="card_content">
            <h2 class="card_title">Tandoori Chicken</h2>
            <div class="card_text">
              <p>Dig into the freshest veggies of the season! More than 650 hours
                of fermenting, brining, aging, and curing goes into each and every one of our legendary
                Reuben everything you want
                .
              </p>
              <hr />
            </div>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
          <img src={res2.png} alt="" />
            <span class="card_price"><span>$</span>18</span>
          </div>
          <div class="card_content">
            <h2 class="card_title">Butter Naan</h2>
            <div class="card_text">
              <p>All great meals take time, but this one takes it to the next level! More than 650 hours
                of fermenting, brining, aging, and curing goes into each and every one of our legendary
                Reuben sandwiches.
              </p>
              <hr />
              <p>This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye
                  bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle.
                No substitions please!
              </p>
              <p>Add a side of french fries or sweet potato fries for $2 more, or our
                housemade pub chips for $1.
              </p>
            </div>
          </div>
        </div>
      </li>
  
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <span class="note">Best Seller</span>
            <img src={res2} alt="A side view of a plate of figs and berries." />
            <span class="card_price"><span>$</span>16</span>
          </div>
          <div class="card_content">
            <h2 class="card_title">Butter Panner</h2>
            <div class="card_text">
              <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in
                this refreshing, shareable dessert.
              </p>
              <hr />
              <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
                <strong>housemade chocolate sauce</strong>.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
          <span class="note">Desert</span>
            <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper." />
            <span class="card_price"><span>$</span>18</span>
          </div>
          <div class="card_content">
            <h2 class="card_title">Gulaab Jamun</h2>
            <div class="card_text">
              <p>All great meals take time, but this one takes it to the next level! More than 650 hours
                of fermenting, brining, aging, and curing goes into each and every one of our legendary
                Reuben sandwiches.
              </p>
              <hr />
              <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef</strong>, <strong>rye
                  bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
                No substitions please!
              </p>
              <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
                <strong>housemade pub chips</strong> for $1.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper." />
            <span class="card_price"><span>$</span>18</span>
          </div>
          <div class="card_content">
            <h2 class="card_title">Butter Chicken</h2>
            <div class="card_text">
              <p>All great meals take time, but this one takes it to the next level! More than 650 hours
                of fermenting, brining, aging, and curing goes into each and every one of our legendary
                Reuben sandwiches.
              </p>
              <hr />
              <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef</strong>, <strong>rye
                  bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
                No substitions please!
              </p>
              <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
                <strong>housemade pub chips</strong> for $1.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
          <span class="note">Drink</span>
            <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper." />
            <span class="card_price"><span>$</span>10</span>
          </div>
          <div class="card_content">
            <h2 class="card_title">Chass</h2>
            <div class="card_text">
              <p>All great meals take time, but this one takes it to the next level! More than 650 hours
                of fermenting, brining, aging, and curing goes into each and every one of our legendary
                Reuben sandwiches.
              </p>
              <hr />
              <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef</strong>, <strong>rye
                  bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
                No substitions please!
              </p>
              <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
                <strong>housemade pub chips</strong> for $1.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
 <Link to="/form" ><div className="button">Reservation</div> </Link>
  </div>
  </>
    )
};
export default Card;
