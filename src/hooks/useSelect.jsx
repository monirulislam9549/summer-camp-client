import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelect = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["select", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selects?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [select, refetch];
};

export default useSelect;
