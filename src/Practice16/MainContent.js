import React from "react";

function Star(props) {
  let starIcon, label;
  if (props.isFilled) {
    starIcon = "star-filled-icon.png";
    label = "Unmark as favorite";
  } else {
    starIcon = "star-empty-icon.png";
    label = "Mark as favorite";
  }
  return (
    <button
      className="card--favorite-button"
      onClick={props.handleClick}
      aria-label={label}
      aria-pressed={props.isFilled}
    >
      <img src={`../Icons/${starIcon}`} className="card--favorite" />
    </button>
  );
}

export default function MainContent() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="./images/practice14-user.png" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
