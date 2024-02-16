const RatingComponent = (props) => {
  if (!props) return `<div></div>`;
  return `<div class="rating">
    <span>
        <i class="${
          props >= 1
            ? "fa-solid fa-star"
            : props >= 0.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
        }"></i>
    </span>
    <span>
    <i class="${
      props >= 2
        ? "fa-solid fa-star"
        : props >= 1.5
        ? "fa-solid fa-star-half-stroke"
        : "fa-regular fa-star"
    }"></i>
    </span>
    <span>
        <i class="${
          props >= 3
            ? "fa-solid fa-star"
            : props >= 2.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
        }"></i>
    </span>
    <span>
    <i class="${
      props >= 4
        ? "fa-solid fa-star"
        : props >= 3.5
        ? "fa-solid fa-star-half-stroke"
        : "fa-regular fa-star"
    }"></i>
    </span>
    <span>
    <i class="${
      props >= 5
        ? "fa fa-star"
        : props >= 4.5
        ? "fa-solid fa-star-half-stroke"
        : "fa-regular fa-star"
    }"></i>
    </span>
  </div>`;
};

export default RatingComponent;
