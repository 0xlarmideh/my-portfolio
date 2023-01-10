import React from "react";

// Main heading component
export const Heading = ({ title, className }) => {
  return (
    <h1 className={`text-4xl font-bold heading tracking-tighter ${className}`}>
      {title}
    </h1>
  );
};

// SubHeading component
export const SubHeading = ({ title, className }) => {
  return (
    <h2 className={`text-3xl font-bold subheading ${className}`}>
      {title}
    </h2>
  );
};

//Small heading component
export const SmallHeading = ({ title, className }) => {
  return (
    <div className={`text-xl smallheading  tracking-normal ${className}`}>{title}</div>
  );
};

// Regular P tag
export const Paragraph = ({ title, className }) => {
  return (
    <p className={`text-md my-2 paragraph ${className}`}>
      {title}
    </p>
  );
};

// small text
export const SmallText = ({ title }) => {
  return <span className="text-sm tracking-tight">{title}</span>;
};

// Using the components
//For uniformity, the styling will be done here so you only need to Import the components where you need them
// Example use: <Heading title="This is a sample heading" />
// or <SubHeading title="This is a sample subheading text" />
