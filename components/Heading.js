const Heading = ({ title, tagline }) => {
  return (
    <>
      <div className="pt-4 pb-2 text-2xl font-bold tracking-wide text-skin-base">
        {title}
      </div>
      <div className="mb-4 text-center font-semibold text-skin-base">
        {tagline}
      </div>
    </>
  );
};

export default Heading;
