import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      await loginApi({ email, password });
    },

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard", { replace: true });
    },

    onError: (error) => {
      console.log("Error", error);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
