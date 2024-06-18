import { FC } from "react";
import { Box, HStack, Heading, Text } from "../";
import { BoxProps } from "../../Utils/types";

type PropTypes = BoxProps & {
   title: string;
   content: string | number | JSX.Element;
   name: string;
};
export const DisplayCard: FC<PropTypes> = ({
   title,
   content,
   name,
   ...rest
}) => {
   return (
      <HStack spacing={3}>
         <Box p={1} shadow="base" borderWidth="1px" {...rest}>
            <Heading fontSize="sm">{title}</Heading>
            <Text fontSize="small" color="gray.400">
               {name}
            </Text>
            <Text mt={2} fontSize="xl" color="#d20e03" fontWeight={600}>
               {content}
            </Text>
         </Box>
      </HStack>
   );
};
