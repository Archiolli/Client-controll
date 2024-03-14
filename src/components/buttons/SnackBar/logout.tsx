import { useRouter } from "next/navigation";
import { FunctionComponent, ReactNode } from "react";

interface LogoutButtonProps {
  label: string;
  endIcon?: ReactNode
}

const LogoutButton: FunctionComponent<LogoutButtonProps> = ({ label, endIcon }) => {
  const router = useRouter()
  return (
    <div
      className="hover:bg-red-700 rounded-lg p-1"
      onClick={() => {
        router.push("/");
      }}
    >
      {label}{' '}{endIcon}
    </div>
  );
};

export default LogoutButton;