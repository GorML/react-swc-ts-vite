import Button from "@/components/Button/Button";

const WelcomeCardText = () => {
  return (
    <section>
      <h2 className="font-serif text-white text-6xl mb-2 font-bold">
        Тераграф
      </h2>
      <p className="text-white max-w-md mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
      <Button
        color="primary"
        variant="outlined"
        size="large"
        className="text-white"
      >
        Попробовать
      </Button>
    </section>
  );
};

export default WelcomeCardText;
