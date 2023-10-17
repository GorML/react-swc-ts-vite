import Card from "@components/Card";
import WelcomeCardText from "./components/WelcomeCardText/WelcomeCardText";

const WelcomeCard = () => {
  return (
    <Card className="bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 h-96 p-16">
      <WelcomeCardText />
    </Card>
  );
};

export default WelcomeCard;
