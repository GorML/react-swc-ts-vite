import Button from "@/components/Button/Button";
import trpc from "@/utils/api";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<
    {
      name: string | null;
      id: number;
      age: number;
    }[]
  >([]);

  const handleFetchUserList = async () => {
    const response = await trpc.user.getAllUsers.query();
    setUsers(response.users);
  };

  const [candidateName, setCandidateName] = useState<string>("");

  const handleCreateUser = async () => {
    await trpc.user.createUser.mutate({
      name: candidateName,
      age: Math.floor(Math.random() * 100),
    });

    await handleFetchUserList();
  };

  return (
    <div>
      <Button onClick={handleFetchUserList} variant="filled" color="primary">
        User list
      </Button>
      <input
        value={candidateName}
        onChange={(e) => setCandidateName(e.target.value)}
      />
      <Button onClick={handleCreateUser} variant="filled" color="primary">
        Create user
      </Button>
      <div>
        Users:
        {users.map((user, idx) => (
          <div key={idx}>
            Name: {user.name} Age: {user.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
