import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { saveLineItem } from "../../redux/actions/line-item-actions";
import { Link } from "react-router-dom";
// Utilities
import { monthNames } from "../../utils/datetime-helpers";

const NoBudgetNotification = ({ month, year, categories }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-three-fifths has-text-centered">
        <h2 className="title">
          No Budgets for {monthNames[month - 1]} {year}!
        </h2>
        {categories.length ? (
          <Link to="/budget/line-item/" className="button is-primary">
            Create an Entry
          </Link>
        ) : (
          <Link to="/categories" className="button is-primary">
            Manage Categories
          </Link>
        )}
        {/* <p>
          <img
            src="./src/assets/images/no-content.svg"
            alt="No budgets created yet"
          />
        </p> */}
      </div>
    </div>
  );
};

NoBudgetNotification.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  saveLineItem: PropTypes.func.isRequired
};

export default connect(null, { saveLineItem })(NoBudgetNotification);
