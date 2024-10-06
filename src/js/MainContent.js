import React from "react";

// Star component to represent the favorite icon
function Star(props) {
  let starIcon, label; // Variables to hold the icon path and label text

  // Determine the icon and label based on the isFilled prop
  if (props.isFilled) {
    starIcon = "star-filled-icon.png"; // Filled star icon
    label = "Unmark as favorite"; // Label when the star is filled
  } else {
    starIcon = "star-empty-icon.png"; // Empty star icon
    label = "Mark as favorite"; // Label when the star is empty
  }

  return (
    <button
      className="card--favorite-button" // Class for styling
      onClick={props.handleClick} // Click event to toggle favorite status
      aria-label={label} // Accessibility label for the button
      aria-pressed={props.isFilled} // Accessibility state indicating if it's pressed
    >
      <img src={`../Icons/${starIcon}`} className="card--favorite" />
      {/* Display the star icon */}
    </button>
  );
}

// MainContent component to display contact information
export default function MainContent() {
  const [contact, setContact] = React.useState({
    // State to hold contact information
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true, // Initial favorite status
  });

  // Function to toggle the favorite status
  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact, // Spread the previous contact details
      isFavorite: !prevContact.isFavorite, // Toggle the isFavorite property
    }));
  }

  return (
    <main>
      <article className="card">
        {/* Card for displaying contact info */}
        <img src="./images/practice14-user.png" className="card--image" />
        {/* User image */}
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          {/* Star button */}
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
            {/* Displaying contact name */}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          {/* Displaying phone number */}
          <p className="card--contact">{contact.email}</p>
          {/* Displaying email */}
        </div>
      </article>
    </main>
  );
}
