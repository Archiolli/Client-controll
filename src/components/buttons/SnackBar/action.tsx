import { OptionsObject, SnackbarKey } from "notistack";
import { FunctionComponent, ReactNode } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

type OptionsTypes = "success" | "error" | "default" | "warning" | "info"

interface ActionButtonProps {
  label?: string;
  endIcon?: ReactNode;
  action: (...args: any) => void
}

const ActionButton: FunctionComponent<ActionButtonProps> = ({ label, endIcon, action }) => {
  return (
    <div
      className="hover:bg-white hover:bg-opacity-30 rounded-lg p-1"
      onClick={action}
    >
      {label}{' '}{endIcon}
    </div>
  );
};


export const action = <T extends OptionsTypes,>(closeSnackbar: (snackbarId: SnackbarKey) => void, variant: T): OptionsObject<T>  => {
    return {
        variant: variant,
        action: (snackbarId: SnackbarKey) => (
            <ActionButton
                endIcon={<IoCloseCircleOutline />}
                action={() => {
                    closeSnackbar(snackbarId);
                }}
            />
        )
    }
}

export default ActionButton;