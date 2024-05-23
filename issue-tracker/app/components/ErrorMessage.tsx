import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

// if you use PropsWithChildren, you no longer need this interface
/**
 * interface Props {
    children: ReactNode;
}
 */

const ErrorMessage = ({ children }: PropsWithChildren) => {
    if (!children) {
        return null;
    }
    return (
        <Text color="red" as="p">
            {children}
        </Text>
    );
};

export default ErrorMessage;
