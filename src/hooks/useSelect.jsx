import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelect = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["select", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selects?email=${user?.email}`);
      return res.data;
    },
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/selects?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );

    //   return res.json();
    // },
  });
  return [select, refetch, axiosSecure];
};

export default useSelect;
