import React from "react";
import PropTypes from "prop-types";
import "../styles.css";
import moment from "moment";
import "moment/locale/es";

export const NotasCard = ({
  taxonomy,
  promo_items,
  headlines,
  display_date,
}) => {
  const tags = taxonomy.tags;

  tags.sort((a, b) => {
    const atext = a.text.toLowerCase();
    const btext = b.text.toLowerCase();

    if (atext < btext) {
      return -1;
    }
    if (atext > btext) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className="news-cards">
        <img src={promo_items.basic.url} alt="" />
        <h3>{headlines.basic}</h3>

        {tags.map((item, idx) => (
          <a key={idx} href={item.slug}>
            {item.text}{" "}
          </a>
        ))}

        <p>{moment(display_date).format("D [de] MMMM [de] YYYY")}</p>
      </div>
    </>
  );
};

NotasCard.propTypes = {
  taxonomy: PropTypes.object,
  promo_items: PropTypes.object,
  headlines: PropTypes.object,
  display_date: PropTypes.string,
};

export default NotasCard;
